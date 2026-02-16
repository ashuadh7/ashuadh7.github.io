import fs from "node:fs";
import path from "node:path";

const distDir = path.resolve(process.cwd(), "dist");
const indexPath = path.join(distDir, "index.html");
const fallbackPath = path.join(distDir, "404.html");

if (!fs.existsSync(indexPath)) {
  console.error(
    "SPA fallback copy failed: dist/index.html was not found. Run vite build first.",
  );
  process.exit(1);
}

fs.copyFileSync(indexPath, fallbackPath);
console.log("Created SPA fallback: dist/404.html");
