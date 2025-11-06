import * as angular from 'angular';

/**
 * Progressbar Module
 * Provides bs5-progressbar, bs5-progress, and bs5-bar directives for Bootstrap 5 progress bars
 */

// Interfaces
interface IProgressbarScope extends angular.IScope {
    value: number;
    max: number;
    type?: string;
    animate: boolean;
    title: string;
    barStyle: { [key: string]: string };
    barClasses: { [key: string]: boolean };
}

interface IProgressScope extends angular.IScope {
    max: number;
    animate: boolean;
    title: string;
}

interface IBarScope extends angular.IScope {
    value: number;
    type?: string;
    title: string;
    max: number;
    animate: boolean;
    barStyle: { [key: string]: string };
    barClasses: { [key: string]: boolean };
}

// Templates
const PROGRESSBAR_TEMPLATE = `
<div class="progress" role="progressbar" aria-label="{{title}}" aria-valuenow="{{value}}" aria-valuemin="0" aria-valuemax="{{max}}">
    <div class="progress-bar" ng-class="barClasses" ng-style="barStyle" ng-transclude></div>
</div>`;

const PROGRESS_TEMPLATE = `
<div class="progress" role="progressbar" aria-label="{{title}}" aria-valuemin="0" aria-valuemax="{{max}}" ng-transclude></div>`;

const BAR_TEMPLATE = `
<div class="progress-bar" ng-class="barClasses" ng-style="barStyle" ng-transclude></div>`;

/**
 * Controller for managing progress context
 */
class Bs5ProgressController {
    static $inject = ['$scope', '$attrs'];

    public max: number;
    public animate: boolean;
    public title: string;
    public bars: IBarScope[] = [];

    constructor(
        private $scope: IProgressScope,
        private $attrs: angular.IAttributes
    ) {
        this.max = $scope.max || 100;
        this.animate = $scope.animate !== false;
        this.title = $scope.title || 'progressbar';
    }

    addBar(bar: IBarScope): void {
        this.bars.push(bar);
        bar.max = this.max;
        bar.animate = this.animate;
    }

    removeBar(bar: IBarScope): void {
        const index = this.bars.indexOf(bar);
        if (index !== -1) {
            this.bars.splice(index, 1);
        }
    }
}

/**
 * bs5-progressbar Directive
 * Single progress bar with optional settings
 */
class Bs5ProgressbarDirective implements angular.IDirective {
    static $inject = ['$timeout'];

    restrict = 'E';
    replace = true;
    transclude = true;
    template = PROGRESSBAR_TEMPLATE;
    scope = {
        value: '=',
        max: '@',
        type: '@',
        animate: '=?',
        title: '@'
    };

    constructor(private $timeout: angular.ITimeoutService) {}

    link = (
        scope: IProgressbarScope,
        element: angular.IAugmentedJQuery,
        attrs: angular.IAttributes
    ): void => {
        // Set defaults
        scope.max = scope.max ? parseInt(String(scope.max)) : 100;
        scope.animate = scope.animate !== false;
        scope.title = scope.title || 'progressbar';
        
        // Initialize bar style
        scope.barStyle = {};
        scope.barClasses = {};
        
        // Watch for value changes
        scope.$watch('value', (newValue: number, oldValue: number) => {
            if (newValue !== oldValue) {
                this.updateBar(scope, newValue);
            }
        });
        
        // Watch for type changes
        scope.$watch('type', (newType: string) => {
            this.updateBarClass(scope, newType);
        });
        
        // Watch for class changes on the element
        scope.$watch(() => element.attr('class'), () => {
            this.updateBarFromElementClass(scope, element);
        });
        
        // Initial setup
        this.updateBar(scope, scope.value);
        this.updateBarClass(scope, scope.type);
        this.updateBarFromElementClass(scope, element);
    }

    private updateBar(scope: IProgressbarScope, value: number): void {
        const percent = this.getPercentValue(value, scope.max);
        
        if (scope.animate) {
            scope.barStyle = {
                width: percent + '%',
                transition: 'width 0.6s ease'
            };
        } else {
            scope.barStyle = {
                width: percent + '%',
                transition: 'none'
            };
        }
    }

    private updateBarClass(scope: IProgressbarScope, type?: string): void {
        scope.barClasses = {};
        
        if (type) {
            scope.barClasses['bg-' + type] = true;
        }
    }

    private updateBarFromElementClass(
        scope: IProgressbarScope,
        element: angular.IAugmentedJQuery
    ): void {
        const classes = element.attr('class') || '';
        
        if (classes.includes('progress-striped')) {
            scope.barClasses['progress-bar-striped'] = true;
        }
        
        if (classes.includes('active')) {
            scope.barClasses['progress-bar-animated'] = true;
        }
    }

    private getPercentValue(value: number, max: number): number {
        const percent = (value / max) * 100;
        return Math.min(Math.max(percent, 0), 100);
    }
}

/**
 * bs5-progress Directive
 * Container for multiple progress bars (stacked)
 */
class Bs5ProgressDirective implements angular.IDirective {
    static $inject: string[] = [];

    restrict = 'E';
    replace = true;
    transclude = true;
    template = PROGRESS_TEMPLATE;
    controller = 'Bs5ProgressController';
    controllerAs = 'progressCtrl';
    scope = {
        max: '@',
        animate: '=?',
        title: '@'
    };

    link = (
        scope: IProgressScope,
        element: angular.IAugmentedJQuery,
        attrs: angular.IAttributes,
        ctrl: Bs5ProgressController
    ): void => {
        // Set defaults
        scope.max = scope.max ? parseInt(String(scope.max)) : 100;
        scope.animate = scope.animate !== false;
        scope.title = scope.title || 'progressbar';
        
        // Update controller
        ctrl.max = scope.max;
        ctrl.animate = scope.animate;
        ctrl.title = scope.title;
        
        // Watch for max changes
        scope.$watch('max', (newMax: number) => {
            if (newMax) {
                ctrl.max = parseInt(String(newMax));
                ctrl.bars.forEach(bar => {
                    bar.max = ctrl.max;
                });
            }
        });
        
        // Watch for animate changes
        scope.$watch('animate', (newAnimate: boolean) => {
            if (newAnimate !== undefined) {
                ctrl.animate = newAnimate;
                ctrl.bars.forEach(bar => {
                    bar.animate = ctrl.animate;
                });
            }
        });
    }
}

/**
 * bs5-bar Directive
 * Individual bar within bs5-progress
 */
class Bs5BarDirective implements angular.IDirective {
    static $inject = ['$timeout'];

    restrict = 'E';
    replace = true;
    transclude = true;
    require = '^bs5Progress';
    template = BAR_TEMPLATE;
    scope = {
        value: '=',
        type: '@',
        title: '@'
    };

    constructor(private $timeout: angular.ITimeoutService) {}

    link = (
        scope: IBarScope,
        element: angular.IAugmentedJQuery,
        attrs: angular.IAttributes,
        progressCtrl: Bs5ProgressController
    ): void => {
        // Set defaults
        scope.title = scope.title || 'progressbar';
        scope.max = progressCtrl.max;
        scope.animate = progressCtrl.animate;
        
        // Add this bar to the progress controller
        progressCtrl.addBar(scope);
        
        // Initialize bar style
        scope.barStyle = {};
        scope.barClasses = {};
        
        // Watch for value changes
        scope.$watch('value', (newValue: number, oldValue: number) => {
            if (newValue !== oldValue) {
                this.updateBar(scope, newValue);
            }
        });
        
        // Watch for type changes
        scope.$watch('type', (newType: string) => {
            this.updateBarClass(scope, newType);
        });
        
        // Initial setup
        this.updateBar(scope, scope.value);
        this.updateBarClass(scope, scope.type);
        
        // Cleanup
        scope.$on('$destroy', () => {
            progressCtrl.removeBar(scope);
        });
    }

    private updateBar(scope: IBarScope, value: number): void {
        const percent = this.getPercentValue(value, scope.max);
        
        if (scope.animate) {
            scope.barStyle = {
                width: percent + '%',
                transition: 'width 0.6s ease'
            };
        } else {
            scope.barStyle = {
                width: percent + '%',
                transition: 'none'
            };
        }
    }

    private updateBarClass(scope: IBarScope, type?: string): void {
        scope.barClasses = {};
        
        if (type) {
            scope.barClasses['bg-' + type] = true;
        }
    }

    private getPercentValue(value: number, max: number): number {
        const percent = (value / max) * 100;
        return Math.min(Math.max(percent, 0), 100);
    }
}

// Module definition
const MODULE_NAME = 'ng1bs5.progressbar';

angular
    .module(MODULE_NAME, [])
    .controller('Bs5ProgressController', Bs5ProgressController)
    .directive('bs5Progressbar', ['$timeout', ($timeout: angular.ITimeoutService) => 
        new Bs5ProgressbarDirective($timeout)
    ])
    .directive('bs5Progress', () => new Bs5ProgressDirective())
    .directive('bs5Bar', ['$timeout', ($timeout: angular.ITimeoutService) => 
        new Bs5BarDirective($timeout)
    ]);

export default MODULE_NAME;
