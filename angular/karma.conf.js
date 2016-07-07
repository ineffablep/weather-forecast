var webpack = require('karma-webpack');
var webpackConfig = require('./webpack.config');

module.exports = function (config) {
  config.set({
    frameworks: [ 'jasmine' ],
    files: [
      './node_modules/angular-mocks/angular-mocks.js',
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      'tests/**/*.js'
    ],
    plugins: [
      webpack,
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-phantomjs-launcher',
      'karma-coverage',
      'karma-spec-reporter'
    ],
    browsers: [ 'Chrome' ],
    preprocessors: {
      'tests/**/*.js': ['webpack'],
      'src/**/*.js': ['webpack']
    },
    reporters: [ 'spec', 'coverage' ],
    coverageReporter: {
      dir: 'build/reports/coverage',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
        { type: 'cobertura', subdir: '.', file: 'cobertura.txt' }
      ]
    },
    logLevel: config.LOG_DEBUG,
    webpack: webpackConfig,
    webpackMiddleware: { noInfo: true }
  });
};