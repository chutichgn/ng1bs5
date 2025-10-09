import angular from 'angular';
import DOMModule from '../../services/dom.service';
import { Bs5TabsetDirective, Bs5TabDirective } from './tabs.directive';
import TabsService from './tabs.service';

const MODULE_NAME = 'ng1bs5.tabs';

angular
    .module(MODULE_NAME, [DOMModule])
    .component('bs5Tabset', Bs5TabsetDirective)
    .component('bs5Tab', Bs5TabDirective)
    .service('TabsService', TabsService);

export default MODULE_NAME;
