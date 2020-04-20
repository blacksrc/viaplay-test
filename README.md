# Viaplay

Viaplay Smart-TV react application.

## Installation Guide

Clone the project.

```sh
git clone git@github.com:blacksrc/viaplay-test.git
```

## Start development

1. Open `viaplay-test` directory.

2. Install dependencies.

```sh
$ yarn install
```

3. Copy `.env.development.local.example` file to `.env.development.local`. The latest env variables will be added to `.env.development.local.example`. So do not delete or rename this file. Then open the copied file and add your environment variables:

```env
# Application running port like: 3003
PORT=

# HOST => API endpoint host with "/" in the end like: https://content.viaplay.se/
REACT_APP_API_HOST=
# DEVICE => API endpoint device like: pc
REACT_APP_API_DEVICE=
# MARKET => API endpoint market like: se
REACT_APP_API_MARKET=
```

It will be look like something like this:

```env
# Application running port like: 3003
PORT=3003

# HOST => API endpoint host with "/" in the end like: https://content.viaplay.se/
REACT_APP_API_HOST=https://content.viaplay.se/
# DEVICE => API endpoint device like: pc
REACT_APP_API_DEVICE=pc
# MARKET => API endpoint market like: se
REACT_APP_API_MARKET=se
```

4. Run project in development mode.

```sh
$ yarn start
```

## Project's structure

`src` directory contains some important sub directories which is explained below the tree view:

```code
.
├── app
│   ├── api
│   ├── assets
│   ├── components
│   ├── config
│   ├── index.js
│   ├── layouts
│   ├── locales
│   ├── pages
│   ├── redux
│   ├── theme
│   └── utils
```

`api`:

> Contains the api request functionality. There is a `_API.js` files which hold `API` class to implement a layer of abstraction for making request. So, any token or header variable or maybe refresh token functionality will be implemented there. For each model endpoint, There is a need to create a new file like `Movie.js` which will be used in different parts of the code to make request.

`assets`

> Contains the static assets like images or styles.

`components`

> Contains all components that is being used in the application.

`config`

> Contains all application configuration. Basically this folder exits to read all environment variables from env file.

`layouts`

> Contains all layouts of application like header, footer, main, etc. The layout components are not meant to be for implementing functionality. They are just here to load component into pages and construct the page structure.

`locales`

> Contains all translations. To add new translations you need to just add another file and import it in `index.js`. Consider changing the key (`se-SE`) in the translation file.

`pages`

> Contains all pages in the application. If there is any router implemented. It should load this components.

`redux`

> Contains all redux functionalities.

`theme`

> Contains theme variables, colors, break pints, fonts, etc. Adding new themes need to be implemented in `index.js` file.

`utils`

> Contains all utility functions. If number of functions increased during the development, it can be decoupled in small files or maybe classes.

## Todo

Things need to be done.

- [x] Localization.
- [ ] Arrow control functionality.
- [ ] Create component visual documentation (Storybook).
- [ ] Unit test.
- [ ] e2e test (Cypress).
- [ ] Review inline code comments.
- [ ] Dockerizing.
