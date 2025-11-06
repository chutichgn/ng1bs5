import angular from 'angular';
import modalComponent from './modal.component';
import Bs5ModalService from './modal.service';

const moduleName = 'ng1bs5.modal';

angular
    .module(moduleName, [])
    .component('bs5Modal', modalComponent)
    .service('Bs5ModalService', Bs5ModalService);

export default moduleName;
