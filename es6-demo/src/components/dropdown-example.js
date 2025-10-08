/**
 * Dropdown Component Example
 */

import angular from 'angular';

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

const DropdownExampleComponent = {
  template: `
    <div>
      <div class="dropdown">
        <button class="btn btn-primary dropdown-toggle" 
                type="button" 
                data-bs-toggle="dropdown">
          {{$ctrl.selectedItem || 'Select an option'}}
        </button>
        <ul class="dropdown-menu">
          <li>
            <a class="dropdown-item" 
               href="#" 
               ng-click="$ctrl.selectItem('Option 1'); $event.preventDefault()">
              Option 1
            </a>
          </li>
          <li>
            <a class="dropdown-item" 
               href="#" 
               ng-click="$ctrl.selectItem('Option 2'); $event.preventDefault()">
              Option 2
            </a>
          </li>
          <li><hr class="dropdown-divider"></li>
          <li>
            <a class="dropdown-item" 
               href="#" 
               ng-click="$ctrl.selectItem('Option 3'); $event.preventDefault()">
              Option 3
            </a>
          </li>
        </ul>
      </div>
      <p class="mt-2 text-muted" ng-if="$ctrl.selectedItem">
        You selected: {{$ctrl.selectedItem}}
      </p>
    </div>
  `,
  controller: DropdownExampleController
};

const dropdownExampleModule = angular.module('dropdownExample', [])
  .component('dropdownExample', DropdownExampleComponent);

export default dropdownExampleModule;
