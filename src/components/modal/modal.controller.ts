import { ModalController as IModalController, ModalInstanceAPI, ModalSize, getModalDialogClasses } from './modal-types';

/**
 * Modal Controller
 * Pure AngularJS implementation without Bootstrap JS dependency
 */
class ModalController implements IModalController {
    public visible?: boolean;
    public backdrop?: string;
    public keyboard?: boolean;
    public focus?: boolean;
    public size?: ModalSize;
    public centered?: boolean;
    public scrollable?: boolean;
    public modalInstance?: ModalInstanceAPI;
    public onClose?: (params: { $result: any }) => void;
    public onDismiss?: (params: { $reason: any }) => void;
    public onShow?: (params: { $event: any }) => void;
    public onShown?: (params: { $event: any }) => void;
    public onHide?: (params: { $event: any }) => void;
    public onHidden?: (params: { $event: any }) => void;
    public onHidePrevented?: (params: { $event: any }) => void;

    private modalElement: HTMLElement | null = null;
    private backdropElement: HTMLElement | null = null;
    private initialized: boolean = false;
    private _isVisible: boolean = false;
    private _isAnimating: boolean = false;
    private _handleKeydown: (event: KeyboardEvent) => void;
    private _handleBackdropClick: (event: MouseEvent) => void;

    static $inject = ['$element', '$timeout', '$scope', '$attrs', '$document', '$animate'];

    constructor(
        private $element: ng.IAugmentedJQuery,
        private $timeout: ng.ITimeoutService,
        private $scope: ng.IScope,
        private $attrs: ng.IAttributes,
        private $document: ng.IDocumentService,
        private $animate: ng.animate.IAnimateService
    ) {
        this._handleKeydown = this.handleKeydown.bind(this);
        this._handleBackdropClick = this.handleBackdropClick.bind(this);
    }

    $onInit(): void {
        // Set default values
        this.backdrop = this.backdrop !== undefined ? this.backdrop : 'true';
        this.keyboard = this.keyboard !== false;
        this.focus = this.focus !== false;
        this.size = this.size || '';
        this.centered = this.centered || false;
        this.scrollable = this.scrollable || false;

        // Expose close/dismiss to parent scope for transcluded content
        const parentScope = this.$scope.$parent as any;
        parentScope.close = (result?: any) => this.close(result);
        parentScope.dismiss = (reason?: any) => this.dismiss(reason);

        this.$timeout(() => {
            this.modalElement = this.$element[0].querySelector('.modal');

            if (!this.modalElement) {
                console.error('Modal element not found');
                return;
            }

            // Setup event listeners
            this.modalElement.addEventListener('click', this._handleBackdropClick);

            // Expose modal API
            if (this.$attrs.modalInstance !== undefined) {
                this.modalInstance = {
                    show: () => this.show(),
                    hide: () => this.hide(),
                    toggle: () => this.toggle(),
                    handleUpdate: () => this.handleUpdate(),
                    dispose: () => this._dispose()
                };
            }

            this.initialized = true;

            // Handle initial visibility
            if (this.visible) {
                this.show();
            }
        });
    }

    $onChanges(changes: ng.IOnChangesObject): void {
        if (changes.visible && this.initialized) {
            if (changes.visible.currentValue && !this._isVisible) {
                this.show();
            } else if (!changes.visible.currentValue && this._isVisible) {
                this.hide();
            }
        }
    }

    /**
     * Close modal with result (called from transcluded content)
     */
    close(result?: any): void {
        if (this.onClose) {
            this.onClose({ $result: result });
        }
        this.hide();
    }

    /**
     * Dismiss modal with reason (called from transcluded content)
     */
    dismiss(reason?: any): void {
        if (this.onDismiss) {
            this.onDismiss({ $reason: reason });
        }
        this.hide();
    }

    show(): void {
        if (this._isVisible || this._isAnimating || !this.modalElement) return;

        this._isAnimating = true;

        // Fire show event
        if (this.onShow) {
            this.onShow({ $event: {} });
        }

        // Create backdrop
        this._createBackdrop();

        // Add modal-open class to body
        this.$document[0].body.classList.add('modal-open');

        // Show modal
        this.modalElement.style.display = 'block';
        this.modalElement.setAttribute('aria-modal', 'true');
        this.modalElement.setAttribute('role', 'dialog');
        this.modalElement.removeAttribute('aria-hidden');

        // Trigger reflow for transition
        this.modalElement.offsetHeight;

        // Add show class for fade animation
        this.modalElement.classList.add('show');

        // Setup keyboard handler
        if (this.keyboard) {
            this.$document[0].addEventListener('keydown', this._handleKeydown);
        }

        // Wait for animation to complete
        this.$timeout(() => {
            this._isVisible = true;
            this._isAnimating = false;

            // Focus modal
            if (this.focus && this.modalElement) {
                this.modalElement.focus();
            }

            // Fire shown event
            if (this.onShown) {
                this.onShown({ $event: {} });
            }
        }, 150); // Bootstrap modal transition time
    }

    hide(): void {
        if (!this._isVisible || this._isAnimating || !this.modalElement) return;

        this._isAnimating = true;

        // Fire hide event
        if (this.onHide) {
            this.onHide({ $event: {} });
        }

        // Remove show class for fade animation
        this.modalElement.classList.remove('show');

        // Remove keyboard handler
        this.$document[0].removeEventListener('keydown', this._handleKeydown);

        // Wait for animation to complete
        this.$timeout(() => {
            if (this.modalElement) {
                this.modalElement.style.display = 'none';
                this.modalElement.setAttribute('aria-hidden', 'true');
                this.modalElement.removeAttribute('aria-modal');
                this.modalElement.removeAttribute('role');
            }

            // Remove backdrop
            this._removeBackdrop();

            // Remove modal-open class from body
            this.$document[0].body.classList.remove('modal-open');

            this._isVisible = false;
            this._isAnimating = false;

            // Fire hidden event
            if (this.onHidden) {
                this.onHidden({ $event: {} });
            }
        }, 150);
    }

    toggle(): void {
        if (this._isVisible) {
            this.hide();
        } else {
            this.show();
        }
    }

    handleUpdate(): void {
        // Recalculate modal position if needed
        // For most cases, Bootstrap CSS handles this automatically
    }

    private _createBackdrop(): void {
        const backdropOption = this._getBackdropOption();

        if (backdropOption === false) return;

        this.backdropElement = this.$document[0].createElement('div');
        this.backdropElement.className = 'modal-backdrop fade';
        this.$document[0].body.appendChild(this.backdropElement);

        // Trigger reflow
        this.backdropElement.offsetHeight;

        // Add show class
        this.backdropElement.classList.add('show');
    }

    private _removeBackdrop(): void {
        if (!this.backdropElement) return;

        this.backdropElement.classList.remove('show');

        this.$timeout(() => {
            if (this.backdropElement && this.backdropElement.parentNode) {
                this.backdropElement.parentNode.removeChild(this.backdropElement);
                this.backdropElement = null;
            }
        }, 150);
    }

    private handleKeydown(event: KeyboardEvent): void {
        if (event.key === 'Escape' || event.keyCode === 27) {
            event.preventDefault();
            this.hide();
            this.$scope.$apply();
        }
    }

    private handleBackdropClick(event: MouseEvent): void {
        // Only handle clicks on the modal itself (not modal-dialog or its children)
        if (event.target !== this.modalElement) return;

        const backdropOption = this._getBackdropOption();

        if (backdropOption === 'static') {
            // Fire hidePrevented event
            if (this.onHidePrevented) {
                this.onHidePrevented({ $event: {} });
                this.$scope.$apply();
            }
        } else if (backdropOption === true) {
            this.hide();
            this.$scope.$apply();
        }
    }

    private _getBackdropOption(): boolean | 'static' {
        if (this.backdrop === 'false') return false;
        if (this.backdrop === 'static') return 'static';
        return true;
    }

    _getDialogClasses(): string {
        return getModalDialogClasses(this.size, this.centered, this.scrollable);
    }

    private _dispose(): void {
        if (this._isVisible) {
            this.hide();
        }

        this.modalElement?.removeEventListener('click', this._handleBackdropClick);
        this.$document[0].removeEventListener('keydown', this._handleKeydown);
    }

    $onDestroy(): void {
        this._dispose();
    }
}

export default ModalController;