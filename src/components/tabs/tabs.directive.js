import angular from 'angular';

/**
 * Bs5TabsetController - Manages a collection of tabs
 * 
 * Supports:
 * - Multiple tab styles (tabs, pills, underline)
 * - Vertical orientation
 * - Justify and fill options
 * - Fade animations
 * - Keyboard navigation
 * - Events (onSelect, onDeselect)
 */
class Bs5TabsetController {
    constructor($element, $scope, $timeout, TabsService) {
        this.$element = $element;
        this.$scope = $scope;
        this.$timeout = $timeout;
        this.TabsService = TabsService;
        this.tabs = [];
        this.destroyed = false;
    }

    $onInit() {
        this.element = this.$element[0];
        
        // Create nav container
        this.navElement = document.createElement('ul');
        this.navElement.className = 'nav';
        
        // Add tab style classes
        const type = this.type || 'tabs';
        if (type === 'pills') {
            this.navElement.classList.add('nav-pills');
        } else if (type === 'underline') {
            this.navElement.classList.add('nav-underline');
        } else {
            this.navElement.classList.add('nav-tabs');
        }

        // Handle justified/fill options
        if (this.justified === 'true' || this.justified === true) {
            this.navElement.classList.add('nav-justified');
        } else if (this.fill === 'true' || this.fill === true) {
            this.navElement.classList.add('nav-fill');
        }

        // Handle vertical orientation
        if (this.vertical === 'true' || this.vertical === true) {
            this.navElement.classList.add('flex-column');
            this.element.classList.add('d-flex');
        }

        // Add role for accessibility
        this.navElement.setAttribute('role', 'tablist');

        // Create content container
        this.contentElement = document.createElement('div');
        this.contentElement.className = 'tab-content';
        
        // Apply vertical flex if needed
        if (this.vertical === 'true' || this.vertical === true) {
            this.contentElement.classList.add('flex-grow-1');
        }

        // Insert nav and content elements
        this.element.insertBefore(this.navElement, this.element.firstChild);
        this.element.appendChild(this.contentElement);

        // Register with service if ID provided
        if (this.tabsetId) {
            this.TabsService.register(this.tabsetId, this);
        }

        // Setup keyboard navigation
        this.setupKeyboardNavigation();
    }

    /**
     * Add a tab to the tabset
     * @param {Object} tab - Tab controller instance
     */
    addTab(tab) {
        this.tabs.push(tab);

        // Create nav item
        const navItem = document.createElement('li');
        navItem.className = 'nav-item';
        navItem.setAttribute('role', 'presentation');

        // Create button/link
        const button = document.createElement('button');
        button.className = 'nav-link';
        button.type = 'button';
        button.setAttribute('role', 'tab');
        button.setAttribute('data-bs-toggle', 'tab');
        
        if (tab.tabId) {
            button.id = `${tab.tabId}-tab`;
            button.setAttribute('data-bs-target', `#${tab.tabId}`);
            button.setAttribute('aria-controls', tab.tabId);
        }

        // Set heading text
        button.textContent = tab.heading || 'Tab';

        // Handle disabled state
        if (tab.disabled === 'true' || tab.disabled === true) {
            button.classList.add('disabled');
            button.setAttribute('aria-disabled', 'true');
            button.setAttribute('tabindex', '-1');
        } else {
            button.setAttribute('aria-selected', 'false');
        }

        // Click handler
        button.addEventListener('click', (event) => {
            event.preventDefault();
            if (tab.disabled !== 'true' && tab.disabled !== true) {
                this.$scope.$apply(() => {
                    this.select(tab);
                });
            }
        });

        navItem.appendChild(button);
        this.navElement.appendChild(navItem);

        // Store references
        tab.navItem = navItem;
        tab.button = button;

        // Create content pane
        const pane = document.createElement('div');
        pane.className = 'tab-pane';
        pane.setAttribute('role', 'tabpanel');
        
        if (tab.tabId) {
            pane.id = tab.tabId;
            pane.setAttribute('aria-labelledby', `${tab.tabId}-tab`);
        }

        // Add fade effect if enabled
        if (this.fade === 'true' || this.fade === true) {
            pane.classList.add('fade');
        }

        // Move tab content into pane
        while (tab.element.firstChild) {
            pane.appendChild(tab.element.firstChild);
        }

        this.contentElement.appendChild(pane);
        tab.pane = pane;

        // Select first non-disabled tab or tab marked as active
        if ((tab.active === 'true' || tab.active === true) && 
            (tab.disabled !== 'true' && tab.disabled !== true)) {
            this.$timeout(() => {
                this.select(tab, true);
            });
        } else if (this.tabs.length === 1 && 
                   (tab.disabled !== 'true' && tab.disabled !== true)) {
            this.$timeout(() => {
                this.select(tab, true);
            });
        }
    }

    /**
     * Remove a tab from the tabset
     * @param {Object} tab - Tab controller instance
     */
    removeTab(tab) {
        const index = this.tabs.indexOf(tab);
        if (index !== -1) {
            this.tabs.splice(index, 1);
            
            // Remove DOM elements
            if (tab.navItem && tab.navItem.parentNode) {
                tab.navItem.parentNode.removeChild(tab.navItem);
            }
            if (tab.pane && tab.pane.parentNode) {
                tab.pane.parentNode.removeChild(tab.pane);
            }

            // If this was the active tab, select another
            if (tab.isActive && this.tabs.length > 0) {
                const nextTab = this.tabs.find(t => 
                    t.disabled !== 'true' && t.disabled !== true
                );
                if (nextTab) {
                    this.select(nextTab);
                }
            }
        }
    }

    /**
     * Select a tab
     * @param {Object} tab - Tab to select
     * @param {Boolean} isInitial - Is this the initial selection
     */
    select(tab, isInitial = false) {
        if (tab.disabled === 'true' || tab.disabled === true) {
            return;
        }

        const previousTab = this.tabs.find(t => t.isActive);

        // Trigger hide event for previous tab
        if (previousTab && previousTab !== tab) {
            this.triggerEvent(previousTab, 'hide.bs.tab', tab);
        }

        // Trigger show event for new tab
        if (!isInitial) {
            this.triggerEvent(tab, 'show.bs.tab', previousTab);
        }

        // Deselect all tabs
        this.tabs.forEach(t => {
            t.isActive = false;
            if (t.button) {
                t.button.classList.remove('active');
                t.button.setAttribute('aria-selected', 'false');
            }
            if (t.pane) {
                t.pane.classList.remove('show', 'active');
            }
        });

        // Select the new tab
        tab.isActive = true;
        if (tab.button) {
            tab.button.classList.add('active');
            tab.button.setAttribute('aria-selected', 'true');
        }
        if (tab.pane) {
            tab.pane.classList.add('active');
            
            // Add show class for fade effect
            if (this.fade === 'true' || this.fade === true) {
                // Small delay to trigger CSS transition
                this.$timeout(() => {
                    if (tab.pane) {
                        tab.pane.classList.add('show');
                    }
                }, 10);
            } else {
                tab.pane.classList.add('show');
            }
        }

        // Trigger onSelect callback
        if (this.onSelect && !isInitial) {
            this.onSelect({ tab: tab, previousTab: previousTab });
        }

        // Trigger hidden event for previous tab
        if (previousTab && previousTab !== tab) {
            this.$timeout(() => {
                this.triggerEvent(previousTab, 'hidden.bs.tab', tab);
            }, this.fade === 'true' || this.fade === true ? 150 : 0);
        }

        // Trigger shown event for new tab
        if (!isInitial) {
            this.$timeout(() => {
                this.triggerEvent(tab, 'shown.bs.tab', previousTab);
            }, this.fade === 'true' || this.fade === true ? 150 : 0);
        }
    }

    /**
     * Trigger Bootstrap tab events
     * @param {Object} tab - Tab that triggered the event
     * @param {String} eventName - Name of the event
     * @param {Object} relatedTab - Related tab (previous or next)
     */
    triggerEvent(tab, eventName, relatedTab) {
        if (!tab.button) return;

        const event = new CustomEvent(eventName, {
            bubbles: true,
            cancelable: true,
            detail: {
                relatedTarget: relatedTab ? relatedTab.button : null
            }
        });

        tab.button.dispatchEvent(event);
    }

    /**
     * Setup keyboard navigation (Arrow keys)
     */
    setupKeyboardNavigation() {
        this.navElement.addEventListener('keydown', (event) => {
            if (event.key === 'ArrowLeft' || event.key === 'ArrowRight' || 
                event.key === 'ArrowUp' || event.key === 'ArrowDown') {
                
                event.preventDefault();
                
                const currentIndex = this.tabs.findIndex(t => t.isActive);
                let nextIndex;

                const isVertical = this.vertical === 'true' || this.vertical === true;
                const forward = (isVertical && event.key === 'ArrowDown') || 
                               (!isVertical && event.key === 'ArrowRight');
                const backward = (isVertical && event.key === 'ArrowUp') || 
                                (!isVertical && event.key === 'ArrowLeft');

                if (forward) {
                    nextIndex = (currentIndex + 1) % this.tabs.length;
                } else if (backward) {
                    nextIndex = (currentIndex - 1 + this.tabs.length) % this.tabs.length;
                } else {
                    return;
                }

                // Find next non-disabled tab
                let iterations = 0;
                while ((this.tabs[nextIndex].disabled === 'true' || 
                        this.tabs[nextIndex].disabled === true) && 
                       iterations < this.tabs.length) {
                    if (forward) {
                        nextIndex = (nextIndex + 1) % this.tabs.length;
                    } else {
                        nextIndex = (nextIndex - 1 + this.tabs.length) % this.tabs.length;
                    }
                    iterations++;
                }

                if (iterations < this.tabs.length) {
                    this.$scope.$apply(() => {
                        this.select(this.tabs[nextIndex]);
                    });
                    this.tabs[nextIndex].button.focus();
                }
            }
        });
    }

    /**
     * Get a tab by its ID
     * @param {String} tabId - Tab ID
     * @returns {Object|null} Tab or null
     */
    getTabById(tabId) {
        return this.tabs.find(tab => tab.tabId === tabId) || null;
    }

    /**
     * Get the currently active tab
     * @returns {Object|null} Active tab or null
     */
    getActiveTab() {
        return this.tabs.find(tab => tab.isActive) || null;
    }

    $onDestroy() {
        this.destroyed = true;
        
        // Unregister from service
        if (this.tabsetId) {
            this.TabsService.unregister(this.tabsetId);
        }

        // Clean up tabs
        this.tabs.forEach(tab => {
            if (tab.navItem && tab.navItem.parentNode) {
                tab.navItem.parentNode.removeChild(tab.navItem);
            }
            if (tab.pane && tab.pane.parentNode) {
                tab.pane.parentNode.removeChild(tab.pane);
            }
        });
    }
}

Bs5TabsetController.$inject = ['$element', '$scope', '$timeout', 'TabsService'];

/**
 * Bs5TabController - Individual tab within a tabset
 */
class Bs5TabController {
    constructor($element) {
        this.$element = $element;
        this.isActive = false;
    }

    $onInit() {
        this.element = this.$element[0];
        this.element.style.display = 'none'; // Hide the original element

        // Require parent tabset
        if (this.tabsetCtrl) {
            this.tabsetCtrl.addTab(this);
        } else {
            console.error('bs5Tab must be used within a bs5Tabset');
        }
    }

    $onDestroy() {
        if (this.tabsetCtrl && !this.tabsetCtrl.destroyed) {
            this.tabsetCtrl.removeTab(this);
        }
    }
}

Bs5TabController.$inject = ['$element'];

/**
 * Tabset Directive Configuration
 */
export const Bs5TabsetDirective = {
    transclude: true,
    bindings: {
        tabsetId: '@',           // Unique ID for the tabset
        type: '@',                // 'tabs', 'pills', or 'underline'
        vertical: '@',            // Vertical orientation
        justified: '@',           // Justified layout
        fill: '@',                // Fill layout
        fade: '@',                // Enable fade animation
        onSelect: '&'             // Callback when tab is selected
    },
    controller: Bs5TabsetController,
    template: '<div ng-transclude></div>'
};

/**
 * Tab Directive Configuration
 */
export const Bs5TabDirective = {
    transclude: true,
    require: {
        tabsetCtrl: '^^bs5Tabset'
    },
    bindings: {
        tabId: '@',              // Unique ID for the tab
        heading: '@',            // Tab heading text
        active: '@',             // Is this tab active by default
        disabled: '@'            // Is this tab disabled
    },
    controller: Bs5TabController,
    template: '<div ng-transclude></div>'
};
