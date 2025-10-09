import html from "./collapse-demo.html";

/**
 * Collapse Component Example
 * 
 * This file demonstrates how to use the Collapse directive from ng1bs5.
 * The collapse directive provides smooth show/hide animations for content.
 */

import angular from 'angular';

class CollapseExampleController {
  constructor($scope) {
    'ngInject';
    
    this.$scope = $scope;
    this.isCollapsed1 = false;
    this.isCollapsed2 = true;
    this.isCollapsed3 = true;
    this.multiCollapse1 = false;
    this.multiCollapse2 = false;
  }
  
  toggleAll() {
    this.multiCollapse1 = !this.multiCollapse1;
    this.multiCollapse2 = !this.multiCollapse2;
  }
}

const CollapseExampleComponent = {
  template: html,
  controller: CollapseExampleController
};

const collapseExampleModule = angular.module('collapseExample', [])
  .component('collapseExample', CollapseExampleComponent);

export default collapseExampleModule;
