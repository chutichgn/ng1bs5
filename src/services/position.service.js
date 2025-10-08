import angular from 'angular';
import DOMModule from './dom.service';

export class PositionService {
    static $inject = ['$bs5DOM'];

    constructor($bs5DOM) {
        this.$bs5DOM = $bs5DOM;
    }

    /**
     * Get element offset
     */
    offset(elm) {
        elm = elm instanceof HTMLElement ? elm : elm[0];
        const rect = elm.getBoundingClientRect();
        const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        return {
            top: rect.top + scrollTop,
            left: rect.left + scrollLeft,
            width: elm.offsetWidth,
            height: elm.offsetHeight
        };
    }

    /**
     * Get relative offset
     */
    relativeOffset(elm) {
        elm = elm instanceof HTMLElement ? angular.element(elm) : elm;
        const relativeTo = this.$bs5DOM.findRelativeContainer(elm);

        if (relativeTo) {
            const relOffset = this.offset(relativeTo);
            const elOffset = this.offset(elm);

            return {
                left: elOffset.left - relOffset.left,
                top: elOffset.top - relOffset.top,
                width: elm[0].offsetWidth,
                height: elm[0].offsetHeight,
                container: relativeTo
            };
        }

        return null;
    }

    /**
     * Position target element relative to host element
     */
    positionTarget(hostElm, targetElm, placement, offset = [0, 0]) {
        hostElm = hostElm instanceof HTMLElement ? angular.element(hostElm) : hostElm;
        targetElm = targetElm instanceof HTMLElement ? angular.element(targetElm) : targetElm;

        const host = this.offset(hostElm);
        const target = this.offset(targetElm);

        let left = host.left;
        let top = host.top;

        switch (placement) {
            case 'top':
                top = host.top - target.height;
                break;
            case 'left':
                left = host.left - target.width;
                break;
            case 'bottom':
                top = host.top + host.height;
                break;
            case 'right':
                left = host.left + host.width;
                break;
            case 'top-left':
                left = host.left - target.width;
                top = host.top - target.height;
                break;
            case 'top-right':
                left = host.left + host.width;
                top = host.top - target.height;
                break;
            case 'bottom-left':
                left = host.left - target.width;
                top = host.top + host.height;
                break;
            case 'bottom-right':
                left = host.left + host.width;
                top = host.top + host.height;
                break;
            case 'top-center':
                top = host.top - target.height;
                left = host.left + (host.width / 2) - (target.width / 2);
                break;
            case 'left-center':
                left = host.left - target.width;
                top = host.top + (host.height / 2) - (target.height / 2);
                break;
            case 'bottom-center':
                top = host.top + host.height;
                left = host.left + (host.width / 2) - (target.width / 2);
                break;
            case 'right-center':
                left = host.left + host.width;
                top = host.top + (host.height / 2) - (target.height / 2);
                break;
            default:
                console.error('$bs5Position.positionTarget: Invalid placement');
                left = target.left;
                top = target.top;
        }

        if (angular.isArray(offset) && offset.length >= 2) {
            if (angular.isNumber(offset[0])) left += offset[0];
            if (angular.isNumber(offset[1])) top += offset[1];
        }

        return { left, top };
    }

    /**
     * Position target element relative to host element (within relative container)
     */
    positionTargetRelative(hostElm, targetElm, placement, offset = [0, 0]) {
        hostElm = hostElm instanceof HTMLElement ? angular.element(hostElm) : hostElm;
        targetElm = targetElm instanceof HTMLElement ? angular.element(targetElm) : targetElm;

        const host = this.relativeOffset(hostElm);
        const target = this.relativeOffset(targetElm);

        if (!host || !target || !angular.equals(host.container[0], target.container[0])) {
            return null;
        }

        let left = host.left;
        let top = host.top;

        const placements = {
            'right': () => { left += host.width; },
            'bottom': () => { top += host.height; },
            'left': () => { left -= target.width; },
            'top': () => { top -= target.height; },
            'top-left': () => { top -= target.height; left -= target.width; },
            'top-right': () => { top -= target.height; left += host.width; },
            'bottom-left': () => { top += host.height; left -= target.width; },
            'bottom-right': () => { top += host.height; left += host.width; },
            'top-center': () => { top -= target.height; left += (host.width / 2) - (target.width / 2); },
            'bottom-center': () => { top += host.height; left += (host.width / 2) - (target.width / 2); },
            'left-center': () => { left -= target.width; top += (host.height / 2) - (target.height / 2); },
            'right-center': () => { left += host.width; top += (host.height / 2) - (target.height / 2); }
        };

        if (placements[placement]) {
            placements[placement]();
        }

        left += angular.isArray(offset) && offset.length > 0 && angular.isNumber(offset[0]) ? offset[0] : 0;
        top += angular.isArray(offset) && offset.length > 1 && angular.isNumber(offset[1]) ? offset[1] : 0;

        return {
            top,
            left,
            bottom: top + target.height,
            right: left + target.width
        };
    }

    /**
     * Translate target element relative to host element
     */
    translateTarget(hostElm, targetElm, placement, offset = [0, 0]) {
        hostElm = hostElm instanceof HTMLElement ? angular.element(hostElm) : hostElm;
        targetElm = targetElm instanceof HTMLElement ? angular.element(targetElm) : targetElm;

        const transform = window.getComputedStyle(targetElm[0]).transform;
        const host = this.offset(hostElm);
        const target = this.offset(targetElm);

        const strs = /^matrix\((\d+?\.?\d*?), (\d+?\.?\d*?), (\d+?\.?\d*?), (\d+?\.?\d*?), (\d+?\.?\d*?), (\d+?\.?\d*?)\)$/.exec(transform);
        const matrix = [];

        if (strs) {
            for (let i = 1; i < strs.length; i++) {
                matrix.push(parseFloat(strs[i]));
            }
            target.left -= matrix[4];
            target.top -= matrix[5];
        }

        let x = host.left - target.left;
        let y = host.top - target.top;
        let left = host.left;
        let top = host.top;

        const applyPlacement = (placement) => {
            const placements = {
                'right': () => { x += host.width; left += host.width; },
                'bottom': () => { y += host.height; top += host.height; },
                'left': () => { x -= target.width; left -= target.width; },
                'top': () => { y -= target.height; top -= target.height; },
                'top-left': () => { y -= target.height; x -= target.width; top -= target.height; left -= target.width; },
                'top-right': () => { y -= target.height; x += host.width; top -= target.height; left += host.width; },
                'bottom-left': () => { y += host.height; x -= target.width; top += host.height; left -= target.width; },
                'bottom-right': () => { y += host.height; x += host.width; top += host.height; left += host.width; },
                'top-center': () => { 
                    const diff = (host.width / 2) - (target.width / 2);
                    y -= target.height; x += diff; top -= target.height; left += diff;
                },
                'bottom-center': () => { 
                    const diff = (host.width / 2) - (target.width / 2);
                    y += host.height; x += diff; top += host.height; left += diff;
                },
                'left-center': () => { 
                    const diff = (host.height / 2) - (target.height / 2);
                    x -= target.width; y += diff; left -= target.width; top += diff;
                },
                'right-center': () => { 
                    const diff = (host.height / 2) - (target.height / 2);
                    x += host.width; y += diff; left += host.width; top += diff;
                }
            };

            if (placements[placement]) {
                placements[placement]();
            }
        };

        applyPlacement(placement);

        x += angular.isArray(offset) && angular.isNumber(offset[0]) ? offset[0] : 0;
        y += angular.isArray(offset) && angular.isNumber(offset[1]) ? offset[1] : 0;
        left += angular.isArray(offset) && angular.isNumber(offset[0]) ? offset[0] : 0;
        top += angular.isArray(offset) && angular.isNumber(offset[1]) ? offset[1] : 0;

        if (matrix.length === 6) {
            matrix[4] = x;
            matrix[5] = y;
        }

        return { x, y, left, top, matrix };
    }

    /**
     * Translate tooltip with fallback positioning
     */
    translateTooltip(host, tip, container, placement, fallbackPlacements = ['left', 'right', 'top', 'bottom'], offset = [0, 0]) {
        const isPopover = tip.hasClass('popover');
        let place = /^(left|right|top|bottom)$/.test(placement) ? placement : (isPopover ? 'right' : 'top');
        
        const arrow = angular.element(tip[0].querySelector(isPopover ? '.popover-arrow' : '.tooltip-arrow'));
        const coff = this.offset(container);

        const getArrowPos = () => {
            let plc = place === 'left' ? 'right' : (place === 'right' ? 'left' : (place === 'top' ? 'bottom' : 'top'));
            plc += '-center';
            const pos = this.translateTarget(tip, arrow, plc);

            if (isPopover) {
                if (place === 'left' || place === 'right') pos.y -= 5;
            } else {
                if (place === 'left' || place === 'right') pos.y -= 3;
            }

            return pos;
        };

        const getTipPos = () => {
            const ttOff = 6;
            const tooltipOff = [
                place === 'left' ? -ttOff : (place === 'right' ? ttOff : 0),
                place === 'top' ? -ttOff : (place === 'bottom' ? ttOff : 0)
            ];

            const poOff = 8;
            const popoverOff = [
                place === 'left' ? -poOff : (place === 'right' ? poOff : 0),
                place === 'top' ? -poOff : (place === 'bottom' ? poOff : 0)
            ];

            const plc = place + '-center';
            return this.translateTarget(host, tip, plc, isPopover ? popoverOff : tooltipOff);
        };

        const getPlacementClass = () => {
            const classes = {
                'left': isPopover ? 'bs-popover-start' : 'bs-tooltip-start',
                'right': isPopover ? 'bs-popover-end' : 'bs-tooltip-end',
                'top': isPopover ? 'bs-popover-top' : 'bs-tooltip-top',
                'bottom': isPopover ? 'bs-popover-bottom' : 'bs-tooltip-bottom'
            };
            return classes[place] || classes.top;
        };

        const positionLeftRight = () => {
            if (tipPos.left < coff.left) {
                if (tip[0].offsetWidth <= coff.width) {
                    const diff = coff.left - tipPos.left;
                    tipPos.x += diff;
                    arrowPos.x -= diff;
                    tipPos.left += diff;
                    arrowPos.left -= diff;
                }
            } else if (tipPos.left + tip[0].offsetWidth > coff.left + coff.width) {
                const left = ((tipPos.left + tip[0].offsetWidth) - (coff.left + coff.width));
                if (tipPos.left - left >= coff.left) {
                    tipPos.x -= left;
                    arrowPos.x += left;
                    tipPos.left -= left;
                    arrowPos.left += left;
                }
            }
        };

        const positionTopBottom = () => {
            if (tipPos.top < coff.top) {
                if (tip[0].offsetHeight <= coff.height) {
                    const diff = coff.top - tipPos.top;
                    tipPos.y += diff;
                    arrowPos.y -= diff;
                    tipPos.top += diff;
                    arrowPos.top -= diff;
                }
            } else if (tipPos.top + tip[0].offsetHeight > coff.top + coff.height) {
                const top = ((tipPos.top + tip[0].offsetHeight) - (coff.top + coff.height));
                if (tipPos.top - top >= coff.top) {
                    tipPos.y -= top;
                    arrowPos.y += top;
                    tipPos.top -= top;
                    arrowPos.top += top;
                }
            }
        };

        const isOutOfRange = () => {
            return (place === 'left' && tipPos.left < coff.left) ||
                (place === 'right' && tipPos.left + tip[0].offsetWidth > coff.left + coff.width) ||
                (place === 'top' && tipPos.top < coff.top) ||
                (place === 'bottom' && tipPos.top + tip[0].offsetHeight > coff.top + coff.height);
        };

        const placeFallback = (fp, index) => {
            const position = () => {
                if (place === 'left' || place === 'right') {
                    positionTopBottom();
                } else {
                    positionLeftRight();
                }
            };

            if (index >= fp.length) return;

            place = fp[index];
            tipPos = getTipPos();
            arrowPos = getArrowPos();

            if (isOutOfRange()) {
                position();
                if (isOutOfRange()) {
                    placeFallback(fp, index + 1);
                }
            } else {
                position();
            }
        };

        const placeAtFallback = () => {
            placeFallback(fallbackPlacements.filter(x => /^(top|bottom|left|right)$/.test(x)), 0);
        };

        let tipPos = getTipPos();
        let arrowPos = getArrowPos();

        if (angular.isArray(offset) && offset.length === 2 && angular.isNumber(offset[0]) && angular.isNumber(offset[1])) {
            tipPos.x += offset[0];
            tipPos.y += offset[1];
        }

        if (isOutOfRange()) {
            placeAtFallback();
        }

        return {
            tip: { 'transform': `translate(${tipPos.x}px,${tipPos.y}px)` },
            arrow: { 'transform': place === 'bottom' || place === 'top' ? `translateX(${arrowPos.x}px)` : `translateY(${arrowPos.y}px)` },
            placementClass: getPlacementClass()
        };
    }
}

const MODULE_NAME = 'bs5.position';

angular
    .module(MODULE_NAME, [DOMModule])
    .service('$bs5Position', PositionService);

export default MODULE_NAME;
