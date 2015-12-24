'use strict';

module.exports = {
    options: {
        jshintrc: 'conf/jshint.json'
    },
    dist: {
        src: ['dist/**/*.js']
    },
    src: {
        src: ['Gruntfile.js','src/**/*.js']
    },
    test: {
        src: ['test/**/*.js']
    }
};
