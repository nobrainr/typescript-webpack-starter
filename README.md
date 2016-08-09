# Typescript Webpack Starter
>A damn simple ES6 and Typescript Starter kit using webpack for packaging. Perfect for bootstraping your javascript project regardless any framework.

## Built upon

- [x] [Webpack 2](https://webpack.github.io/docs/roadmap.html#2)
- [x] [Typescript 2](https://blogs.msdn.microsoft.com/typescript/2016/07/11/announcing-typescript-2-0-beta/)

# Getting started

## Clone Typescript Webpack Starter
```bash
git clone https://github.com/emyann/typescript-webpack-starter.git
cd typescript-webpack-starter
```

## Build
Build a development release
```bash
npm install
npm run build
```

Build a production release
```bash
npm install
npm run build:prod
```
After build phase, those files are generated into the `dist` folder:
- `app.bundle.js` - contains the core of the application. From the entry point `src/index.ts`
- `vendor.bundle.js` - contains the ve

## TODO

- [-] Add samples (Jquery integration for example..)
- [-] Setup a webpack-dev-server
- [-] Setup VSCode debuug to match webpack-dev-server
- [-] Setup a webpack common configuration and use webpack-merge