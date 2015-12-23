'use strict';

module.exports = function (grunt) {
  grunt.registerTask('ensure-ticket', 'Fail if AUR ticket argument was not specified.',
    function () {
      var ticket = grunt.config.get('ticket');
      // Fail if an AUR ticket number was not provided.
      if (!ticket) {
        grunt.fail.fatal('AUR ticket identifier should be specified with the --ticket option');
      } else if (ticket.indexOf('AUR') > -1) {
        grunt.fail.fatal('Only the numeric portion of the AUR ticket identifier is required');
      }
    }
  );
};
