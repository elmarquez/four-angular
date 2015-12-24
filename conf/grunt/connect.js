'use strict';

module.exports = {
  options: {
    port: 8080,
    hostname: 'localhost',
    livereload: 35728
  },
  dist: {
    options: {
      open: true,
      base: 'dist'
    }
  },
  livereload: {
    options: {
      open: true,
      middleware: function (connect) {
        return [
          connect.static('src')
        ];
      }
    }
  },
  test: {
    options: {
      base: 'dist',
      port: 8081
    }
  }
};
