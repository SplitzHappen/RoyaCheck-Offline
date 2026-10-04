import assert from "node:assert/strict";
import { resizeTriangleRgbToU8, normalizeRgbToTensor } from "../app/preprocess.js";

const FIXTURES = [
  {
    name: "gradient_leaf",
    width: 448,
    height: 224,
    samples: {
      "0,0": [5, 41, 88],
      "17,31": [233, 250, 221],
      "64,77": [218, 157, 52],
      "111,120": [225, 52, 73],
      "180,33": [238, 49, 80],
      "223,223": [209, 146, 208],
    },
    mean: [127.898238, 127.755102, 128.003448],
  },
  {
    name: "stripe_spots",
    width: 512,
    height: 384,
    samples: {
      "0,0": [0, 61, 11],
      "17,31": [56, 41, 145],
      "64,77": [231, 85, 99],
      "111,120": [86, 88, 180],
      "180,33": [55, 118, 51],
      "223,223": [129, 141, 89],
    },
    mean: [127.286472, 127.513512, 127.641621],
  },
  {
    name: "large_leaf",
    width: 2048,
    height: 1024,
    samples: {
      "0,0": [5, 2, 7],
      "17,31": [32, 80, 112],
      "64,77": [196, 38, 234],
      "111,120": [77, 222, 74],
      "180,33": [50, 57, 107],
      "223,223": [250, 253, 247],
    },
    mean: [127.571429, 127.571429, 127.640027],
  },
];

function fixturePixel(name, x, y) {
  if (name === "gradient_leaf") {
    return [
      (x * 7 + y * 3) % 256,
      (x * 2 + y * 5 + 40) % 256,
      (x * 11 + y * 13 + 80) % 256,
      255,
    ];
  }
  if (name === "stripe_spots") {
    return [
      ((Math.floor(x / 7) * 53 + Math.floor(y / 11) * 19) % 256),
      ((Math.floor(x / 5) * 31 + y * 2 + 60) % 256),
      ((Math.floor(y / 3) * 47 + x + 10) % 256),
      255,
    ];
  }
  if (name === "large_leaf") {
    return [
      x % 256,
      y % 256,
      (x + y) % 256,
      255,
    ];
  }
  throw new Error(`Unknown fixture ${name}`);
}

function makeFixture(name, width, height) {
  const rgba = new Uint8Array(width * height * 4);
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      const base = (y * width + x) * 4;
      const pixel = fixturePixel(name, x, y);
      rgba.set(pixel, base);
    }
  }
  return rgba;
}

for (const fixture of FIXTURES) {
  const rgba = makeFixture(fixture.name, fixture.width, fixture.height);
  const result = resizeTriangleRgbToU8(rgba, fixture.width, fixture.height);
  assert.equal(result.eligible, true, `${fixture.name} should be eligible`);
  const means = [0, 0, 0];

  for (let i = 0; i < result.resizedRgb.length; i += 3) {
    means[0] += result.resizedRgb[i];
    means[1] += result.resizedRgb[i + 1];
    means[2] += result.resizedRgb[i + 2];
  }
  for (let c = 0; c < 3; c += 1) {
    means[c] /= 224 * 224;
    assert.ok(Math.abs(means[c] - fixture.mean[c]) <= 0.50, `${fixture.name} mean channel ${c} drifted: ${means[c]} vs ${fixture.mean[c]}`);
  }

  for (const [coord, expected] of Object.entries(fixture.samples)) {
    const [y, x] = coord.split(",").map(Number);
    const base = (y * 224 + x) * 3;
    const actual = Array.from(result.resizedRgb.slice(base, base + 3));
    const maxDelta = Math.max(...actual.map((value, index) => Math.abs(value - expected[index])));
    assert.ok(maxDelta <= 1, `${fixture.name} sample ${coord} drifted: ${actual} vs ${expected}`);
  }

  const tensor = normalizeRgbToTensor(result.resizedRgb);
  assert.equal(tensor.length, 3 * 224 * 224);
  assert.ok(Number.isFinite(tensor[0]));
}

const transparent = new Uint8Array(300 * 300 * 4);
const blank = resizeTriangleRgbToU8(transparent, 300, 300);
assert.equal(blank.eligible, false);
assert.equal(blank.reason, "blank_canvas");

const small = new Uint8Array(200 * 224 * 4).fill(255);
const tooSmall = resizeTriangleRgbToU8(small, 200, 224);
assert.equal(tooSmall.eligible, false);
assert.equal(tooSmall.reason, "too_small");

console.log("Stage 8 preprocessing reference checks: PASS");
