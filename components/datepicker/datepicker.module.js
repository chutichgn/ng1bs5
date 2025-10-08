import angular from 'angular';
import DOMModule from '../../services/dom.service';
import PositionModule from '../../services/position.service';

// TODO: Implement Datepicker component following the pattern from the original ES5 code
// Key features:
// - Calendar widget with month/year navigation
// - Date selection with min/max date support
// - Input field integration

const MODULE_NAME = 'bs5.datepicker';

angular
    .module(MODULE_NAME, [DOMModule, PositionModule]);

export default MODULE_NAME;
