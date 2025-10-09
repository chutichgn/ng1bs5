/**
 * angularjs-bootstrap-5 (ES6)
 *
 * Version: 2.0.0
 * Author: Adam Davis (Converted to ES6)
 * License: MIT
 */

import angular from 'angular';

// Components - using default imports
import AccordionModule from './components/accordion/accordion.module';
import AlertModule from './components/alert/alert.module';
import AutocompleteModule from './components/autocomplete/autocomplete.module';
import CollapseModule from './components/collapse/collapse.module';
import DatepickerModule from './components/datepicker/datepicker.module';
import IconsModule from './components/icons/icons.module';
import LoadingOverlayModule from './components/loading-overlay/loading-overlay.module';
import ModalModule from './components/modal/modal.module';
import OffcanvasModule from './components/offcanvas/offcanvas.module';
import PaginationModule from './components/pagination/pagination.module';
import PopoverModule from './components/popover/popover.module';
import ProgressbarModule from './components/progressbar/progressbar.module';
import RatingModule from './components/rating/rating.module';
import TabsModule from './components/tabs/tabs.module';
import ToastModule from './components/toast/toast.module';
import TooltipModule from './components/tooltip/tooltip.module';

// Styles
import './styles/styles.css';
import dropdownModule from "./components/dropdown/dropdown_module";

const NG1BS5_MODULE_NAME = 'ng1bs5';

angular.module(NG1BS5_MODULE_NAME, [
    AccordionModule,
    AlertModule,
    AutocompleteModule,
    CollapseModule,
    DatepickerModule,
    dropdownModule,
    IconsModule,
    LoadingOverlayModule,
    ModalModule,
    OffcanvasModule,
    PaginationModule,
    PopoverModule,
    ProgressbarModule,
    RatingModule,
    TabsModule,
    ToastModule,
    TooltipModule
]);

export default NG1BS5_MODULE_NAME;