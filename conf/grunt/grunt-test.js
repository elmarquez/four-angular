'use strict';

module.exports = function (grunt) {
  grunt.registerTask('test', 'Run test suite against the distribution.',
    function () {
      // FIXME -- FORCE TESTS TO RUN AGAINST THE API MOCK
      // The admin-service user management API provides access to the
      // production user database; there is no dev or staging environment.
      // As such, tests must be written to ensure that only testing data
      // is impacted. Until such time as a testing protocol has been
      // established, and the functional tests written to conform to that
      // protocol, we will force the test suite to run against local mocks.
      grunt.log.error('WARNING: tests will execute against the MOCK API');
      grunt.config.set('mock', true);

      if (grunt.config.get('selenium') === 'localhost') {
        if (grunt.config.get('options').build === false) {
          grunt.task.run(['connect:test','protractor']);
        } else {
          grunt.task.run(['compile','connect:test','protractor']);
        }
      } else {
        grunt.task.run(['compile','protractor']);
      }
    });
};
