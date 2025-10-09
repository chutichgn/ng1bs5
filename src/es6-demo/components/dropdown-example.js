import html from "./dropdown-demo.html";

/**
 * Dropdown Component Example
 * 
 * This file demonstrates how to use the Dropdown component from ng1bs5.
 * Dropdowns use Bootstrap 5's native JavaScript functionality.
 */

import angular from 'angular';
import DropdownDemoComponent from "./dropdown-demo.component";

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
 * Note: Dropdown functionality is provided by Bootstrap 5 native JavaScript.
 * ng1bs5 ensures proper initialization within AngularJS lifecycle.
 */
const DropdownExampleComponent = {
  template: html,
  controller: DropdownExampleController
};

const dropdownExampleModule = angular.module('dropdownExample', [])
  .component('dropdownExample', DropdownExampleComponent)
  .component('dropdownDemo', DropdownDemoComponent);

export default dropdownExampleModule;
