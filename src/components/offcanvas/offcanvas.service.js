import angular from 'angular';

class OffcanvasService {
    constructor($compile, $rootScope, $document, $controller) {
        'ngInject';
        this.$compile = $compile;
        this.$rootScope = $rootScope;
        this.$document = $document;
        this.$controller = $controller;
        this.offcanvases = new Map();
    }

    register(id, controller) {
        this.offcanvases.set(id, controller);
    }

    unregister(id) {
        this.offcanvases.delete(id);
    }

    show(id) {
        const offcanvas = this.offcanvases.get(id);
        if (offcanvas) {
            offcanvas.show();
        }
    }

    hide(id) {
        const offcanvas = this.offcanvases.get(id);
        if (offcanvas) {
            offcanvas.hide();
        }
    }

    toggle(id) {
        const offcanvas = this.offcanvases.get(id);
        if (offcanvas) {
            offcanvas.toggle();
        }
    }

    /**
     * Dynamically create and register an offcanvas with a component
     * @param {Object} component - AngularJS component definition {template, controller, bindings}
     * @param {Object} options - Offcanvas configuration
     * @param {string} options.offcanvasId - Unique ID for the offcanvas (required)
     * @param {string} options.placement - 'start', 'end', 'top', 'bottom' (default: 'end')
     * @param {boolean|string} options.scroll - Allow body scroll (default: false)
     * @param {boolean|string} options.backdrop - Show backdrop (default: true)
     * @param {Function} options.onShow - Callback when shown
     * @param {Function} options.onHide - Callback when hidden
     * @param {Object} options.bindings - Data to pass to component bindings
     * @returns {Object} - Controller instance with destroy method
     */
    create(component, options = {}) {
        console.log('!! Component:', component);
        if (!component || !component.template) {
            throw new Error('Component must have a template property');
        }

        if (!options.offcanvasId) {
            throw new Error('options.offcanvasId is required');
        }

        // Check if offcanvas with this ID already exists
        if (this.offcanvases.has(options.offcanvasId)) {
            console.warn(`Offcanvas with id "${options.offcanvasId}" already exists`);
            return;
        }

        // Create isolated scope
        const scope = this.$rootScope.$new(true);
        const controllerAs = component.controllerAs || '$ctrl';

        // Pass bindings data to scope
        if (options.bindings && component.bindings) {
            Object.keys(component.bindings).forEach(key => {
                if (options.bindings.hasOwnProperty(key)) {
                    scope[key] = options.bindings[key];
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

        // Instantiate controller if provided
        if (component.controller) {
            const locals = {
                $scope: scope,
                [controllerAs]: undefined
            };
            const ctrl = this.$controller(component.controller, locals);

            // Bind component bindings to controller
            if (options.bindings && component.bindings) {
                Object.keys(component.bindings).forEach(key => {
                    if (options.bindings.hasOwnProperty(key)) {
                        ctrl[key] = options.bindings[key];
                    }
                });
            }

            // Attach controller to scope with controllerAs
            scope[controllerAs] = ctrl;
        }

        // Return controller instance with destroy method
        return {
            scope,
            element,
            destroy: () => {
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
    _camelToKebab(str) {
        return str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();
    }
}

OffcanvasService.$inject = ['$compile', '$rootScope', '$document', '$controller'];

export default OffcanvasService;