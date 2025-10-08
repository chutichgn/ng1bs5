import angular from 'angular';


class OffcanvasController {
    constructor($element, $scope, OffcanvasService) {
        this.$element = $element;
        this.$scope = $scope;
        this.OffcanvasService = OffcanvasService;
        this.isVisible = false;
        this.backdrop = null;
    }

    $onInit() {
        this.element = this.$element[0];
        this.element.classList.add('offcanvas');
        this.element.setAttribute('tabindex', '-1');

        // Add placement class
        if (this.placement) {
            this.element.classList.add(`offcanvas-${this.placement}`);
        } else {
            this.element.classList.add('offcanvas-end');
        }

        // Handle scroll behavior
        if (this.scroll === 'true' || this.scroll === true) {
            // Allow body scroll when offcanvas is open
            this.allowBodyScroll = true;
        } else {
            this.allowBodyScroll = false;
        }

        // Handle backdrop behavior
        if (this.backdrop === 'false' || this.backdrop === false) {
            this.showBackdropOnOpen = false;
        } else {
            this.showBackdropOnOpen = true;
        }

        if (this.offcanvasId) {
            this.element.setAttribute('id', this.offcanvasId);
            this.OffcanvasService.register(this.offcanvasId, this);
        }
    }

    show() {
        if (this.isVisible) return;

        this.isVisible = true;
        this.element.classList.add('show');
        this.element.style.visibility = 'visible';

        // Only prevent body scroll if allowBodyScroll is false
        if (!this.allowBodyScroll) {
            document.body.classList.add('offcanvas-open');
        }

        // Only show backdrop if configured to do so
        if (this.showBackdropOnOpen) {
            this.showBackdrop();
        }

        if (this.onShow) {
            this.onShow();
        }
    }

    hide() {
        if (!this.isVisible) return;

        this.isVisible = false;
        this.element.classList.remove('show');

        setTimeout(() => {
            this.element.style.visibility = 'hidden';
            if (!this.allowBodyScroll) {
                document.body.classList.remove('offcanvas-open');
            }
        }, 300);

        if (this.showBackdropOnOpen) {
            this.hideBackdrop();
        }

        if (this.onHide) {
            this.onHide();
        }
    }

    toggle() {
        if (this.isVisible) {
            this.hide();
        } else {
            this.show();
        }
    }

    showBackdrop() {
        this.backdrop = document.createElement('div');
        this.backdrop.className = 'offcanvas-backdrop fade';
        document.body.appendChild(this.backdrop);

        setTimeout(() => {
            this.backdrop.classList.add('show');
        }, 10);

        this.backdrop.addEventListener('click', () => {
            this.hide();
            this.$scope.$apply();
        });
    }

    hideBackdrop() {
        if (this.backdrop) {
            this.backdrop.classList.remove('show');
            setTimeout(() => {
                if (this.backdrop && this.backdrop.parentNode) {
                    this.backdrop.parentNode.removeChild(this.backdrop);
                    this.backdrop = null;
                }
            }, 300);
        }
    }

    $onDestroy() {
        this.hideBackdrop();
        if (!this.allowBodyScroll) {
            document.body.classList.remove('offcanvas-open');
        }
        if (this.offcanvasId) {
            this.OffcanvasService.unregister(this.offcanvasId);
        }
    }
}

OffcanvasController.$inject = ['$element', '$scope', 'OffcanvasService'];

export const OffCanvasDirective =  {
    transclude: true,
    bindings: {
        offcanvasId: '@',
        placement: '@',
        scroll: '@',        // New: Allow body scroll when offcanvas is open
        backdrop: '@',      // New: Show/hide backdrop
        onShow: '&',
        onHide: '&'
    },
    controller: OffcanvasController,
    template: '<div ng-transclude></div>'
};
