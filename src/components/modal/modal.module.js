import angular from 'angular';
import modalComponent from './modal.component';

const moduleName = 'ng1bs5.modal';

angular
  .module(moduleName, [])
  .component('bs5Modal', modalComponent);

export default moduleName;
