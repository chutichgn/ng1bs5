/**
 * Popover Component - Unit Tests
 * 
 * This file demonstrates how to test the bs5Popover directive.
 * These tests use Jasmine and angular-mocks.
 */

describe('bs5Popover directive', function() {
    var $compile, $rootScope, $timeout, $templateCache, $document;
    var element, scope;

    // Load the module
    beforeEach(module('ng1bs5.popover'));

    // Inject dependencies
    beforeEach(inject(function(_$compile_, _$rootScope_, _$timeout_, _$templateCache_, _$document_) {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
        $timeout = _$timeout_;
        $templateCache = _$templateCache_;
        $document = _$document_;
        scope = $rootScope.$new();
    }));

    afterEach(function() {
        if (element) {
            element.remove();
        }
        // Clean up any popovers in the document
        angular.element(document.querySelectorAll('.popover')).remove();
    });

    describe('Basic functionality', function() {
        it('should create a popover on click', function() {
            element = angular.element(
                '<button bs5-popover="Test content" title="Test Title">Click</button>'
            );
            $compile(element)(scope);
            scope.$digest();

            // Click the button
            element.triggerHandler('click');
            $timeout.flush();

            // Popover should exist in document
            var popover = angular.element(document.querySelector('.popover'));
            expect(popover.length).toBe(1);
            expect(popover.find('.popover-body').text()).toContain('Test content');
            expect(popover.find('.popover-header').text()).toContain('Test Title');
        });

        it('should toggle popover on multiple clicks', function() {
            element = angular.element(
                '<button bs5-popover="Test" title="Title">Click</button>'
            );
            $compile(element)(scope);
            scope.$digest();

            // First click - show
            element.triggerHandler('click');
            $timeout.flush();
            expect(document.querySelectorAll('.popover').length).toBe(1);

            // Second click - hide
            element.triggerHandler('click');
            $timeout.flush();
            expect(document.querySelectorAll('.popover').length).toBe(0);
        });

        it('should support HTML content when html=true', function() {
            element = angular.element(
                '<button bs5-popover="<strong>Bold</strong>" html="true" title="Title">Click</button>'
            );
            $compile(element)(scope);
            scope.$digest();

            element.triggerHandler('click');
            $timeout.flush();

            var popover = angular.element(document.querySelector('.popover'));
            var strong = popover.find('strong');
            expect(strong.length).toBe(1);
            expect(strong.text()).toBe('Bold');
        });
    });

    describe('Placement options', function() {
        ['top', 'right', 'bottom', 'left'].forEach(function(placement) {
            it('should support placement="' + placement + '"', function() {
                element = angular.element(
                    '<button bs5-popover="Content" title="Title" placement="' + placement + '">Click</button>'
                );
                $compile(element)(scope);
                scope.$digest();

                element.triggerHandler('click');
                $timeout.flush();

                var popover = angular.element(document.querySelector('.popover'));
                var expectedClass = placement === 'left' ? 'bs-popover-start' :
                                  placement === 'right' ? 'bs-popover-end' :
                                  'bs-popover-' + placement;
                expect(popover.hasClass(expectedClass)).toBe(true);
            });
        });
    });

    describe('Trigger options', function() {
        it('should show on hover when trigger="hover"', function() {
            element = angular.element(
                '<button bs5-popover="Content" title="Title" trigger="hover">Hover</button>'
            );
            $compile(element)(scope);
            scope.$digest();

            element.triggerHandler('mouseenter');
            $timeout.flush();

            expect(document.querySelectorAll('.popover').length).toBe(1);

            element.triggerHandler('mouseleave');
            $timeout.flush();

            expect(document.querySelectorAll('.popover').length).toBe(0);
        });

        it('should show on focus when trigger="focus"', function() {
            element = angular.element(
                '<input bs5-popover="Content" title="Title" trigger="focus" />'
            );
            $compile(element)(scope);
            scope.$digest();

            element.triggerHandler('focus');
            $timeout.flush();

            expect(document.querySelectorAll('.popover').length).toBe(1);

            element.triggerHandler('blur');
            $timeout.flush();

            expect(document.querySelectorAll('.popover').length).toBe(0);
        });
    });

    describe('Template support', function() {
        beforeEach(function() {
            $templateCache.put('test-popover.html', 
                '<div><p>Template content</p><button ng-click="close(\'data\')">Close</button></div>'
            );
        });

        it('should load content from templateUrl', function() {
            element = angular.element(
                '<button bs5-popover template-url="test-popover.html" title="Title">Click</button>'
            );
            $compile(element)(scope);
            scope.$digest();

            element.triggerHandler('click');
            $timeout.flush();

            var popover = angular.element(document.querySelector('.popover'));
            expect(popover.find('p').text()).toBe('Template content');
        });

        it('should provide close() function in template scope', function() {
            element = angular.element(
                '<button bs5-popover template-url="test-popover.html" title="Title">Click</button>'
            );
            $compile(element)(scope);
            scope.$digest();

            element.triggerHandler('click');
            $timeout.flush();

            var closeButton = angular.element(document.querySelector('.popover button'));
            expect(closeButton.length).toBe(1);

            closeButton.triggerHandler('click');
            $timeout.flush();

            // Popover should be removed
            expect(document.querySelectorAll('.popover').length).toBe(0);
        });
    });

    describe('Controller binding', function() {
        beforeEach(function() {
            $templateCache.put('controller-popover.html',
                '<div><p>{{ctrl.message}}</p><button ng-click="ctrl.update()">Update</button></div>'
            );

            angular.module('ng1bs5.popover').controller('TestPopoverController', function() {
                var ctrl = this;
                ctrl.message = 'Initial';
                
                ctrl.update = function() {
                    ctrl.message = 'Updated';
                };

                ctrl.$onInit = function() {
                    ctrl.initialized = true;
                };
            });
        });

        it('should bind controller to popover scope', function() {
            element = angular.element(
                '<button bs5-popover ' +
                'template-url="controller-popover.html" ' +
                'title="Title" ' +
                'popover-controller="TestPopoverController as ctrl">Click</button>'
            );
            $compile(element)(scope);
            scope.$digest();

            element.triggerHandler('click');
            $timeout.flush();

            var popover = angular.element(document.querySelector('.popover'));
            expect(popover.find('p').text()).toBe('Initial');

            var button = popover.find('button');
            button.triggerHandler('click');
            scope.$digest();

            expect(popover.find('p').text()).toBe('Updated');
        });

        it('should call controller $onInit if it exists', function() {
            var initSpy = jasmine.createSpy('$onInit');
            
            angular.module('ng1bs5.popover').controller('InitTestController', function() {
                this.$onInit = initSpy;
            });

            $templateCache.put('init-test.html', '<div>Test</div>');

            element = angular.element(
                '<button bs5-popover ' +
                'template-url="init-test.html" ' +
                'title="Title" ' +
                'popover-controller="InitTestController">Click</button>'
            );
            $compile(element)(scope);
            scope.$digest();

            element.triggerHandler('click');
            $timeout.flush();

            expect(initSpy).toHaveBeenCalled();
        });
    });

    describe('Handler callback', function() {
        it('should call handler when close() is called with data', function() {
            var handlerSpy = jasmine.createSpy('handler');
            scope.handler = handlerSpy;

            $templateCache.put('handler-test.html',
                '<button ng-click="close(\'test-data\')">Close</button>'
            );

            element = angular.element(
                '<button bs5-popover ' +
                'template-url="handler-test.html" ' +
                'title="Title" ' +
                'handler="handler($data)">Click</button>'
            );
            $compile(element)(scope);
            scope.$digest();

            element.triggerHandler('click');
            $timeout.flush();

            var closeBtn = angular.element(document.querySelector('.popover button'));
            closeBtn.triggerHandler('click');
            $timeout.flush();

            expect(handlerSpy).toHaveBeenCalledWith('test-data');
        });

        it('should not call handler when dismiss() is used', function() {
            var handlerSpy = jasmine.createSpy('handler');
            scope.handler = handlerSpy;

            $templateCache.put('dismiss-test.html',
                '<button ng-click="dismiss(\'cancelled\')">Dismiss</button>'
            );

            element = angular.element(
                '<button bs5-popover ' +
                'template-url="dismiss-test.html" ' +
                'title="Title" ' +
                'handler="handler($data)">Click</button>'
            );
            $compile(element)(scope);
            scope.$digest();

            element.triggerHandler('click');
            $timeout.flush();

            var dismissBtn = angular.element(document.querySelector('.popover button'));
            dismissBtn.triggerHandler('click');
            $timeout.flush();

            expect(handlerSpy).not.toHaveBeenCalled();
        });
    });

    describe('Animation', function() {
        it('should add fade class when animate=true', function() {
            element = angular.element(
                '<button bs5-popover="Content" title="Title" animate="true">Click</button>'
            );
            $compile(element)(scope);
            scope.$digest();

            element.triggerHandler('click');
            $timeout.flush();

            var popover = angular.element(document.querySelector('.popover'));
            expect(popover.hasClass('fade')).toBe(true);
        });

        it('should not add fade class when animate=false', function() {
            element = angular.element(
                '<button bs5-popover="Content" title="Title" animate="false">Click</button>'
            );
            $compile(element)(scope);
            scope.$digest();

            element.triggerHandler('click');
            $timeout.flush();

            var popover = angular.element(document.querySelector('.popover'));
            expect(popover.hasClass('fade')).toBe(false);
            expect(popover.hasClass('show')).toBe(true);
        });
    });

    describe('Delay options', function() {
        it('should delay show when delay is number', function() {
            element = angular.element(
                '<button bs5-popover="Content" title="Title" delay="500">Click</button>'
            );
            $compile(element)(scope);
            scope.$digest();

            element.triggerHandler('click');
            
            // Should not be visible immediately
            expect(document.querySelectorAll('.popover').length).toBe(0);

            // Should be visible after delay
            $timeout.flush(500);
            expect(document.querySelectorAll('.popover').length).toBe(1);
        });

        it('should support separate show and hide delays', function() {
            element = angular.element(
                '<button bs5-popover="Content" title="Title" delay="{show: 300, hide: 600}">Click</button>'
            );
            $compile(element)(scope);
            scope.$digest();

            element.triggerHandler('click');
            $timeout.flush(300);
            expect(document.querySelectorAll('.popover').length).toBe(1);

            // Toggle to hide
            element.triggerHandler('click');
            $timeout.flush(600);
            expect(document.querySelectorAll('.popover').length).toBe(0);
        });
    });

    describe('Custom positioning', function() {
        it('should apply offset values', function() {
            element = angular.element(
                '<button bs5-popover="Content" title="Title" offset="[10, 20]">Click</button>'
            );
            $compile(element)(scope);
            scope.$digest();

            element.triggerHandler('click');
            $timeout.flush();

            var popover = angular.element(document.querySelector('.popover'));
            var transform = popover.css('transform');
            
            expect(transform).toBeDefined();
            // The exact transform values will depend on element positions
        });
    });

    describe('Custom container', function() {
        it('should append popover to custom container', function() {
            var container = angular.element('<div id="custom-container"></div>');
            angular.element(document.body).append(container);

            element = angular.element(
                '<button bs5-popover="Content" title="Title" container="#custom-container">Click</button>'
            );
            $compile(element)(scope);
            scope.$digest();

            element.triggerHandler('click');
            $timeout.flush();

            var popover = container.find('.popover');
            expect(popover.length).toBe(1);

            container.remove();
        });
    });

    describe('Cleanup', function() {
        it('should remove popover on scope destroy', function() {
            element = angular.element(
                '<button bs5-popover="Content" title="Title">Click</button>'
            );
            $compile(element)(scope);
            scope.$digest();

            element.triggerHandler('click');
            $timeout.flush();

            expect(document.querySelectorAll('.popover').length).toBe(1);

            scope.$destroy();
            $timeout.flush();

            expect(document.querySelectorAll('.popover').length).toBe(0);
        });
    });
});

/**
 * Running the tests:
 * 
 * 1. Install test dependencies:
 *    npm install --save-dev karma karma-jasmine karma-chrome-launcher 
 *    npm install --save-dev jasmine-core angular-mocks
 * 
 * 2. Create karma.conf.js configuration
 * 
 * 3. Run tests:
 *    npm test
 * 
 * See package.json for test script configuration.
 */
