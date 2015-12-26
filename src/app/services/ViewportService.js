/**
 * Viewport service.
 */
angular
    .module('four')
    .service('ViewportSvc', [function () {

        // the service
        var svc = {};

        svc.viewports = [];

        svc.init = function () {};

        // initialize the service
        svc.init();

        return svc;

    }

    ]);
