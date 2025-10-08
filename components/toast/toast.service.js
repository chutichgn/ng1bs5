import angular from 'angular';

class ToastService {
    constructor($rootScope, $timeout, $document) {
        this.$rootScope = $rootScope;
        this.$timeout = $timeout;
        this.$document = $document;
        this.containers = new Map();
    }

    /**
     * Create a toast programmatically
     * @param {Object} options - Toast configuration
     * @param {string} options.message - Toast message (required)
     * @param {string} options.title - Toast title (optional)
     * @param {string} options.type - Toast type: success, error, warning, info (optional)
     * @param {number} options.delay - Auto-hide delay in ms (default: 5000)
     * @param {boolean} options.autohide - Auto-hide toast (default: true)
     * @param {string} options.position - Toast position: top-start, top-center, top-end, etc (default: top-end)
     * @param {boolean} options.closeButton - Show close button (default: true)
     * @param {boolean} options.animation - Enable fade animation (default: true)
     * @param {boolean} options.timestamp - Show timestamp (default: false)
     */
    create(options) {
        const defaults = {
            message: '',
            title: '',
            type: 'info',
            delay: 5000,
            autohide: true,
            position: 'top-end',
            closeButton: true,
            animation: true,
            timestamp: false
        };

        const config = { ...defaults, ...options };

        if (!config.message) {
            console.error('Toast message is required');
            return;
        }

        // Get or create container for this position
        const containerElement = this.ensureContainer(config.position);

        // Build toast HTML
        const toastHtml = this.buildToastHtml(config);
        const toastElement = angular.element(toastHtml);

        // Append to container
        containerElement.append(toastElement);

        // Get the actual DOM element
        const toast = toastElement[0];

        // Show toast with animation
        this.$timeout(() => {
            toast.style.display = 'block';

            if (config.animation) {
                // Trigger fade-in animation
                this.$timeout(() => {
                    toast.classList.add('show');
                }, 50);
            } else {
                toast.classList.add('show');
            }

            // Setup close button handler
            const closeBtn = toast.querySelector('.btn-close');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    this.hideToast(toast, toastElement, config.animation);
                });
            }

            // Auto-hide after delay
            if (config.autohide) {
                this.$timeout(() => {
                    this.hideToast(toast, toastElement, config.animation);
                }, config.delay);
            }
        }, 50);

        return {
            element: toastElement,
            hide: () => this.hideToast(toast, toastElement, config.animation)
        };
    }

    hideToast(toast, toastElement, animation) {
        if (!toast || !toastElement) return;

        // Remove show class for fade-out
        toast.classList.remove('show');

        // Wait for animation, then remove element
        const hideDelay = animation ? 150 : 0;
        this.$timeout(() => {
            this.removeToast(toastElement);
        }, hideDelay);
    }

    ensureContainer(position) {
        if (!this.containers.has(position)) {
            const containerHtml = `<div class="toast-container position-fixed ${position} p-3" style="z-index: 1090;"></div>`;
            const containerElement = angular.element(containerHtml);
            this.$document.find('body').append(containerElement);
            this.containers.set(position, containerElement);
        }
        return this.containers.get(position);
    }

    removeToast(toastElement) {
        if (toastElement && toastElement.length) {
            toastElement.remove();
        }
    }

    buildToastHtml(config) {
        const typeClasses = {
            success: 'bg-success text-white',
            error: 'bg-danger text-white',
            warning: 'bg-warning text-dark',
            info: 'bg-info text-white'
        };

        const bgClass = typeClasses[config.type] || '';
        const closeButtonWhite = config.type === 'warning' ? '' : 'btn-close-white';

        // Get current timestamp
        const timestamp = config.timestamp ? new Date() : null;
        const timeString = timestamp ?
            timestamp.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }) : '';

        // Base toast classes
        const toastClasses = ['toast'];
        if (config.animation) {
            toastClasses.push('fade');
        }

        // If title exists: colored header + white body
        if (config.title) {
            const closeButton = config.closeButton ?
                `<button type="button" class="btn-close ${closeButtonWhite}" aria-label="Close"></button>` :
                '';

            const timestampHtml = config.timestamp ?
                `<small class="text-white-50">${timeString}</small>` :
                '';

            return `
                <div class="${toastClasses.join(' ')}" role="alert" aria-live="assertive" aria-atomic="true" style="display: none;">
                    <div class="toast-header ${bgClass}">
                        <strong class="me-auto">${this.escapeHtml(config.title)}</strong>
                        ${timestampHtml}
                        ${closeButton}
                    </div>
                    <div class="toast-body">
                        ${this.escapeHtml(config.message)}
                    </div>
                </div>
            `;
        } else {
            // No title: colored body with close button inside
            const closeButton = config.closeButton ?
                `<button type="button" class="btn-close ${closeButtonWhite} float-end ms-2" aria-label="Close"></button>` :
                '';

            const timestampHtml = config.timestamp ?
                `<div class="mt-2 pt-2 border-top border-light" style="opacity: 0.7;"><small>${timeString}</small></div>` :
                '';

            toastClasses.push(bgClass);

            return `
                <div class="${toastClasses.join(' ')}" role="alert" aria-live="assertive" aria-atomic="true" style="display: none;">
                    <div class="toast-body ${bgClass}">
                        ${closeButton}
                        ${this.escapeHtml(config.message)}
                        ${timestampHtml}
                    </div>
                </div>
            `;
        }
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    // Convenience methods
    success(message, title, options = {}) {
        return this.create({ ...options, message, title, type: 'success' });
    }

    error(message, title, options = {}) {
        return this.create({ ...options, message, title, type: 'error' });
    }

    warning(message, title, options = {}) {
        return this.create({ ...options, message, title, type: 'warning' });
    }

    info(message, title, options = {}) {
        return this.create({ ...options, message, title, type: 'info' });
    }
}

ToastService.$inject = ['$rootScope', '$timeout', '$document'];

export default ToastService;