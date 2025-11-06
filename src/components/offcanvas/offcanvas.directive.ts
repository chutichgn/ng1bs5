import angular from 'angular';
import { IOffcanvasController } from './offcanvas-types';
import OffcanvasService from './offcanvas.service';

class OffcanvasController implements IOffcanvasController {
    public isVisible: boolean = false;
    public offcanvasId?: string;
    public placement?: string;
    public scroll?: string | boolean;
    public backdrop?: string | boolean;
    public onShow?: () => void;
    public onHide?: () => void;

    private element!: HTMLElement;
    private backdropElement: HTMLElement | null = null;
    private allowBodyScroll: boolean = false;
    private showBackdropOnOpen: boolean = true;

    static $inject = ['$element', '$scope', 'OffcanvasService'];

    constructor(
        private $element: ng.IAugmentedJQuery,
        private $scope: ng.IScope,
        private OffcanvasService: OffcanvasService
    ) {}

    $onInit(): void {
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

    show(): void {
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

    hide(): void {
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

    toggle(): void {
        if (this.isVisible) {
            this.hide();
        } else {
            this.show();
        }
    }

    private showBackdrop(): void {
        this.backdropElement = document.createElement('div');
        this.backdropElement.className = 'offcanvas-backdrop fade';
        document.body.appendChild(this.backdropElement);

        setTimeout(() => {
            if (this.backdropElement) {
                this.backdropElement.classList.add('show');
            }
        }, 10);

        this.backdropElement.addEventListener('click', () => {
            this.hide();
            this.$scope.$apply();
        });
    }

    private hideBackdrop(): void {
        if (this.backdropElement) {
            this.backdropElement.classList.remove('show');
            setTimeout(() => {
                if (this.backdropElement && this.backdropElement.parentNode) {
                    this.backdropElement.parentNode.removeChild(this.backdropElement);
                    this.backdropElement = null;
                }
            }, 300);
        }
    }

    $onDestroy(): void {
        this.hideBackdrop();
        if (!this.allowBodyScroll) {
            document.body.classList.remove('offcanvas-open');
        }
        if (this.offcanvasId) {
            this.OffcanvasService.unregister(this.offcanvasId);
        }
    }
}

export const OffCanvasDirective: angular.IComponentOptions = {
    transclude: true,
    bindings: {
        offcanvasId: '@',
        placement: '@',
        scroll: '@',
        backdrop: '@',
        onShow: '&',
        onHide: '&'
    },
    controller: OffcanvasController,
    template: '<div ng-transclude></div>'
};

export default OffcanvasController;
