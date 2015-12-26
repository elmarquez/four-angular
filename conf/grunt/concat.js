module.exports = {
  options: {
    banner: '\'use strict\';\n\n'
  },
  dist: {
    src: [
      'src/app/module.js',
      'src/app/controllers/*.js',
      'src/app/directives/*.js',
      'src/app/filters/*.js',
      'src/app/routes/*.js',
      'src/app/services/*.js'
    ],
    dest: 'dist/four-angular.js'
  }
};
