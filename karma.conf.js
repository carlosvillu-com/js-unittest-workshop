'use strict';

module.exports = function(karma) {
  karma.set({

    basePath: '',

    frameworks: ['browserify', 'mocha'],

    files: [
      'workshop/test/**/*Spec.js'
    ],

    reporters: ['spec'],

    preprocessors: {
      'workshop/test/**/*.js': ['browserify'],
      'workshop/src/**/*.js': ['browserify']
    },

    //browsers: ['PhantomJS'],
    browsers: ['Chrome'],

    // browserify configuration
    browserify: {
      debug: true,
      extensions: ['.js'],
      transform: ['babelify']
    }
  });
};
