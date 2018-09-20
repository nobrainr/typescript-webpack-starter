# create-ts-lib [![Backers on Open Collective](https://opencollective.com/typescript-webpack-starter/backers/badge.svg)](#backers) [![Sponsors on Open Collective](https://opencollective.com/typescript-webpack-starter/sponsors/badge.svg)](#sponsors) [![CircleCI](https://img.shields.io/circleci/project/github/nobrainr/typescript-webpack-starter.svg)](https://circleci.com/gh/nobrainr/workflows/typescript-webpack-starter/tree/master) [![Npm Package](https://img.shields.io/npm/v/create-ts-lib.svg)](https://www.npmjs.com/package/create-ts-lib)

<video poster="poster.jpg" width="618" height="347" controls preload> 
    <source src="https://youtu.be/TEUvqh9EsB4" media="only screen and (min-device-width: 568px)"></source> 
</video>

## Quick Start

You can execute the `create-ts-lib` CLI using [`npx`](https://github.com/zkat/npx) or by installing it globally with `npm i -g create-ts-lib`.

```sh
# Use NPX or npm install -g create-ts-lib to install it as a global package
npx create-ts-lib my-typescript-lib
cd my-typescript-lib && npm start
```

### Build and Serve it

- Browse http://localhost:3000/ to see your bootstrapped module.
- A bundle is created under `/dist` folder.
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

```sh
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

Creates a bundle into the `dist` folder:

```sh
dist
├── MyLibrary.d.ts # - Example of a 'd.ts' declaration file
├── app.bundle.js # - Main bundle of the application. name from webpack.config
├── app.bundle.js.map # - Sourcemap
├── index.d.ts
└── index.html # - html page referencing app.bundle.js
```

## Development

We'd love to have your helping hand on `create-ts-lib`! See [CONTRIBUTING.md](CONTRIBUTING.md) for more information on what we're looking for and how to get started.

## Contributors

This project exists thanks to all the people who contribute. [[Contribute](CONTRIBUTING.md)].
<a href="graphs/contributors"><img src="https://opencollective.com/typescript-webpack-starter/contributors.svg?width=890&button=false" /></a>

## Backers

Thank you to all our backers! 🙏 [[Become a backer](https://opencollective.com/typescript-webpack-starter#backer)]

<a href="https://opencollective.com/typescript-webpack-starter#backers" target="_blank"><img src="https://opencollective.com/typescript-webpack-starter/backers.svg?width=890"></a>

## Sponsors

Support this project by becoming a sponsor. Your logo will show up here with a link to your website. [[Become a sponsor](https://opencollective.com/typescript-webpack-starter#sponsor)]

<a href="https://opencollective.com/typescript-webpack-starter/sponsor/0/website" target="_blank"><img src="https://opencollective.com/typescript-webpack-starter/sponsor/0/avatar.svg"></a>
<a href="https://opencollective.com/typescript-webpack-starter/sponsor/1/website" target="_blank"><img src="https://opencollective.com/typescript-webpack-starter/sponsor/1/avatar.svg"></a>
<a href="https://opencollective.com/typescript-webpack-starter/sponsor/2/website" target="_blank"><img src="https://opencollective.com/typescript-webpack-starter/sponsor/2/avatar.svg"></a>
<a href="https://opencollective.com/typescript-webpack-starter/sponsor/3/website" target="_blank"><img src="https://opencollective.com/typescript-webpack-starter/sponsor/3/avatar.svg"></a>
<a href="https://opencollective.com/typescript-webpack-starter/sponsor/4/website" target="_blank"><img src="https://opencollective.com/typescript-webpack-starter/sponsor/4/avatar.svg"></a>
<a href="https://opencollective.com/typescript-webpack-starter/sponsor/5/website" target="_blank"><img src="https://opencollective.com/typescript-webpack-starter/sponsor/5/avatar.svg"></a>
<a href="https://opencollective.com/typescript-webpack-starter/sponsor/6/website" target="_blank"><img src="https://opencollective.com/typescript-webpack-starter/sponsor/6/avatar.svg"></a>
<a href="https://opencollective.com/typescript-webpack-starter/sponsor/7/website" target="_blank"><img src="https://opencollective.com/typescript-webpack-starter/sponsor/7/avatar.svg"></a>
<a href="https://opencollective.com/typescript-webpack-starter/sponsor/8/website" target="_blank"><img src="https://opencollective.com/typescript-webpack-starter/sponsor/8/avatar.svg"></a>
<a href="https://opencollective.com/typescript-webpack-starter/sponsor/9/website" target="_blank"><img src="https://opencollective.com/typescript-webpack-starter/sponsor/9/avatar.svg"></a>
