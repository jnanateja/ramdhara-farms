# React frontend

A frontend-only website starter using React, TypeScript, and Vite. No backend or database is required.

## Run locally

Use Node.js 22.12+ (or a newer supported LTS release).

```bash
npm install
npm run dev
```

Open the local URL printed by Vite. Changes to source files update automatically in the browser.

## Build and check

```bash
npm run lint
npm run build
npm run preview
```

The production build is written to `dist/` and can be hosted on a static website host. The preview command serves that build locally.

## Start building

- `src/App.tsx`: replace the starter page with your website components.
- `src/App.css`: styles for the app.
- `src/index.css`: global styles.
- `src/main.tsx`: React entry point.
- `public/`: static assets served directly.
- `index.html`: page title and metadata.

Keep secrets out of frontend code and environment variables: code bundled for the browser is public.
