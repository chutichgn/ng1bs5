import angular from 'angular';

class IconDirective {
    static $inject = ['$http', '$cacheFactory'];

    constructor($http, $cacheFactory) {
        this.$http = $http;
        this.$cacheFactory = $cacheFactory;
        
        this.restrict = 'E';
        this.scope = {
            size: '=?'
        };
    }

    link = (scope, elm, attrs) => {
        let svg = null;
        let promise = null;

        const cache = this.$cacheFactory.get('icons') || this.$cacheFactory('icons');

        const load = (icon) => {
            const doRemote = () => {
                return this.$http({
                    url: `https://icons.getbootstrap.com/assets/icons/${icon}.svg`
                }).then(
                    (res) => {
                        if (svg) {
                            svg.remove();
                        }

                        svg = angular.element(res.data);
                        svg.css({
                            width: scope.size + 'px',
                            height: scope.size + 'px'
                        });

                        elm.append(svg);
                        cache.put(icon, res.data);
                    },
                    () => {
                        console.error(`Icon '${icon}' does not exist`);
                    }
                );
            };

            if (svg) {
                svg.remove();
            }

            const html = cache.get(icon);
            if (html) {
                svg = angular.element(html);
                svg.css({
                    width: scope.size + 'px',
                    height: scope.size + 'px'
                });

                elm.append(svg);
            } else {
                promise = promise ? promise.then(doRemote) : doRemote();
            }
        };

        attrs.$observe('color', (color) => {
            elm.css('color', color);
        });

        attrs.$observe('icon', (icon) => {
            icon = icon.replace(/^(bi|bi-|bi bi-)/g, '');
            load(icon);
        });

        scope.$watch('size', ($new, $old) => {
            if (!angular.equals($new, $old) && svg && angular.isNumber($new)) {
                svg.css({
                    width: $new + 'px',
                    height: $new + 'px'
                });
            }
        });
    }
}

const MODULE_NAME = 'bs5.icons';

angular
    .module(MODULE_NAME, [])
    .directive('bs5Icon', () => new IconDirective(...IconDirective.$inject));

export default MODULE_NAME;
