/**
 * Default application routes.
 */
angular
  .module('four')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/about', {
        templateUrl: 'app/views/about.html'
      })
      .when('/login', {
        // FIXME implement once auth is added to API
        controller: 'LoginController',
        templateUrl: 'app/views/login.html'
      })
      .when('/logout', {
        // FIXME implement once auth is added to API
        controller: 'LogoutController',
        templateUrl: 'app/views/logout.html'
      })
      .when('/splash', {
        // FIXME implement once auth is added to API. we need ui-router with a major URL reorg to make this work
        controller: 'SplashController',
        templateUrl: 'app/views/splash.html'
      })
      .otherwise({
        redirectTo: '/about'
      });
  });
