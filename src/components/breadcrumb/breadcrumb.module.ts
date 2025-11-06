/**
 * ng1bs5 Breadcrumb Component
 * Bootstrap 5 Breadcrumb for AngularJS with UI Router
 *
 * Converted from ncy-angular-breadcrumb
 * Original: https://github.com/ncuillery/angular-breadcrumb
 */

import angular from 'angular';

const MODULE_NAME = 'ng1bs5.breadcrumb';

// Interfaces
interface BreadcrumbOptions {
    prefixStateName: string | null;
    template: string;
    templateUrl: string | null;
    includeAbstract: boolean;
}

interface StateRef {
    state: string;
    paramExpr: string | null;
}

interface BreadcrumbStep {
    name: string;
    abstract?: boolean;
    bs5Breadcrumb?: {
        label?: string;
        parent?: string | ((scope: any) => string);
        skip?: boolean;
        force?: boolean;
    };
    bs5BreadcrumbLink?: string;
    bs5BreadcrumbLabel?: string;
    bs5BreadcrumbStateRef?: string;
    parent?: any;
}

interface BreadcrumbService {
    getTemplate(templates: TemplateMap): string | null;
    getTemplateUrl(): string | null;
    getStatesChain(exitOnFirst?: boolean): BreadcrumbStep[];
    getLastStep(): BreadcrumbStep | undefined;
    $getLastViewScope(): ng.IScope;
}

interface TemplateMap {
    [key: string]: string;
}

// Utility Functions
function isAOlderThanB(scopeA: number, scopeB: number): boolean {
    if (angular.equals(scopeA.toString().length, scopeB.toString().length)) {
        return scopeA > scopeB;
    } else {
        return scopeA.toString().length > scopeB.toString().length;
    }
}

function parseStateRef(ref: string): StateRef {
    const parsed = ref.replace(/\n/g, ' ').match(/^([^(]+?)\s*(\((.*)\))?$/);
    if (!parsed || parsed.length !== 4) {
        throw new Error(`Invalid state ref '${ref}'`);
    }
    return {
        state: parsed[1],
        paramExpr: parsed[3] || null
    };
}

const registeredListeners: { [key: string]: Function } = {};

function registerListenerOnce(
    tag: string,
    $rootScope: ng.IRootScopeService,
    event: string,
    fn: Function
): void {
    const deregisterListenerFn = registeredListeners[tag];
    if (deregisterListenerFn !== undefined) {
        deregisterListenerFn();
    }
    registeredListeners[tag] = $rootScope.$on(event, fn as any);
}

function getExpression(interpolationFunction: any): string[] {
    if (interpolationFunction.expressions) {
        return interpolationFunction.expressions;
    } else {
        // Workaround for Angular 1.2.x
        const expressions: string[] = [];
        angular.forEach(interpolationFunction.parts, (part: any) => {
            if (angular.isFunction(part)) {
                expressions.push(part.exp);
            }
        });
        return expressions;
    }
}

function registerWatchers(
    labelWatcherArray: Function[],
    interpolationFunction: any,
    viewScope: ng.IScope,
    step: any
): void {
    angular.forEach(getExpression(interpolationFunction), (expression: string) => {
        const watcher = viewScope.$watch(expression, () => {
            step.bs5BreadcrumbLabel = interpolationFunction(viewScope);
        });
        labelWatcherArray.push(watcher);
    });
}

function deregisterWatchers(labelWatcherArray: Function[]): void {
    angular.forEach(labelWatcherArray, (deregisterWatch: Function) => {
        deregisterWatch();
    });
}

/**
 * Breadcrumb Provider
 */
class BreadcrumbProvider implements ng.IServiceProvider {
    private options: BreadcrumbOptions = {
        prefixStateName: null,
        template: 'bootstrap5',
        templateUrl: null,
        includeAbstract: false
    };

    setOptions(options: Partial<BreadcrumbOptions>): void {
        angular.extend(this.options, options);
    }

    $get($state: any, $stateParams: any, $rootScope: ng.IRootScopeService, $log: ng.ILogService): any {
        'ngInject';

        const options = this.options;
        let lastViewScope: ng.IScope = $rootScope;

        // Early catch of $viewContentLoaded event
        registerListenerOnce(
            'BreadcrumbProvider.$viewContentLoaded',
            $rootScope,
            '$viewContentLoaded',
            (event: any) => {
                if (
                    !event.targetScope.bs5BreadcrumbIgnore &&
                    isAOlderThanB(event.targetScope.$id, lastViewScope.$id)
                ) {
                    lastViewScope = event.targetScope;
                }
            }
        );

        // Get the parent state
        const getParentState = (state: BreadcrumbStep): string | undefined => {
            const parent = state.parent || (/^(.+)\.[^.]+$/.exec(state.name) || [])[1];
            const isObjectParent = typeof parent === 'object';
            return isObjectParent ? parent.name : parent;
        };

        // Add the state in the chain if not already in and if not abstract
        const addStateInChain = (chain: BreadcrumbStep[], stateRef: string): void => {
            const ref = parseStateRef(stateRef);
            let force = false;
            let skip = false;

            for (let i = 0, l = chain.length; i < l; i += 1) {
                if (chain[i].name === ref.state) {
                    // $log.debug('SKIP: Already in chain -', ref.state);
                    return;
                }
            }

            const conf: BreadcrumbStep = $state.get(ref.state);
            // $log.debug('State config for', ref.state, ':', {
            //     abstract: conf.abstract,
            //     hasBreadcrumb: !!conf.bs5Breadcrumb,
            //     breadcrumbConfig: conf.bs5Breadcrumb
            // });
            // Get breadcrumb options
            if (conf.bs5Breadcrumb) {
                if (conf.bs5Breadcrumb.force) {
                    force = true;
                }
                if (conf.bs5Breadcrumb.skip) {
                    skip = true;
                }
            }

            if ((!conf.abstract || options.includeAbstract || force) && !skip) {
                let parentParams;
                if (ref.paramExpr) {
                    parentParams = lastViewScope.$eval(ref.paramExpr);
                }

                conf.bs5BreadcrumbLink = $state.href(ref.state, parentParams || $stateParams || {});
                conf.bs5BreadcrumbStateRef = stateRef;
                chain.unshift(conf);
                // ... add to chain
                // $log.debug('ADDED:', ref.state);
            } else {
                // $log.debug('FILTERED OUT:', ref.state);
            }
        };

        // Get the state for the parent step in the breadcrumb
        const getBreadcrumbParentState = (stateRef: string): string | undefined => {
            const ref = parseStateRef(stateRef);
            const conf: BreadcrumbStep = $state.get(ref.state);

            if (conf.bs5Breadcrumb && conf.bs5Breadcrumb.parent) {
                const isFunction = typeof conf.bs5Breadcrumb.parent === 'function';
                const parentStateRef = isFunction
                    ? conf.bs5Breadcrumb.parent(lastViewScope)
                    : conf.bs5Breadcrumb.parent;
                if (parentStateRef) {
                    return parentStateRef;
                }
            }

            return getParentState(conf);
        };

        return {
            getTemplate(templates: TemplateMap): string | null {
                if (options.templateUrl) {
                    return null;
                } else if (templates[options.template]) {
                    return templates[options.template];
                } else {
                    return options.template;
                }
            },

            getTemplateUrl(): string | null {
                return options.templateUrl;
            },

            getStatesChain(exitOnFirst?: boolean): BreadcrumbStep[] {
                const chain: BreadcrumbStep[] = [];

                // From current state to the root
                for (
                    let stateRef = $state.$current.self.name;
                    stateRef;
                    stateRef = getBreadcrumbParentState(stateRef)
                ) {
                    // $log.debug('Processing state:', stateRef); // DEBUG
                    addStateInChain(chain, stateRef);
                    if (exitOnFirst && chain.length) {
                        return chain;
                    }
                }

                // Prefix state treatment
                if (options.prefixStateName) {
                    addStateInChain(chain, options.prefixStateName);
                }

                // $log.debug('Final chain:', chain); // DEBUG
                return chain;
            },

            getLastStep(): BreadcrumbStep | undefined {
                const chain = this.getStatesChain(true);
                return chain.length ? chain[0] : undefined;
            },

            $getLastViewScope(): ng.IScope {
                return lastViewScope;
            }
        };
    }
}

/**
 * Breadcrumb Directive
 * Displays the full breadcrumb trail
 */
class BreadcrumbDirective implements ng.IDirective {
    restrict = 'AE';
    replace = true;
    scope = {};
    template: string | undefined;
    templateUrl: string | null | undefined;

    private templates: TemplateMap = {
        bootstrap5: '<nav aria-label="breadcrumb">' +
            '<ol class="breadcrumb">' +
            '<li class="breadcrumb-item" ng-repeat="step in steps" ng-class="{active: $last}" ng-switch="$last || !!step.abstract" ng-attr-aria-current="{{$last ? \'page\' : undefined}}">' +
            '<a ng-switch-when="false" href="{{step.bs5BreadcrumbLink}}">{{step.bs5BreadcrumbLabel}}</a>' +
            '<span ng-switch-when="true">{{step.bs5BreadcrumbLabel}}</span>' +
            '</li>' +
            '</ol>' +
            '</nav>'
    };

    constructor(
        private $interpolate: ng.IInterpolateService,
        private $breadcrumb: BreadcrumbService,
        private $rootScope: ng.IRootScopeService
    ) {
        'ngInject';
        this.template = this.$breadcrumb.getTemplate(this.templates);
        this.templateUrl = this.$breadcrumb.getTemplateUrl();
    }

    link = {
        post: (scope: any) => {
            let labelWatchers: Function[] = [];

            const renderBreadcrumb = () => {
                deregisterWatchers(labelWatchers);
                labelWatchers = [];

                const viewScope = this.$breadcrumb.$getLastViewScope();
                scope.steps = this.$breadcrumb.getStatesChain();

                angular.forEach(scope.steps, (step: BreadcrumbStep) => {
                    if (step.bs5Breadcrumb && step.bs5Breadcrumb.label) {
                        const parseLabel = this.$interpolate(step.bs5Breadcrumb.label);
                        step.bs5BreadcrumbLabel = parseLabel(viewScope);
                        registerWatchers(labelWatchers, parseLabel, viewScope, step);
                    } else {
                        step.bs5BreadcrumbLabel = step.name;
                    }
                });
            };

            registerListenerOnce(
                'BreadcrumbDirective.$viewContentLoaded',
                this.$rootScope,
                '$viewContentLoaded',
                (event: any) => {
                    if (!event.targetScope.bs5BreadcrumbIgnore) {
                        renderBreadcrumb();
                    }
                }
            );

            renderBreadcrumb();
        }
    };

    static factory(): ng.IDirectiveFactory {
        const directive = (
            $interpolate: ng.IInterpolateService,
            $breadcrumb: BreadcrumbService,
            $rootScope: ng.IRootScopeService
        ) => new BreadcrumbDirective($interpolate, $breadcrumb, $rootScope);
        directive.$inject = ['$interpolate', '$breadcrumb', '$rootScope'];
        return directive;
    }
}

/**
 * Breadcrumb Last Directive
 * Displays only the last breadcrumb item
 */
class BreadcrumbLastDirective implements ng.IDirective {
    restrict = 'A';
    scope = {};

    private templates: TemplateMap = {
        default: '{{bs5BreadcrumbLabel}}'
    };

    constructor(
        private $interpolate: ng.IInterpolateService,
        private $breadcrumb: BreadcrumbService,
        private $rootScope: ng.IRootScopeService
    ) {
        'ngInject';
    }

    compile = (cElement: ng.IAugmentedJQuery, cAttrs: ng.IAttributes) => {
        const template = cElement.attr(cAttrs.$attr.ng1bs5BreadcrumbLast);
        if (template) {
            cElement.html(template);
        }

        return {
            post: (scope: any) => {
                let labelWatchers: Function[] = [];

                const renderLabel = () => {
                    deregisterWatchers(labelWatchers);
                    labelWatchers = [];

                    const viewScope = this.$breadcrumb.$getLastViewScope();
                    const lastStep = this.$breadcrumb.getLastStep();

                    if (lastStep) {
                        scope.bs5BreadcrumbLink = lastStep.bs5BreadcrumbLink;
                        if (lastStep.bs5Breadcrumb && lastStep.bs5Breadcrumb.label) {
                            const parseLabel = this.$interpolate(lastStep.bs5Breadcrumb.label);
                            scope.bs5BreadcrumbLabel = parseLabel(viewScope);
                            registerWatchers(labelWatchers, parseLabel, viewScope, scope);
                        } else {
                            scope.bs5BreadcrumbLabel = lastStep.name;
                        }
                    }
                };

                registerListenerOnce(
                    'BreadcrumbLastDirective.$viewContentLoaded',
                    this.$rootScope,
                    '$viewContentLoaded',
                    (event: any) => {
                        if (!event.targetScope.bs5BreadcrumbIgnore) {
                            renderLabel();
                        }
                    }
                );

                renderLabel();
            }
        };
    };

    static factory(): ng.IDirectiveFactory {
        const directive = (
            $interpolate: ng.IInterpolateService,
            $breadcrumb: BreadcrumbService,
            $rootScope: ng.IRootScopeService
        ) => new BreadcrumbLastDirective($interpolate, $breadcrumb, $rootScope);
        directive.$inject = ['$interpolate', '$breadcrumb', '$rootScope'];
        return directive;
    }
}

/**
 * Breadcrumb Text Directive
 * Displays breadcrumb as plain text with separator
 */
class BreadcrumbTextDirective implements ng.IDirective {
    restrict = 'A';
    scope = {};
    template = '{{bs5BreadcrumbChain}}';

    constructor(
        private $interpolate: ng.IInterpolateService,
        private $breadcrumb: BreadcrumbService,
        private $rootScope: ng.IRootScopeService
    ) {
        'ngInject';
    }

    compile = (cElement: ng.IAugmentedJQuery, cAttrs: ng.IAttributes) => {
        const template = cElement.attr(cAttrs.$attr.ng1bs5BreadcrumbText);
        if (template) {
            cElement.html(template);
        }

        const separator = cElement.attr(cAttrs.$attr.ng1bs5BreadcrumbTextSeparator) || ' / ';

        return {
            post: (scope: any) => {
                let labelWatchers: Function[] = [];

                const registerWatchersText = (
                    labelWatcherArray: Function[],
                    interpolationFunction: any,
                    viewScope: ng.IScope
                ) => {
                    angular.forEach(getExpression(interpolationFunction), (expression: string) => {
                        const watcher = viewScope.$watch(expression, (newValue: any, oldValue: any) => {
                            if (newValue !== oldValue) {
                                renderLabel();
                            }
                        });
                        labelWatcherArray.push(watcher);
                    });
                };

                const renderLabel = () => {
                    deregisterWatchers(labelWatchers);
                    labelWatchers = [];

                    const viewScope = this.$breadcrumb.$getLastViewScope();
                    const steps = this.$breadcrumb.getStatesChain();
                    const combinedLabels: string[] = [];

                    angular.forEach(steps, (step: BreadcrumbStep) => {
                        if (step.bs5Breadcrumb && step.bs5Breadcrumb.label) {
                            const parseLabel = this.$interpolate(step.bs5Breadcrumb.label);
                            combinedLabels.push(parseLabel(viewScope));
                            registerWatchersText(labelWatchers, parseLabel, viewScope);
                        } else {
                            combinedLabels.push(step.name);
                        }
                    });

                    scope.bs5BreadcrumbChain = combinedLabels.join(separator);
                };

                registerListenerOnce(
                    'BreadcrumbTextDirective.$viewContentLoaded',
                    this.$rootScope,
                    '$viewContentLoaded',
                    (event: any) => {
                        if (!event.targetScope.bs5BreadcrumbIgnore) {
                            renderLabel();
                        }
                    }
                );

                renderLabel();
            }
        };
    };

    static factory(): ng.IDirectiveFactory {
        const directive = (
            $interpolate: ng.IInterpolateService,
            $breadcrumb: BreadcrumbService,
            $rootScope: ng.IRootScopeService
        ) => new BreadcrumbTextDirective($interpolate, $breadcrumb, $rootScope);
        directive.$inject = ['$interpolate', '$breadcrumb', '$rootScope'];
        return directive;
    }
}

/**
 * Register module
 */
angular
    .module(MODULE_NAME, ['ui.router.state'])
    .provider('$breadcrumb', BreadcrumbProvider)
    .directive('ng1bs5Breadcrumb', BreadcrumbDirective.factory())
    .directive('ng1bs5BreadcrumbLast', BreadcrumbLastDirective.factory())
    .directive('ng1bs5BreadcrumbText', BreadcrumbTextDirective.factory());

export default MODULE_NAME;