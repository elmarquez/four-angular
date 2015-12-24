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
