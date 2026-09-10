#!/usr/bin/env node
/**
 * Reusable website screenshot tool.
 *
 * Captures a PNG (or JPEG) of a running site — or builds and serves this
 * project first, then screenshots it. Uses Playwright's Chromium; the browser
 * binary is resolved from the local `playwright` package, `PLAYWRIGHT_BROWSERS_PATH`,
 * or a `chromium`/`chromium-browser` on PATH (e.g. from devenv.nix).
 *
 * Usage:
 *   node scripts/screenshot.mjs [url] [options]
 *
 * When no url is given the project is built and served via `vite preview`,
 * then the default route is captured.
 *
 * Options (see --help):
 *   -o, --output <file>   Output image path (default: screenshots/<name>.png)
 *       --jpeg            Write a .jpg instead of .png
 *       --full            Capture the full scrollable page
 *   -w, --width <px>      Viewport width (default: 1280)
 *   -h, --height <px>     Viewport height (default: 800)
 *       --selector <css>  Capture a specific element instead of the page
 *       --wait <ms>       Extra time to wait after load (default: 400)
 *       --dark            Emulate prefers-color-scheme: dark
 *       --reduced-motion  Emulate prefers-reduced-motion: reduce
 *       --device <name>   Preset viewport (desktop|tablet|mobile)
 *       --skip-build      Trust an existing dist/ instead of rebuilding
 *   -H, --help            Show this help and exit
 */

import { spawn, spawnSync } from "node:child_process";
import { existsSync, mkdirSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const PRESETS = {
	desktop: { width: 1280, height: 800 },
	tablet: { width: 834, height: 1112 },
	mobile: { width: 390, height: 844 },
};

function fail(message) {
	console.error(`\n\u001b[31merror:\u001b[0m ${message}\n`);
	process.exit(1);
}

const HELP = `
Reusable website screenshot tool (Playwright + Chromium).

Usage:
  node scripts/screenshot.mjs [url] [options]

If no url is supplied, the project is built and served with \`vite preview\`,
then the default route is captured.

Examples:
  node scripts/screenshot.mjs                                  # build+serve this site
  node scripts/screenshot.mjs 127.0.0.1:4173                   # screenshot a URL
  node scripts/screenshot.mjs 127.0.0.1:4173 --full -o shot.png
  node scripts/screenshot.mjs 127.0.0.1:4173 --selector '#hero' --device mobile

Options:
  -o, --output <file>   Output image path (default: screenshots/<name>.png)
      --jpeg            Write .jpg instead of .png
      --full            Capture the full scrollable page
  -w, --width <px>      Viewport width  (default: 1280)
  -h, --height <px>     Viewport height (default: 800)
      --selector <css>  Capture a specific element instead of the whole page
      --wait <ms>       Extra time to wait after load (default: 400)
      --dark            Emulate prefers-color-scheme: dark
      --reduced-motion  Emulate prefers-reduced-motion: reduce
      --device <name>   Viewport preset: desktop | tablet | mobile
      --browser <path>  Use a specific Chromium executable (overrides auto-detection)
      --skip-build      Trust an existing dist/ without rebuilding (skip the build step)
  -H, --help            Show this help and exit

Environment:
  PLAYWRIGHT_BROWSERS_PATH   Where Playwright expects browser binaries.
  chromium / chromium-browser on PATH are auto-detected as a fallback.
`;

function parseArgs(argv) {
	const opts = {
		url: undefined,
		output: undefined,
		jpeg: false,
		full: false,
		width: 1280,
		height: 800,
		selector: undefined,
		wait: 400,
		dark: false,
		reducedMotion: false,
		device: undefined,
		browser: process.env.CHROMIUM_PATH ?? process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE,
		skipBuild: false,
		help: false,
	};

	for (let i = 0; i < argv.length; i++) {
		const a = argv[i];
		const next = () => argv[++i];
		switch (a) {
			case "-o":
			case "--output":
				opts.output = next();
				break;
			case "--jpeg":
				opts.jpeg = true;
				break;
			case "--full":
				opts.full = true;
				break;
			case "-w":
			case "--width":
				opts.width = Number(next());
				break;
			case "-h":
			case "--height":
				opts.height = Number(next());
				break;
			case "--selector":
				opts.selector = next();
				break;
			case "--wait":
				opts.wait = Number(next());
				break;
			case "--dark":
				opts.dark = true;
				break;
			case "--reduced-motion":
				opts.reducedMotion = true;
				break;
			case "--device":
				opts.device = next();
				break;
			case "--browser":
				opts.browser = next();
				break;
			case "--skip-build":
				opts.skipBuild = true;
				break;
			case "-H":
			case "--help":
				opts.help = true;
				break;
			default:
				if (a.startsWith("-") && a !== "-h") {
					fail(`unknown option: ${a} (see -H for help)`);
				}
				if (opts.url === undefined) {
					opts.url = a;
				} else {
					fail(`unexpected argument: ${a}`);
				}
		}
	}

	if (!Number.isFinite(opts.width) || !Number.isFinite(opts.height) || opts.width <= 0 || opts.height <= 0) {
		fail(`invalid viewport size (width=${opts.width}, height=${opts.height})`);
	}
	if (opts.device && !PRESETS[opts.device]) {
		fail(`unknown --device: ${opts.device} (expected ${Object.keys(PRESETS).join(", ")})`);
	}
	if (opts.device) {
		opts.width = PRESETS[opts.device].width;
		opts.height = PRESETS[opts.device].height;
	}
	if (!Number.isFinite(opts.wait) || opts.wait < 0) {
		fail(`invalid --wait: ${opts.wait}`);
	}
	return opts;
}

function sleep(ms) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Resolve a Chromium executable (when not overridden by --browser /
 * CHROMIUM_PATH / PLAYWRIGHT_CHROMIUM_EXECUTABLE).
 * Order: local playwright-managed browser (honors PLAYWRIGHT_BROWSERS_PATH) ->
 * a `chromium` binary on PATH (e.g. provided by devenv.nix).
 */
async function findChromium() {
	// 1) Let Playwright try its own resolution (honors PLAYWRIGHT_BROWSERS_PATH).
	const { chromium } = await import("playwright");
	const execPath = chromium.executablePath();
	if (execPath && existsSync(execPath)) return execPath;

	// 2) Fall back to a system chromium on PATH (e.g. provided by devenv.nix).
	for (const name of ["chromium", "chromium-browser"]) {
		const res = spawnSync("sh", ["-c", `command -v ${name}`], { encoding: "utf8" });
		const found = res.status === 0 ? res.stdout.trim() : "";
		if (found && existsSync(found)) return found;
	}

	// 3) Last resort: let Playwright point at whatever it thinks it has.
	return execPath;
}

/**
 * Resolve the URL to screenshot.
 * Returns { url, server } where server, if present, must be killed on exit.
 */
async function resolveTarget(opts) {
	if (opts.url) {
		let url = opts.url;
		if (!/^[a-zA-Z][a-zA-Z0-9+.-]*:/.test(url)) {
			url = `http://${url}`;
		}
		return { url, server: null };
	}

	// No URL given: build (unless dist exists and build is skipped) and serve.
	const distDir = path.join(root, "dist");
	if (!existsSync(distDir) && !opts.skipBuild) {
		console.error("\u001b[33m\u25B8\u001b[0m dist/ not found — building (run with --skip-build to skip) …");
		const build = spawn("npm", ["run", "build"], { cwd: root, stdio: "inherit", shell: process.platform === "win32" });
		const code = await new Promise((resolve) => build.on("close", resolve));
		if (code !== 0) fail("build failed; aborting screenshot");
	}

	if (!existsSync(path.join(distDir, "index.html"))) {
		fail("dist/index.html not found. Build first (`npm run build`) or pass a URL explicitly.");
	}

	const { createServer } = await import("node:http");
	const { readFile } = await import("node:fs/promises");

	const server = createServer((req, res) => {
		const urlPath = decodeURIComponent(req.url?.split("?")[0] ?? "/");
		let filePath = path.normalize(path.join(distDir, urlPath === "/" ? "index.html" : urlPath));
		// Serve the requested file if it exists; otherwise fall back to index.html
		// (SPA routing). Guard against path traversal.
		if (!filePath.startsWith(distDir) || !existsSync(filePath)) {
			filePath = path.join(distDir, "index.html");
		}
		readFile(filePath).then(
			(data) => {
				const ext = path.extname(filePath).toLowerCase();
				const types = {
					".html": "text/html; charset=utf-8",
					".js": "text/javascript",
					".mjs": "text/javascript",
					".css": "text/css",
					".json": "application/json",
					".svg": "image/svg+xml",
					".png": "image/png",
					".jpg": "image/jpeg",
					".jpeg": "image/jpeg",
					".ico": "image/x-icon",
					".webp": "image/webp",
					".woff": "font/woff",
					".woff2": "font/woff2",
				};
				res.writeHead(200, { "Content-Type": types[ext] ?? "application/octet-stream" });
				res.end(data);
			},
			() => {
				res.writeHead(404, { "Content-Type": "text/plain" });
				res.end("Not found");
			}
		);
	});

	const port = Number(process.env.SCREENSHOT_PORT ?? 4173);
	await new Promise((resolve, reject) => {
		server.once("error", reject);
		server.listen(port, "127.0.0.1", () => resolve());
	});

	return { url: `http://127.0.0.1:${port}/`, server };
}

async function main() {
	const opts = parseArgs(process.argv.slice(2));
	if (opts.help) {
		console.log(HELP);
		return;
	}

	const { url, server } = await resolveTarget(opts);
	const output = path.resolve(opts.output ?? path.join(root, "screenshots", `screenshot.png`));
	mkdirSync(path.dirname(output), { recursive: true });

	let browser;
	try {
		const { chromium } = await import("playwright");
		let executablePath = opts.browser;
		if (executablePath && !existsSync(executablePath)) {
			fail(`browser path not found: ${executablePath}`);
		}
		if (!executablePath) executablePath = await findChromium();
		console.error(`\u25B8 browser: ${executablePath ?? "playwright-managed"}\n\u25B8 url:     ${url}\n\u25B8 output:  ${output}`);

		browser = await chromium.launch({
			headless: true,
			args: ["--no-sandbox", "--disable-setuid-sandbox", "--disable-dev-shm-usage"],
			...(executablePath ? { executablePath } : {}),
		});

		const context = await browser.newContext({
			viewport: { width: opts.width, height: opts.height },
			deviceScaleFactor: 2,
			colorScheme: opts.dark ? "dark" : "light",
			reducedMotion: opts.reducedMotion ? "reduce" : "no-preference",
		});
		const page = await context.newPage();

		await page.goto(url, { waitUntil: "networkidle", timeout: 60000 });
		if (opts.wait > 0) await sleep(opts.wait);

		const target = opts.selector ? page.locator(opts.selector).first() : page;
		await target.screenshot({
			path: output,
			clip: undefined,
			...(opts.full && !opts.selector ? { fullPage: true } : {}),
			type: opts.jpeg ? "jpeg" : "png",
		});

		console.error(`\n\u2713 saved ${output}`);
	} finally {
		if (browser) await browser.close().catch(() => {});
		if (server) await new Promise((resolve) => server.close(resolve));
	}
}

main().then(
	() => process.exit(0),
	(err) => {
		console.error(`\n\u001b[31merror:\u001b[0m ${err?.stack ?? err}`);
		process.exit(1);
	}
);
