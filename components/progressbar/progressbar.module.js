import angular from 'angular';

const TEMPLATE = `
<div class="progress">
    <div class="progress-bar {{bgType ? 'bg-' + bgType : ''}}" 
         ng-class="{'progress-bar-striped': stripes, 'progress-bar-animated': animate}" 
         style="width: {{value}}%" 
         aria-valuenow="{{value}}" 
         aria-valuemin="0" 
         aria-valuemax="100">
        <span ng-if="displayPercent">{{value}}%</span>
    </div>
</div>`;

class ProgressbarDirective {
    constructor() {
        this.restrict = 'E';
        this.replace = false;
        this.template = TEMPLATE;
        this.scope = {
            value: '=',
            bgType: '@',
            stripes: '=',
            displayPercent: '=',
            animate: '='
        };
    }

    link = (scope) => {
        scope.$watch('value', (val) => {
            if (val < 0) {
                scope.value = 0;
            } else if (val > 100) {
                scope.value = 100;
            }
        });
    }
}

const MODULE_NAME = 'bs5.progressbar';

angular
    .module(MODULE_NAME, [])
    .directive('bs5Progressbar', () => new ProgressbarDirective());

export default MODULE_NAME;
