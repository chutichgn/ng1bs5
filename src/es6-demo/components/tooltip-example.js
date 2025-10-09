import html from "./tooltip-demo.html";

/**
 * Tooltip Component Example
 * 
 * This file demonstrates how to use the Tooltip directive from ng1bs5
 * in an ES6-style AngularJS application.
 */

import angular from 'angular';

/**
 * Example tooltip controller using ES6 class
 */
class TooltipExampleController {
  constructor($scope) {
    'ngInject';
    
    this.$scope = $scope;
    this.dynamicTooltip = 'This tooltip is dynamically set!';
    this.tooltipHtml = '<strong>Bold</strong> and <em>italic</em> text';
  }
}

/**
 * Example tooltip component
 * 
 * Note: The actual tooltip functionality is provided by the ng1bs5 'bs-tooltip' directive.
 * Just add bs-tooltip attribute to any element along with data-bs-title.
 */
const TooltipExampleComponent = {
  template: html,
  controller: TooltipExampleController
};

// Create a module for this example
const tooltipExampleModule = angular.module('tooltipExample', [])
  .component('tooltipExample', TooltipExampleComponent);

export default tooltipExampleModule;
