import app from './app';
import html from "./demo.cmp.html";

class DemoController {
    constructor($scope, $state, $transitions, TabsService) {
        'ngInject';
        console.log('ng1bs5 ES6 Demo initialized with UI-Router and Tabs');
        this.$scope = $scope;
        this.$state = $state;
        this.TabsService = TabsService;

// Demo data on scope (keeps original usage)
        $scope.message = 'Welcome to ng1bs5 ES6 Demo';
        $scope.currentState = $state.current.name;

// Get all states for navigation
        $scope.states = $state.get().filter(function (state) {
            return state.name && state.data && state.data.displayName;
        });

// Tabs array on scope - includes all demo components
        $scope.tabs = [
            {id: 'main.tabs', heading: 'Tabs', route: 'main.tabs', active: false},
            {id: 'main.modal', heading: 'Modal', route: 'main.modal', active: false},
            {id: 'main.popover', heading: 'Popover', route: 'main.popover', active: false},
            {id: 'main.tooltip', heading: 'Tooltip', route: 'main.tooltip', active: false},
            {id: 'main.dropdown', heading: 'Dropdown', route: 'main.dropdown', active: false},
            {id: 'main.accordion', heading: 'Accordion', route: 'main.accordion', active: false},
            {id: 'main.collapse', heading: 'Collapse', route: 'main.collapse', active: false},
            {id: 'main.alert', heading: 'Alert', route: 'main.alert', active: false},
            {id: 'main.toast', heading: 'Toast', route: 'main.toast', active: false},
            {id: 'main.offcanvas', heading: 'Offcanvas', route: 'main.offcanvas', active: false},
            {id: 'main.pagination', heading: 'Pagination', route: 'main.pagination', active: false},
            {id: 'main.progressbar', heading: 'Progressbar', route: 'main.progressbar', active: false}
        ];

// Listen for state changes and sync
        $transitions.onSuccess({}, (transition) => {
            $scope.$evalAsync(() => {
                $scope.currentState = transition.to().name;
                const tabId = transition.to().name + '-tab';
                TabsService.show('demoTabset', tabId);
            });
        });

// Update tab active flags on state change (legacy event kept)
        $scope.$on('$stateChangeSuccess', () => {
            $scope.tabs.forEach((tab) => {
                tab.active = this.active(tab.route);
            });
        });

// Expose helper functions on scope
        $scope.onTabSelect = (tab) => this.onTabSelect(tab);
        $scope.goToState = (stateName) => this.goToState(stateName);
        $scope.isActive = (stateName) => this.isActive(stateName);
        $scope.getCurrentStateData = () => this.getCurrentStateData();

// legacy alias
        $scope.active = (route) => this.active(route);
    }

    onTabSelect(tab) {
        const stateName = tab.tabId ? tab.tabId.replace('-tab', '') : tab.route;
        this.$state.go(stateName);
    }

    goToState(stateName) {
        this.$state.go(stateName);
    }

    isActive(stateName) {
        return this.$state.is(stateName);
    }

    getCurrentStateData() {
        return this.$state.current.data || {};
    }
}

const DemoComponent = {
    template: html,
    controller: DemoController
};


export default DemoComponent;

