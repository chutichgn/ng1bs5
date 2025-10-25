/**
 * bs5 Dropdown Component
 * Bootstrap 5 Dropdown for AngularJS
 *
 * Based on Bootstrap 5.0 Dropdown API
 * https://getbootstrap.com/docs/5.0/components/dropdowns/
 */

import angular from 'angular';

const MODULE_NAME = 'ng1bs5.dropdown';

/**
 * Dropdown Directive
 * Main dropdown container directive
 *
 * @usage:
 * <div bs5-dropdown>
 *   <button bs5-dropdown-toggle>Toggle</button>
 *   <ul bs5-dropdown-menu>
 *     <li><a class="dropdown-item" href="#">Action</a></li>
 *   </ul>
 * </div>
 */
class DropdownDirective {
    constructor() {
        'ngInject';
        this.restrict = 'A';
        this.controller = DropdownController;
        this.controllerAs = '$dropdown';
        this.bindToController = true;
        this.scope = {
            autoClose: '@?bs5DropdownAutoClose',
            offset: '@?bs5DropdownOffset',
            boundary: '@?bs5DropdownBoundary',
            reference: '@?bs5DropdownReference',
            display: '@?bs5DropdownDisplay',
            onShow: '&?bs5DropdownOnShow',
            onShown: '&?bs5DropdownOnShown',
            onHide: '&?bs5DropdownOnHide',
            onHidden: '&?bs5DropdownOnHidden'
        };
    }

    static factory() {
        return new DropdownDirective();
    }
}

/**
 * Dropdown Controller
 * Manages dropdown state and behavior
 */
class DropdownController {
    constructor($element, $scope, $document, $timeout) {
        'ngInject';
        this.$element = $element;
        this.$scope = $scope;
        this.$document = $document;
        this.$timeout = $timeout;

        this.isOpen = false;
        this.toggleElement = null;
        this.menuElement = null;
        this.documentClickHandler = null;
        this.keydownHandler = null;

        // Configuration
        this.config = {
            autoClose: this.autoClose || 'true',
            offset: this.offset || '0,2',
            boundary: this.boundary || 'clippingParents',
            reference: this.reference || 'toggle',
            display: this.display || 'dynamic'
        };

        // Add dropdown class
        this.$element.addClass('dropdown');
    }

    $onDestroy() {
        this.hide();
        this.removeEventListeners();
    }

    /**
     * Register toggle element
     */
    registerToggle(element) {
        this.toggleElement = element;
    }

    /**
     * Register menu element
     */
    registerMenu(element) {
        this.menuElement = element;
    }

    /**
     * Toggle dropdown visibility
     */
    toggle(event) {
        if (event) {
            event.preventDefault();
            event.stopPropagation();
        }

        if (this.isOpen) {
            this.hide();
        } else {
            this.show();
        }
    }

    /**
     * Show dropdown
     */
    show() {
        if (this.isOpen || !this.menuElement) return;

        // Fire show event
        if (this.onShow) {
            this.onShow();
        }

        this.isOpen = true;

        // Update aria attributes
        if (this.toggleElement) {
            this.toggleElement.attr('aria-expanded', 'true');
        }

        // Show menu
        this.menuElement.addClass('show');
        this.$element.addClass('show');

        // Position menu
        this.positionMenu();

        // Setup event listeners
        this.setupEventListeners();

        // Fire shown event after transition
        this.$timeout(() => {
            if (this.onShown) {
                this.onShown();
            }
        }, 150);

        this.$scope.$applyAsync();
    }

    /**
     * Hide dropdown
     */
    hide() {
        if (!this.isOpen) return;

        // Fire hide event
        if (this.onHide) {
            this.onHide();
        }

        this.isOpen = false;

        // Update aria attributes
        if (this.toggleElement) {
            this.toggleElement.attr('aria-expanded', 'false');
        }

        // Hide menu
        this.menuElement.removeClass('show');
        this.$element.removeClass('show');

        // Remove event listeners
        this.removeEventListeners();

        // Fire hidden event after transition
        this.$timeout(() => {
            if (this.onHidden) {
                this.onHidden();
            }
        }, 150);

        this.$scope.$applyAsync();
    }

    /**
     * Position menu relative to toggle
     */
    positionMenu() {
        if (!this.menuElement || this.config.display === 'static') return;

        const toggle = this.toggleElement[0];
        const menu = this.menuElement[0];

        if (!toggle || !menu) return;

        // Get direction classes
        const isDropup = this.$element.hasClass('dropup');
        const isDropend = this.$element.hasClass('dropend');
        const isDropstart = this.$element.hasClass('dropstart');

        // Reset positioning
        menu.style.top = '';
        menu.style.left = '';
        menu.style.right = '';
        menu.style.bottom = '';

        // Simple positioning without Popper
        const toggleRect = toggle.getBoundingClientRect();
        const menuRect = menu.getBoundingClientRect();

        if (isDropup) {
            // Position above
            menu.style.bottom = '100%';
        } else if (isDropend) {
            // Position to right
            menu.style.left = '100%';
            menu.style.top = '0';
        } else if (isDropstart) {
            // Position to left
            menu.style.right = '100%';
            menu.style.top = '0';
        } else {
            // Default: position below
            menu.style.top = '100%';
        }

        // Apply offset if specified
        if (this.config.offset && this.config.offset !== '0,2') {
            const [x, y] = this.config.offset.split(',').map(v => parseInt(v.trim()));
            if (x) menu.style.marginLeft = `${x}px`;
            if (y) menu.style.marginTop = `${y}px`;
        }
    }

    /**
     * Setup document click and keyboard handlers
     */
    setupEventListeners() {
        // Document click handler
        this.documentClickHandler = (event) => {
            const target = angular.element(event.target);
            const clickedInside = this.$element[0].contains(event.target);
            const clickedOnToggle = this.toggleElement && this.toggleElement[0].contains(event.target);
            const clickedOnMenu = this.menuElement && this.menuElement[0].contains(event.target);

            // Handle autoClose behavior
            const autoClose = this.config.autoClose;

            if (autoClose === 'false') {
                // Manual close only
                return;
            } else if (autoClose === 'outside') {
                // Close only on outside clicks
                if (!clickedInside) {
                    this.hide();
                }
            } else if (autoClose === 'inside') {
                // Close only on inside clicks
                if (clickedOnMenu && !clickedOnToggle) {
                    this.hide();
                }
            } else {
                // Default: close on any click (true)
                if (!clickedOnToggle) {
                    this.hide();
                }
            }
        };

        // Keyboard handler
        this.keydownHandler = (event) => {
            if (!this.isOpen) return;

            // ESC key closes dropdown
            if (event.key === 'Escape' || event.keyCode === 27) {
                event.preventDefault();
                this.hide();
                if (this.toggleElement) {
                    this.toggleElement[0].focus();
                }
                return;
            }

            // Arrow navigation
            const items = this.menuElement[0].querySelectorAll('.dropdown-item:not(.disabled):not(:disabled)');
            if (items.length === 0) return;

            const currentIndex = Array.from(items).findIndex(item => item === document.activeElement);

            if (event.key === 'ArrowDown' || event.keyCode === 40) {
                event.preventDefault();
                const nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0;
                items[nextIndex].focus();
            } else if (event.key === 'ArrowUp' || event.keyCode === 38) {
                event.preventDefault();
                const prevIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1;
                items[prevIndex].focus();
            }
        };

        // Delay to prevent immediate trigger
        this.$timeout(() => {
            this.$document.on('click', this.documentClickHandler);
            this.$document.on('keydown', this.keydownHandler);
        }, 0);
    }

    /**
     * Remove event listeners
     */
    removeEventListeners() {
        if (this.documentClickHandler) {
            this.$document.off('click', this.documentClickHandler);
            this.documentClickHandler = null;
        }
        if (this.keydownHandler) {
            this.$document.off('keydown', this.keydownHandler);
            this.keydownHandler = null;
        }
    }

    /**
     * Update dropdown position
     */
    update() {
        if (this.isOpen) {
            this.positionMenu();
        }
    }
}

/**
 * Dropdown Toggle Directive
 * Marks the toggle button/link
 *
 * @usage:
 * <button bs5-dropdown-toggle>Toggle</button>
 */
class DropdownToggleDirective {
    constructor() {
        'ngInject';
        this.restrict = 'A';
        this.require = '^bs5Dropdown';
    }

    link(scope, element, attrs, dropdownCtrl) {
        // Register with parent dropdown
        dropdownCtrl.registerToggle(element);

        // Add dropdown-toggle class
        element.addClass('dropdown-toggle');

        // Set initial aria-expanded
        element.attr('aria-expanded', 'false');

        // Click handler
        element.on('click', (event) => {
            event.preventDefault();
            event.stopPropagation();
            dropdownCtrl.toggle(event);
        });

        // Cleanup
        scope.$on('$destroy', () => {
            element.off('click');
        });
    }

    static factory() {
        return new DropdownToggleDirective();
    }
}

/**
 * Dropdown Menu Directive
 * Marks the dropdown menu container
 *
 * @usage:
 * <ul bs5-dropdown-menu>
 *   <li><a class="dropdown-item" href="#">Item</a></li>
 * </ul>
 */
class DropdownMenuDirective {
    constructor() {
        'ngInject';
        this.restrict = 'A';
        this.require = '^bs5Dropdown';
    }

    link(scope, element, attrs, dropdownCtrl) {
        // Register with parent dropdown
        dropdownCtrl.registerMenu(element);

        // Add dropdown-menu class
        element.addClass('dropdown-menu');

        // Handle menu item clicks based on autoClose
        const clickHandler = (event) => {
            const target = event.target;
            const isDropdownItem = target.classList.contains('dropdown-item') ||
                target.closest('.dropdown-item');

            if (isDropdownItem) {
                const autoClose = dropdownCtrl.config.autoClose;

                // Don't close if autoClose is false or outside
                if (autoClose === 'false' || autoClose === 'outside') {
                    event.stopPropagation();
                }
            }
        };

        element.on('click', clickHandler);

        // Cleanup
        scope.$on('$destroy', () => {
            element.off('click', clickHandler);
        });
    }

    static factory() {
        return new DropdownMenuDirective();
    }
}

/**
 * Register module
 */
angular.module(MODULE_NAME, [])
    .directive('bs5Dropdown', DropdownDirective.factory)
    .directive('bs5DropdownToggle', DropdownToggleDirective.factory)
    .directive('bs5DropdownMenu', DropdownMenuDirective.factory);


export default MODULE_NAME;