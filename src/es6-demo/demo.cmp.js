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

// Tabs array on scope
        $scope.tabs = [
            {id: 'tab1', heading: 'Tab 1', route: 'main.tab1', active: false},
            {id: 'tab2', heading: 'Tab 2', route: 'main.tab2', active: false},
            {id: 'tab3', heading: 'Tab 3', route: 'main.tab3', active: false},
            {id: 'main.tabs', heading: 'main tabs', route: 'main.tabs', active: false},
            {id: 'main.modal', heading: 'main modal', route: 'main.modal', active: false},
            {id: 'main.popover', heading: 'main popover', route: 'main.popover', active: false}
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

