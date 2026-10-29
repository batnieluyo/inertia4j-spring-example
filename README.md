# Inertia4J Spring Example

Example record collection application built with Spring Boot, Inertia4J, and Vue 3.
Browse records, add a record, view its details, and delete it through an Inertia-powered frontend.

The backend uses Spring Data JPA and PostgreSQL. The frontend uses Vue 3 single-file
components, TypeScript, Vite, the Inertia Vue 3 adapter, and Pico CSS.

![Demo](https://github.com/Inertia4J/inertia4j-spring-example/blob/assets/Demo.gif)

## Run with Docker

1. Install [Docker](https://docker.com) and [Docker Compose](https://docs.docker.com/compose/).
2. From the repository root, run:

   ```sh
   docker compose up
   ```

3. Access [http://localhost:5173](http://localhost:5173).

Compose starts PostgreSQL, Spring Boot on port 8080, and the frontend development
server on port 5173. The first startup downloads dependencies; wait for both application
servers to start before opening the app.

Stop the services with `docker compose down`. Database records persist in the
`postgres_data` Docker volume.

## Frontend development

The frontend lives in [`src/main/front`](src/main/front). With Spring Boot running
at `http://localhost:8080`, use Node.js 24 and Yarn Classic to start the frontend locally:

```sh
cd src/main/front
yarn install
yarn dev
```

Open [http://localhost:5173](http://localhost:5173). If you are running the backend
through Compose, start only its services with `docker compose up postgres spring`
so the container frontend does not occupy port 5173.

The custom [development server](src/main/front/server.js) forwards application requests
to Spring and applies Vite transformations to the HTML returned by the backend.
Vue pages live in `src/main/front/src/pages`, and their paths match the page names
returned by the Spring controllers, such as `records/Index`.

## Frontend checks

Run these commands from `src/main/front`:

```sh
yarn lint
yarn build
```

Lint checks TypeScript and Vue components. The build runs Vue type checking and
generates bundled assets in `dist`. Production hosting still requires configuring
Spring to serve those assets and reference them from its HTML template.

See the [frontend README](src/main/front/README.md) for entry points and server options.
