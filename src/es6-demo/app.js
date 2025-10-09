/**
 * ng1bs5 ES6 Demo Application with UI-Router and Tabs
 *
 * This demo shows how to use ng1bs5 components with ES6 modules and UI-Router.
 * Components are imported directly from the source (src/components/).
 */

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import ng1bs5 library (this imports all components)
import ng1bs5 from '../index';

/**
 * Main application module
 * Includes ui-router and ng1bs5 modules
 */
const app = angular.module('ng1bs5Demo', [
    uiRouter,
    ng1bs5
]);

/**
 * UI-Router Configuration
 * Defines states for each component demo
 */
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', 
    function($stateProvider, $urlRouterProvider, $locationProvider) {
        
        // Enable HTML5 mode (optional, removes # from URLs)
        $locationProvider.html5Mode({
            enabled: false,
            requireBase: false
        });

        // Default route
        $urlRouterProvider.otherwise('/tabs');

        // Define states for each component demo
        $stateProvider
            // Tabs Demo
            .state('tabs', {
                url: '/tabs',
                template: '<div ng-include="\'views/tabs-demo.html\'"></div>',
                data: {
                    displayName: 'Tabs',
                    description: 'Bootstrap 5 tabs and pills component'
                }
            })
            // Modal Demo
            .state('modal', {
                url: '/modal',
                template: '<div ng-include="\'views/modal-demo.html\'"></div>',
                data: {
                    displayName: 'Modal',
                    description: 'Dialog boxes and popup windows'
                }
            })
            // Popover Demo
            .state('popover', {
                url: '/popover',
                template: '<div ng-include="\'views/popover-demo.html\'"></div>',
                data: {
                    displayName: 'Popover',
                    description: 'Contextual overlays'
                }
            })
            // Tooltip Demo
            .state('tooltip', {
                url: '/tooltip',
                template: '<div ng-include="\'views/tooltip-demo.html\'"></div>',
                data: {
                    displayName: 'Tooltip',
                    description: 'Helpful hints and tips'
                }
            })
            // Dropdown Demo
            .state('dropdown', {
                url: '/dropdown',
                template: '<div ng-include="\'views/dropdown-demo.html\'"></div>',
                data: {
                    displayName: 'Dropdown',
                    description: 'Toggleable contextual menus'
                }
            })
            // Accordion Demo
            .state('accordion', {
                url: '/accordion',
                template: '<div ng-include="\'views/accordion-demo.html\'"></div>',
                data: {
                    displayName: 'Accordion',
                    description: 'Collapsible content panels'
                }
            })
            // Collapse Demo
            .state('collapse', {
                url: '/collapse',
                template: '<div ng-include="\'views/collapse-demo.html\'"></div>',
                data: {
                    displayName: 'Collapse',
                    description: 'Show and hide content'
                }
            })
            // Alert Demo
            .state('alert', {
                url: '/alert',
                template: '<div ng-include="\'views/alert-demo.html\'"></div>',
                data: {
                    displayName: 'Alert',
                    description: 'Contextual feedback messages'
                }
            })
            // Offcanvas Demo
            .state('offcanvas', {
                url: '/offcanvas',
                template: '<div ng-include="\'views/offcanvas-demo.html\'"></div>',
                data: {
                    displayName: 'Offcanvas',
                    description: 'Hidden sidebar content'
                }
            })
            // Toast Demo
            .state('toast', {
                url: '/toast',
                template: '<div ng-include="\'views/toast-demo.html\'"></div>',
                data: {
                    displayName: 'Toast',
                    description: 'Push notifications'
                }
            })
            // Pagination Demo
            .state('pagination', {
                url: '/pagination',
                template: '<div ng-include="\'views/pagination-demo.html\'"></div>',
                data: {
                    displayName: 'Pagination',
                    description: 'Page navigation'
                }
            })
            // Progressbar Demo
            .state('progressbar', {
                url: '/progressbar',
                template: '<div ng-include="\'views/progressbar-demo.html\'"></div>',
                data: {
                    displayName: 'Progressbar',
                    description: 'Progress indicators'
                }
            });
    }
]);

/**
 * Main demo controller
 */
app.controller('DemoController', ['$scope', '$state', '$transitions', 'TabsService',
    function($scope, $state, $transitions, TabsService) {
        console.log('ng1bs5 ES6 Demo initialized with UI-Router and Tabs');

        // Demo data
        $scope.message = 'Welcome to ng1bs5 ES6 Demo';
        $scope.currentState = $state.current.name;

        // Get all states for navigation
        $scope.states = $state.get().filter(function(state) {
            return state.name && state.data && state.data.displayName;
        });

        // Listen for state changes
        $transitions.onSuccess({}, function(transition) {
            $scope.currentState = transition.to().name;
            
            // Sync tabs with state
            const tabId = transition.to().name + '-tab';
            TabsService.show('demoTabset', tabId);
        });

        // Handle tab selection
        $scope.onTabSelect = function(tab) {
            // Navigate to the corresponding state
            const stateName = tab.tabId.replace('-tab', '');
            $state.go(stateName);
        };

        // Navigate to state
        $scope.goToState = function(stateName) {
            $state.go(stateName);
        };

        // Check if state is active
        $scope.isActive = function(stateName) {
            return $state.is(stateName);
        };

        // Get current state data
        $scope.getCurrentStateData = function() {
            return $state.current.data || {};
        };
    }
]);

/**
 * Run block - initialize app
 */
app.run(['$rootScope', '$state', function($rootScope, $state) {
    $rootScope.$state = $state;
}]);

// Bootstrap the application
angular.element(document).ready(function() {
    angular.bootstrap(document, ['ng1bs5Demo']);
});

export default app;
