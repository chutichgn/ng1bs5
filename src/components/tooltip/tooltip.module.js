import angular from 'angular';
import DOMModule from '../../services/dom.service';
import PositionModule from '../../services/position.service';

const TEMPLATE = `
<div class="tooltip">
    <div class="tooltip-arrow"></div>
    <div class="tooltip-inner"></div>
</div>`;

class TooltipDirective {
    static $inject = ['$templateCache', '$compile', '$http', '$q', '$bs5Position', '$bs5DOM', '$timeout'];

    constructor($templateCache, $compile, $http, $q, $bs5Position, $bs5DOM, $timeout) {
        this.$templateCache = $templateCache;
        this.$compile = $compile;
        this.$http = $http;
        this.$q = $q;
        this.$bs5Position = $bs5Position;
        this.$bs5DOM = $bs5DOM;
        this.$timeout = $timeout;
        
        this.restrict = 'A';
    }

    link = (scope, elm, attrs) => {
        const deferred = this.$q.defer();

        const offset = /^\[ *?\d+?, *?\d+? *?\]$/.test(attrs.offset) ? scope.$eval(attrs.offset) : [0, 0];
        const delay = scope.$eval(attrs.delay);
        const animate = attrs.animate ? scope.$eval(attrs.animate) : true;
        const html = scope.$eval(attrs.html);
        const placement = ['left', 'bottom', 'right', 'top'].includes(attrs.placement) ? attrs.placement : 'top';
        let fp = scope.$eval(attrs.fallbackPlacements);
        fp = angular.isArray(fp) ? fp : ['left', 'right', 'top', 'bottom'];
        const container = attrs.container 
            ? angular.element(document.querySelector(attrs.container)) 
            : angular.element(document.body);

        if (!(container instanceof angular.element) || !container.length) {
            throw new DOMException('bs5Tooltip: The specified container could not be found');
        }

        if (attrs.templateUrl) {
            this.$http({
                url: attrs.templateUrl,
                method: 'GET'
            }).then(
                (r) => {
                    deferred.resolve(r.data);
                },
                () => {
                    deferred.resolve(attrs.bs5Tooltip);
                }
            );
        } else {
            deferred.resolve(attrs.bs5Tooltip);
        }

        deferred.promise.then((content) => {
            class Tooltip {
                constructor(tooltipEl, services) {
                    this.tooltipEl = tooltipEl;
                    this.services = services;
                    this.el = null;
                    this.visible = false;
                }

                show() {
                    this.services.$timeout(() => {
                        if (this.el) {
                            this.el.remove();
                        }
                        
                        this.el = angular.copy(this.tooltipEl);
                        const arrow = angular.element(this.el[0].querySelector('.tooltip-arrow'));

                        this.el.css({ 'position': 'absolute' });
                        arrow.css('position', 'absolute');

                        container.append(this.el);

                        this.services.$timeout(() => {
                            const css = this.services.$bs5Position.translateTooltip(elm, this.el, container, placement, fp, offset);

                            this.el.addClass(css.placementClass);
                            this.el.css(css.tip);
                            arrow.css(css.arrow);

                            if (animate) {
                                this.services.$bs5DOM.fade(this.el);
                            }

                            this.visible = true;
                        });
                    }, angular.isObject(delay) ? (angular.isNumber(delay.show) ? delay.show : 0) : (angular.isNumber(delay) ? delay : 0));
                }

                hide() {
                    const removeEl = () => {
                        this.el.remove();
                        this.visible = false;
                    };

                    this.services.$timeout(() => {
                        if (animate) {
                            this.services.$bs5DOM.fade(this.el, removeEl);
                        } else {
                            removeEl();
                        }
                    }, angular.isObject(delay) ? (angular.isNumber(delay.hide) ? delay.hide : 0) : (angular.isNumber(delay) ? delay : 0), false);
                }

                toggle() {
                    if (this.visible) {
                        this.hide();
                    } else {
                        this.show();
                    }
                }
            }

            const tplEl = angular.element(TEMPLATE);
            tplEl.css('max-width', '200px');

            if (animate) {
                tplEl.addClass('fade');
            } else {
                tplEl.addClass('show');
            }

            const body = angular.element(tplEl[0].querySelector('.tooltip-inner'));
            html ? body.html(content) : body.text(content);

            const tooltip = new Tooltip(tplEl, {
                $timeout: this.$timeout,
                $bs5Position: this.$bs5Position,
                $bs5DOM: this.$bs5DOM
            });

            if (attrs.trigger === 'click') {
                elm.on('click', () => tooltip.toggle());
            } else if (attrs.trigger === 'focus') {
                elm.on('focus', () => tooltip.show());
                elm.on('blur', () => tooltip.hide());
            } else {
                elm.on('mouseenter', () => tooltip.show());
                elm.on('mouseleave', () => tooltip.hide());
            }
        });
    }
}

const MODULE_NAME = 'ng1bs5.tooltip';

angular
    .module(MODULE_NAME, [DOMModule, PositionModule])
    .directive('bs5Tooltip', () => new TooltipDirective(...TooltipDirective.$inject));

export default MODULE_NAME;
