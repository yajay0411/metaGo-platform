# Deployment Guide — MetaGo Platform

## Architecture

```
metaGo-platform/
├── apps/
│   ├── main-app/     → Next.js (App Router)  → metago.health.com
│   ├── product-1/    → React + Vite          → product1.metago.health.com
│   └── product-2/    → React + Vite (JS)     → product2.metago.health.com
├── packages/
│   └── logger/       → Shared logging service
├── turbo.json
├── pnpm-workspace.yaml
└── package.json
```

## Vercel Deployment

### Project 1: main-app

| Setting          | Value                                               |
| ---------------- | --------------------------------------------------- |
| Root Directory   | `apps/main-app`                                     |
| Framework        | Next.js                                             |
| Build Command    | `cd ../.. && npx turbo run build --filter=main-app` |
| Output Directory | `.next`                                             |
| Install Command  | `cd ../.. && pnpm install`                          |
| Domain           | `metago.health.com`                                 |

### Project 2: product-1

| Setting          | Value                                                |
| ---------------- | ---------------------------------------------------- |
| Root Directory   | `apps/product-1`                                     |
| Framework        | Vite                                                 |
| Build Command    | `cd ../.. && npx turbo run build --filter=product-1` |
| Output Directory | `dist`                                               |
| Install Command  | `cd ../.. && pnpm install`                           |
| Domain           | `product1.metago.health.com`                         |

### Project 3: product-2

| Setting          | Value                                                |
| ---------------- | ---------------------------------------------------- |
| Root Directory   | `apps/product-2`                                     |
| Framework        | Vite                                                 |
| Build Command    | `cd ../.. && npx turbo run build --filter=product-2` |
| Output Directory | `dist`                                               |
| Install Command  | `cd ../.. && pnpm install`                           |
| Domain           | `product2.metago.health.com`                         |

## Environment Variables

### Strategy

- **Shared vars**: Set in both Vercel projects or use Vercel Environment Variable Groups
- **Next.js vars**: Prefix with `NEXT_PUBLIC_` for client-side access
- **Vite vars**: Prefix with `VITE_` for client-side access
- **Server-only vars**: No prefix needed, only available server-side

### Required Variables (per project)

```
NODE_ENV=production
```

## Development Commands

```bash
# Install all dependencies
pnpm install

# Run all apps in parallel
pnpm dev

# Run specific app
turbo run dev --filter=main-app
turbo run dev --filter=product-1
turbo run dev --filter=product-2

# Build all
pnpm build

# Lint all
pnpm lint

# Type check all
pnpm type-check
```

## Turbo Remote Caching (optional)

```bash
npx turbo login
npx turbo link
```

This enables shared build caching across your team and CI.

## Adding a New App

1. Create `apps/new-app/` with framework of choice
2. Add `@repo/logger` (or other packages) as dependency: `"@repo/logger": "workspace:*"`
3. Create a new Vercel project pointing to `apps/new-app`
4. Turbo automatically includes it in the pipeline

## Adding a New Shared Package

1. Create `packages/new-pkg/` with `package.json` (name: `@repo/new-pkg`)
2. Export from `src/index.ts`
3. Add as dependency in consuming apps: `"@repo/new-pkg": "workspace:*"`
4. Run `pnpm install` to link
