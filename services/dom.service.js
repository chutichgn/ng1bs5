import angular from 'angular';

export class DOMService {
    static $inject = ['$q', '$animate', '$timeout'];

    constructor($q, $animate, $timeout) {
        this.$q = $q;
        this.$animate = $animate;
        this.$timeout = $timeout;
    }

    /**
     * Find the nearest relative positioned container
     */
    findRelativeContainer(elm) {
        elm = elm instanceof HTMLElement ? angular.element(elm) : elm;

        let node = elm;
        let style = window.getComputedStyle(node[0]);

        while (style && style.position !== 'relative') {
            node = node.parent();
            style = node[0] !== document ? window.getComputedStyle(node[0]) : null;
        }

        return style ? node : null;
    }

    /**
     * Find the nearest scrollable element
     */
    findScrollableElement(elm) {
        let node = elm.parent();
        let style = window.getComputedStyle(node[0]);
        const exp = /^(auto|scroll)$/;

        while (!exp.test(style.overflow) && !exp.test(style.overflowX) && !exp.test(style.overflowY) && node.length) {
            node = elm.parent();
            style = window.getComputedStyle(node[0]);
        }

        return node.length ? node : null;
    }

    /**
     * Check if element is contained within another element
     */
    contains(elm, container) {
        elm = elm instanceof HTMLElement ? angular.element(elm) : elm;
        container = container instanceof HTMLElement ? angular.element(container) : container;

        let node = elm.parent();

        while (!angular.equals(node, container) && node.length) {
            node = node.parent();
        }

        return !!node.length;
    }

    /**
     * Get previous sibling element
     */
    prev(elm) {
        elm = elm instanceof HTMLElement ? angular.element(elm) : elm;

        const children = elm.parent().children();
        let prev = angular.element([]);

        for (let i = 1; i < children.length; i++) {
            if (children[i] === elm[0]) {
                prev = angular.element(children[i - 1]);
            }
        }

        return prev;
    }

    /**
     * Get CSS time unit in milliseconds
     */
    getCssTimeUnitMs(elm, property) {
        elm = elm instanceof HTMLElement ? angular.element(elm) : elm;

        property = property
            .replace(/(^[-_]+|[-_]+$)/g, '')
            .replace(/[-_]+/g, '-');

        const split = property.split('-');
        split[0] = split[0].substring(0, 1).toLowerCase() + split[0].substring(1);

        for (let i = 1; i < split.length; i++) {
            split[i] = split[i].substring(0, 1).toUpperCase() + split[i].substring(1);
        }

        property = split.join('');
        property = window.getComputedStyle(elm[0])[property];

        return property.endsWith('ms') 
            ? parseFloat(property.substring(0, property.length - 2)) 
            : (property.endsWith('s') ? parseFloat(property.substring(0, property.length - 1)) * 1000 : 0);
    }

    /**
     * Translate element using transform
     */
    translate(elm, x, y) {
        elm = elm instanceof HTMLElement ? elm : elm[0];
        elm.style.transform = `translate(${x}px, ${y}px)`;
    }

    /**
     * Fade element in/out
     */
    fade(elm, callback) {
        elm = elm instanceof HTMLElement ? angular.element(elm) : elm;

        let d = window.getComputedStyle(elm[0]).transitionDuration;
        d = elm.hasClass('fade') 
            ? (d.endsWith('ms') ? parseFloat(d.replace('ms', '')) : parseFloat(d.replace('s', '')) * 1000) 
            : d;

        const fn = () => {
            if (elm.hasClass('fade') && typeof callback === 'function') {
                this.$timeout(callback, d, false);
            } else if (typeof callback === 'function') {
                callback();
            }
        };

        this.$timeout(() => {
            if (elm.hasClass('fade')) {
                if (elm.hasClass('show')) {
                    elm.removeClass('show');
                    fn();
                } else {
                    elm.addClass('show');
                    fn();
                }
            } else {
                fn();
            }
        }, 0, false);
    }
}

const MODULE_NAME = 'bs5.dom';

angular
    .module(MODULE_NAME, [])
    .service('$bs5DOM', DOMService);

export default MODULE_NAME;
