# create-ts-lib [![Build Status](https://img.shields.io/travis/emyann/typescript-webpack-starter.svg)](https://travis-ci.org/emyann/typescript-webpack-starter) [![Npm Package](https://img.shields.io/npm/v/create-ts-lib.svg)](https://www.npmjs.com/package/create-ts-lib)

## Quick Start

You can execute the `create-ts-lib` CLI using [`npx`](https://github.com/zkat/npx) or by installing it globally with `npm i -g create-ts-lib`.

```sh
# Use NPX or npm install -g create-ts-lib to install it as a global package
npx create-ts-lib my-typescript-lib
cd my-typescript-lib && npm start
```

### Build and Serve it

- Browse http://localhost:3000/ to see your bootstrapped module.
- Output bundle is created under `/dist` folder.
- Create a minified bundle with `npm run build`.

## Features

You **don’t** need to install or configure tools like `Webpack`, `Typescript`, `Karma` or `Jasmine`.<br>
They are preconfigured so that you can focus on the code, but as a starter kit you still can modify all the configuration files.

- [x] (Application Type) [Typescript 3](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-0.html)
- [x] (Bundler) [Webpack 4](https://webpack.js.org/)
- [x] [Karma](https://karma-runner.github.io/1.0/index.html), [Jasmine](https://jasmine.github.io/)

### Create a Typescript project

```sh
# Use NPX or npm install -g create-ts-lib to install it as a global package
npx create-ts-lib my-typescript-lib
cd my-typescript-lib && npm start
```

Calling `create-ts-lib` with `my-typescript-lib` as an argument creates a directory `my-typescript-lib` inside the current directory.<br>
Inside that directory, the initial file structure of the project is generated with all the devDependencies installed.

```
my-typescript-lib
├── node_modules
├── src
│   └── index.html
│   └── index.ts
│   └── MyLibrary.ts
│   └── MyLibrary.spec.ts
├── tests
│    └── unit
│        └── spec-bundle.js
├── README.md
├── package.json
├── .gitignore
├── karma.conf.js
├── tsconfig.json
├── tslint.json
├── typings.json
└── webpack.config.js
```

No configuration or complicated folder structures, just the files you need to start your app / package / module.<br>

### `npm start` or `npm run server:prod`

Runs the app in development / production mode using Webpack dev server.
Open [http://localhost:3000](http://localhost:3000) 🎉 to view it in the browser.

### `npm test`

Runs the unit tests using Karma as test runner and Jasmine as testing framework.

### `npm run build` or `npm run build:prod`

Build a development release

After build phase, 3 files are generated into the `dist` folder:

- `app.bundle.js` - contains the core of the application. From the entry point `src/index.ts`
- `vendor.bundle.js` - contains the vendor dependencies. From the entry point `src/vendor.ts` (lodash is added as an example)
- `index.html` - html page referencing these files

## Development

We'd love to have your helping hand on `create-ts-lib`! See [CONTRIBUTING.md](CONTRIBUTING.md) for more information on what we're looking for and how to get started.
