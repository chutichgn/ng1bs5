/**
 * Unit Tests for ng1bs5 Dropdown Component
 * Template for Jasmine/Karma testing
 */

describe('ng1bs5 Dropdown Component', () => {
    let $compile;
    let $rootScope;
    let $timeout;
    let $document;
    let element;
    let scope;

    // Load the module
    beforeEach(angular.mock.module('ng1bs5.dropdown'));

    // Inject dependencies
    beforeEach(inject((_$compile_, _$rootScope_, _$timeout_, _$document_) => {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $timeout = _$timeout_;
        $document = _$document_;
        scope = $rootScope.$new();
    }));

    afterEach(() => {
        if (element) {
            element.remove();
        }
        scope.$destroy();
    });

    describe('Basic Functionality', () => {
        it('should create dropdown element with correct classes', () => {
            element = $compile(`
                <div ng1bs5-dropdown>
                    <button ng1bs5-dropdown-toggle>Toggle</button>
                    <ul ng1bs5-dropdown-menu></ul>
                </div>
            `)(scope);
            scope.$digest();

            expect(element.hasClass('dropdown')).toBe(true);
        });

        it('should add dropdown-toggle class to toggle button', () => {
            element = $compile(`
                <div ng1bs5-dropdown>
                    <button ng1bs5-dropdown-toggle id="toggle-btn">Toggle</button>
                    <ul ng1bs5-dropdown-menu></ul>
                </div>
            `)(scope);
            scope.$digest();

            const toggleBtn = element.find('#toggle-btn');
            expect(toggleBtn.hasClass('dropdown-toggle')).toBe(true);
        });

        it('should add dropdown-menu class to menu', () => {
            element = $compile(`
                <div ng1bs5-dropdown>
                    <button ng1bs5-dropdown-toggle>Toggle</button>
                    <ul ng1bs5-dropdown-menu id="menu"></ul>
                </div>
            `)(scope);
            scope.$digest();

            const menu = element.find('#menu');
            expect(menu.hasClass('dropdown-menu')).toBe(true);
        });

        it('should set aria-expanded to false initially', () => {
            element = $compile(`
                <div ng1bs5-dropdown>
                    <button ng1bs5-dropdown-toggle id="toggle">Toggle</button>
                    <ul ng1bs5-dropdown-menu></ul>
                </div>
            `)(scope);
            scope.$digest();

            const toggle = element.find('#toggle');
            expect(toggle.attr('aria-expanded')).toBe('false');
        });
    });

    describe('Opening and Closing', () => {
        beforeEach(() => {
            element = $compile(`
                <div ng1bs5-dropdown>
                    <button ng1bs5-dropdown-toggle id="toggle">Toggle</button>
                    <ul ng1bs5-dropdown-menu id="menu">
                        <li><a class="dropdown-item" href="#">Item 1</a></li>
                    </ul>
                </div>
            `)(scope);
            scope.$digest();
        });

        it('should open dropdown when toggle is clicked', () => {
            const toggle = element.find('#toggle');
            const menu = element.find('#menu');

            toggle.triggerHandler('click');
            scope.$digest();

            expect(menu.hasClass('show')).toBe(true);
            expect(element.hasClass('show')).toBe(true);
        });

        it('should set aria-expanded to true when opened', () => {
            const toggle = element.find('#toggle');

            toggle.triggerHandler('click');
            scope.$digest();

            expect(toggle.attr('aria-expanded')).toBe('true');
        });

        it('should close dropdown when toggle is clicked again', () => {
            const toggle = element.find('#toggle');
            const menu = element.find('#menu');

            // Open
            toggle.triggerHandler('click');
            scope.$digest();

            // Close
            toggle.triggerHandler('click');
            scope.$digest();

            expect(menu.hasClass('show')).toBe(false);
            expect(element.hasClass('show')).toBe(false);
        });

        it('should set aria-expanded to false when closed', () => {
            const toggle = element.find('#toggle');

            // Open then close
            toggle.triggerHandler('click');
            scope.$digest();
            toggle.triggerHandler('click');
            scope.$digest();

            expect(toggle.attr('aria-expanded')).toBe('false');
        });
    });

    describe('Auto-close Behavior', () => {
        it('should close on outside click by default', () => {
            element = $compile(`
                <div ng1bs5-dropdown>
                    <button ng1bs5-dropdown-toggle>Toggle</button>
                    <ul ng1bs5-dropdown-menu id="menu">
                        <li><a class="dropdown-item" href="#">Item</a></li>
                    </ul>
                </div>
            `)(scope);
            scope.$digest();

            const toggle = element.find('button');
            const menu = element.find('#menu');

            // Open dropdown
            toggle.triggerHandler('click');
            scope.$digest();
            $timeout.flush();

            expect(menu.hasClass('show')).toBe(true);

            // Click outside
            $document.triggerHandler('click');
            scope.$digest();

            expect(menu.hasClass('show')).toBe(false);
        });

        it('should close on inside click with default auto-close', () => {
            element = $compile(`
                <div ng1bs5-dropdown>
                    <button ng1bs5-dropdown-toggle>Toggle</button>
                    <ul ng1bs5-dropdown-menu id="menu">
                        <li><a class="dropdown-item" id="item">Item</a></li>
                    </ul>
                </div>
            `)(scope);
            scope.$digest();

            const toggle = element.find('button');
            const menu = element.find('#menu');
            const item = element.find('#item');

            // Open dropdown
            toggle.triggerHandler('click');
            scope.$digest();
            $timeout.flush();

            // Click inside on item
            item.triggerHandler('click');
            scope.$digest();

            expect(menu.hasClass('show')).toBe(false);
        });

        it('should not close on inside click when auto-close is "outside"', () => {
            element = $compile(`
                <div ng1bs5-dropdown ng1bs5-dropdown-auto-close="outside">
                    <button ng1bs5-dropdown-toggle>Toggle</button>
                    <ul ng1bs5-dropdown-menu id="menu">
                        <li><a class="dropdown-item" id="item">Item</a></li>
                    </ul>
                </div>
            `)(scope);
            scope.$digest();

            const toggle = element.find('button');
            const menu = element.find('#menu');
            const item = element.find('#item');

            // Open dropdown
            toggle.triggerHandler('click');
            scope.$digest();
            $timeout.flush();

            // Click inside
            item.triggerHandler('click');
            scope.$digest();

            expect(menu.hasClass('show')).toBe(true);
        });

        it('should not close at all when auto-close is "false"', () => {
            element = $compile(`
                <div ng1bs5-dropdown ng1bs5-dropdown-auto-close="false">
                    <button ng1bs5-dropdown-toggle>Toggle</button>
                    <ul ng1bs5-dropdown-menu id="menu">
                        <li><a class="dropdown-item" id="item">Item</a></li>
                    </ul>
                </div>
            `)(scope);
            scope.$digest();

            const toggle = element.find('button');
            const menu = element.find('#menu');

            // Open dropdown
            toggle.triggerHandler('click');
            scope.$digest();
            $timeout.flush();

            // Click outside
            $document.triggerHandler('click');
            scope.$digest();

            expect(menu.hasClass('show')).toBe(true);
        });
    });

    describe('Keyboard Navigation', () => {
        beforeEach(() => {
            element = $compile(`
                <div ng1bs5-dropdown>
                    <button ng1bs5-dropdown-toggle id="toggle">Toggle</button>
                    <ul ng1bs5-dropdown-menu>
                        <li><a class="dropdown-item" id="item1" href="#">Item 1</a></li>
                        <li><a class="dropdown-item" id="item2" href="#">Item 2</a></li>
                        <li><a class="dropdown-item" id="item3" href="#">Item 3</a></li>
                    </ul>
                </div>
            `)(scope);
            scope.$digest();

            // Open dropdown
            element.find('#toggle').triggerHandler('click');
            scope.$digest();
            $timeout.flush();
        });

        it('should close on ESC key', () => {
            const menu = element.find('ul');
            const escEvent = new KeyboardEvent('keydown', { key: 'Escape', keyCode: 27 });

            $document[0].dispatchEvent(escEvent);
            scope.$digest();

            expect(menu.hasClass('show')).toBe(false);
        });

        it('should navigate down with Arrow Down key', () => {
            const item1 = element.find('#item1')[0];
            const item2 = element.find('#item2')[0];

            item1.focus();

            const arrowDownEvent = new KeyboardEvent('keydown', {
                key: 'ArrowDown',
                keyCode: 40,
                bubbles: true
            });

            $document[0].dispatchEvent(arrowDownEvent);
            scope.$digest();

            // Note: In actual test, you'd verify focus moved to item2
            // This is a simplified example
        });

        it('should navigate up with Arrow Up key', () => {
            const item2 = element.find('#item2')[0];
            const item1 = element.find('#item1')[0];

            item2.focus();

            const arrowUpEvent = new KeyboardEvent('keydown', {
                key: 'ArrowUp',
                keyCode: 38,
                bubbles: true
            });

            $document[0].dispatchEvent(arrowUpEvent);
            scope.$digest();

            // Note: In actual test, you'd verify focus moved to item1
        });
    });

    describe('Events', () => {
        let onShowSpy, onShownSpy, onHideSpy, onHiddenSpy;

        beforeEach(() => {
            scope.onShow = jasmine.createSpy('onShow');
            scope.onShown = jasmine.createSpy('onShown');
            scope.onHide = jasmine.createSpy('onHide');
            scope.onHidden = jasmine.createSpy('onHidden');

            element = $compile(`
                <div ng1bs5-dropdown
                     ng1bs5-dropdown-on-show="onShow()"
                     ng1bs5-dropdown-on-shown="onShown()"
                     ng1bs5-dropdown-on-hide="onHide()"
                     ng1bs5-dropdown-on-hidden="onHidden()">
                    <button ng1bs5-dropdown-toggle>Toggle</button>
                    <ul ng1bs5-dropdown-menu>
                        <li><a class="dropdown-item" href="#">Item</a></li>
                    </ul>
                </div>
            `)(scope);
            scope.$digest();
        });

        it('should call onShow when opening', () => {
            element.find('button').triggerHandler('click');
            scope.$digest();

            expect(scope.onShow).toHaveBeenCalled();
        });

        it('should call onShown after opening transition', () => {
            element.find('button').triggerHandler('click');
            scope.$digest();
            $timeout.flush();

            expect(scope.onShown).toHaveBeenCalled();
        });

        it('should call onHide when closing', () => {
            // Open first
            element.find('button').triggerHandler('click');
            scope.$digest();

            // Then close
            element.find('button').triggerHandler('click');
            scope.$digest();

            expect(scope.onHide).toHaveBeenCalled();
        });

        it('should call onHidden after closing transition', () => {
            // Open first
            element.find('button').triggerHandler('click');
            scope.$digest();

            // Then close
            element.find('button').triggerHandler('click');
            scope.$digest();
            $timeout.flush();

            expect(scope.onHidden).toHaveBeenCalled();
        });
    });

    describe('Programmatic Control', () => {
        let dropdownCtrl;

        beforeEach(() => {
            element = $compile(`
                <div ng1bs5-dropdown ng-init="dropdown = $dropdown">
                    <button ng1bs5-dropdown-toggle>Toggle</button>
                    <ul ng1bs5-dropdown-menu id="menu">
                        <li><a class="dropdown-item" href="#">Item</a></li>
                    </ul>
                </div>
            `)(scope);
            scope.$digest();
            dropdownCtrl = scope.dropdown;
        });

        it('should expose show method', () => {
            expect(dropdownCtrl.show).toBeDefined();
            expect(typeof dropdownCtrl.show).toBe('function');
        });

        it('should expose hide method', () => {
            expect(dropdownCtrl.hide).toBeDefined();
            expect(typeof dropdownCtrl.hide).toBe('function');
        });

        it('should expose toggle method', () => {
            expect(dropdownCtrl.toggle).toBeDefined();
            expect(typeof dropdownCtrl.toggle).toBe('function');
        });

        it('should open dropdown when show() is called', () => {
            const menu = element.find('#menu');

            dropdownCtrl.show();
            scope.$digest();

            expect(menu.hasClass('show')).toBe(true);
        });

        it('should close dropdown when hide() is called', () => {
            const menu = element.find('#menu');

            // Open first
            dropdownCtrl.show();
            scope.$digest();

            // Then close
            dropdownCtrl.hide();
            scope.$digest();

            expect(menu.hasClass('show')).toBe(false);
        });

        it('should toggle dropdown when toggle() is called', () => {
            const menu = element.find('#menu');

            // Toggle to open
            dropdownCtrl.toggle();
            scope.$digest();
            expect(menu.hasClass('show')).toBe(true);

            // Toggle to close
            dropdownCtrl.toggle();
            scope.$digest();
            expect(menu.hasClass('show')).toBe(false);
        });
    });

    describe('Configuration Options', () => {
        it('should apply custom offset', () => {
            element = $compile(`
                <div ng1bs5-dropdown ng1bs5-dropdown-offset="10,20">
                    <button ng1bs5-dropdown-toggle>Toggle</button>
                    <ul ng1bs5-dropdown-menu></ul>
                </div>
            `)(scope);
            scope.$digest();

            const controller = element.controller('ng1bs5Dropdown');
            expect(controller.config.offset).toBe('10,20');
        });

        it('should respect display static option', () => {
            element = $compile(`
                <div ng1bs5-dropdown ng1bs5-dropdown-display="static">
                    <button ng1bs5-dropdown-toggle>Toggle</button>
                    <ul ng1bs5-dropdown-menu></ul>
                </div>
            `)(scope);
            scope.$digest();

            const controller = element.controller('ng1bs5Dropdown');
            expect(controller.config.display).toBe('static');
        });
    });

    describe('Cleanup', () => {
        it('should remove event listeners on destroy', () => {
            element = $compile(`
                <div ng1bs5-dropdown>
                    <button ng1bs5-dropdown-toggle>Toggle</button>
                    <ul ng1bs5-dropdown-menu></ul>
                </div>
            `)(scope);
            scope.$digest();

            // Open dropdown
            element.find('button').triggerHandler('click');
            scope.$digest();
            $timeout.flush();

            const controller = element.controller('ng1bs5Dropdown');
            expect(controller.documentClickHandler).toBeDefined();

            // Destroy
            scope.$destroy();

            expect(controller.documentClickHandler).toBe(null);
        });
    });

    describe('Edge Cases', () => {
        it('should handle multiple dropdowns on same page', () => {
            const element1 = $compile(`
                <div ng1bs5-dropdown>
                    <button ng1bs5-dropdown-toggle id="toggle1">Toggle 1</button>
                    <ul ng1bs5-dropdown-menu id="menu1">
                        <li><a class="dropdown-item" href="#">Item</a></li>
                    </ul>
                </div>
            `)(scope);

            const element2 = $compile(`
                <div ng1bs5-dropdown>
                    <button ng1bs5-dropdown-toggle id="toggle2">Toggle 2</button>
                    <ul ng1bs5-dropdown-menu id="menu2">
                        <li><a class="dropdown-item" href="#">Item</a></li>
                    </ul>
                </div>
            `)(scope);

            scope.$digest();

            // Open first dropdown
            element1.find('#toggle1').triggerHandler('click');
            scope.$digest();

            expect(element1.find('#menu1').hasClass('show')).toBe(true);
            expect(element2.find('#menu2').hasClass('show')).toBe(false);

            // Clean up
            element1.remove();
            element2.remove();
        });

        it('should handle disabled dropdown items', () => {
            element = $compile(`
                <div ng1bs5-dropdown>
                    <button ng1bs5-dropdown-toggle>Toggle</button>
                    <ul ng1bs5-dropdown-menu>
                        <li><a class="dropdown-item disabled" href="#">Disabled</a></li>
                        <li><a class="dropdown-item" href="#">Enabled</a></li>
                    </ul>
                </div>
            `)(scope);
            scope.$digest();

            const disabledItem = element.find('.disabled');
            expect(disabledItem.attr('tabindex')).toBe('-1');
            expect(disabledItem.attr('aria-disabled')).toBe('true');
        });
    });
});

/**
 * To run these tests:
 *
 * 1. Install test dependencies:
 *    npm install --save-dev karma karma-jasmine karma-chrome-launcher
 *    npm install --save-dev jasmine-core angular-mocks
 *
 * 2. Configure karma.conf.js
 *
 * 3. Run tests:
 *    npm test
 */