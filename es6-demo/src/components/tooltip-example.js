/**
 * Tooltip Component Example
 */

import angular from 'angular';

class TooltipExampleController {
  constructor($element, $timeout) {
    'ngInject';
    this.$element = $element;
    this.$timeout = $timeout;
  }
  
  $onInit() {
    // Initialize tooltips
    this.$timeout(() => {
      const tooltipElements = this.$element[0].querySelectorAll('[bs-tooltip]');
      tooltipElements.forEach(element => {
        if (window.bootstrap && window.bootstrap.Tooltip) {
          new window.bootstrap.Tooltip(element);
        }
      });
    });
  }
}

const TooltipExampleComponent = {
  template: `
    <div>
      <button type="button" 
              class="btn btn-primary"
              bs-tooltip
              data-bs-toggle="tooltip"
              data-bs-title="ES6 Tooltip!"
              data-bs-placement="top">
        Hover for Tooltip
      </button>
    </div>
  `,
  controller: TooltipExampleController
};

const tooltipExampleModule = angular.module('tooltipExample', [])
  .component('tooltipExample', TooltipExampleComponent);

export default tooltipExampleModule;
