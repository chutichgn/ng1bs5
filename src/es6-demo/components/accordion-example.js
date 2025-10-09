import html from "./accordion-demo.html";

/**
 * Accordion Component Example
 *
 * This file demonstrates how to use the Accordion component from ng1bs5.
 * The ng1bs5 accordion provides a clean AngularJS API for Bootstrap 5 accordions.
 */

import angular from 'angular';

class AccordionExampleController {
    constructor($scope) {
        'ngInject';
        this.$scope = $scope;

        // Sample data for dynamic accordion
        this.items = [
            {
                id: 'item1',
                title: 'Dynamic Item #1',
                content: 'This is the first item\'s accordion body loaded via ES6 modules and data binding.',
                show: true
            },
            {
                id: 'item2',
                title: 'Dynamic Item #2',
                content: 'This is the second item\'s accordion body. Notice how the data binding works seamlessly.',
                show: false
            },
            {
                id: 'item3',
                title: 'Dynamic Item #3',
                content: 'This is the third item\'s accordion body. You can add or remove items dynamically.',
                show: false
            }
        ];
    }
}

/**
 * Accordion component using ng1bs5 directives:
 * - bs5-accordion: Container for accordion groups
 * - bs5-accordion-group: Individual accordion panels
 * - bs5-accordion-heading: Custom heading content (optional)
 */
const AccordionExampleComponent = {
    template: html,
    controller: AccordionExampleController
};

const accordionExampleModule = angular.module('accordionExample', [])
    .component('accordionExample', AccordionExampleComponent);

export default accordionExampleModule;
