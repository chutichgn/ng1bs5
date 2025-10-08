import angular from 'angular';
import IconsModule from '../icons/icons.module';

// TODO: Implement Rating component following the pattern from the original ES5 code
// Key features:
// - Star rating with customizable states
// - Support for icons or images
// - Readonly and disabled modes
// - Trail effect on hover
// - Form validation integration

const MODULE_NAME = 'ng1bs5.rating';

angular
    .module(MODULE_NAME, [IconsModule]);

export default MODULE_NAME;
