'use strict';

module.exports = function (grunt) {
  grunt.registerTask('release', 'Test the application, tag the release and push an artifact to Nexus.',
    function () {
      // Fail if we are not on the master branch or we haven't specified an
      // AUR task number for the release.
      grunt.task.run(['checkbranch:master', 'ensure-ticket']);

      // Rebase the master branch on to the develop branch to ensure that we
      // have the latest code.
      grunt.task.run(['gitrebase:develop']);

      // Fail if the test suite does not pass.
      grunt.task.run(['mock:on','compile','test','mock:off']);

      // Bump the version identifier. Stage modified files then commit. Tag the
      // latest commit.
      grunt.task.run(['bump-version','gitadd:dist','gitcommit:dist','gittag:dist','gitpush:dist']);

      // Build and release an artifact.
      grunt.task.run(['clean:release','compile','maven']);
    }
  );
};
