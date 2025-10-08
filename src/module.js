import angular from 'angular';


// Import components
import './components/toast/toast.directive';
import './components/toast/toast.service';
import './components/offcanvas/offcanvas.directive';
import './components/offcanvas/offcanvas.service';
import {toastDirective} from "./components/toast/toast.directive";
import ToastService from "./components/toast/toast.service";
import {OffCanvasDirective} from "./components/offcanvas/offcanvas.directive";
import OffcanvasService from "./components/offcanvas/offcanvas.service";
import bsLoadingOverlayDirective from "./components/loading-overlay/loading-overlay.directive";
import LoadingOverlayService from "./components/loading-overlay/loading-overlay.service";
import { PopoverModule } from './components/popover/popover.module';

// Create the toast module
const ng1bs5 = angular.module('ng1bs5', []);

ng1bs5.component('toast', toastDirective);
ng1bs5.service('ToastService', ToastService);
ng1bs5.component('offcanvas', OffCanvasDirective);
ng1bs5.service('OffcanvasService', OffcanvasService);
ng1bs5.service('LoadingOverlayService', LoadingOverlayService);
ng1bs5.directive('bsLoadingOverlay', bsLoadingOverlayDirective);

export default ng1bs5;
