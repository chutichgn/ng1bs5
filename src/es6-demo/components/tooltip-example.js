/**
 * Tooltip Component Example
 * 
 * This file demonstrates how to use the Tooltip directive from ng1bs5.
 */

import angular from 'angular';

// Import ng1bs5 Tooltip module when available
// import TooltipModule from '@ng1bs5/tooltip';

class TooltipExampleController {
  constructor($scope) {
    'ngInject';
    this.$scope = $scope;
  }
}

/**
 * Note: Tooltip functionality is provided by ng1bs5's 'bs-tooltip' directive.
 */
const TooltipExampleComponent = {
  template: `
    <div>
      <p class="text-muted">
        Tooltip functionality is provided by ng1bs5's <code>bs-tooltip</code> directive.
        Add the directive to any element with <code>data-bs-title</code> and <code>data-bs-placement</code>.
      </p>
    </div>
  `,
  controller: TooltipExampleController
};

const tooltipExampleModule = angular.module('tooltipExample', [
  // Add TooltipModule.name here when you import it:
  // TooltipModule.name
])
.component('tooltipExample', TooltipExampleComponent);

export default tooltipExampleModule;
