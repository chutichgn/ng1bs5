/**
 * Dropdown Demo Component
 * ES6 Example for ng1bs5 dropdown
 */

import angular from 'angular';

const template = `
<div class="container-fluid py-4">
    <h1 class="mb-4">ng1bs5 Dropdown Component Demo</h1>
    
    <!-- Basic Examples -->
    <div class="card mb-4">
        <div class="card-header">
            <h3>Basic Dropdowns</h3>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-md-4 mb-3">
                    <h5>Button Dropdown</h5>
                    <div ng1bs5-dropdown>
                        <button class="btn btn-primary" ng1bs5-dropdown-toggle>
                            Dropdown Button
                        </button>
                        <ul ng1bs5-dropdown-menu>
                            <li><a class="dropdown-item" href="#" ng-click="$ctrl.selectItem('Action 1')">Action</a></li>
                            <li><a class="dropdown-item" href="#" ng-click="$ctrl.selectItem('Action 2')">Another action</a></li>
                            <li><a class="dropdown-item" href="#" ng-click="$ctrl.selectItem('Action 3')">Something else</a></li>
                        </ul>
                    </div>
                </div>
                
                <div class="col-md-4 mb-3">
                    <h5>Split Button</h5>
                    <div class="btn-group" ng1bs5-dropdown>
                        <button type="button" class="btn btn-success" ng-click="$ctrl.selectItem('Primary Action')">
                            Action
                        </button>
                        <button type="button" class="btn btn-success dropdown-toggle-split" 
                                ng1bs5-dropdown-toggle>
                            <span class="visually-hidden">Toggle Dropdown</span>
                        </button>
                        <ul ng1bs5-dropdown-menu>
                            <li><a class="dropdown-item" href="#" ng-click="$ctrl.selectItem('Option 1')">Option 1</a></li>
                            <li><a class="dropdown-item" href="#" ng-click="$ctrl.selectItem('Option 2')">Option 2</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#" ng-click="$ctrl.selectItem('Option 3')">Option 3</a></li>
                        </ul>
                    </div>
                </div>
                
                <div class="col-md-4 mb-3">
                    <h5>Dark Dropdown</h5>
                    <div ng1bs5-dropdown>
                        <button class="btn btn-dark" ng1bs5-dropdown-toggle>
                            Dark Menu
                        </button>
                        <ul ng1bs5-dropdown-menu class="dropdown-menu-dark">
                            <li><a class="dropdown-item active" href="#">Active</a></li>
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><a class="dropdown-item" href="#">Separated link</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Directions -->
    <div class="card mb-4">
        <div class="card-header">
            <h3>Dropdown Directions</h3>
        </div>
        <div class="card-body">
            <div class="d-flex gap-3 flex-wrap">
                <div class="btn-group" ng1bs5-dropdown>
                    <button class="btn btn-secondary" ng1bs5-dropdown-toggle>
                        Dropdown
                    </button>
                    <ul ng1bs5-dropdown-menu>
                        <li><a class="dropdown-item" href="#">Menu item</a></li>
                        <li><a class="dropdown-item" href="#">Menu item</a></li>
                    </ul>
                </div>
                
                <div class="btn-group dropup" ng1bs5-dropdown>
                    <button class="btn btn-secondary" ng1bs5-dropdown-toggle>
                        Dropup
                    </button>
                    <ul ng1bs5-dropdown-menu>
                        <li><a class="dropdown-item" href="#">Menu item</a></li>
                        <li><a class="dropdown-item" href="#">Menu item</a></li>
                    </ul>
                </div>
                
                <div class="btn-group dropend" ng1bs5-dropdown>
                    <button class="btn btn-secondary" ng1bs5-dropdown-toggle>
                        Dropend
                    </button>
                    <ul ng1bs5-dropdown-menu>
                        <li><a class="dropdown-item" href="#">Menu item</a></li>
                        <li><a class="dropdown-item" href="#">Menu item</a></li>
                    </ul>
                </div>
                
                <div class="btn-group dropstart" ng1bs5-dropdown>
                    <button class="btn btn-secondary" ng1bs5-dropdown-toggle>
                        Dropstart
                    </button>
                    <ul ng1bs5-dropdown-menu>
                        <li><a class="dropdown-item" href="#">Menu item</a></li>
                        <li><a class="dropdown-item" href="#">Menu item</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Auto-close Behavior -->
    <div class="card mb-4">
        <div class="card-header">
            <h3>Auto-close Behavior</h3>
        </div>
        <div class="card-body">
            <div class="d-flex gap-3 flex-wrap">
                <div ng1bs5-dropdown ng1bs5-dropdown-auto-close="true">
                    <button class="btn btn-info" ng1bs5-dropdown-toggle>
                        Default (closes on any click)
                    </button>
                    <ul ng1bs5-dropdown-menu>
                        <li><a class="dropdown-item" href="#">Click closes</a></li>
                        <li><a class="dropdown-item" href="#">This too</a></li>
                    </ul>
                </div>
                
                <div ng1bs5-dropdown ng1bs5-dropdown-auto-close="outside">
                    <button class="btn btn-info" ng1bs5-dropdown-toggle>
                        Clickable inside
                    </button>
                    <ul ng1bs5-dropdown-menu>
                        <li><a class="dropdown-item" href="#">Click won't close</a></li>
                        <li><a class="dropdown-item" href="#">Still open</a></li>
                    </ul>
                </div>
                
                <div ng1bs5-dropdown ng1bs5-dropdown-auto-close="inside">
                    <button class="btn btn-info" ng1bs5-dropdown-toggle>
                        Clickable outside
                    </button>
                    <ul ng1bs5-dropdown-menu>
                        <li><a class="dropdown-item" href="#">Click closes</a></li>
                        <li><a class="dropdown-item" href="#">Me too</a></li>
                    </ul>
                </div>
                
                <div ng1bs5-dropdown ng1bs5-dropdown-auto-close="false">
                    <button class="btn btn-info" ng1bs5-dropdown-toggle>
                        Manual close
                    </button>
                    <ul ng1bs5-dropdown-menu>
                        <li><a class="dropdown-item" href="#">Won't auto-close</a></li>
                        <li><a class="dropdown-item" href="#">Use toggle button</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Form in Dropdown -->
    <div class="card mb-4">
        <div class="card-header">
            <h3>Form in Dropdown</h3>
        </div>
        <div class="card-body">
            <div ng1bs5-dropdown ng1bs5-dropdown-auto-close="outside">
                <button class="btn btn-primary" ng1bs5-dropdown-toggle>
                    Login Form
                </button>
                <form ng1bs5-dropdown-menu class="px-4 py-3" style="min-width: 320px;" ng-submit="$ctrl.handleLogin($event)">
                    <div class="mb-3">
                        <label class="form-label">Email address</label>
                        <input type="email" class="form-control" ng-model="$ctrl.loginForm.email" placeholder="email@example.com">
                    </div>
                    <div class="mb-3">
                        <label class="form-label">Password</label>
                        <input type="password" class="form-control" ng-model="$ctrl.loginForm.password" placeholder="Password">
                    </div>
                    <div class="mb-3">
                        <div class="form-check">
                            <input type="checkbox" class="form-check-input" id="rememberMe" ng-model="$ctrl.loginForm.remember">
                            <label class="form-check-label" for="rememberMe">
                                Remember me
                            </label>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary">Sign in</button>
                </form>
            </div>
        </div>
    </div>
    
    <!-- Events Demo -->
    <div class="card mb-4">
        <div class="card-header">
            <h3>Events</h3>
        </div>
        <div class="card-body">
            <div ng1bs5-dropdown 
                 ng1bs5-dropdown-on-show="$ctrl.onDropdownShow()"
                 ng1bs5-dropdown-on-shown="$ctrl.onDropdownShown()"
                 ng1bs5-dropdown-on-hide="$ctrl.onDropdownHide()"
                 ng1bs5-dropdown-on-hidden="$ctrl.onDropdownHidden()">
                <button class="btn btn-warning" ng1bs5-dropdown-toggle>
                    Dropdown with Events
                </button>
                <ul ng1bs5-dropdown-menu>
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else</a></li>
                </ul>
            </div>
            
            <div class="alert alert-info mt-3">
                <strong>Event Log:</strong>
                <ul class="mb-0">
                    <li ng-repeat="event in $ctrl.eventLog track by $index">{{ event }}</li>
                    <li ng-if="$ctrl.eventLog.length === 0">No events yet. Open the dropdown above.</li>
                </ul>
            </div>
        </div>
    </div>
    
    <!-- Programmatic Control -->
    <div class="card mb-4">
        <div class="card-header">
            <h3>Programmatic Control</h3>
        </div>
        <div class="card-body">
            <div ng1bs5-dropdown ng-init="$ctrl.programmaticDropdown = $dropdown">
                <button class="btn btn-secondary" ng1bs5-dropdown-toggle>
                    Controlled Dropdown
                </button>
                <ul ng1bs5-dropdown-menu>
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else</a></li>
                </ul>
            </div>
            
            <div class="mt-3">
                <button class="btn btn-success" ng-click="$ctrl.programmaticDropdown.show()">
                    Show
                </button>
                <button class="btn btn-danger" ng-click="$ctrl.programmaticDropdown.hide()">
                    Hide
                </button>
                <button class="btn btn-primary" ng-click="$ctrl.programmaticDropdown.toggle()">
                    Toggle
                </button>
            </div>
        </div>
    </div>
    
    <!-- Menu Content Variations -->
    <div class="card mb-4">
        <div class="card-header">
            <h3>Menu Content Variations</h3>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col-md-4 mb-3">
                    <h5>Headers & Dividers</h5>
                    <div ng1bs5-dropdown>
                        <button class="btn btn-secondary" ng1bs5-dropdown-toggle>
                            Menu
                        </button>
                        <ul ng1bs5-dropdown-menu>
                            <li><h6 class="dropdown-header">Section 1</h6></li>
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><hr class="dropdown-divider"></li>
                            <li><h6 class="dropdown-header">Section 2</h6></li>
                            <li><a class="dropdown-item" href="#">Something else</a></li>
                        </ul>
                    </div>
                </div>
                
                <div class="col-md-4 mb-3">
                    <h5>Active & Disabled</h5>
                    <div ng1bs5-dropdown>
                        <button class="btn btn-secondary" ng1bs5-dropdown-toggle>
                            States
                        </button>
                        <ul ng1bs5-dropdown-menu>
                            <li><a class="dropdown-item" href="#">Regular link</a></li>
                            <li><a class="dropdown-item active" href="#" aria-current="true">Active link</a></li>
                            <li><a class="dropdown-item disabled" href="#" tabindex="-1" aria-disabled="true">Disabled link</a></li>
                        </ul>
                    </div>
                </div>
                
                <div class="col-md-4 mb-3">
                    <h5>Text Content</h5>
                    <div ng1bs5-dropdown>
                        <button class="btn btn-secondary" ng1bs5-dropdown-toggle>
                            Text
                        </button>
                        <div ng1bs5-dropdown-menu class="p-4 text-muted" style="max-width: 250px;">
                            <p>Some example text that's free-flowing within the dropdown menu.</p>
                            <p class="mb-0">And more text here.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <!-- Status Display -->
    <div class="card">
        <div class="card-header">
            <h3>Status</h3>
        </div>
        <div class="card-body">
            <div class="alert alert-success" ng-if="$ctrl.selectedItem">
                <strong>Last selected:</strong> {{ $ctrl.selectedItem }}
            </div>
            <div class="alert alert-secondary" ng-if="!$ctrl.selectedItem">
                No item selected yet
            </div>
            
            <div class="alert alert-info" ng-if="$ctrl.loginAttempt">
                <strong>Login attempt:</strong><br>
                Email: {{ $ctrl.loginAttempt.email }}<br>
                Remember me: {{ $ctrl.loginAttempt.remember ? 'Yes' : 'No' }}
            </div>
        </div>
    </div>
</div>
`;

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