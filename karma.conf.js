// Karma configuration
// Generated on Wed Feb 01 2017 12:12:42 GMT+0100 (Paris, Madrid)
var webpackConf = require('./webpack.config.js');
delete webpackConf.entry

module.exports = function (config) {
  config.set({
    basePath: './src',
    frameworks: ['jasmine', 'karma-typescript'],
    files: [{ pattern: './**/*.spec.ts', watched: false }],
    preprocessors: {
      'index.ts': ['webpack', 'karma-typescript', 'coverage'],
      '**/*.spec.ts': ['webpack', 'karma-typescript', 'coverage']
    },
    webpack: webpackConf, // Pass your webpack.config.js file's content
    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only'
    },
    reporters: ['progress', 'karma-typescript', 'coverage'],
    // optionally, configure the reporter
    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  });
};
