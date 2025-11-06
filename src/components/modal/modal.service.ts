import { ModalOptions, ModalInstance, getModalDialogClasses } from './modal-types';

/**
 * $bs5Modal Service
 * Version 2: Supports both template + controller AND component with $bs5ModalInstance injection
 */
class Bs5ModalService {
    static $inject = ['$document', '$compile', '$controller', '$rootScope', '$q', '$timeout', '$templateRequest', '$injector'];

    constructor(
        private $document: ng.IDocumentService,
        private $compile: ng.ICompileService,
        private $controller: ng.IControllerService,
        private $rootScope: ng.IRootScopeService,
        private $q: ng.IQService,
        private $timeout: ng.ITimeoutService,
        private $templateRequest: ng.ITemplateRequestService,
        private $injector: ng.auto.IInjectorService
    ) {}

    /**
     * Open a modal
     * @param options - Modal configuration
     * @returns Modal instance
     */
    open(options: ModalOptions = {}): ModalInstance {
        const modalInstance = new Bs5ModalInstance(
            this.$document,
            this.$compile,
            this.$controller,
            this.$rootScope,
            this.$q,
            this.$timeout,
            this.$templateRequest,
            this.$injector,
            options
        );

        modalInstance._init();
        return modalInstance;
    }
}

/**
 * Modal Instance
 * Represents an opened modal with lifecycle management
 */
class Bs5ModalInstance implements ModalInstance {
    public result: ng.IPromise<any>;
    public opened: ng.IPromise<void>;
    public closed: ng.IPromise<any>;
    public rendered: ng.IPromise<void>;

    private modalElement: HTMLElement | null = null;
    private backdropElement: HTMLElement | null = null;
    private modalScope: ng.IScope | null = null;
    private resultDeferred: ng.IDeferred<any>;
    private openedDeferred: ng.IDeferred<void>;
    private closedDeferred: ng.IDeferred<any>;
    private renderedDeferred: ng.IDeferred<void>;
    private _isVisible: boolean = false;
    private _isAnimating: boolean = false;
    private _handleKeydown: (event: KeyboardEvent) => void;
    private _handleBackdropClick: (event: MouseEvent) => void;

    constructor(
        private $document: ng.IDocumentService,
        private $compile: ng.ICompileService,
        private $controller: ng.IControllerService,
        private $rootScope: ng.IRootScopeService,
        private $q: ng.IQService,
        private $timeout: ng.ITimeoutService,
        private $templateRequest: ng.ITemplateRequestService,
        private $injector: ng.auto.IInjectorService,
        private options: ModalOptions
    ) {
        // Promises
        this.resultDeferred = $q.defer<any>();
        this.openedDeferred = $q.defer<void>();
        this.closedDeferred = $q.defer<any>();
        this.renderedDeferred = $q.defer<void>();

        this.result = this.resultDeferred.promise;
        this.opened = this.openedDeferred.promise;
        this.closed = this.closedDeferred.promise;
        this.rendered = this.renderedDeferred.promise;

        // Bind methods
        this._handleKeydown = this.handleKeydown.bind(this);
        this._handleBackdropClick = this.handleBackdropClick.bind(this);
    }

    /**
     * Initialize and open the modal
     * @private
     */
    _init(): void {
        // Create modal scope
        this.modalScope = this.$rootScope.$new(true);

        // Load template
        this._loadTemplate().then(template => {
            this._createModal(template);
            this._show();
            this.openedDeferred.resolve();
        }).catch(error => {
            this.openedDeferred.reject(error);
            this.resultDeferred.reject(error);
        });
    }

    /**
     * Load modal template
     * @private
     */
    private _loadTemplate(): ng.IPromise<string> {
        if (this.options.template) {
            return this.$q.resolve(this.options.template);
        } else if (this.options.templateUrl) {
            return this.$templateRequest(this.options.templateUrl);
        } else {
            return this.$q.reject('No template or templateUrl specified');
        }
    }
    /**
     * Create modal DOM structure
     * @private
     */
    private _createModal(contentTemplate: string): void {
        // Build modal HTML
        const dialogClasses = this._getDialogClasses();
        const modalHtml = `
      <div class="modal fade" tabindex="-1" role="dialog" aria-modal="true">
        <div class="${dialogClasses}">
          <div class="modal-content">
            ${contentTemplate}
          </div>
        </div>
      </div>
    `;

        // Setup scope
        this._setupScope();
        this.modalElement = this.$compile(modalHtml)(this.modalScope!)[0];

        const container = this.options.container
            ? this.$document[0].querySelector(this.options.container)
            : this.$document[0].body;
        container!.appendChild(this.modalElement);

        // Setup event listeners
        this.modalElement.addEventListener('click', this._handleBackdropClick);
        this.renderedDeferred.resolve();
    }

    private _setupScope(): void {
        const modalInstance = {
            close: (result?: any) => this.close(result),
            dismiss: (reason?: any) => this.dismiss(reason)
        };

        // Always add to scope (works for both approaches)
        (this.modalScope as any).$bs5ModalInstance = modalInstance;

        // Resolve all resolve values
        const resolvedValues: any = {};
        if (this.options.resolve) {
            Object.keys(this.options.resolve).forEach(key => {
                const resolveValue = this.options.resolve![key];
                resolvedValues[key] = typeof resolveValue === 'function'
                    ? resolveValue()
                    : resolveValue;
            });
            (this.modalScope as any).$resolve = resolvedValues;
        }

        // Only instantiate controller if using template (not component)
        if (this.options.controller) {
            const locals: any = {
                $scope: this.modalScope,
                $bs5ModalInstance: modalInstance,
                ...resolvedValues  // ← Spread resolve values as injectable locals
            };

            const controller = this.$controller(
                this.options.controller,
                locals
            );

            if (this.options.controllerAs) {
                (this.modalScope as any)[this.options.controllerAs] = controller;
            }
        }
    }

    /**
     * Show the modal
     * @private
     */
    private _show(): void {
        if (this._isVisible || this._isAnimating || !this.modalElement) return;

        this._isAnimating = true;

        // Create backdrop
        this._createBackdrop();

        // Add modal-open to body
        this.$document[0].body.classList.add('modal-open');

        // Show modal
        this.modalElement.style.display = 'block';

        // Trigger reflow
        this.modalElement.offsetHeight;

        // Add show class
        this.modalElement.classList.add('show');

        // Setup keyboard
        if (!this.options.staticBackdrop) {
            this.$document[0].addEventListener('keydown', this._handleKeydown);
        }

        this.$timeout(() => {
            this._isVisible = true;
            this._isAnimating = false;
            this.modalElement!.focus();
        }, 150);
    }

    /**
     * Close modal with result
     * @param result - Result to pass to promise
     */
    close(result?: any): void {
        if (!this._isVisible || this._isAnimating || !this.modalElement) return;

        this._isAnimating = true;

        // Remove show class
        this.modalElement.classList.remove('show');

        this.$timeout(() => {
            this._cleanup();
            this.resultDeferred.resolve(result);
            this.closedDeferred.resolve(result);
            this._isAnimating = false;
        }, 150);
    }

    /**
     * Dismiss modal with reason
     * @param reason - Reason for dismissal
     */
    dismiss(reason?: any): void {
        if (!this._isVisible || this._isAnimating || !this.modalElement) return;

        this._isAnimating = true;

        // Remove show class
        this.modalElement.classList.remove('show');

        this.$timeout(() => {
            this._cleanup();
            this.resultDeferred.reject(reason);
            this.closedDeferred.reject(reason);
            this._isAnimating = false;
        }, 150);
    }

    /**
     * Create backdrop
     * @private
     */
    private _createBackdrop(): void {
        this.backdropElement = this.$document[0].createElement('div');
        this.backdropElement.className = 'modal-backdrop fade';
        this.$document[0].body.appendChild(this.backdropElement);

        // Trigger reflow
        this.backdropElement.offsetHeight;

        // Add show class
        this.backdropElement.classList.add('show');
    }

    /**
     * Remove backdrop
     * @private
     */
    private _removeBackdrop(): void {
        if (!this.backdropElement) return;

        this.backdropElement.classList.remove('show');

        this.$timeout(() => {
            if (this.backdropElement) {
                this.backdropElement.remove();
                this.backdropElement = null;
            }
        }, 150);
    }

    /**
     * Handle keydown events
     * @private
     */
    private handleKeydown(event: KeyboardEvent): void {
        if (event.key === 'Escape' || event.keyCode === 27) {
            event.preventDefault();
            this.dismiss('escape');
            this.modalScope!.$apply();
        }
    }

    /**
     * Handle backdrop click
     * @private
     */
    private handleBackdropClick(event: MouseEvent): void {
        if (event.target !== this.modalElement) return;

        if (this.options.staticBackdrop) {
            // Modal shake animation could be added here
        } else {
            this.dismiss('backdrop');
            this.modalScope!.$apply();
        }
    }

    /**
     * Get dialog CSS classes
     * @private
     */
    private _getDialogClasses(): string {
        return getModalDialogClasses(this.options.size, this.options.centered, this.options.scrollable);
    }

    /**
     * Cleanup modal
     * @private
     */
    private _cleanup(): void {
        if (!this.modalElement) return;

        // Hide modal
        this.modalElement.style.display = 'none';

        // Remove event listeners
        this.modalElement.removeEventListener('click', this._handleBackdropClick);
        this.$document[0].removeEventListener('keydown', this._handleKeydown);

        // Remove backdrop
        this._removeBackdrop();

        // Remove modal-open from body
        this.$document[0].body.classList.remove('modal-open');
        // Remove modal element
        this.$timeout(() => {
            if (this.modalElement) {
                this.modalElement.remove();
                this.modalElement = null;
            }

            // Destroy scope
            if (this.modalScope) {
                this.modalScope.$destroy();
                this.modalScope = null;
            }
        }, 0);

        this._isVisible = false;
    }
}

export default Bs5ModalService;