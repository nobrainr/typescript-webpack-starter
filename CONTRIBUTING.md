# Contributing to create-ts-lib

Welcome, and thank you for your interest in contributing to create-ts-lib!

There are many ways that you can contribute, beyond writing code. The goal of this document is to provide a high-level overview of how you can get involved.

## Architecture

1. Application Type
   - Javascript (ES5, ES6, ES7)
   - Typescript
   - React
   - React-Redux
   - ....
2. Bundler
   - Webpack
   - Rollup
   - Parcel
   - ....
3. Test Framework
   - Karma + Jasmine
   - Jest
   - Mocha + Chai
4. Automatic Versionning (?)
   - semver
   - semantic-release
5. CI/CD
   - TravisCI
   - CircleCI
   - TeamCity
   - ...
   - Push to NPM
   - Push to CDN

## Presets

1. default
   - 1.Typescript, 2.Webpack, 3.Karma+Jasmine, 4.Semantic Release, 5.CircleCI
2. minimal
   - 1.Typescript, 2.None, 3.None, 4.None, 5.None

## Commands

```sh
tws-cli create -p default | minimal -n app
```

```sh
tws-cli search --filter presets | minimal -n app
```
