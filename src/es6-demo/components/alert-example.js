import html from "./alert-demo.html";

/**
 * Alert Component Example
 * 
 * This file demonstrates how to use the Alert component from ng1bs5.
 */

import angular from 'angular';

class AlertExampleController {
  constructor($scope) {
    'ngInject';
    
    this.$scope = $scope;
    this.alerts = [
      { type: 'success', msg: 'Well done! You successfully read this important alert message.' },
      { type: 'info', msg: 'Heads up! This alert needs your attention, but it\'s not super important.' },
      { type: 'warning', msg: 'Warning! Better check yourself, you\'re not looking too good.' }
    ];
    
    this.showDismissible = true;
  }
  
  closeAlert(index) {
    this.alerts.splice(index, 1);
  }
  
  addAlert() {
    const types = ['success', 'info', 'warning', 'danger'];
    const randomType = types[Math.floor(Math.random() * types.length)];
    this.alerts.push({
      type: randomType,
      msg: 'This is a dynamically added ' + randomType + ' alert!'
    });
  }
}

const AlertExampleComponent = {
  template: html,
  controller: AlertExampleController
};

const alertExampleModule = angular.module('alertExample', [])
  .component('alertExample', AlertExampleComponent);

export default alertExampleModule;
