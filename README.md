# ng1bs5 - AngularJS 1.x Bootstrap 5 Components

A modern ES6 conversion of Bootstrap 5 components for AngularJS 1.x with Strict DI, webpack support, and modular architecture.

**GitHub Repository**: [https://github.com/chutichgn/ng1bs5](https://github.com/chutichgn/ng1bs5)

## Installation

### NPM
```bash
npm install ng1bs5
```

### GitHub
```bash
git clone https://github.com/chutichgn/ng1bs5.git
cd ng1bs5
npm install
npm run build
```

## Quick Start

### 1. Include Dependencies
```html
<!-- Bootstrap 5 CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- AngularJS -->
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.3/angular.min.js"></script>

<!-- ng1bs5 -->
<script src="node_modules/ng1bs5/dist/ng1bs5.js"></script>
```

### 2. Add Module Dependency
```javascript
angular.module('myApp', ['ng1bs5']);
```

That's it! All components are now available in your application.

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
│   ├── loading-overlay/
│   │   └── loading-overlay.module.js  # STUB - TODO
│   ├── modal/
│   │   └── modal.module.js            # STUB - TODO
│   ├── offcanvas/
│   │   └── offcanvas.module.js        # STUB - TODO
│   ├── pagination/
│   │   └── pagination.module.js       # COMPLETE
│   ├── popover/
│   │   ├── popover.module.js          # COMPLETE ✅
│   │   ├── README.md                  # Full documentation
│   │   └── popover.spec.js            # Unit tests
│   ├── progressbar/
│   │   └── progressbar.module.js      # COMPLETE
│   ├── rating/
│   │   └── rating.module.js           # STUB - TODO
│   ├── tabs/
│   │   └── tabs.module.js             # STUB - TODO
│   ├── toast/
│   │   └── toast.module.js            # STUB - TODO
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

### Completed Components (8/16 - 50%)

1. ✅ **Accordion** - Multi-level collapsible panels with auto-close
2. ✅ **Alert** - Dismissible alerts with auto-timeout
3. ✅ **Collapse** - Animated collapse/expand with horizontal support
4. ✅ **Icons** - Bootstrap Icons with caching and dynamic loading
5. ✅ **Pagination** - Advanced pagination with pivot mode
6. ✅ **Progressbar** - Striped and animated progress bars
7. ✅ **Tooltip** - Smart tooltips with fallback positioning
8. ✅ **Popover** - Advanced popovers with templates, controllers, and callbacks

### Components to Complete (8/16 remaining)

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

4. **Rating** (`components/rating/rating.module.js`)
    - Implement bs5Rating directive
    - Implement bs5RatingPartial directive (for partial stars)
    - Add icon/image support
    - Add readonly/disabled modes
    - Integrate with ngModel and form validation

5. **Tabs** (`components/tabs/tabs.module.js`)
    - Implement Bs5TabsetController
    - Implement bs5Tabset directive
    - Implement bs5Tab directive
    - Add transclude support for custom headings
    - Support pills, tabs, and underline styles

6. **Toast** (`components/toast/toast.module.js`)
    - Implement $bs5Toast service for programmatic creation
    - Support multiple positions (top-left, top-right, bottom-left, bottom-right, etc.)
    - Auto-dismiss with configurable timeout
    - Toast stacking and queuing
    - Different types (success, error, warning, info)

7. **Offcanvas** (`components/offcanvas/offcanvas.module.js`)
    - Implement $bs5Offcanvas service factory
    - Four placement options (start, end, top, bottom)
    - Backdrop support (static, clickable, none)
    - Keyboard support (ESC to close)
    - Template and controller binding

8. **Loading Overlay** (`components/loading-overlay/loading-overlay.module.js`)
    - Implement $bs5LoadingOverlay service
    - Implement bs5LoadingOverlay directive
    - Full-screen and container-specific overlays
    - Customizable spinner styles
    - Promise integration for async operations

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
import ng1bs5 from 'ng1bs5';

angular.module('myApp', [ng1bs5]);
```

### Using Individual Components

```javascript
import angular from 'angular';
import AlertModule from 'ng1bs5/components/alert/alert.module';
import TooltipModule from 'ng1bs5/components/tooltip/tooltip.module';

angular.module('myApp', [AlertModule, TooltipModule]);
```

### Using via Script Tag

```html
<!DOCTYPE html>
<html ng-app="myApp">
<head>
    <link href="bootstrap.min.css" rel="stylesheet">
    <script src="angular.min.js"></script>
    <script src="ng1bs5.js"></script>
</head>
<body>
    <script>
        angular.module('myApp', ['ng1bs5']);
    </script>
</body>
</html>
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

#### Popover
- **Directive**: `bs5-popover` (attribute)
- **Attributes**: `bs5-popover`, `title`, `placement`, `trigger`, `animate`, `html`, `delay`, `template-url`, `popover-controller`, `handler`, `container`, `offset`, `fallback-placements`
- **Features**: HTML content, templates, controller binding, promise-based callbacks, smart positioning
- **Documentation**: See [components/popover/README.md](components/popover/README.md) for full API

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