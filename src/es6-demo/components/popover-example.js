import html from "./popover-demo.html"

/**
 * Popover Component Example
 * 
 * This file demonstrates how to use the Popover directive from ng1bs5
 * in an ES6-style AngularJS application.
 */

import angular from 'angular';

// Import ng1bs5 Popover module when available
// import PopoverModule from '@ng1bs5/popover';

/**
 * Example popover controller using ES6 class
 */
class PopoverExampleController {
  constructor($scope) {
    'ngInject';
    
    this.$scope = $scope;
    this.popoverTitle = 'ES6 Popover';
    this.popoverContent = 'This popover is managed by ng1bs5!';
  }
}

/**
 * Example popover component
 * 
 * Note: The actual popover functionality is provided by the ng1bs5 'bs-popover' directive.
 * Just add bs-popover attribute to any element along with data-bs-title and data-bs-content.
 */
const PopoverExampleComponent = {
  template:html  ,
  controller: PopoverExampleController
};

// Create a module for this example
const popoverExampleModule = angular.module('popoverExample', [
  // Add PopoverModule.name here when you import it:
  // PopoverModule.name
])
.component('popoverExample', PopoverExampleComponent);

export default popoverExampleModule;
