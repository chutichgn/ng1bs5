import angular from 'angular';

class CollapseDirective {
    constructor($timeout, $animate) {
        'ngInject';

        this.$timeout = $timeout;
        this.$animate = $animate;

        this.restrict = 'A';
        this.scope = {
            collapsed: '=bs5Collapse',
            onCollapsed: '&',
            onExpanded: '&',
            onExpand: '&',
            onCollapse: '&'
        };
    }

    link = (scope, elm, attrs) => {
        elm.addClass('collapse');

        const horizontal = scope.$eval(attrs.horizontal);
        if (horizontal) {
            elm.addClass('collapse-horizontal');
        }

        let width = null;
        let height = null;

        elm.addClass('show');

        this.$timeout(() => {
            width = elm[0].offsetWidth;
            height = elm[0].offsetHeight;

            if (scope.collapsed) {
                elm.removeClass('show');
            }
        }, 0, false);

        scope.$watch(() => elm[0].offsetHeight, (value) => {
            if (elm.hasClass('show') && !elm.hasClass('collapsing') && value !== height) {
                height = value;
            }
        });

        const animate = (fn) => {
            if (horizontal) {
                elm[0].style.height = height + 'px';
                if (scope.collapsed) {
                    elm[0].style.width = width + 'px';
                    elm.addClass('collapsing show');

                    this.$timeout(() => {
                        elm[0].style.width = null;
                        const d = window.getComputedStyle(elm[0]).transitionDuration;
                        const duration = d.endsWith('ms')
                            ? parseFloat(d.substring(0, d.length - 2))
                            : parseFloat(d.substring(0, d.length - 1)) * 1000;

                        this.$timeout(() => {
                            elm.removeClass('collapsing show');
                            elm[0].style.height = null;
                            fn();
                        }, duration, false);
                    }, 0, false);
                } else {
                    elm.addClass('collapsing show');

                    this.$timeout(() => {
                        elm[0].style.width = width + 'px';
                        const d = window.getComputedStyle(elm[0]).transitionDuration;
                        const duration = d.endsWith('ms')
                            ? parseFloat(d.substring(0, d.length - 2))
                            : parseFloat(d.substring(0, d.length - 1)) * 1000;

                        this.$timeout(() => {
                            elm.removeClass('collapsing');
                            elm[0].style.width = null;
                            elm[0].style.height = null;
                            fn();
                        }, duration, false);
                    }, 0, false);
                }
            } else {
                if (scope.collapsed) {
                    elm[0].style.height = height + 'px';
                    elm.addClass('collapsing show');

                    this.$timeout(() => {
                        elm[0].style.height = null;
                        const d = window.getComputedStyle(elm[0]).transitionDuration;
                        const duration = d.endsWith('ms')
                            ? parseFloat(d.substring(0, d.length - 2))
                            : parseFloat(d.substring(0, d.length - 1)) * 1000;

                        this.$timeout(() => {
                            elm.removeClass('collapsing show');
                            fn();
                        }, duration, false);
                    }, 0, false);
                } else {
                    elm.addClass('collapsing show');

                    this.$timeout(() => {
                        elm[0].style.height = height + 'px';
                        const d = window.getComputedStyle(elm[0]).transitionDuration;
                        const duration = d.endsWith('ms')
                            ? parseFloat(d.substring(0, d.length - 2))
                            : parseFloat(d.substring(0, d.length - 1)) * 1000;

                        this.$timeout(() => {
                            elm.removeClass('collapsing');
                            elm[0].style.height = null;
                            fn();
                        }, duration, false);
                    }, 0, false);
                }
            }
        };

        scope.$watch('collapsed', ($new, $old) => {
            if (!angular.equals($new, $old)) {
                if (!elm.hasClass('collapsing')) {
                    if ($new && angular.isDefined($old)) {
                        scope.onCollapse();
                        animate(scope.onCollapsed);
                    } else if (angular.isDefined($old)) {
                        scope.onExpand();
                        animate(scope.onExpanded);
                    }
                }
            }
        });
    }
}

const MODULE_NAME = 'ng1bs5.collapse';

// Factory function - babel-plugin-angularjs-annotate will handle DI
function collapseDirectiveFactory($timeout, $animate) {
    'ngInject';
    return new CollapseDirective($timeout, $animate);
}

angular
    .module(MODULE_NAME, [])
    .directive('bs5Collapse', collapseDirectiveFactory);

export default MODULE_NAME;