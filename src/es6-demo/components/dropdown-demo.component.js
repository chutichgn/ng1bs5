/**
 * Dropdown Demo Component
 * ES6 Example for ng1bs5 dropdown
 */
import html from "./dropdown-demo.component.html";

import angular from 'angular';

const template = html;

class DropdownDemoController {
    constructor($timeout) {
        'ngInject';
        this.$timeout = $timeout;

        // State
        this.selectedItem = null;
        this.eventLog = [];
        this.programmaticDropdown = null;
        this.loginForm = {
            email: '',
            password: '',
            remember: false
        };
        this.loginAttempt = null;
    }

    $onInit() {
        console.log('Dropdown Demo Component initialized');
    }

    selectItem(item) {
        this.selectedItem = item;
        console.log('Selected:', item);
    }

    handleLogin(event) {
        event.preventDefault();
        this.loginAttempt = angular.copy(this.loginForm);
        console.log('Login submitted:', this.loginAttempt);

        // Reset form
        this.loginForm = {
            email: '',
            password: '',
            remember: false
        };
    }

    onDropdownShow() {
        this.addEventLog('onShow - Dropdown is about to show');
    }

    onDropdownShown() {
        this.addEventLog('onShown - Dropdown is now visible');
    }

    onDropdownHide() {
        this.addEventLog('onHide - Dropdown is about to hide');
    }

    onDropdownHidden() {
        this.addEventLog('onHidden - Dropdown is now hidden');
    }

    addEventLog(message) {
        const timestamp = new Date().toLocaleTimeString();
        this.eventLog.unshift(`[${timestamp}] ${message}`);

        // Keep only last 10 events
        if (this.eventLog.length > 10) {
            this.eventLog.pop();
        }

        console.log(message);
    }
}

const DropdownDemoComponent = {
    template,
    controller: DropdownDemoController
};

export default DropdownDemoComponent;