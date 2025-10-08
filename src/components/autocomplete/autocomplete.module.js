import angular from 'angular';
import DOMModule from '../../services/dom.service';
import PositionModule from '../../services/position.service';

// TODO: Implement Autocomplete component following the pattern from the original ES5 code
// Key features:
// - bs5Autocomplete directive for input fields
// - bs5AutocompleteList directive for displaying results
// - Remote and local datasource support
// - Keyboard navigation

const MODULE_NAME = 'ng1bs5.autocomplete';

angular
    .module(MODULE_NAME, [DOMModule, PositionModule]);

export default MODULE_NAME;
