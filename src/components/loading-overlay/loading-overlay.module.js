import angular from 'angular';
import LoadingOverlayService from "./loading-overlay.service";
import bsLoadingOverlayDirective from "./loading-overlay.directive";

// TODO: Implement Loading Overlay component following the pattern from the completed components
// Key features:
// - $bs5LoadingOverlay service for programmatic control
// - bs5LoadingOverlay directive for declarative use
// - Full-screen and container-specific overlays
// - Customizable spinner styles
// - Custom loading messages
// - z-index management
// - Multiple overlays support
// - Promise integration (show during async operations)
// - Backdrop blur/opacity options

const MODULE_NAME = 'ng1bs5.loadingOverlay';

angular
    .module(MODULE_NAME, [])
    .service('LoadingOverlayService', LoadingOverlayService)
    .directive('bsLoadingOverlay', bsLoadingOverlayDirective);

export default MODULE_NAME;
