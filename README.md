# octane-playground

A scratch space for playing with [Octane](https://github.com/octanejs/octane) —
a fast, TypeScript-first UI framework and the successor to Inferno.

## Requirements

- Node.js 22 or newer

## Getting started

```bash
npm install
npm run dev
```

Then open the printed URL.

## Editor setup

Components are written in `.tsrx`. For syntax highlighting, diagnostics, and
go-to-definition, install [TSRX for VS Code](https://marketplace.visualstudio.com/items?itemName=Ripple-TS.ripple-ts-vscode-plugin)
— VS Code will prompt for it on open via `.vscode/extensions.json`.

Two caveats with `octane@0.1.10`:

- `@tsrx/typescript-plugin` looks for octane's TSRX compiler at
  `node_modules/octane/src/compiler/volar.js`, but the published package ships
  only `dist/`. `scripts/patch-octane-volar.mjs` bridges that on `postinstall`;
  without it every `.tsrx` file is parsed as plain TypeScript.
- octane does not publish its JSX types yet, so `src/tsrx.d.ts` supplies a
  permissive `JSX.IntrinsicElements`. Element attributes are unchecked until
  upstream ships `jsx-runtime.d.ts`.

## Scripts

| Script | What it does |
| --- | --- |
| `npm run dev` | Start the Vite dev server |
| `npm run build` | Build for production into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm run typecheck` | Type-check `.tsrx` and `.ts` via `tsrx-tsc` |
| `npm run format` | Format with Prettier (TSRX-aware) |
