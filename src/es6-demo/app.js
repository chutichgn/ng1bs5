/**
 * ng1bs5 ES6 Demo Application
 * 
 * This demo shows how to use ng1bs5 components with ES6 modules.
 * Components are imported directly from the source (src/components/), not from the bundled dist file.
 */

import angular from 'angular';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import ng1bs5 components from your source
// Adjust these imports based on your actual component structure in src/components/
// 
// Example imports (uncomment and adjust based on your actual component exports):
// import ModalModule from '@ng1bs5/modal';
// import PopoverModule from '@ng1bs5/popover';
// import TooltipModule from '@ng1bs5/tooltip';
// import DropdownModule from '@ng1bs5/dropdown';
// import AccordionModule from '@ng1bs5/accordion';
// import CollapseModule from '@ng1bs5/collapse';
// import OffcanvasModule from '@ng1bs5/offcanvas';
// import ToastModule from '@ng1bs5/toast';
// import AlertModule from '@ng1bs5/alert';

// Import component examples
import './components/modal-example';
import './components/popover-example';
import './components/tooltip-example';
import './components/dropdown-example';
import './components/accordion-example';

/**
 * Main application module
 * Add your ng1bs5 component modules here
 */
const app = angular.module('ng1bs5Demo', [
  // Add ng1bs5 modules here as you import them above
  // Example:
  // ModalModule.name,
  // PopoverModule.name,
  // TooltipModule.name,
  // DropdownModule.name,
  // AccordionModule.name,
  // CollapseModule.name,
  // OffcanvasModule.name,
  // ToastModule.name,
  // AlertModule.name
  
  // Component example modules
  'modalExample',
  'popoverExample',
  'tooltipExample',
  'dropdownExample',
  'accordionExample'
]);

/**
 * Main demo controller
 */
app.controller('DemoController', ['$scope', function($scope) {
  console.log('ng1bs5 ES6 Demo initialized');
  
  // Demo data
  $scope.message = 'Welcome to ng1bs5 ES6 Demo';
  $scope.currentTab = 'modal';
  
  // Tab switching
  $scope.switchTab = function(tab) {
    $scope.currentTab = tab;
  };
  
  // Example: Toast functionality
  $scope.showToast = function() {
    const toastElement = document.getElementById('liveToast');
    if (toastElement && window.bootstrap) {
      const toast = new window.bootstrap.Toast(toastElement);
      toast.show();
    }
  };
}]);

// Bootstrap the application
// angular.element(document).ready(function() {
//   angular.bootstrap(document, ['ng1bs5Demo']);
// });

export default app;
