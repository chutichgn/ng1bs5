# AngularJS Bootstrap 5 - ES6 Edition

A modern ES6 conversion of the AngularJS Bootstrap 5 component library with Strict DI, webpack support, and modular architecture.

## Project Structure

```
ng1bs5/
├── index.js                    # Main entry point
├── package.json                # NPM dependencies
├── webpack.config.js           # Webpack configuration
├── services/                   # Core services
│   ├── dom.service.js         # DOM manipulation service (COMPLETE)
│   └── position.service.js    # Positioning service (COMPLETE)
├── components/                 # UI Components
│   ├── accordion/
│   │   └── accordion.module.js        # COMPLETE
│   ├── alert/
│   │   └── alert.module.js            # COMPLETE
│   ├── autocomplete/
│   │   └── autocomplete.module.js     # STUB - TODO
│   ├── collapse/
│   │   └── collapse.module.js         # COMPLETE
│   ├── datepicker/
│   │   └── datepicker.module.js       # STUB - TODO
│   ├── icons/
│   │   └── icons.module.js            # COMPLETE
│   ├── modal/
│   │   └── modal.module.js            # STUB - TODO
│   ├── pagination/
│   │   └── pagination.module.js       # COMPLETE
│   ├── popover/
│   │   └── popover.module.js          # STUB - TODO
│   ├── progressbar/
│   │   └── progressbar.module.js      # COMPLETE
│   ├── rating/
│   │   └── rating.module.js           # STUB - TODO
│   ├── tabs/
│   │   └── tabs.module.js             # STUB - TODO
│   └── tooltip/
│       └── tooltip.module.js          # COMPLETE
└── styles/
    └── styles.css              # Component styles

```

## Installation

```bash
npm install
```

## Building

```bash
# Production build
npm run build

# Development build
npm run build:dev

# Watch mode
npm watch
```

## Key Concepts & Patterns

### 1. ES6 Class-Based Directives

All directives are implemented as ES6 classes with Strict DI:

```javascript
class MyDirective {
    static $inject = ['$timeout', '$http'];

    constructor($timeout, $http) {
        this.$timeout = $timeout;
        this.$http = $http;
        
        this.restrict = 'E';
        this.template = '<div>My Template</div>';
        this.scope = {
            value: '='
        };
    }

    link = (scope, elm, attrs) => {
        // Link function logic
    }
}

// Register the directive
angular
    .module('myModule', [])
    .directive('myDirective', () => new MyDirective(...MyDirective.$inject));
```

### 2. ES6 Class-Based Controllers

Controllers use ES6 classes with Strict DI:

```javascript
class MyController {
    static $inject = ['$scope', '$attrs'];

    constructor($scope, $attrs) {
        this.$scope = $scope;
        this.$attrs = $attrs;
        this.data = [];
    }

    myMethod() {
        // Controller method
    }
}

angular
    .module('myModule', [])
    .controller('MyController', MyController);
```

### 3. ES6 Class-Based Services

Services use ES6 classes with methods:

```javascript
export class MyService {
    static $inject = ['$http', '$q'];

    constructor($http, $q) {
        this.$http = $http;
        this.$q = $q;
    }

    doSomething() {
        // Service method
    }
}

const MODULE_NAME = 'myService';

angular
    .module(MODULE_NAME, [])
    .service('myService', MyService);

export default MODULE_NAME;
```

### 4. Module Exports and Imports

Each module exports its module name for dependency injection:

```javascript
// In component file
import angular from 'angular';
import DependencyModule from '../dependency/dependency.module';

const MODULE_NAME = 'bs5.myComponent';

angular.module(MODULE_NAME, [DependencyModule]);

export default MODULE_NAME;
```

```javascript
// In index.js
import { MyModule } from './components/my/my.module';

angular.module('app', [MyModule]);
```

## Completing the Remaining Components

### Components to Complete

1. **Autocomplete** (`components/autocomplete/autocomplete.module.js`)
   - Implement bs5Autocomplete directive
   - Implement bs5AutocompleteList directive
   - Add remote and local datasource support
   - Add keyboard navigation (arrow keys, enter)

2. **Datepicker** (`components/datepicker/datepicker.module.js`)
   - Implement bs5Datepicker directive
   - Create calendar UI with month/year navigation
   - Add min/max date validation
   - Integrate with ngModel

3. **Modal** (`components/modal/modal.module.js`)
   - Implement $bs5Modal factory service
   - Implement $$modalStack service
   - Implement $$modalBackdrop service
   - Add support for templateUrl and controller

4. **Popover** (`components/popover/popover.module.js`)
   - Similar to Tooltip but with title and content
   - Add templateUrl support
   - Add controller binding
   - Implement trigger options (click, hover, focus)

5. **Rating** (`components/rating/rating.module.js`)
   - Implement bs5Rating directive
   - Implement bs5RatingPartial directive (for partial stars)
   - Add icon/image support
   - Add readonly/disabled modes
   - Integrate with ngModel and form validation

6. **Tabs** (`components/tabs/tabs.module.js`)
   - Implement Bs5TabsetController
   - Implement bs5Tabset directive
   - Implement bs5Tab directive
   - Add transclude support for custom headings
   - Support pills, tabs, and underline styles

### Steps to Complete Each Component

1. **Refer to the Original ES5 Code**: Check the uploaded `angular-bootstrap-5.js` file for the complete implementation

2. **Convert to ES6 Class Syntax**: 
   - Change function constructors to ES6 classes
   - Use `static $inject = [...]` for Strict DI
   - Use arrow functions for link functions to preserve `this` context

3. **Extract Templates**: 
   - Move inline templates to const variables at the top of the file
   - Or keep them in the directive definition

4. **Import Dependencies**:
   - Import required modules at the top
   - Add module dependencies in `angular.module(NAME, [deps])`

5. **Export Module Name**:
   - Always export the module name: `export default MODULE_NAME;`

6. **Test Thoroughly**: Ensure all functionality works as expected

## Example: Converting a Component

### Original ES5 Code:
```javascript
angular.module('bs5.example', [])
    .directive('bs5Example', ['$timeout', function($timeout) {
        return {
            restrict: 'E',
            template: '<div>{{text}}</div>',
            scope: { text: '@' },
            link: function(scope, elm) {
                $timeout(function() {
                    elm.addClass('loaded');
                }, 100);
            }
        };
    }]);
```

### Converted ES6 Code:
```javascript
import angular from 'angular';

const TEMPLATE = '<div>{{text}}</div>';

class ExampleDirective {
    static $inject = ['$timeout'];

    constructor($timeout) {
        this.$timeout = $timeout;
        this.restrict = 'E';
        this.template = TEMPLATE;
        this.scope = { text: '@' };
    }

    link = (scope, elm) => {
        this.$timeout(() => {
            elm.addClass('loaded');
        }, 100);
    }
}

const MODULE_NAME = 'bs5.example';

angular
    .module(MODULE_NAME, [])
    .directive('bs5Example', () => new ExampleDirective(...ExampleDirective.$inject));

export default MODULE_NAME;
```

## Usage in Your Application

### Using with Webpack

```javascript
// Your main app file
import angular from 'angular';
import ng1bs5 from 'angularjs-bootstrap-5';

angular.module('myApp', [ng1bs5]);
```

### Using Individual Components

```javascript
import angular from 'angular';
import { AlertModule } from 'angularjs-bootstrap-5/components/alert/alert.module';
import { TooltipModule } from 'angularjs-bootstrap-5/components/tooltip/tooltip.module';

angular.module('myApp', [AlertModule, TooltipModule]);
```

### In Your HTML

```html
<!-- Alert -->
<bs5-alert type="success" dismissible="true">
    Success message!
</bs5-alert>

<!-- Tooltip -->
<button bs5-tooltip="Click me!" placement="top">
    Hover for tooltip
</button>

<!-- Pagination -->
<bs5-pagination 
    current-page="vm.currentPage"
    number-items="vm.totalItems"
    page-size="10"
    page-change="vm.onPageChange($page)">
</bs5-pagination>

<!-- Accordion -->
<bs5-accordion>
    <bs5-accordion-group heading="Section 1">
        Content for section 1
    </bs5-accordion-group>
    <bs5-accordion-group heading="Section 2">
        Content for section 2
    </bs5-accordion-group>
</bs5-accordion>
```

## Component Reference

### Completed Components

#### Alert
- **Directive**: `bs5-alert`
- **Attributes**: `type`, `dismissible`, `timeout`, `on-destroy`

#### Collapse
- **Directive**: `bs5-collapse` (attribute)
- **Attributes**: `bs5-collapse`, `on-collapsed`, `on-expanded`, `horizontal`

#### Icons
- **Directive**: `bs5-icon`
- **Attributes**: `icon`, `size`, `color`

#### Pagination
- **Directive**: `bs5-pagination`
- **Attributes**: `current-page`, `number-items`, `page-size`, `page-range`, etc.

#### Progressbar
- **Directive**: `bs5-progressbar`
- **Attributes**: `value`, `bg-type`, `stripes`, `display-percent`, `animate`

#### Tooltip
- **Directive**: `bs5-tooltip` (attribute)
- **Attributes**: `bs5-tooltip`, `placement`, `trigger`, `animate`, `delay`

#### Accordion
- **Directives**: `bs5-accordion`, `bs5-accordion-group`
- **Features**: Auto-close, custom headings, open/close callbacks

## Dependencies

- AngularJS 1.8.x
- Bootstrap 5.x (CSS)

## License

MIT

## Contributing

When contributing:
1. Follow the ES6 class-based patterns shown in completed components
2. Always use Strict DI with `static $inject`
3. Use arrow functions for callbacks to preserve context
4. Export the module name for proper dependency management
5. Add JSDoc comments for public APIs
6. Test thoroughly with Bootstrap 5 CSS

## Next Steps

1. Complete the remaining stub components (see list above)
2. Add comprehensive tests
3. Add TypeScript definitions
4. Create demo/documentation site
5. Publish to npm

## Support

For issues and questions, please refer to the original ES5 implementation in the uploaded file and follow the conversion patterns demonstrated in the completed components.
