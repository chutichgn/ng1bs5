/**
 * LoadingOverlayService
 * Service for managing loading overlays globally and per reference ID
 */
class LoadingOverlayService {
    constructor($rootScope, $timeout, $q, $compile, $templateRequest) {
        this.$rootScope = $rootScope;
        this.$timeout = $timeout;
        this.$q = $q;
        this.$compile = $compile;
        this.$templateRequest = $templateRequest;

        // Global configuration
        this.globalConfig = {
            delay: 0,
            activeClass: undefined,
            template: undefined,
            templateUrl: undefined,
            templateOptions: undefined
        };

        // Registry of all overlay instances
        this.overlays = new Map();

        // Counter for auto-generated IDs
        this.overlayIdCounter = 0;

        // Queue for pending commands (for overlays not yet registered)
        this.pendingCommands = new Map();

        // Flag to enable/disable warnings
        this.showWarnings = true;
    }

    /**
     * Set global configuration
     * @param {Object} config - Global configuration object
     */
    setGlobalConfig(config) {
        this.globalConfig = Object.assign({}, this.globalConfig, config);
    }

    /**
     * Register an overlay instance
     * @param {String} id - Unique overlay ID
     * @param {Object} overlay - Overlay instance
     */
    registerOverlay(id, overlay) {
        this.overlays.set(id, overlay);

        // Process any pending commands for this overlay
        if (this.pendingCommands.has(id)) {
            const commands = this.pendingCommands.get(id);
            commands.forEach(command => {
                if (command.action === 'start') {
                    overlay.start();
                } else if (command.action === 'stop') {
                    overlay.stop();
                }
            });
            this.pendingCommands.delete(id);
        }
    }

    /**
     * Unregister an overlay instance
     * @param {String} id - Unique overlay ID
     */
    unregisterOverlay(id) {
        this.overlays.delete(id);
    }

    /**
     * Start loading overlay
     * @param {Object} options - Options object with optional referenceId
     */
    start(options = {}) {
        const referenceId = options.referenceId;

        if (referenceId) {
            // Start specific overlay by reference ID
            const overlay = this.overlays.get(referenceId);
            if (overlay) {
                overlay.start();
            } else {
                // Overlay not registered yet, queue the command
                if (!this.pendingCommands.has(referenceId)) {
                    this.pendingCommands.set(referenceId, []);
                }
                this.pendingCommands.get(referenceId).push({ action: 'start' });
            }
        } else {
            // Start all overlays without a reference ID
            this.overlays.forEach((overlay, id) => {
                if (!overlay.referenceId) {
                    overlay.start();
                }
            });
        }
    }

    /**
     * Stop loading overlay
     * @param {Object} options - Options object with optional referenceId
     */
    stop(options = {}) {
        const referenceId = options.referenceId;

        if (referenceId) {
            // Stop specific overlay by reference ID
            const overlay = this.overlays.get(referenceId);
            if (overlay) {
                overlay.stop();
            } else {
                // Overlay not registered yet, queue the command
                if (!this.pendingCommands.has(referenceId)) {
                    this.pendingCommands.set(referenceId, []);
                }
                this.pendingCommands.get(referenceId).push({ action: 'stop' });
            }
        } else {
            // Stop all overlays without a reference ID
            this.overlays.forEach((overlay, id) => {
                if (!overlay.referenceId) {
                    overlay.stop();
                }
            });
        }
    }

    /**
     * Create a handler for specific overlay operations
     * @param {Object} options - Options object with optional referenceId
     * @returns {Object} Handler object with start, stop, and wrap methods
     */
    createHandler(options = {}) {
        const self = this;
        return {
            start: function() {
                self.start(options);
            },
            stop: function() {
                self.stop(options);
            },
            wrap: function(promise) {
                return self.wrap(options, promise);
            }
        };
    }

    /**
     * Wrap a promise or function returning a promise with overlay start/stop
     * @param {Object} options - Options object with optional referenceId
     * @param {Promise|Function} promiseOrFunction - Promise or function returning promise
     * @returns {Promise} The wrapped promise
     */
    wrap(options = {}, promiseOrFunction) {
        let promise;

        // Check if it's a function
        if (typeof promiseOrFunction === 'function') {
            this.start(options);
            try {
                promise = promiseOrFunction();
            } catch (error) {
                this.stop(options);
                return this.$q.reject(error);
            }
        } else {
            promise = promiseOrFunction;
            this.start(options);
        }

        // Ensure we have a promise
        if (!promise || typeof promise.then !== 'function') {
            this.stop(options);
            return this.$q.reject(new Error('wrap() requires a Promise or function returning a Promise'));
        }

        // Stop overlay on resolve or reject
        return promise.then(
            (result) => {
                this.stop(options);
                return result;
            },
            (error) => {
                this.stop(options);
                return this.$q.reject(error);
            }
        );
    }

    /**
     * Generate unique overlay ID
     * @returns {String} Unique ID
     */
    generateOverlayId() {
        return `overlay-${this.overlayIdCounter++}`;
    }

    /**
     * Check if an overlay is registered
     * @param {String} referenceId - Reference ID to check
     * @returns {Boolean} True if registered
     */
    isRegistered(referenceId) {
        return this.overlays.has(referenceId);
    }

    /**
     * Get list of all registered overlay IDs
     * @returns {Array} Array of registered IDs
     */
    getRegisteredIds() {
        return Array.from(this.overlays.keys());
    }

    /**
     * Enable or disable warning messages
     * @param {Boolean} enabled - Whether to show warnings
     */
    setWarnings(enabled) {
        this.showWarnings = enabled;
    }

    /**
     * Get detailed info about all overlays (for debugging)
     * @returns {Object} Object with overlay details
     */
    getAllOverlays() {
        const overlays = {};
        this.overlays.forEach((overlay, id) => {
            overlays[id] = {
                referenceId: overlay.referenceId || id,
                isActive: overlay.isActive || false,
                hasTemplate: !!(overlay.template || overlay.templateUrl)
            };
        });
        return overlays;
    }

    /**
     * Debug method - returns all registered overlays info
     */
    debugOverlays() {
        const ids = this.getRegisteredIds();
        const pending = Array.from(this.pendingCommands.keys());

        return {
            registered: ids,
            pending: pending,
            details: this.getAllOverlays()
        };
    }
}

// Strict DI
LoadingOverlayService.$inject = ['$rootScope', '$timeout', '$q', '$compile', '$templateRequest'];


export default LoadingOverlayService;