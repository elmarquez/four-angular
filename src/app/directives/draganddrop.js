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
