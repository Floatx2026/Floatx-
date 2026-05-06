import sharp from "sharp";
import { fileURLToPath } from "url";
import path from "path";

const __filename = fileURLToPath(import.meta.url);
const root = path.resolve(path.dirname(__filename), "..");
const input = path.join(root, "public", "floatx-logo.png");
const output = path.join(root, "public", "floatx-logo-transparent.png");

const tolerance = 12;

const img = sharp(input).ensureAlpha();
const meta = await img.metadata();
const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });

const out = Buffer.from(data);
let cleared = 0;
for (let i = 0; i < out.length; i += info.channels) {
  const r = out[i];
  const g = out[i + 1];
  const b = out[i + 2];
  if (r >= 255 - tolerance && g >= 255 - tolerance && b >= 255 - tolerance) {
    out[i + 3] = 0;
    cleared++;
  }
}

await sharp(out, {
  raw: { width: info.width, height: info.height, channels: info.channels },
})
  .png()
  .toFile(output);

console.log(`done: ${cleared} px alpha-cleared, ${info.width}x${info.height} → ${output}`);
