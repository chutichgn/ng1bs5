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
// Import component examples
import './components/modal-example';
import './components/popover-example';
import './components/tooltip-example';
import './components/dropdown-example';
import './components/accordion-example';

import ng1bs5 from '../index';
import modalExampleModule from "./components/modal-example";
import popoverExampleModule from "./components/popover-example";
import tabsDemoModule from "./components/tabs-example";
import DemoComponent from "./demo.cmp";

/**
 * Main application module
 * Includes ui-router and ng1bs5 modules
 */
const app = angular.module('ng1bs5Demo', [
    uiRouter,
    ng1bs5,
    // Component example modules
    tabsDemoModule.name,
    modalExampleModule.name,
    popoverExampleModule.name,
    // 'tooltipExample',
    // 'dropdownExample',
    // 'accordionExample'
]);

/**
 * UI-Router Configuration
 * Defines states for each component demo
 */
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
    function ($stateProvider, $urlRouterProvider, $locationProvider) {

        // Enable HTML5 mode (optional, removes # from URLs)
        $locationProvider.html5Mode({
            enabled: false,
            requireBase: false
        });

        // Default route
        $urlRouterProvider.otherwise('/main/modal');

        // Define states for each component demo
        $stateProvider
            .state("main", {
                abtract: true, url: "/main",
                component: 'demoComponent'
            })
            .state("main.tab1", {url: "/tab1", templateUrl: "tab1.html"})
            .state("main.tab2", {url: "/tab2", templateUrl: "tab2.html"})
            .state("main.tab3", {url: "/tab3", templateUrl: "tab3.html"})

            // Tabs Demo
            .state('main.tabs', {
                url: '/tabs',
                component: 'tabsDemo',
                data: {
                    displayName: 'Tabs',
                    description: 'Bootstrap 5 tabs and pills component'
                }
            })
            // Modal Demo
            .state('main.modal', {
                url: '/modal',
                component: 'modalTab',
                data: {
                    displayName: 'Modal',
                    description: 'Dialog boxes and popup windows'
                }
            })
            // Popover Demo
            .state('main.popover', {
                url: '/popover',
                component: 'popoverExample',
                data: {
                    displayName: 'Popover',
                    description: 'Contextual overlays'
                }
            })
        // Tooltip Demo
        // .state('tooltip', {
        //     url: '/tooltip',
        //     template: '<div ng-include="\'views/tooltip-demo.html\'"></div>',
        //     data: {
        //         displayName: 'Tooltip',
        //         description: 'Helpful hints and tips'
        //     }
        // })
        // // Dropdown Demo
        // .state('dropdown', {
        //     url: '/dropdown',
        //     template: '<div ng-include="\'views/dropdown-demo.html\'"></div>',
        //     data: {
        //         displayName: 'Dropdown',
        //         description: 'Toggleable contextual menus'
        //     }
        // })
        // // Accordion Demo
        // .state('accordion', {
        //     url: '/accordion',
        //     template: '<div ng-include="\'views/accordion-demo.html\'"></div>',
        //     data: {
        //         displayName: 'Accordion',
        //         description: 'Collapsible content panels'
        //     }
        // })
        // // Collapse Demo
        // .state('collapse', {
        //     url: '/collapse',
        //     template: '<div ng-include="\'views/collapse-demo.html\'"></div>',
        //     data: {
        //         displayName: 'Collapse',
        //         description: 'Show and hide content'
        //     }
        // })
        // // Alert Demo
        // .state('alert', {
        //     url: '/alert',
        //     template: '<div ng-include="\'views/alert-demo.html\'"></div>',
        //     data: {
        //         displayName: 'Alert',
        //         description: 'Contextual feedback messages'
        //     }
        // })
        // // Offcanvas Demo
        // .state('offcanvas', {
        //     url: '/offcanvas',
        //     template: '<div ng-include="\'views/offcanvas-demo.html\'"></div>',
        //     data: {
        //         displayName: 'Offcanvas',
        //         description: 'Hidden sidebar content'
        //     }
        // })
        // // Toast Demo
        // .state('toast', {
        //     url: '/toast',
        //     template: '<div ng-include="\'views/toast-demo.html\'"></div>',
        //     data: {
        //         displayName: 'Toast',
        //         description: 'Push notifications'
        //     }
        // })
        // // Pagination Demo
        // .state('pagination', {
        //     url: '/pagination',
        //     template: '<div ng-include="\'views/pagination-demo.html\'"></div>',
        //     data: {
        //         displayName: 'Pagination',
        //         description: 'Page navigation'
        //     }
        // })
        // Progressbar Demo
        // .state('progressbar', {
        //     url: '/progressbar',
        //     template: '<div ng-include="\'views/progressbar-demo.html\'"></div>',
        //     data: {
        //         displayName: 'Progressbar',
        //         description: 'Progress indicators'
        //     }
        // });
    }
]);

/**
 * Run block - initialize app
 */
app.run(['$rootScope', '$state', function ($rootScope, $state) {
    $rootScope.$state = $state;
}]);
app
    .component('demoComponent', DemoComponent);

// Bootstrap the application
// angular.element(document).ready(function() {
//     angular.bootstrap(document, ['ng1bs5Demo']);
// });

export default app;
