# Vue 3 + TypeScript + Vite

The frontend uses Vue single-file components, the Inertia Vue 3 adapter, and Pico CSS.
Pages live in `src/pages`; their paths match the page names returned by Spring controllers.

## Development

Install dependencies with `yarn install`, then run `yarn dev` with Spring running
at `http://localhost:8080`. Open `http://localhost:5173` to use the application.
The custom server proxies requests to Spring and applies Vite transformations to its HTML.
Use `node server.js -u http://localhost:8080 -p 5173` to change the upstream or port.

## Checks

- `yarn lint` checks TypeScript and Vue components.
- `yarn build` type-checks with `vue-tsc` and bundles the frontend into `dist`.

Spring supplies the HTML shell in `../resources/templates/app.html`.
The build bundles the JavaScript entry; serving production assets requires configuring
Spring to serve the generated files and reference them from the HTML shell.
