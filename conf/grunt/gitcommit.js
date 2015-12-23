module.exports = {
  dist: {
    options: {
      message: '[AUR-<%= ticket %>] Release v<%= pkg.version %>\n\n' +
               'Release artifact to deployment repository.\n\n' +
               'AUR-<%= ticket %> #time 15m'
    },
    files: {
      src: ['bower.json', 'package.json', 'pom.xml']
    }
  }
};
