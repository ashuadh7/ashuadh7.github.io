import fs from "node:fs";
import path from "node:path";

const distDir = path.resolve(process.cwd(), "dist");
const indexPath = path.join(distDir, "index.html");
const fallbackPath = path.join(distDir, "404.html");
const MIN_FALLBACK_BYTES = 1024;

if (!fs.existsSync(indexPath)) {
  console.error(
    "SPA fallback copy failed: dist/index.html was not found. Run vite build first.",
  );
  process.exit(1);
}

const indexHtml = fs.readFileSync(indexPath, "utf8");
const padLength = Math.max(0, MIN_FALLBACK_BYTES - Buffer.byteLength(indexHtml, "utf8"));
const padding = padLength > 0 ? `\n<!-- ${"x".repeat(padLength)} -->\n` : "\n";
fs.writeFileSync(fallbackPath, `${indexHtml}${padding}`, "utf8");

console.log("Created SPA fallback: dist/404.html");
