/**
 * Dropdown Component Example
 * 
 * This file demonstrates how to use the Dropdown component from ng1bs5.
 */

import angular from 'angular';

// Import ng1bs5 Dropdown module when available
// import DropdownModule from '@ng1bs5/dropdown';

class DropdownExampleController {
  constructor($scope) {
    'ngInject';
    this.$scope = $scope;
    this.selectedItem = null;
  }
  
  selectItem(item) {
    this.selectedItem = item;
    console.log('Selected:', item);
  }
}

/**
 * Note: Dropdown functionality is provided by ng1bs5.
 */
const DropdownExampleComponent = {
  template: `
    <div>
      <p class="text-muted">
        Dropdown functionality is provided by ng1bs5.
        Use <code>data-bs-toggle="dropdown"</code> on buttons with dropdown menus.
      </p>
    </div>
  `,
  controller: DropdownExampleController
};

const dropdownExampleModule = angular.module('dropdownExample', [
  // Add DropdownModule.name here when you import it:
  // DropdownModule.name
])
.component('dropdownExample', DropdownExampleComponent);

export default dropdownExampleModule;
