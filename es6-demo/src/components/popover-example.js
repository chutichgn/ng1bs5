/**
 * Popover Component Example
 * 
 * This file demonstrates how to import and use the Popover component
 * in an ES6-style AngularJS application.
 */

import angular from 'angular';

// Example: If your popover component exports a module
// import { PopoverModule } from '@ng1bs5/popover';

/**
 * Example popover controller
 */
class PopoverExampleController {
  constructor($scope, $element, $timeout) {
    'ngInject';
    
    this.$scope = $scope;
    this.$element = $element;
    this.$timeout = $timeout;
    
    this.popoverTitle = 'ES6 Popover';
    this.popoverContent = 'This popover is managed by an ES6 class controller!';
  }
  
  $onInit() {
    // Initialize popovers after component loads
    this.$timeout(() => {
      const popoverElements = this.$element[0].querySelectorAll('[bs-popover]');
      popoverElements.forEach(element => {
        if (window.bootstrap && window.bootstrap.Popover) {
          new window.bootstrap.Popover(element);
        }
      });
    });
  }
}

/**
 * Example popover component
 */
const PopoverExampleComponent = {
  template: `
    <div>
      <button type="button" 
              class="btn btn-primary"
              bs-popover
              data-bs-toggle="popover"
              data-bs-title="{{$ctrl.popoverTitle}}"
              data-bs-content="{{$ctrl.popoverContent}}"
              data-bs-placement="top">
        Click for Popover
      </button>
    </div>
  `,
  controller: PopoverExampleController
};

// Create a module for this example
const popoverExampleModule = angular.module('popoverExample', [
  // Add PopoverModule.name here when available
])
.component('popoverExample', PopoverExampleComponent);

export default popoverExampleModule;
