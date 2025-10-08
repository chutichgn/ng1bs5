import angular from 'angular';
import {toastDirective} from "./toast.directive";
import ToastService from "./toast.service";

// TODO: Implement Toast component following the pattern from the completed components
// Key features:
// - bs5Toast service for programmatic toast creation
// - Multiple toast positions (top-left, top-right, bottom-left, bottom-right, etc.)
// - Auto-dismiss with configurable timeout
// - Toast stacking/queuing
// - Different types (success, error, warning, info)
// - Custom templates
// - Animation support

const MODULE_NAME = 'ng1bs5.toast';

angular
    .module(MODULE_NAME, [])
.component('toast', toastDirective)
.service('ToastService', ToastService);

export default MODULE_NAME;
