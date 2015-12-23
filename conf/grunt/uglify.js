module.exports = {
  dist: {
    cwd: '<%= app.dist %>',
    expand: true,
    files: {
      '<%= app.dist %>/app/app.min.js': '<%= manifest.minify.js %>'
    }
  },
  options: {
    banner: '/* Copyright (c) <%= grunt.template.today("yyyy") %> AURIN. Compiled <%= grunt.template.today("yyyy-mm-dd hh:mm:ss") %> */\n',
    mangle: false,
    screwIE8: true,
    sourceMap: true
  }
};
