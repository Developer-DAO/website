# D_D Website V2.0

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Working locally with both the Design system and the website.

Build a Yarn Workspace on the root folder containing both repositories

Setup a package.json file

```
{
    "private": true,
    "workspaces": [
      "design-system",
      "website",
    ]
}
  ```

Remove lock files on both folders, the app that will drink from the design-system folder.

Root yarn install from the root folder

And then start your dev environments on each project.

Yarn dev for a next.js project

yarn watch:all for the design system
