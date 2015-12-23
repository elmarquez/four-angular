module.exports = function (grunt) {

  return {
    default: {
      seleniumVersion: '2.45.0',
      seleniumDownloadURL: 'http://selenium-release.storage.googleapis.com',
      drivers: {
        chrome: {
          version: '2.15',
          arch: process.arch,
          baseURL: 'http://chromedriver.storage.googleapis.com'
        },
        ie: {
          version: '2.45',
          arch: process.arch,
          baseURL: 'http://selenium-release.storage.googleapis.com'
        }
      }
    }
  };
};
