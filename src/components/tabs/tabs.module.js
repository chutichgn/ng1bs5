import angular from 'angular';
import DOMModule from '../../services/dom.service';

// TODO: Implement Tabs component following the pattern from the original ES5 code
// Key features:
// - Bs5TabsetController for managing tabs
// - bs5Tabset directive for container
// - bs5Tab directive for individual tabs
// - Support for pills, tabs, and underline styles
// - Transclude support for custom heading content

const MODULE_NAME = 'bs5.tabs';

angular
    .module(MODULE_NAME, [DOMModule]);

export default MODULE_NAME;
