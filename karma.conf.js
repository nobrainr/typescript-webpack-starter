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
    reporters: ['progress', 'karma-typescript', 'kjhtml', 'spec', 'coverage'],
    // optionally, configure the reporter
    coverageReporter: {
      // specify a common output directory
      dir: 'build/reports/coverage',
      reporters: [
        // reporters not supporting the `file` property
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
        // reporters supporting the `file` property, use `subdir` to directly
        // output them in the `dir` directory
        { type: 'cobertura', subdir: '.', file: 'cobertura.txt' },
        { type: 'lcovonly', subdir: '.', file: 'report-lcovonly.txt' },
        { type: 'teamcity', subdir: '.', file: 'teamcity.txt' },
        { type: 'text', subdir: '.', file: 'text.txt' },
        { type: 'text-summary', subdir: '.', file: 'text-summary.txt' },
      ]
    },
    specReporter: {
      maxLogLines: 5,         // limit number of lines logged per test 
      suppressErrorSummary: true,  // do not print error summary 
      suppressFailed: false,  // do not print information about failed tests 
      suppressPassed: false,  // do not print information about passed tests 
      suppressSkipped: true,  // do not print information about skipped tests 
      showSpecTiming: false // print the time elapsed for each spec 
    },
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    concurrency: Infinity
  });

  if (process.env.TRAVIS) {
    config.browsers = ['Chrome_travis_ci'];
  }
};
