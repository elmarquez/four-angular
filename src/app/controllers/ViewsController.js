/**
 * Views controller. Enables the user to save and restore camera positions.
 */
angular
    .module('four')
    .controller('ViewsController', ['$scope', 'SceneSvc', function ($scope, Scene) {

        $scope.layers = [];

        /////////////////////////////////////////////////////////////////////////

        /**
         * Initialize the controller.
         */
        $scope.init = function () {};

        /**
         * Restore the saved camera position.
         */
        $scope.restore = function () {
            throw new Error('not implemented');
        };

        /**
         * Save current camera position.
         */
        $scope.save = function () {
            throw new Error('not implemented');
        };

        // initialize the controller
        $scope.init();

    }]);
