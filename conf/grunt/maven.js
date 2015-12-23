module.exports = {
  options: {
    groupId: 'au.org.aurin',
    artifactId: 'admin-client'
  },
  deploy: {
    options: {
      goal: 'deploy',
      url: 'https://mvn.aurin.org.au/nexus/content/repositories/stable/',
      repositoryId: 'aurin'
      // Typical deploy will be pushed to snapshot but we'll override that
      // url: 'https://mvn.aurin.org.au/nexus/content/repositories/snapshots/',
      // repositoryId: 'aurin-snapshots'
    },
    src: ['dist/**/*']
  }
  /*
   Not curently used, might conflict with grunt bump
   Read more about grunt maven:release which will bump SNAPSHOT automatically
   https://github.com/smh/grunt-maven-tasks

   release: {
   options: {
   url: 'https://mvn.aurin.org.au/nexus/content/repositories/stable/',
   repositoryId: 'aurin',
   mode: 'minor'
   },
   src: ['js/**', 'resources/**']
   } */
};
