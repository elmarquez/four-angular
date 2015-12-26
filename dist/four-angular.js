'use strict';

/**
 * Application module.
 */
angular.module('four', [
  'ngAnimate',
  'ngAria',
  'ngCookies',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'uuid4'
]);

/**
 * Layer control.
 */
angular
    .module('four')
    .controller('LayerController', ['$scope', 'SceneSvc', function ($scope, Scene) {

            $scope.layers = [];

            /////////////////////////////////////////////////////////////////////////

            /**
             * Initialize the controller.
             */
            $scope.init = function () {};


            /**
             * Toggle layer state.
             * @param {String} uuid Layer UUID
             */
            $scope.toggle = function (uuid) {
                throw new Error('not implemented');
            };

            // initialize the controller
            $scope.init();

        }]);

/**
 * Undo state controller.
 */
angular
    .module('four')
    .controller('UndoController', ['$scope', 'UndoSvc', function ($scope, Scene) {

        $scope.layers = [];

        /////////////////////////////////////////////////////////////////////////

        /**
         * Initialize the controller.
         */
        $scope.init = function () {};


        /**
         * Toggle layer state.
         * @param {String} uuid Layer UUID
         */
        $scope.toggle = function (uuid) {
            throw new Error('not implemented');
        };

        // initialize the controller
        $scope.init();

    }]);

/**
 * Directives to support drag and drop actions.
 */
angular
  .module('four')
  .directive('draggable', [ function () {
    return {
      restrict: 'A',
      scope: {
        'dragend': '=',
        'dragstart': '='
      },
      link: function (scope, elem) {
        var el = elem[0];
        el.draggable = true;
        el.addEventListener('dragstart', function(e) {
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('Text', this.id);
            this.classList.add('drag');
            return false;
          }, false);
        el.addEventListener('dragend', function(e) {
            this.classList.remove('drag');
            return false;
          }, false);
      }
    };
  }]);

angular
  .module('four')
  .directive('droppable', [ function () {
    return {
      restrict : 'A',
      scope: {
        dragenter: '=',
        dragleave: '=',
        drop: '=',
        items: '='
      },
      link: function (scope, elem) {
        var el = elem[0], events = ['dragenter','dragleave','drop'],
        evtHandler = function (evt, evtName, scope) {
          if (evt.stopPropagation) {
            evt.stopPropagation();
          }
          if (evt.preventDefault) {
            evt.preventDefault();
          }
          if (scope[evtName]) {
            scope[evtName](evt, scope);
          }
          return false;
        };
        scope.files = scope.files || [];
        // Add generic event listeners
        events.forEach(function(event) {
          el.addEventListener(event, function(evt) {
            return evtHandler(evt, event, scope);
          }, false);
        });
        // Handle drag over event
        el.addEventListener('dragover', function (e) {
            e.dataTransfer.dropEffect = 'move';
            // allows us to drop
            if (e.preventDefault) {
              e.preventDefault();
            }
            return false;
          }, false
        );
      }
    };
  }]);

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

/**
 * Undo service.
 */
angular
    .module('four')
    .service('UndoSvc', ['$log', '$q', function ($log, $q) {

        // the service
        var svc = {};

        svc.actions = [];

        svc.init = function () {};

        /**
         * Redo action.
         */
        svc.redo = function () {};

        /**
         * Undo action.
         */
        svc.undo = function () {};


        // initialize the service
        svc.init();

        return svc;

    }

    ]);
