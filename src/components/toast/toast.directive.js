import angular from 'angular';
import './toast.css';

class ToastController {
    constructor($element, $scope, $timeout, ToastService) {
        this.$element = $element;
        this.$scope = $scope;
        this.$timeout = $timeout;
        this.ToastService = ToastService;
        this.isVisible = false;
        this.hideTimeout = null;
    }

    $onInit() {
        this.element = this.$element[0];
        this.element.classList.add('toast');
        this.element.setAttribute('role', 'alert');
        this.element.setAttribute('aria-live', 'assertive');
        this.element.setAttribute('aria-atomic', 'true');

        // Start hidden
        this.element.style.display = 'none';

        // Set default values
        this.autohide = this.autohide !== 'false' && this.autohide !== false;
        this.delay = parseInt(this.delay) || 5000;
        this.animation = this.animation !== 'false' && this.animation !== false;

        // Add animation class
        if (this.animation) {
            this.element.classList.add('fade');
        }

        // Register with service if toastId provided
        if (this.toastId) {
            this.ToastService.register(this.toastId, this);
        }

        // Auto-show if specified
        if (this.autoShow === 'true' || this.autoShow === true) {
            this.$timeout(() => {
                this.show();
            }, 100);
        }
    }

    show() {
        if (this.isVisible) return;

        this.isVisible = true;

        // Force display first
        this.element.style.display = 'block';

        // If animation is enabled, add show class with delay for proper fade-in
        if (this.animation) {
            // Small delay to ensure CSS transition triggers
            this.$timeout(() => {
                this.element.classList.add('show');
            }, 50);
        } else {
            // No animation, show immediately
            this.element.classList.add('show');
        }

        if (this.onShow) {
            this.$scope.$apply(() => {
                this.onShow();
            });
        }

        // Auto-hide after delay
        if (this.autohide) {
            this.hideTimeout = this.$timeout(() => {
                this.hide();
            }, this.delay);
        }
    }

    hide() {
        if (!this.isVisible) return;

        // Cancel auto-hide timeout if exists
        if (this.hideTimeout) {
            this.$timeout.cancel(this.hideTimeout);
            this.hideTimeout = null;
        }

        this.isVisible = false;
        this.element.classList.remove('show');

        // Wait for fade-out animation before hiding
        const hideDelay = this.animation ? 150 : 0;
        this.$timeout(() => {
            this.element.style.display = 'none';
        }, hideDelay);

        if (this.onHide) {
            this.$scope.$apply(() => {
                this.onHide();
            });
        }
    }

    toggle() {
        if (this.isVisible) {
            this.hide();
        } else {
            this.show();
        }
    }

    dispose() {
        if (this.hideTimeout) {
            this.$timeout.cancel(this.hideTimeout);
        }
        this.hide();
    }

    $onDestroy() {
        this.dispose();
        if (this.toastId) {
            this.ToastService.unregister(this.toastId);
        }
    }
}

ToastController.$inject = ['$element', '$scope', '$timeout', 'ToastService'];

export const toastDirective =  {
    transclude: true,
    bindings: {
        toastId: '@',
        autohide: '@',
        delay: '@',
        animation: '@',
        autoShow: '@',
        onShow: '&',
        onHide: '&'
    },
    controller: ToastController,
    template: '<div ng-transclude></div>'
};