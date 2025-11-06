import ModalController from './modal.controller';
import template from './modal.template.html';

/**
 * Modal Component
 * Wraps Bootstrap 5 Modal component
 */
const modalComponent: angular.IComponentOptions = {
    transclude: true,
    bindings: {
        // Visibility control
        visible: '<',              // Boolean - controls modal visibility

        // Modal configuration options (Bootstrap 5 options)
        backdrop: '@',             // 'true' | 'false' | 'static' - backdrop behavior
        keyboard: '<',             // Boolean - close on ESC key
        focus: '<',                // Boolean - focus modal on init

        // Size modifiers
        size: '@',                 // 'sm' | 'lg' | 'xl' | 'fullscreen' - modal size
        centered: '<',             // Boolean - vertically center modal
        scrollable: '<',           // Boolean - scrollable modal body

        // Modal instance reference
        modalInstance: '=?',       // Two-way binding to expose modal instance

        // Close/Dismiss callbacks
        onClose: '&',              // Callback when modal is closed with close(result)
        onDismiss: '&',            // Callback when modal is dismissed with dismiss(reason)

        // Event callbacks (Bootstrap 5 modal events)
        onShow: '&',               // Callback when modal starts showing
        onShown: '&',              // Callback when modal is fully shown
        onHide: '&',               // Callback when modal starts hiding
        onHidden: '&',             // Callback when modal is fully hidden
        onHidePrevented: '&'       // Callback when hide is prevented (static backdrop)
    },
    controller: ModalController,
    template
};

export default modalComponent;
