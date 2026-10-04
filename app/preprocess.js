export const MODEL_SHA256 = "4037c09663190b7caed0773e525e5da39bd05286992612537991358b7acfd041";
export const T_RUST = 0.50;
export const T_HEALTHY = 0.70;
export const CLASS_NAMES = [
  "healthy",
  "rust_present",
  "leaf_miner_no_rust",
  "brown_leaf_spot_no_rust",
  "cercospora_no_rust",
];
export const IMAGENET_MEAN = [0.485, 0.456, 0.406];
export const IMAGENET_STD = [0.229, 0.224, 0.225];
export const INPUT_SIZE = 224;

function clampByte(value) {
  return Math.max(0, Math.min(255, Math.round(value)));
}

function triangleContribs(inputSize, outputSize) {
  const scale = inputSize / outputSize;
  const filterScale = Math.max(1.0, scale);
  const contribs = [];

  for (let out = 0; out < outputSize; out += 1) {
    const center = (out + 0.5) * scale;
    const start = Math.max(0, Math.floor(center - filterScale + 0.5));
    const stop = Math.min(inputSize, Math.floor(center + filterScale + 0.5));
    const indices = [];
    const weights = [];
    let total = 0;

    for (let source = start; source < stop; source += 1) {
      const distance = Math.abs((source + 0.5 - center) / filterScale);
      const weight = Math.max(0, 1 - distance);
      if (weight > 0) {
        indices.push(source);
        weights.push(weight);
        total += weight;
      }
    }

    if (total === 0) {
      const nearest = Math.max(0, Math.min(inputSize - 1, Math.round(center - 0.5)));
      contribs.push({ indices: [nearest], weights: [1] });
    } else {
      contribs.push({ indices, weights: weights.map((weight) => weight / total) });
    }
  }

  return contribs;
}

export function resizeTriangleRgbToU8(rgba, width, height, outputSize = INPUT_SIZE) {
  if (!Number.isInteger(width) || !Number.isInteger(height) || width <= 0 || height <= 0) {
    return { eligible: false, reason: "bad_dimensions", message: "The selected image dimensions could not be read." };
  }
  if (!rgba || rgba.length < width * height * 4) {
    return { eligible: false, reason: "bad_pixels", message: "The selected image pixels could not be read." };
  }
  if (width < outputSize || height < outputSize) {
    return {
      eligible: false,
      reason: "too_small",
      message: `Image is ${width}×${height}; minimum is ${outputSize}×${outputSize}. Routed to not sure without model inference.`,
      width,
      height,
    };
  }

  let hasNonTransparentPixel = false;
  for (let i = 3; i < rgba.length; i += 4) {
    if (rgba[i] !== 0) {
      hasNonTransparentPixel = true;
      break;
    }
  }
  if (!hasNonTransparentPixel) {
    return {
      eligible: false,
      reason: "blank_canvas",
      message: "Image pixels were blank after browser decode. No AI proposal was produced; choose another image.",
      width,
      height,
    };
  }

  const xContribs = triangleContribs(width, outputSize);
  const yContribs = triangleContribs(height, outputSize);
  const horizontal = new Uint8Array(height * outputSize * 3);

  for (let y = 0; y < height; y += 1) {
    for (let outX = 0; outX < outputSize; outX += 1) {
      const { indices, weights } = xContribs[outX];
      const outBase = (y * outputSize + outX) * 3;
      for (let channel = 0; channel < 3; channel += 1) {
        let value = 0;
        for (let k = 0; k < indices.length; k += 1) {
          const srcBase = (y * width + indices[k]) * 4;
          value += rgba[srcBase + channel] * weights[k];
        }
        horizontal[outBase + channel] = clampByte(value);
      }
    }
  }

  const resizedRgb = new Uint8Array(outputSize * outputSize * 3);
  for (let outY = 0; outY < outputSize; outY += 1) {
    const { indices, weights } = yContribs[outY];
    for (let x = 0; x < outputSize; x += 1) {
      const outBase = (outY * outputSize + x) * 3;
      for (let channel = 0; channel < 3; channel += 1) {
        let value = 0;
        for (let k = 0; k < indices.length; k += 1) {
          const srcBase = (indices[k] * outputSize + x) * 3;
          value += horizontal[srcBase + channel] * weights[k];
        }
        resizedRgb[outBase + channel] = clampByte(value);
      }
    }
  }

  return { eligible: true, resizedRgb, width, height };
}

export function normalizeRgbToTensor(resizedRgb, outputSize = INPUT_SIZE) {
  const plane = outputSize * outputSize;
  const tensorData = new Float32Array(3 * plane);

  for (let index = 0; index < plane; index += 1) {
    const rgbBase = index * 3;
    for (let channel = 0; channel < 3; channel += 1) {
      const value01 = resizedRgb[rgbBase + channel] / 255.0;
      tensorData[channel * plane + index] = (value01 - IMAGENET_MEAN[channel]) / IMAGENET_STD[channel];
    }
  }

  return tensorData;
}

export function preprocessImageData(imageData, outputSize = INPUT_SIZE) {
  const resized = resizeTriangleRgbToU8(imageData.data, imageData.width, imageData.height, outputSize);
  if (!resized.eligible) return resized;
  return {
    ...resized,
    tensorData: normalizeRgbToTensor(resized.resizedRgb, outputSize),
  };
}

export function routeFromProbabilities(probabilities) {
  let topIndex = 0;
  for (let i = 1; i < probabilities.length; i += 1) {
    if (probabilities[i] > probabilities[topIndex]) topIndex = i;
  }
  if (topIndex === 1 && probabilities[1] >= T_RUST) return "visible_rust";
  if (topIndex === 0 && probabilities[0] >= T_HEALTHY) return "no_visible_rust";
  return "not_sure";
}
