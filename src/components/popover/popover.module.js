import angular from 'angular';
import DOMModule from '../../services/dom.service';
import PositionModule from '../../services/position.service';

const POPOVER_TEMPLATE = `
<div class="popover">
    <div class="popover-arrow"></div>
    <div class="popover-header">{{title}}</div>
    <div class="popover-body"></div>
</div>`;

/**
 * Popover class to manage individual popover instances
 */
class Popover {
    constructor(popoverEl, services, config) {
        this.popoverEl = popoverEl;
        this.services = services;
        this.config = config;
        this.el = null;
        this.isVisible = false;
    }

    show() {
        this.services.$timeout(() => {
            this.el = angular.copy(this.popoverEl);
            const arrow = angular.element(this.el[0].querySelector('.popover-arrow'));

            this.config.scope.popover = this;

            this.config.scope.close = (data) => {
                this.hide();
                this.config.deferred.resolve(data);
            };

            this.config.scope.dismiss = (reason) => {
                this.hide();
                this.config.deferred.reject(reason);
            };

            this.services.$compile(this.el)(this.config.scope);

            if (this.config.popoverController) {
                const ctrl = this.services.$controller(
                    this.config.popoverController,
                    { $scope: this.config.scope }
                );

                if (angular.isFunction(ctrl.$onInit)) {
                    ctrl.$onInit();
                }
            }

            this.services.$timeout(() => {
                this.el.css({ 'position': 'absolute' });
                arrow.css('position', 'absolute');

                this.config.container.append(this.el);

                this.services.$timeout(() => {
                    const css = this.services.$bs5Position.translateTooltip(
                        this.config.elm,
                        this.el,
                        this.config.container,
                        this.config.placement,
                        this.config.fallbackPlacements,
                        this.config.offset
                    );

                    this.el.addClass(css.placementClass);
                    this.el.css(css.tip);
                    arrow.css(css.arrow);

                    if (this.config.animate) {
                        this.services.$bs5DOM.fade(this.el);
                    }

                    this.isVisible = true;
                });
            });
        }, this.getShowDelay());
    }

    hide() {
        const removeEl = () => {
            if (this.el) {
                this.el.remove();
                this.el = null;
                this.isVisible = false;
            }
        };

        if (this.el) {
            this.services.$timeout(() => {
                if (this.config.animate) {
                    this.services.$bs5DOM.fade(this.el, removeEl);
                } else {
                    removeEl();
                }
            }, this.getHideDelay());
        }
    }

    toggle() {
        if (this.isVisible) {
            this.hide();
        } else {
            this.show();
        }
    }

    getShowDelay() {
        const delay = this.config.delay;
        return angular.isObject(delay)
            ? (angular.isNumber(delay.show) ? delay.show : 0)
            : (angular.isNumber(delay) ? delay : 0);
    }

    getHideDelay() {
        const delay = this.config.delay;
        return angular.isObject(delay)
            ? (angular.isNumber(delay.hide) ? delay.hide : 0)
            : (angular.isNumber(delay) ? delay : 0);
    }
}

/**
 * Popover Directive
 * Creates Bootstrap 5 popovers with advanced features
 */
class PopoverDirective {
    static $inject = ['$templateCache', '$compile', '$http', '$q', '$timeout', '$bs5Position', '$bs5DOM', '$controller'];

    constructor($templateCache, $compile, $http, $q, $timeout, $bs5Position, $bs5DOM, $controller) {
        this.$templateCache = $templateCache;
        this.$compile = $compile;
        this.$http = $http;
        this.$q = $q;
        this.$timeout = $timeout;
        this.$bs5Position = $bs5Position;
        this.$bs5DOM = $bs5DOM;
        this.$controller = $controller;

        this.restrict = 'A';
        this.scope = {
            handler: '&?'
        };
    }

    link = (scope, elm, attrs) => {
        const deferred = this.$q.defer();

        // Support both bs5-popover and bs-popover directive names
        // Support Bootstrap-style data-bs-* attributes
        const getAttr = (name, bsName) => {
            return attrs[bsName] || attrs[name] || attrs['bs' + name.charAt(0).toUpperCase() + name.slice(1)];
        };

        // Parse configuration from attributes
        const config = {
            animate: attrs.animate ? scope.$eval(attrs.animate) : true,
            delay: scope.$eval(attrs.delay || attrs.bsDelay),
            html: scope.$eval(attrs.html || attrs.bsHtml) || false,
            placement: ['left', 'top', 'bottom', 'right'].includes(attrs.placement || attrs.bsPlacement)
                ? (attrs.placement || attrs.bsPlacement)
                : 'right',
            title: attrs.title || attrs.bsTitle || '',
            trigger: ['focus', 'hover', 'click'].includes(attrs.trigger || attrs.bsTrigger)
                ? (attrs.trigger || attrs.bsTrigger)
                : 'click',
            offset: scope.$eval(attrs.offset || attrs.bsOffset) || [0, 0],
            fallbackPlacements: scope.$eval(attrs.fallbackPlacements || attrs.bsFallbackPlacements) || ['left', 'right', 'top', 'bottom'],
            container: (attrs.container || attrs.bsContainer)
                ? angular.element(document.querySelector(attrs.container || attrs.bsContainer))
                : angular.element(document.body),
            popoverController: attrs.popoverController || attrs.bsController
        };

        // Validate offset
        if (!angular.isArray(config.offset) ||
            config.offset.length !== 2 ||
            !angular.isNumber(config.offset[0]) ||
            !angular.isNumber(config.offset[1])) {
            config.offset = [0, 0];
        }

        // Load template or content
        // Support multiple attribute names: bs5-popover, bs-popover, bs-content, content
        const contentAttr = attrs.bs5Popover || attrs.bsPopover || attrs.bsContent || attrs.content;

        if (attrs.templateUrl || attrs.bsTemplateUrl) {
            const templateUrl = attrs.templateUrl || attrs.bsTemplateUrl;
            const template = this.$templateCache.get(templateUrl);
            if (template) {
                config.html = true;
                deferred.resolve(template);
            } else {
                this.$http({
                    url: templateUrl,
                    method: 'GET'
                }).then(
                    (r) => {
                        config.html = true;
                        deferred.resolve(r.data);
                    },
                    () => {
                        deferred.resolve(contentAttr);
                        elm.removeAttr('template-url');
                    }
                );
            }
        } else {
            deferred.resolve(contentAttr);
        }

        // Process template and create popover
        deferred.promise.then((content) => {
            const tpl = POPOVER_TEMPLATE;
            const tplEl = angular.element(tpl);
            const body = angular.element(tplEl[0].querySelector('.popover-body'));

            // Set body content
            if (config.html) {
                body.html(content);
            } else {
                body.text(content);
            }

            // Add animation class
            if (config.animate) {
                tplEl.addClass('fade');
            } else {
                tplEl.addClass('show');
            }

            // Create popover scope with handler
            const popoverScope = scope.$new();
            popoverScope.title = config.title;

            const handlerDeferred = this.$q.defer();
            popoverScope.deferred = handlerDeferred;

            handlerDeferred.promise.then(
                (data) => {
                    if (scope.handler) {
                        scope.handler({ $data: data });
                    }
                },
                angular.noop
            );

            // Create popover instance
            const popoverConfig = {
                ...config,
                elm,
                scope: popoverScope,
                deferred: handlerDeferred
            };

            const popover = new Popover(tplEl, {
                $timeout: this.$timeout,
                $bs5Position: this.$bs5Position,
                $bs5DOM: this.$bs5DOM,
                $compile: this.$compile,
                $controller: this.$controller
            }, popoverConfig);

            // Bind triggers
            if (config.trigger === 'hover') {
                elm.on('mouseenter', () => popover.show());
                elm.on('mouseleave', () => popover.hide());
            } else if (config.trigger === 'focus') {
                elm.on('focus', () => popover.show());
                elm.on('blur', () => popover.hide());
            } else {
                elm.on('click', () => popover.toggle());
            }

            // Cleanup on destroy
            scope.$on('$destroy', () => {
                if (popover.el) {
                    popover.hide();
                }
            });
        });
    }
}

const POPOVER_MODULE_NAME = 'ng1bs5.popover';

angular
    .module(POPOVER_MODULE_NAME, [DOMModule, PositionModule])
    .directive('bs5Popover', () => new PopoverDirective(...PopoverDirective.$inject))
    .directive('bsPopover', () => new PopoverDirective(...PopoverDirective.$inject));

export default POPOVER_MODULE_NAME;