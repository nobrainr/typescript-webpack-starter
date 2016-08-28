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

## Run
Run a Webpack dev server 
```bash
npm install
npm run server
```

## Build Only
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
After build phase, 3 files are generated into the `dist` folder:
- `app.bundle.js` - contains the core of the application. From the entry point `src/index.ts`
- `vendor.bundle.js` - contains the vendor dependencies
- `index.html` - html page with references to the 2 files above

## TODO

- [_] Add TODO example
- [_] Setup VSCode debug to match webpack-dev-server
- [_] Setup a webpack common configuration and use webpack-merge
- [_] Setup unit tests
