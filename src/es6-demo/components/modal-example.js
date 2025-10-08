/**
 * Modal Component Example
 * 
 * This file demonstrates how to import and use the Modal component from ng1bs5
 * in an ES6-style AngularJS application.
 */

import angular from 'angular';

// Import ng1bs5 Modal module when available
// import ModalModule from '@ng1bs5/modal';

/**
 * Example modal controller using ES6 class
 */
class ModalExampleController {
  constructor($scope) {
    'ngInject';
    
    this.$scope = $scope;
    this.modalTitle = 'Example Modal';
    this.modalContent = 'This modal is powered by ng1bs5 imported as an ES6 module.';
  }
}

/**
 * Example modal component
 * 
 * Note: This is just an example showing how to structure components.
 * The actual modal functionality is provided by ng1bs5's modal module.
 */
const ModalExampleComponent = {
  template: `
    <div>
      <p class="text-muted">
        Modal component functionality is provided by ng1bs5.
        Use <code>data-bs-toggle="modal"</code> and <code>data-bs-target="#modalId"</code>
        to trigger modals.
      </p>
    </div>
  `,
  controller: ModalExampleController
};

// Create a module for this example
const modalExampleModule = angular.module('modalExample', [
  // Add ModalModule.name here when you import it:
  // ModalModule.name
])
.component('modalExample', ModalExampleComponent);

export default modalExampleModule;
