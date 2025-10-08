import angular from 'angular';
import DOMModule from '../../services/dom.service';

// TODO: Implement Offcanvas component following the pattern from the completed components
// Key features:
// - $bs5Offcanvas service factory
// - Four placement options (start, end, top, bottom)
// - Backdrop support (static, clickable, none)
// - Keyboard support (ESC to close)
// - Body scroll behavior
// - Template and templateUrl support
// - Controller binding
// - Promise-based API
// - Animation support

const MODULE_NAME = 'ng1bs5.offcanvas';

angular
    .module(MODULE_NAME, [DOMModule]);

export default MODULE_NAME;
