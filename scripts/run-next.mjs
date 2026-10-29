/**
 * Starts `next dev` / `next start` on the port configured in the environment.
 *
 * The Next CLI reads PORT from the real shell environment only — it parses its
 * flags before any .env file is loaded — so a PORT in .env.local would be
 * ignored. This loads the .env files exactly the way Next does, then hands the
 * resolved port to the CLI.
 *
 * Precedence: shell PORT > .env files > Next's own default of 3000. With no
 * PORT set anywhere nothing is passed through, so Next keeps its default and
 * its "port already in use, try the next one" fallback.
 *
 * Run with: node scripts/run-next.mjs <dev|start> [...extra next args]
 */

import { spawn } from "child_process";
import { join, dirname } from "path";
import { fileURLToPath } from "url";
// Bundled CommonJS, so the named export is only reachable off the default.
import nextEnv from "@next/env";

const { loadEnvConfig } = nextEnv;

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

const [command, ...extraArgs] = process.argv.slice(2);

if (command !== "dev" && command !== "start") {
  console.error("Usage: node scripts/run-next.mjs <dev|start> [...next args]");
  process.exit(1);
}

// Never overwrites a variable already present in process.env, so a one-off
// `PORT=4000 npm run dev` still beats whatever the .env files say.
loadEnvConfig(root, command === "dev");

const port = process.env.PORT?.trim();

if (port && !/^\d+$/.test(port)) {
  console.error(`Invalid PORT: "${port}" — set a plain port number, e.g. PORT=4000`);
  process.exit(1);
}

const env = { ...process.env };
// Let the Next process load the .env files itself instead of inheriting the
// "already done" marker this script just set.
delete env.__NEXT_PROCESSED_ENV;

if (port) {
  env.PORT = port;
} else {
  delete env.PORT;
}

const child = spawn(
  process.execPath,
  [join(root, "node_modules", "next", "dist", "bin", "next"), command, ...extraArgs],
  { stdio: "inherit", env, cwd: root },
);

// Stop requests aimed at this wrapper (VS Code, docker stop) must reach Next;
// a Ctrl-C from the terminal already hits both.
for (const signal of ["SIGINT", "SIGTERM"]) {
  process.on(signal, () => child.kill(signal));
}

child.on("exit", (code) => process.exit(code ?? 0));
