/**
 * Accordion Component Example
 * 
 * This file demonstrates how to use the Accordion component from ng1bs5.
 */

import angular from 'angular';

// Import ng1bs5 Accordion module when available
// import AccordionModule from '@ng1bs5/accordion';

class AccordionExampleController {
  constructor($scope) {
    'ngInject';
    this.$scope = $scope;
    
    this.items = [
      {
        id: 'item1',
        title: 'Accordion Item #1',
        content: 'This is the first item\'s accordion body loaded via ES6 modules.',
        show: true
      },
      {
        id: 'item2',
        title: 'Accordion Item #2',
        content: 'This is the second item\'s accordion body.',
        show: false
      },
      {
        id: 'item3',
        title: 'Accordion Item #3',
        content: 'This is the third item\'s accordion body.',
        show: false
      }
    ];
  }
}

/**
 * Note: Accordion functionality is provided by ng1bs5.
 */
const AccordionExampleComponent = {
  template: `
    <div>
      <p class="text-muted">
        Accordion functionality is provided by ng1bs5.
        Use <code>data-bs-toggle="collapse"</code> with proper targets and parent attributes.
      </p>
    </div>
  `,
  controller: AccordionExampleController
};

const accordionExampleModule = angular.module('accordionExample', [
  // Add AccordionModule.name here when you import it:
  // AccordionModule.name
])
.component('accordionExample', AccordionExampleComponent);

export default accordionExampleModule;
