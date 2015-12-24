'use strict';

module.exports = function (grunt) {
  grunt.registerTask('release', 'Test the application, tag and push the release to the repo.',
    function () {
      // Fail if we are not on the master branch
      grunt.task.run(['checkbranch:master']);

      // Fail if the test suite does not pass.
      grunt.task.run(['mock:on','compile','test','mock:off']);

      // Bump the version identifier then push the release to origin.
      grunt.task.run(['bump']);
    }
  );
};
