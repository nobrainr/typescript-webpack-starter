# Typescript Webpack Starter

[![Build Status](https://travis-ci.org/emyann/typescript-webpack-starter.svg?branch=develop)](https://travis-ci.org/emyann/typescript-webpack-starter)
>🚀 An ES6 and TypeScript Starter kit using webpack for bundling. Create your TypeScript module with neither build nor test configuration.


## Built upon

- [x] [Webpack 3](https://webpack.js.org/)
- [x] [Typescript 2](https://blogs.msdn.microsoft.com/typescript/2016/07/11/announcing-typescript-2-0-beta/)
- [x] [Webpack Dashboard](https://github.com/FormidableLabs/webpack-dashboard)
- [x] [Karma](https://karma-runner.github.io/1.0/index.html), [Jasmine](https://jasmine.github.io/)

![Imgur](https://i.imgur.com/sj1kwB9.gifv)

## Quick Overview

```sh
npm install -g create-ts-lib

create-ts-lib my-typescript-lib
cd my-typescript-lib/
npm start
```

Then open http://localhost:3000/ to see your bootstrapped module.
When you’re ready to deploy to production, create a minified bundle with `npm run build`.

### Get Started Immediately

You **don’t** need to install or configure tools like Webpack or Babel.<br>
They are preconfigured so that you can focus on the code, but as a starter kit you still can modify them.

Just create a project, and you’re good to go.

## Getting started

### Installation

Install it once globally:

```sh
npm install -g create-ts-lib
```

### Creating a TypeScript module

To create a new module, run:

```sh
create-ts-lib my-ts-module
cd my-ts-module
```

It will create a directory called `my-ts-module` inside the current folder.<br>
Inside that directory, it will generate the initial project structure and install the transitive dependencies:

```
my-ts-module
├── node_modules
├── src
│   └── index.html
│   └── index.spec.ts
│   └── index.ts
│   └── vendor.js
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

No configuration or complicated folder structures, just the files you need to build your app.<br>
Once the installation is done, you can run some commands inside the project folder:

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
