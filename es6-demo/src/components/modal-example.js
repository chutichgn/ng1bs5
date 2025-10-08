/**
 * Modal Component Example
 * 
 * This file demonstrates how to import and use the Modal component
 * in an ES6-style AngularJS application.
 */

import angular from 'angular';

// Example: If your modal component exports a module
// import { ModalModule } from '@ng1bs5/modal';

/**
 * Example modal controller
 */
class ModalExampleController {
  constructor($scope) {
    'ngInject';
    
    this.$scope = $scope;
    this.modalTitle = 'Example Modal';
    this.modalContent = 'This is an example of using the modal component with ES6 classes.';
  }
  
  openModal(modalId) {
    const modalElement = document.getElementById(modalId);
    if (modalElement && window.bootstrap) {
      const modal = new window.bootstrap.Modal(modalElement);
      modal.show();
    }
  }
  
  closeModal(modalId) {
    const modalElement = document.getElementById(modalId);
    if (modalElement && window.bootstrap) {
      const modal = window.bootstrap.Modal.getInstance(modalElement);
      if (modal) modal.hide();
    }
  }
}

/**
 * Example modal component
 */
const ModalExampleComponent = {
  template: `
    <div>
      <button type="button" 
              class="btn btn-primary" 
              ng-click="$ctrl.openModal('exampleModal')">
        Open Modal (ES6 Style)
      </button>
      
      <div class="modal fade" id="exampleModal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{$ctrl.modalTitle}}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div class="modal-body">
              {{$ctrl.modalContent}}
            </div>
            <div class="modal-footer">
              <button type="button" 
                      class="btn btn-secondary" 
                      ng-click="$ctrl.closeModal('exampleModal')">
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  controller: ModalExampleController
};

// Create a module for this example
const modalExampleModule = angular.module('modalExample', [
  // Add ModalModule.name here when available
])
.component('modalExample', ModalExampleComponent);

export default modalExampleModule;
