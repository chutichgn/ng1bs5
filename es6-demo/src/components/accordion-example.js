/**
 * Accordion Component Example
 */

import angular from 'angular';

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

const AccordionExampleComponent = {
  template: `
    <div>
      <div class="accordion" id="accordionExample">
        <div class="accordion-item" ng-repeat="item in $ctrl.items">
          <h2 class="accordion-header">
            <button class="accordion-button" 
                    ng-class="{'collapsed': !item.show}"
                    type="button" 
                    data-bs-toggle="collapse" 
                    data-bs-target="#{{item.id}}">
              {{item.title}}
            </button>
          </h2>
          <div id="{{item.id}}" 
               class="accordion-collapse collapse"
               ng-class="{'show': item.show}"
               data-bs-parent="#accordionExample">
            <div class="accordion-body">
              {{item.content}}
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  controller: AccordionExampleController
};

const accordionExampleModule = angular.module('accordionExample', [])
  .component('accordionExample', AccordionExampleComponent);

export default accordionExampleModule;
