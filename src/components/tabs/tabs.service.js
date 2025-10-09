import angular from 'angular';

/**
 * TabsService - Manages tab instances and provides programmatic control
 * 
 * Usage:
 *   TabsService.show(tabsetId, tabId) - Show a specific tab
 *   TabsService.getActiveTab(tabsetId) - Get the currently active tab
 */
class TabsService {
    constructor() {
        this.tabsets = new Map();
    }

    /**
     * Register a tabset controller
     * @param {string} id - Tabset ID
     * @param {Object} controller - Tabset controller instance
     */
    register(id, controller) {
        this.tabsets.set(id, controller);
    }

    /**
     * Unregister a tabset controller
     * @param {string} id - Tabset ID
     */
    unregister(id) {
        this.tabsets.delete(id);
    }

    /**
     * Show a specific tab in a tabset
     * @param {string} tabsetId - Tabset ID
     * @param {string} tabId - Tab ID to show
     */
    show(tabsetId, tabId) {
        const tabset = this.tabsets.get(tabsetId);
        if (tabset) {
            const tab = tabset.getTabById(tabId);
            if (tab) {
                tabset.select(tab);
            }
        }
    }

    /**
     * Get the currently active tab in a tabset
     * @param {string} tabsetId - Tabset ID
     * @returns {Object|null} Active tab or null
     */
    getActiveTab(tabsetId) {
        const tabset = this.tabsets.get(tabsetId);
        if (tabset) {
            return tabset.getActiveTab();
        }
        return null;
    }

    /**
     * Get all tabs in a tabset
     * @param {string} tabsetId - Tabset ID
     * @returns {Array} Array of tabs
     */
    getTabs(tabsetId) {
        const tabset = this.tabsets.get(tabsetId);
        if (tabset) {
            return tabset.tabs;
        }
        return [];
    }

    /**
     * Disable a specific tab
     * @param {string} tabsetId - Tabset ID
     * @param {string} tabId - Tab ID to disable
     */
    disable(tabsetId, tabId) {
        const tabset = this.tabsets.get(tabsetId);
        if (tabset) {
            const tab = tabset.getTabById(tabId);
            if (tab) {
                tab.disabled = true;
            }
        }
    }

    /**
     * Enable a specific tab
     * @param {string} tabsetId - Tabset ID
     * @param {string} tabId - Tab ID to enable
     */
    enable(tabsetId, tabId) {
        const tabset = this.tabsets.get(tabsetId);
        if (tabset) {
            const tab = tabset.getTabById(tabId);
            if (tab) {
                tab.disabled = false;
            }
        }
    }
}

export default TabsService;
