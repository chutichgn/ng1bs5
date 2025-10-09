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

// Import component examples
import './components/modal-example';
import './components/popover-example';
import './components/tooltip-example';
import './components/dropdown-example';
import './components/accordion-example';
import './components/collapse-example';
import './components/alert-example';
import { toastExampleModule, offcanvasExampleModule, paginationExampleModule, progressbarExampleModule } from './components/remaining-examples';

import modalExampleModule from "./components/modal-example";
import popoverExampleModule from "./components/popover-example";
import tabsDemoModule from "./components/tabs-example";
import tooltipExampleModule from "./components/tooltip-example";
import dropdownExampleModule from "./components/dropdown-example";
import accordionExampleModule from "./components/accordion-example";
import collapseExampleModule from "./components/collapse-example";
import alertExampleModule from "./components/alert-example";
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
    tooltipExampleModule.name,
    dropdownExampleModule.name,
    accordionExampleModule.name,
    collapseExampleModule.name,
    alertExampleModule.name,
    toastExampleModule.name,
    offcanvasExampleModule.name,
    paginationExampleModule.name,
    progressbarExampleModule.name
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
        $urlRouterProvider.otherwise('/main/tabs');

        // Define states for each component demo
        $stateProvider
            .state("main", {
                abtract: true, url: "/main",
                component: 'demoComponent'
            })
            
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
            .state('main.tooltip', {
                url: '/tooltip',
                component: 'tooltipExample',
                data: {
                    displayName: 'Tooltip',
                    description: 'Helpful hints and tips'
                }
            })
            
            // Dropdown Demo
            .state('main.dropdown', {
                url: '/dropdown',
                // component: 'dropdownExample',
                component: 'dropdownDemo',
                data: {
                    displayName: 'Dropdown',
                    description: 'Toggleable contextual menus'
                }
            })
            
            // Accordion Demo
            .state('main.accordion', {
                url: '/accordion',
                component: 'accordionExample',
                data: {
                    displayName: 'Accordion',
                    description: 'Collapsible content panels'
                }
            })
            
            // Collapse Demo
            .state('main.collapse', {
                url: '/collapse',
                component: 'collapseExample',
                data: {
                    displayName: 'Collapse',
                    description: 'Show and hide content'
                }
            })
            
            // Alert Demo
            .state('main.alert', {
                url: '/alert',
                component: 'alertExample',
                data: {
                    displayName: 'Alert',
                    description: 'Contextual feedback messages'
                }
            })
            
            // Toast Demo
            .state('main.toast', {
                url: '/toast',
                component: 'toastExample',
                data: {
                    displayName: 'Toast',
                    description: 'Push notifications'
                }
            })
            
            // Offcanvas Demo
            .state('main.offcanvas', {
                url: '/offcanvas',
                component: 'offcanvasExample',
                data: {
                    displayName: 'Offcanvas',
                    description: 'Hidden sidebar content'
                }
            })
            
            // Pagination Demo
            .state('main.pagination', {
                url: '/pagination',
                component: 'paginationExample',
                data: {
                    displayName: 'Pagination',
                    description: 'Page navigation'
                }
            })
            
            // Progressbar Demo
            .state('main.progressbar', {
                url: '/progressbar',
                component: 'progressbarExample',
                data: {
                    displayName: 'Progressbar',
                    description: 'Progress indicators'
                }
            });
    }
]);

/**
 * Run block - initialize app
 */
app.run(['$rootScope', '$state', function ($rootScope, $state) {
    $rootScope.$state = $state;
}]);

app.component('demoComponent', DemoComponent);

export default app;
