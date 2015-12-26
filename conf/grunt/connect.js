'use strict';

module.exports = {
  options: {
    port: 8080,
    hostname: 'localhost',
    livereload: 35728
  },
  dist: {
    options: {
      open: true
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
  }
};
