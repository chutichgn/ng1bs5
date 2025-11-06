import angular, {IComponentOptions} from 'angular';
import {OffcanvasOptions, OffcanvasComponent, OffcanvasInstance, IOffcanvasController} from './offcanvas-types';

class OffcanvasService {
    private offcanvases: Map<string, IOffcanvasController>;

    static $inject = ['$compile', '$rootScope', '$document', '$controller'];

    constructor(
        private $compile: ng.ICompileService,
        private $rootScope: ng.IRootScopeService,
        private $document: ng.IDocumentService,
        private $controller: ng.IControllerService
    ) {
        this.offcanvases = new Map<string, IOffcanvasController>();
    }

    register(id: string, controller: IOffcanvasController): void {
        this.offcanvases.set(id, controller);
    }

    unregister(id: string): void {
        this.offcanvases.delete(id);
    }

    show(id: string): void {
        const offcanvas = this.offcanvases.get(id);
        if (offcanvas) {
            offcanvas.show();
        }
    }

    hide(id: string): void {
        const offcanvas = this.offcanvases.get(id);
        if (offcanvas) {
            offcanvas.hide();
        }
    }

    toggle(id: string): void {
        const offcanvas = this.offcanvases.get(id);
        if (offcanvas) {
            offcanvas.toggle();
        }
    }

    /**
     * Dynamically create and register an offcanvas with a component
     * @param component - AngularJS component definition {template, controller, bindings}
     * @param options - Offcanvas configuration
     * @returns Controller instance with destroy method
     */
    create(component: IComponentOptions, options: OffcanvasOptions): OffcanvasInstance {
        // Debug: Log what we received
        console.log('Component:', component);
        console.log('Has controller?', !!component.controller);
        console.log('Controller type:', typeof component.controller);

        if (!component || !component.template) {
            throw new Error('Component must have a template property');
        }

        if (!options.offcanvasId) {
            throw new Error('options.offcanvasId is required');
        }

        // Check if offcanvas with this ID already exists
        if (this.offcanvases.has(options.offcanvasId)) {
            console.log(`Offcanvas ${options.offcanvasId} already exists`);
            return {
                scope: null as any, element: null as any, destroy: () => {
                }
            };
        }

        // Create isolated scope
        const scope = this.$rootScope.$new(true) as any;
        const controllerAs = component.controllerAs || '$ctrl';

        // INSTANTIATE CONTROLLER FIRST (before compiling)
        if (component.controller) {
            console.log('Instantiating controller...');
            try {
                const locals: any = {
                    $scope: scope
                };
                const ctrl = this.$controller(component.controller, locals);

                // Bind options.bindings to controller
                if (options.bindings && component.bindings) {
                    Object.keys(component.bindings).forEach(key => {
                        if (options.bindings!.hasOwnProperty(key)) {
                            ctrl[key] = options.bindings![key];
                        }
                    });
                }

                // Attach controller to scope BEFORE compilation
                scope[controllerAs] = ctrl;
            } catch (error) {
                console.error('Error instantiating controller:', error);
                throw error;
            }
        } else {
            console.warn('No controller defined in component');
        }

        // Add bindings to scope (for non-controller template references)
        if (options.bindings && component.bindings) {
            Object.keys(component.bindings).forEach(key => {
                if (options.bindings!.hasOwnProperty(key)) {
                    scope[key] = options.bindings![key];
                }
            });
        }

        // Add callbacks to scope
        if (options.onShow) {
            scope.onShowCallback = options.onShow;
        }
        if (options.onHide) {
            scope.onHideCallback = options.onHide;
        }
        // Build offcanvas HTML with component template directly
        // NOW compile (controller is available)
        const offcanvasHtml = `
        <offcanvas 
            offcanvas-id="${options.offcanvasId}"
            ${options.placement ? `placement="${options.placement}"` : ''}
            ${options.scroll !== undefined ? `scroll="${options.scroll}"` : ''}
            ${options.backdrop !== undefined ? `backdrop="${options.backdrop}"` : ''}
            ${options.onShow ? 'on-show="onShowCallback()"' : ''}
            ${options.onHide ? 'on-hide="onHideCallback()"' : ''}>
            ${component.template}
        </offcanvas>
    `;

        // Compile and append to body
        const element = this.$compile(offcanvasHtml)(scope);
        const body = this.$document.find('body');
        body.append(element);

        return {
            scope,
            element,
            destroy: (): void => {
                this.hide(options.offcanvasId);
                setTimeout(() => {
                    scope.$destroy();
                    element.remove();
                    this.unregister(options.offcanvasId);
                }, 400); // Wait for animation
            }
        };
    }

    /**
     * Convert camelCase to kebab-case
     */
    private _camelToKebab(str: string): string {
        return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
    }
}

export default OffcanvasService;