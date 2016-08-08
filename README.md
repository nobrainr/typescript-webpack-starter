# Typescript Webpack Starter

A damn simple starter kit to bootstrap a Typescript/ES6
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
Bundled files are outputed to `dist` folder

## Debug 

### Issues whith Chrome Debugger
Sometimes Chrome debugger is not correctly initialized, as a consequence for VSCode to receive an access denied from Chrome on port 9222. 

The workaround is to close all Chrome instances and run it manually enabling debugging port
```bat
"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --remote-debugging-port=9222
```

## TODO

- [-] Add samples (Jquery integration)
- [-] Add Webpack HTML Plugin to generate an index.html