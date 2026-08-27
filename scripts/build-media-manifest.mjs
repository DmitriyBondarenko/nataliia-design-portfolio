// Scans public/media/ and writes the list of files that actually exist to
// data/media-manifest.json. buildCases() in data/services.ts checks this
// manifest so it never points a case slot at a file that isn't there yet —
// otherwise the browser requests it, gets a 404, and that 404 shows up in
// Cloudflare's metrics. Runs automatically before `dev`/`build` (see
// package.json); re-run it manually after dropping new files in if needed.
import { readdirSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const rootDir = dirname(dirname(fileURLToPath(import.meta.url)));
const mediaDir = join(rootDir, "public", "media");
const manifestPath = join(rootDir, "data", "media-manifest.json");

const files = readdirSync(mediaDir).sort();
writeFileSync(manifestPath, JSON.stringify(files, null, 2) + "\n");

console.log(`media-manifest.json: ${files.length} files`);
