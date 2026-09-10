# AGENTS.md

Guidance for AI agents and contributors working in this repository.

## Project Overview

**Pine-Richland Ultimate** is a modern, responsive, single-page team website for an Ultimate Frisbee program. It is open-source and designed to be forkable (see `README.md` for the fork guide).

- **Stack**: React 18 + TypeScript + Vite 7
- **Styling**: Tailwind CSS 3 + shadcn/ui (Radix primitives)
- **Icons**: `lucide-react`
- **Routing**: `react-router-dom`
- **Package manager**: npm (both `package-lock.json` and `bun.lockb` are checked in)

## Scripts

| Command                 | Purpose                                              |
| ----------------------- | ---------------------------------------------------- |
| `npm run dev`           | Vite dev server (hot reload)                         |
| `npm run build`         | Production build to `dist/`                          |
| `npm run build:dev`     | Vite build in development mode                       |
| `npm run preview`       | Preview the production build                         |
| `npm run lint`          | ESLint over the whole repo (`.`)                     |
| `npm run screenshot`    | Screenshot the site (see **Screenshot**)             |
| `npm run screenshot:full` | Screenshot the full scrollable page                |
| `npm run deploy`        | `gh-pages -d dist` (runs `predeploy`)                |

There is no test suite or typecheck script in `package.json`. TypeScript is checked implicitly by `tsc` via the `vite` build; ESLint runs the TS parser.

## Screenshot

A reusable, dependency-light screenshot tool lives at `scripts/screenshot.mjs`
(Playwright + Chromium). It builds and serves the site (unless a URL is given or
`--skip-build` is passed) and writes a PNG to `screenshots/`.

```bash
npm run screenshot                          # build+serve this site, viewport shot
npm run screenshot:full                     # full-page shot
node scripts/screenshot.mjs http://localhost:4173      # screenshot any URL
node scripts/screenshot.mjs 127.0.0.1:4173 --selector '#hero' --device mobile
```

Common flags: `-o, --output <file> · --full · -w/-h (px) · --selector <css> ·
--wait <ms> · --dark · --reduced-motion · --device desktop|tablet|mobile ·
--browser <path>`. Run with `-H` for full help.

**Browser resolution.** The script picks the first that exists:
`--browser`/`CHROMIUM_PATH`/`PLAYWRIGHT_CHROMIUM_EXECUTABLE` → a local
Playwright-managed Chromium → a `chromium` binary on PATH. `devenv.nix` adds
`chromium`, so inside the dev shell no browser download is needed. Outside the
shell, run `npx playwright install chromium` once (set
`PLAYWRIGHT_BROWSERS_PATH` if you use a custom cache).

Output goes to `screenshots/` (git-ignored).

## Project Layout

```
src/
├── assets/            # Static images (logo, screenshot, team photo)
├── components/        # Feature components (one file per page section)
│   ├── ui/           # shadcn/ui primitives (button, card, accordion, ...)
│   ├── Header.tsx, Hero.tsx, Schedule.tsx, About.tsx, ...
├── hooks/            # Custom hooks (use-mobile, use-toast)
├── lib/              # Utility helpers
├── pages/
│   ├── Index.tsx     # The single main page
│   └── NotFound.tsx
├── App.tsx           # Router + layout
└── main.tsx          # Entry point
```

## Conventions

- **Tabs for indentation** (see `biome.json`).
- Feature components live in `src/components/` as PascalCase `.tsx` files, each default-exporting a single `const` component.
- shadcn/ui primitives live in `src/components/ui/`. Treat as vendored; edit with care.
- Styling is Tailwind utility classes only; use the shadcn theme tokens (`bg-primary`, `text-foreground`, `bg-muted`, `text-accent`, etc.) rather than raw hex colors.
- Icons are imported from `lucide-react`.
- Path alias `@/` → `src/`.

## Page Composition

The single page (`src/pages/Index.tsx`) renders the following sections in order:

```
Header → Hero → Schedule → About → History → News → Calendar → FAQ
     → SummerOpportunities → Resources → Contact → Footer
```

When adding/removing sections, update `Index.tsx` to match.

## Banner Component

A general-purpose, reusable announcement banner lives at `src/components/Banner.tsx`. It was extracted from a previous clinic-announcement banner (`RecruitmentBanner`, removed in favor of this generic variant) and is kept in the repo for future announcements.

**Props**

```ts
interface BannerProps {
  eyebrow?: string;          // small uppercase label, e.g. "New players welcome"
  title: string;             // main heading
  detail?: ReactNode;        // optional supporting line (text or nodes)
  callToAction?: {
    label: string;           // button text
    href: string;            // anchor or URL
  };
}
```

- `callToAction` is optional; pass `undefined` to omit the button.
- `detail` accepts any `ReactNode`, so you can attach icons, pills, `<a>` links, etc.

**Current usage**

The banner is currently **commented out** in `src/pages/Index.tsx` (right after `<Header />`) because the announced clinic date (Sep 3, 2026) has passed. To re-enable a future announcement:

1. Un-comment the `<Banner …/>` block in `src/pages/Index.tsx`.
2. Update `eyebrow`, `title`, `detail`, and `callToAction` with the new event's values.
3. Leave the commented import line (`// import Banner from "@/components/Banner";`) as-is; it documents the file's intent.

**Example (clinic announcement, as originally used)**

```tsx
<Banner
  eyebrow="New players welcome"
  title="Try Ultimate at our one-day clinic"
  detail="September 3, 2026 · 4:00-6:00 PM · Pine-Richland High School"
  callToAction={{ label: "I'm interested", href: "#contact" }}
/>
```

**Styling notes**

- Fixed full-width section with `bg-primary` (theme primary) + `text-primary-foreground`.
- Responsive layout: stacked on mobile, row with space-between on `md:`.
- The CTA uses `<Button variant="secondary" size="lg">`. Change the variant if a different emphasis is needed.

## Lint Notes

`npm run lint` reports pre-existing errors/warnings in vendored shadcn/ui files (`src/components/ui/*`) and `tailwind.config.ts`. These are **not** caused by feature code; do not treat them as regression signals when verifying changes. New code in `src/components/*.tsx` (outside `ui/`) should be lint-clean in isolation:

```bash
npx eslint src/components/<MyComponent>.tsx src/pages/<MyPage>.tsx
```

## Deployment

- Static build (`dist/`) is deployable to GitHub Pages, Vercel, Netlify, Cloudflare Pages, etc.
- `npm run deploy` runs `predeploy` (the build) then publishes to the `gh-pages` branch.

## Tips for Agents

- When adding a new section, create a new file in `src/components/`, add an entry to `src/pages/Index.tsx`, and keep the tab indentation.
- Do not touch `src/components/ui/` or `node_modules`.
- Prefer editing existing components over creating new ones.
- Verify with `npm run build` at minimum. Lint only the files you touched.
- No test runner is configured; manual verification (dev server or build) is the accepted workflow.
