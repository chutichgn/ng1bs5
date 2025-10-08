import angular from 'angular';

const TEMPLATE = `
<div class="alert alert-{{type}} alert-dismissible d-flex align-items-center" role="alert">
    <ng-transclude></ng-transclude>
    <button ng-if="dismissible" ng-click="close()" type="button" class="btn-close"></button>
</div>`;

class AlertDirective {
    static $inject = ['$timeout'];

    constructor($timeout) {
        this.$timeout = $timeout;
        
        this.restrict = 'E';
        this.transclude = true;
        this.template = TEMPLATE;
        this.scope = {
            type: '@?',
            dismissible: '=?',
            timeout: '=?',
            onDestroy: '&?'
        };
    }

    link = (scope, elm) => {
        let destroyed = false;
        let timeout = null;

        scope.type = scope.type || 'light';

        scope.close = () => {
            if (!destroyed) {
                if (timeout) {
                    this.$timeout.cancel(timeout);
                }

                elm.remove();
                scope.$destroy();
                destroyed = true;
            }
        };

        if (angular.isNumber(scope.timeout)) {
            timeout = this.$timeout(scope.close, scope.timeout, false);
        }
    }
}

const MODULE_NAME = 'bs5.alert';

angular
    .module(MODULE_NAME, [])
    .directive('bs5Alert', () => new AlertDirective(...AlertDirective.$inject));

export default MODULE_NAME;
