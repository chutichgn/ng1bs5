# ng1bs5 - AngularJS 1.x Bootstrap 5 Components (TypeScript)

Modern TypeScript ES6 implementation of Bootstrap 5 components for AngularJS 1.x with strict typing, webpack support, and modular architecture.

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
```typescript
import angular from 'angular';
import ng1bs5 from 'ng1bs5';

angular.module('myApp', [ng1bs5]);
```

## TypeScript Configuration

### tsconfig.json
```json
{
    "compilerOptions": {
        "target": "ES6",
        "module": "ES6",
        "moduleResolution": "node",
        "strict": true,
        "esModuleInterop": true,
        "allowSyntheticDefaultImports": true,
        "sourceMap": true,
        "declaration": true,
        "types": ["angular", "@uirouter/angularjs"]
    },
    "include": ["src/**/*"],
    "exclude": ["node_modules", "dist"]
}
```

### Type Definitions

Install AngularJS types:
```bash
npm install --save-dev @types/angular @types/angular-mocks
```

## Building

```bash
# Production build
npm run build

# Development build with source maps
npm run build:dev

# Watch mode for development
npm run watch

# Type checking only
npm run type-check
```

## Project Structure

[See PROJECT_STRUCTURE.md for details](PROJECT_STRUCTURE.md)

## Key Concepts & Patterns

### 1. TypeScript Class-Based Directives

All directives are TypeScript classes with strict typing:

```typescript
import angular from 'angular';

interface MyDirectiveScope extends ng.IScope {
    value: string;
}

class MyDirective implements ng.IDirective {
    restrict = 'E';
    template = '<div>{{value}}</div>';
    scope = {
        value: '='
    };

    constructor(
        private $timeout: ng.ITimeoutService,
        private $http: ng.IHttpService
    ) {
        'ngInject';
    }

    link = (scope: MyDirectiveScope, element: ng.IAugmentedJQuery, attrs: ng.IAttributes): void => {
        this.$timeout(() => {
            element.addClass('loaded');
        }, 100);
    };

    static factory(): ng.IDirectiveFactory {
        const directive = ($timeout: ng.ITimeoutService, $http: ng.IHttpService) =>
            new MyDirective($timeout, $http);
        directive.$inject = ['$timeout', '$http'];
        return directive;
    }
}

const MODULE_NAME = 'myModule';

angular
    .module(MODULE_NAME, [])
    .directive('myDirective', MyDirective.factory());

export default MODULE_NAME;
```

### 2. TypeScript Class-Based Controllers

Controllers with strict typing:

```typescript
interface Product {
    id: number;
    name: string;
    price: number;
}

interface MyScope extends ng.IScope {
    products: Product[];
}

class MyController {
    static $inject = ['$scope', '$http'];

    products: Product[] = [];

    constructor(
        private $scope: MyScope,
        private $http: ng.IHttpService
    ) {
        this.loadProducts();
    }

    loadProducts(): void {
        this.$http.get<Product[]>('/api/products')
            .then(response => {
                this.products = response.data;
            });
    }

    deleteProduct(id: number): void {
        this.$http.delete(`/api/products/${id}`)
            .then(() => {
                this.products = this.products.filter(p => p.id !== id);
            });
    }
}

angular
    .module('myModule')
    .controller('MyController', MyController);
```

### 3. TypeScript Service with Interfaces

```typescript
export interface UserData {
    id: number;
    name: string;
    email: string;
}

export interface UserServiceOptions {
    cache?: boolean;
    timeout?: number;
}

export class UserService {
    static $inject = ['$http', '$q', '$log'];

    private cache: Map<number, UserData> = new Map();

    constructor(
        private $http: ng.IHttpService,
        private $q: ng.IQService,
        private $log: ng.ILogService
    ) {}

    getUser(id: number, options: UserServiceOptions = {}): ng.IPromise<UserData> {
        if (options.cache && this.cache.has(id)) {
            return this.$q.resolve(this.cache.get(id)!);
        }

        return this.$http.get<UserData>(`/api/users/${id}`)
            .then(response => {
                if (options.cache) {
                    this.cache.set(id, response.data);
                }
                return response.data;
            })
            .catch(error => {
                this.$log.error('Failed to load user:', error);
                return this.$q.reject(error);
            });
    }

    updateUser(user: UserData): ng.IPromise<UserData> {
        return this.$http.put<UserData>(`/api/users/${user.id}`, user)
            .then(response => {
                this.cache.delete(user.id);
                return response.data;
            });
    }
}

const MODULE_NAME = 'userService';

angular
    .module(MODULE_NAME, [])
    .service('UserService', UserService);

export default MODULE_NAME;
```

### 4. Module Exports with Type Safety

```typescript
// component.module.ts
import angular from 'angular';
import DependencyModule from '../dependency/dependency.module';

const MODULE_NAME = 'ng1bs5.myComponent';

angular.module(MODULE_NAME, [DependencyModule]);

export default MODULE_NAME;
```

## Component Status

### Completed Components (10/16 - 62.5%)

1. ✅ **Accordion** - Multi-level collapsible panels
2. ✅ **Alert** - Dismissible alerts with timeout
3. ✅ **Breadcrumb** - UI Router breadcrumb navigation
4. ✅ **Collapse** - Animated collapse/expand
5. ✅ **Dropdown** - Context menus with keyboard nav
6. ✅ **Icons** - Bootstrap Icons integration
7. ✅ **Pagination** - Advanced pagination
8. ✅ **Popover** - Smart popovers with templates
9. ✅ **Progressbar** - Progress indicators
10. ✅ **Tooltip** - Smart tooltips

### TODO Components (6/16 - 37.5%)

1. **Autocomplete** - Type-ahead search
2. **Datepicker** - Date selection widget
3. **Loading Overlay** - Loading indicators
4. **Modal** - Modal dialogs
5. **Offcanvas** - Sliding panels
6. **Rating** - Star rating widget
7. **Tabs** - Tabbed navigation
8. **Toast** - Notification toasts

## Usage Examples

### TypeScript with Webpack

```typescript
// app.module.ts
import angular from 'angular';
import ng1bs5 from 'ng1bs5';
import { UserService } from './services/user.service';

angular
    .module('myApp', [ng1bs5])
    .service('UserService', UserService);
```

### Individual Components

```typescript
import angular from 'angular';
import AlertModule from 'ng1bs5/components/alert/alert.module';
import TooltipModule from 'ng1bs5/components/tooltip/tooltip.module';
import DropdownModule from 'ng1bs5/components/dropdown/dropdown.module';

angular.module('myApp', [
    AlertModule,
    TooltipModule,
    DropdownModule
]);
```

### HTML Usage

```html
<!-- Alert -->
<bs5-alert type="success" dismissible="true">
    Success message!
</bs5-alert>

<!-- Tooltip -->
<button ng1bs5-tooltip="Click me!" placement="top">
    Hover for tooltip
</button>

<!-- Dropdown -->
<div ng1bs5-dropdown>
    <button class="btn btn-secondary" ng1bs5-dropdown-toggle>
        Dropdown
    </button>
    <ul ng1bs5-dropdown-menu>
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
    </ul>
</div>

<!-- Breadcrumb (with UI Router) -->
<div ng1bs5-breadcrumb></div>

<!-- Pagination -->
<bs5-pagination 
    current-page="vm.currentPage"
    number-items="vm.totalItems"
    page-size="10"
    page-change="vm.onPageChange($page)">
</bs5-pagination>
```

## TypeScript Component Development Guide

### Creating a New Component

1. **Create interface file** (`component.interface.ts`):
```typescript
export interface MyComponentOptions {
    title?: string;
    visible?: boolean;
}

export interface MyComponentScope extends ng.IScope {
    options: MyComponentOptions;
    data: any[];
}
```

2. **Create component file** (`component.module.ts`):
```typescript
import angular from 'angular';
import { MyComponentOptions, MyComponentScope } from './component.interface';

class MyComponent implements ng.IDirective {
    restrict = 'E';
    scope = {
        options: '=',
        data: '='
    };

    constructor(private $log: ng.ILogService) {
        'ngInject';
    }

    link = (scope: MyComponentScope, element: ng.IAugmentedJQuery): void => {
        this.$log.debug('Component initialized', scope.options);
    };

    static factory(): ng.IDirectiveFactory {
        const directive = ($log: ng.ILogService) => new MyComponent($log);
        directive.$inject = ['$log'];
        return directive;
    }
}

const MODULE_NAME = 'ng1bs5.myComponent';

angular
    .module(MODULE_NAME, [])
    .directive('myComponent', MyComponent.factory());

export default MODULE_NAME;
```

3. **Export types** in main `index.ts`:
```typescript
export * from './components/myComponent/component.interface';
```

### Type Augmentation for UI Router

```typescript
// types/ui-router.d.ts
import '@uirouter/angularjs';

declare module '@uirouter/angularjs' {
    interface StateDeclaration {
        bs5Breadcrumb?: {
            label?: string;
            parent?: string | ((scope: ng.IScope) => string);
            skip?: boolean;
            force?: boolean;
        };
    }
}
```

## Testing with TypeScript

```typescript
// component.spec.ts
import angular from 'angular';
import 'angular-mocks';
import MODULE_NAME from './component.module';

describe('MyComponent', () => {
    let $compile: ng.ICompileService;
    let $rootScope: ng.IRootScopeService;
    let element: ng.IAugmentedJQuery;

    beforeEach(angular.mock.module(MODULE_NAME));

    beforeEach(inject((_$compile_: ng.ICompileService, _$rootScope_: ng.IRootScopeService) => {
        $compile = _$compile_;
        $rootScope = _$rootScope_;
    }));

    it('should render component', () => {
        const scope = $rootScope.$new();
        element = $compile('<my-component></my-component>')(scope);
        scope.$digest();

        expect(element.html()).toContain('expected content');
    });
});
```

## Dependencies

### Runtime
- AngularJS 1.8.x
- Bootstrap 5.x (CSS only)
- @uirouter/angularjs (optional, for breadcrumb)

### Development
- TypeScript 4.x+
- @types/angular
- @types/angular-mocks
- webpack 5.x
- ts-loader

## Build Configuration

### webpack.config.js
```javascript
const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        filename: 'ng1bs5.js',
        library: 'ng1bs5',
        libraryTarget: 'umd'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/
            }
        ]
    },
    externals: {
        angular: 'angular'
    }
};
```

## Contributing

### Development Workflow

1. **Create feature branch**
```bash
git checkout -b feature/my-component
```

2. **Develop with TypeScript**
- Use strict typing
- Add interfaces for all public APIs
- Include JSDoc comments
- Write unit tests

3. **Type check**
```bash
npm run type-check
```

4. **Build and test**
```bash
npm run build
npm test
```

5. **Submit PR**

### Code Style

- Use interfaces for all component options
- Prefer `interface` over `type` for object shapes
- Use `readonly` for immutable properties
- Use strict null checks
- Avoid `any` type - use `unknown` or proper types
- Use arrow functions for class methods to preserve context
- Always use `'ngInject'` for dependency injection

### Component Checklist

- [ ] TypeScript interfaces defined
- [ ] Strict typing throughout
- [ ] JSDoc comments on public APIs
- [ ] Unit tests written
- [ ] README.md with examples
- [ ] Follows existing patterns
- [ ] No `any` types
- [ ] Type declarations exported

## License

MIT

## Support

For TypeScript-specific guidance, see the TypeScript examples in completed components like:
- `src/components/breadcrumb/breadcrumb.module.ts`
- `src/components/dropdown/dropdown.module.ts`
- `src/components/popover/popover.module.ts`

For issues, visit: https://github.com/chutichgn/ng1bs5/issues