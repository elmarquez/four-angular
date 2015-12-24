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
