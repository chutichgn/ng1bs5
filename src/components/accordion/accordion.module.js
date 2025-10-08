import angular from 'angular';
import DOMModule from '../../services/dom.service';

const ACCORDION_CONFIG = {
    closeOthers: true
};

const ACCORDION_TEMPLATE = `
<div class="accordion">
    <ng-transclude></ng-transclude>
</div>`;

const ACCORDION_GROUP_TEMPLATE = `
<div class="accordion-item">
    <h2 class="accordion-header">
        <button type="button" 
                ng-click="toggleOpen()" 
                ng-class="{collapsed: !isOpen}" 
                class="accordion-button" 
                bs5-accordion-transclude="heading">
            <span bs5-accordion-header>{{heading}}</span>
        </button>
    </h2>
    <div class="accordion-collapse" bs5-collapse="!isOpen">
        <div class="accordion-body">
            <ng-transclude></ng-transclude>
        </div>
    </div>
</div>`;

class AccordionController {
    static $inject = ['$scope', '$attrs'];

    constructor($scope, $attrs) {
        this.$scope = $scope;
        this.$attrs = $attrs;
        this.groups = [];
    }

    closeOthers(openGroup) {
        const closeOthers = angular.isDefined(this.$attrs.closeOthers) 
            ? this.$scope.$eval(this.$attrs.closeOthers) 
            : ACCORDION_CONFIG.closeOthers;
            
        if (closeOthers) {
            angular.forEach(this.groups, (group) => {
                if (group !== openGroup) {
                    group.isOpen = false;
                }
            });
        }
    }

    addGroup(groupScope) {
        this.groups.push(groupScope);
        groupScope.$on('$destroy', () => {
            this.removeGroup(groupScope);
        });
    }

    removeGroup(group) {
        const index = this.groups.indexOf(group);
        if (index >= 0) {
            this.groups.splice(index, 1);
        }
    }
}

class AccordionDirective {
    constructor() {
        this.restrict = 'E';
        this.transclude = true;
        this.replace = true;
        this.template = ACCORDION_TEMPLATE;
        this.controller = AccordionController;
        this.controllerAs = 'accordion';
    }
}

class AccordionGroupController {
    constructor() {
        this.heading = null;
    }

    setHeading(elm) {
        this.heading = elm;
    }
}

class AccordionGroupDirective {
    constructor() {
        this.restrict = 'E';
        this.transclude = true;
        this.replace = true;
        this.require = '^bs5Accordion';
        this.template = ACCORDION_GROUP_TEMPLATE;
        this.controller = AccordionGroupController;
        this.scope = {
            heading: '@',
            isOpen: '=?',
            isDisabled: '=?'
        };
    }

    link = (scope, elm, attrs, accordionCtrl) => {
        accordionCtrl.addGroup(scope);
        
        scope.$watch('isOpen', (value) => {
            if (value) {
                accordionCtrl.closeOthers(scope);
            }
        });
        
        scope.toggleOpen = (event) => {
            if (!scope.isDisabled) {
                if (!event || event.which === 32) {
                    scope.isOpen = !scope.isOpen;
                }
            }
        };
    }
}

class AccordionHeadingDirective {
    constructor() {
        this.require = '^bs5AccordionGroup';
        this.transclude = true;
        this.template = '';
        this.replace = true;
    }

    link = (scope, elm, attrs, accordionGroup, transclude) => {
        accordionGroup.setHeading(transclude(scope, angular.noop));
    }
}

class AccordionTranscludeDirective {
    constructor() {
        this.require = '^bs5AccordionGroup';
    }

    link = (scope, elm, attrs, accordionGroup) => {
        scope.$watch(() => accordionGroup[attrs.bs5AccordionTransclude], (heading) => {
            if (heading) {
                const elem = angular.element(
                    elm[0].querySelector('bs5-accordion-header, data-bs5-accordion-header, [bs5-accordion-header], [data-bs5-accordion-header]')
                );
                elem.html('');
                elem.append(heading);
            }
        });
    }
}

const MODULE_NAME = 'bs5.accordion';

angular
    .module(MODULE_NAME, [DOMModule])
    .constant('bs5AccordionConfig', ACCORDION_CONFIG)
    .controller('Bs5AccordionController', AccordionController)
    .directive('bs5Accordion', () => new AccordionDirective())
    .directive('bs5AccordionGroup', () => new AccordionGroupDirective())
    .directive('bs5AccordionHeading', () => new AccordionHeadingDirective())
    .directive('bs5AccordionTransclude', () => new AccordionTranscludeDirective());

export default MODULE_NAME;
