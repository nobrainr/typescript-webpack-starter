# Typescript Webpack Starter
[![Build Status](https://travis-ci.org/emyann/typescript-webpack-starter.svg?branch=develop)](https://travis-ci.org/emyann/typescript-webpack-starter)
>A damn simple ES6 and Typescript Starter kit using webpack for packaging. Perfect for bootstraping your javascript project regardless any framework.

## Built upon

- [x] [Webpack 2](https://webpack.github.io/docs/roadmap.html#2)
- [x] [Typescript 2](https://blogs.msdn.microsoft.com/typescript/2016/07/11/announcing-typescript-2-0-beta/)
- [x] [Webpack Dashboard](https://github.com/FormidableLabs/webpack-dashboard)
![Imgur](http://i.imgur.com/pETTX85.png)
# Getting started

## Clone Typescript Webpack Starter
```bash
git clone https://github.com/emyann/typescript-webpack-starter.git
cd typescript-webpack-starter
# Install the dependencies
npm install
```

## Run
Run a Webpack dev server 
```bash
npm run server
```

## Build Only
Build a development release
```bash
npm run build
```

Build a production release
```bash
npm run build:prod
```
After build phase, 3 files are generated into the `dist` folder:
- `app.bundle.js` - contains the core of the application. From the entry point `src/index.ts`
- `vendor.bundle.js` - contains the vendor dependencies
- `index.html` - html page with references to the 2 files above

## TODO

- [ ] Add TODO example
- [ ] Setup VSCode debug to match webpack-dev-server
- [ ] Setup a webpack common configuration and use webpack-merge
- [ ] Setup unit tests with Jasmine / Karma
