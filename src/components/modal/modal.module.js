import angular from 'angular';
import DOMModule from '../../services/dom.service';
import PositionModule from '../../services/position.service';

// TODO: Implement Modal component following the pattern from the original ES5 code
// Key features:
// - $bs5Modal service factory
// - $$modalStack and $$modalBackdrop services
// - Support for templateUrl and template
// - Controller binding
// - Promise-based API

const MODULE_NAME = 'ng1bs5.modal';

angular
    .module(MODULE_NAME, [DOMModule, PositionModule]);

export default MODULE_NAME;
