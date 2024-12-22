# Kimono Frontend

kimono frontend. site. _(olacak.)_

## Directory Structure

- `src/`: The actual source code of the project
    - `lib/`: Library files
    - `routes/`: The routes
        - `.../+page.svelte`: The Svelte component that renders the page
    - `stories/`: Storybook stories (UI workshop)
    - `**/*.spec.ts`: Vitest test files (unit tests)
- `static/`: Static files
- `e2e/`: Playwright test files (browser tests)

## Used tools, useful links and quick explanations

- [playwright]: Browser testing
- [SvelteKit]: Framework for building web apps using svelte
- [Svelte]: UI framework
- ESLint: JavaScript linter (error checker)
- [mdsvex]: For rendering markdown
- prettier: For beautifying files
- [TypeScript]: Typing for JavaScript
- Vite: Fast HTTP server
- [Vitest]: Vite testing framework
- [Storybook]: UI component workshop

[playwright]: https://playwright.dev/docs/intro
[sveltekit]: https://svelte.dev/docs/kit/introduction
[svelte]: https://svelte.dev/docs/svelte/overview
[mdsvex]: https://mdsvex.pngwn.io/docs
[typescript]: https://www.typescriptlang.org/docs/
[vitest]: https://vitest.dev/guide/
[storybook]: https://storybook.js.org/docs

## Developing

Install dependencies with `npm install`,
start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Other commands

```bash
npm run format     # Run automatic formatter
npm run lint       # Run linter
npm run test       # Run all tests
npm run test:unit  # Run unit tests
npm run test:e2e   # Run end-to-end tests
npm run storybook  # Open storybook
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
