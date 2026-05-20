import { copyFileSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dist = join(root, "dist");

if (!existsSync(join(dist, "index.html"))) {
  throw new Error("Expected dist/index.html after the Vite build.");
}

for (const file of [
  ".nojekyll",
  "Mostofa_Kamal_Joy_Improved_CV.pdf",
  "Mostofa-Kamal-CV.html",
]) {
  const from = existsSync(join(root, "public", file))
    ? join(root, "public", file)
    : join(root, file);

  if (existsSync(from)) {
    const distTarget = join(dist, file);
    if (from !== distTarget) {
      copyFileSync(from, distTarget);
    }
  }
}
