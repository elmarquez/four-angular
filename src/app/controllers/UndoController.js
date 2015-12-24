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
