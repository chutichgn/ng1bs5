# ng1bs5 Breadcrumb Component (TypeScript)

Bootstrap 5 breadcrumb for AngularJS with UI Router. Built with TypeScript ES6.

## Installation

```bash
npm install @uirouter/angularjs
```

Import in your main module:

```typescript
import angular from 'angular';
import BreadcrumbModule from './components/breadcrumb/breadcrumb.module';

angular.module('ng1bs5', ['ui.router', BreadcrumbModule]);
```

## Quick Start

### 1. Configure States

```typescript
import { StateProvider } from '@uirouter/angularjs';

interface AppConfig {
    $stateProvider: StateProvider;
    $breadcrumbProvider: any;
}

const config = ($stateProvider: StateProvider, $breadcrumbProvider: any) => {
    'ngInject';
    
    // Optional: Configure breadcrumb
    $breadcrumbProvider.setOptions({
        prefixStateName: 'home'
    });
    
    // Define states with breadcrumb
    $stateProvider
        .state('home', {
            url: '/',
            component: 'homeComponent',
            bs5Breadcrumb: {
                label: 'Home'
            }
        })
        .state('products', {
            url: '/products',
            component: 'productListComponent',
            bs5Breadcrumb: {
                label: 'Products'
            }
        })
        .state('products.detail', {
            url: '/:id',
            component: 'productDetailComponent',
            bs5Breadcrumb: {
                label: '{{product.name}}'
            }
        });
};

angular.module('myApp').config(config);
```

### 2. Add to Template

```html
<ng1bs5-breadcrumb></ng1bs5-breadcrumb>
```

## TypeScript Interfaces

```typescript
interface BreadcrumbOptions {
    prefixStateName?: string | null;
    template?: string;
    templateUrl?: string | null;
    includeAbstract?: boolean;
}

interface BreadcrumbConfig {
    label?: string;
    parent?: string | ((scope: ng.IScope) => string);
    skip?: boolean;
    force?: boolean;
}

interface BreadcrumbStep {
    name: string;
    abstract?: boolean;
    bs5Breadcrumb?: BreadcrumbConfig;
    bs5BreadcrumbLink?: string;
    bs5BreadcrumbLabel?: string;
}

// Extend UI Router state declaration
declare module '@uirouter/angularjs' {
    interface StateDeclaration {
        bs5Breadcrumb?: BreadcrumbConfig;
    }
}
```

## State Configuration

### Basic Label

```typescript
$stateProvider.state('products', {
    url: '/products',
    component: 'productList',
    bs5Breadcrumb: {
        label: 'Products'
    }
});
```

### Dynamic Labels

Use scope variables with interpolation:

```typescript
class ProductDetailController {
    static $inject = ['$scope', 'product'];
    
    constructor(
        private $scope: ng.IScope & { product: Product },
        product: Product
    ) {
        this.$scope.product = product;
    }
}

$stateProvider.state('product.detail', {
    url: '/:id',
    controller: ProductDetailController,
    bs5Breadcrumb: {
        label: 'Product: {{product.name}}'
    }
});
```

### Custom Parent

Override parent-child relationship:

```typescript
$stateProvider.state('product.edit', {
    url: '/:id/edit',
    bs5Breadcrumb: {
        label: 'Edit',
        parent: 'products' // Skip product.detail
    }
});
```

With URL params:

```typescript
bs5Breadcrumb: {
    parent: 'category.list({cat: "electronics"})'
}
```

Dynamic parent function:

```typescript
bs5Breadcrumb: {
    parent: ($scope: ng.IScope & { returnToList: boolean }) => {
        return $scope.returnToList ? 'products.list' : 'products.detail';
    }
}
```

### Skip State

```typescript
$stateProvider.state('product.modal', {
    url: '/modal',
    bs5Breadcrumb: {
        skip: true
    }
});
```

### Force Abstract State

```typescript
$stateProvider.state('admin', {
    abstract: true,
    bs5Breadcrumb: {
        label: 'Admin',
        force: true
    }
});
```

## Directives

### Full Breadcrumb

```html
<div ng1bs5-breadcrumb></div>
```

Output:
```html
<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#/home">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Products</li>
    </ol>
</nav>
```

### Last Item Only

```html
<h1 ng1bs5-breadcrumb-last></h1>
```

With template:
```html
<title ng1bs5-breadcrumb-last="App - {{bs5BreadcrumbLabel}}"></title>
```

### Text Format

```html
<span ng1bs5-breadcrumb-text></span>
<!-- Output: Home / Products / Details -->
```

Custom separator:
```html
<span ng1bs5-breadcrumb-text ng1bs5-breadcrumb-text-separator=" > "></span>
<!-- Output: Home > Products > Details -->
```

## Service API

### Injectable Service

```typescript
class MyController {
    static $inject = ['$breadcrumb'];
    
    constructor(private $breadcrumb: BreadcrumbService) {
        const chain = this.$breadcrumb.getStatesChain();
        const last = this.$breadcrumb.getLastStep();
        
        console.log(last.bs5BreadcrumbLabel);
    }
}

interface BreadcrumbService {
    getStatesChain(exitOnFirst?: boolean): BreadcrumbStep[];
    getLastStep(): BreadcrumbStep | undefined;
    $getLastViewScope(): ng.IScope;
}
```

## Provider Configuration

```typescript
interface BreadcrumbProviderConfig {
    prefixStateName?: string | (() => string);
    template?: string;
    templateUrl?: string;
    includeAbstract?: boolean;
}

const config = ($breadcrumbProvider: any) => {
    'ngInject';
    
    $breadcrumbProvider.setOptions({
        prefixStateName: 'home',
        includeAbstract: false,
        template: '<nav>...</nav>' // Custom template
    });
};
```

## Complete TypeScript Example

```typescript
// types.ts
export interface Product {
    id: number;
    name: string;
    category: string;
}

export interface ProductScope extends ng.IScope {
    product: Product;
    categoryName: string;
}

// states.config.ts
import { StateProvider } from '@uirouter/angularjs';

export const statesConfig = ($stateProvider: StateProvider, $breadcrumbProvider: any) => {
    'ngInject';
    
    $breadcrumbProvider.setOptions({
        prefixStateName: 'home'
    });
    
    $stateProvider
        .state('home', {
            url: '/',
            component: 'homeComponent',
            bs5Breadcrumb: {
                label: 'Home'
            }
        })
        .state('products', {
            abstract: true,
            url: '/products',
            component: 'productsLayout',
            bs5Breadcrumb: {
                label: 'Products',
                force: true
            }
        })
        .state('products.list', {
            url: '/list',
            component: 'productList',
            bs5Breadcrumb: {
                label: 'All Products'
            }
        })
        .state('products.detail', {
            url: '/:productId',
            component: 'productDetail',
            resolve: {
                product: ['$stateParams', 'ProductService', 
                    ($stateParams: any, ProductService: any) => {
                        return ProductService.get($stateParams.productId);
                    }
                ]
            },
            controller: ['$scope', 'product', 
                function($scope: ProductScope, product: Product) {
                    $scope.product = product;
                }
            ],
            bs5Breadcrumb: {
                label: '{{product.name}}'
            }
        })
        .state('products.edit', {
            url: '/:productId/edit',
            component: 'productEdit',
            bs5Breadcrumb: {
                label: 'Edit Product',
                parent: 'products.detail({productId: productId})'
            }
        });
};

// app.module.ts
import angular from 'angular';
import uiRouter from '@uirouter/angularjs';
import BreadcrumbModule from './components/breadcrumb/breadcrumb.module';
import { statesConfig } from './states.config';

angular
    .module('myApp', [uiRouter, BreadcrumbModule])
    .config(statesConfig);
```

## Custom Template

```typescript
const config = ($breadcrumbProvider: any) => {
    'ngInject';
    
    $breadcrumbProvider.setOptions({
        template: `
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item" 
                        ng-repeat="step in steps" 
                        ng-class="{active: $last}">
                        <a ng-if="!$last" href="{{step.bs5BreadcrumbLink}}">
                            {{step.bs5BreadcrumbLabel}}
                        </a>
                        <span ng-if="$last">{{step.bs5BreadcrumbLabel}}</span>
                    </li>
                </ol>
            </nav>
        `
    });
};
```

## Component Integration

```typescript
// breadcrumb-header.component.ts
class BreadcrumbHeaderController {
    static $inject = ['$breadcrumb'];
    
    currentPage: string = '';
    
    constructor(private $breadcrumb: any) {}
    
    $onInit(): void {
        const lastStep = this.$breadcrumb.getLastStep();
        if (lastStep) {
            this.currentPage = lastStep.bs5BreadcrumbLabel;
        }
    }
}

const BreadcrumbHeaderComponent: ng.IComponentOptions = {
    template: `
        <div class="page-header">
            <div ng1bs5-breadcrumb></div>
            <h1>{{$ctrl.currentPage}}</h1>
        </div>
    `,
    controller: BreadcrumbHeaderController
};

angular
    .module('myApp')
    .component('breadcrumbHeader', BreadcrumbHeaderComponent);
```

## Type Declarations

Add to your `typings.d.ts`:

```typescript
declare module 'ng1bs5.breadcrumb' {
    const MODULE_NAME: string;
    export default MODULE_NAME;
}

interface BreadcrumbProvider {
    setOptions(options: {
        prefixStateName?: string | (() => string);
        template?: string;
        templateUrl?: string;
        includeAbstract?: boolean;
    }): void;
    
    $get: angular.Injectable<BreadcrumbService>;
}

interface BreadcrumbService {
    getStatesChain(exitOnFirst?: boolean): BreadcrumbStep[];
    getLastStep(): BreadcrumbStep | undefined;
    $getLastViewScope(): ng.IScope;
}

interface BreadcrumbStep {
    name: string;
    abstract?: boolean;
    bs5Breadcrumb?: {
        label?: string;
        parent?: string | ((scope: ng.IScope) => string);
        skip?: boolean;
        force?: boolean;
    };
    bs5BreadcrumbLink?: string;
    bs5BreadcrumbLabel?: string;
}

declare namespace angular {
    interface IScope {
        bs5BreadcrumbIgnore?: boolean;
    }
}
```

## Troubleshooting

### Type Errors with State Declaration

If TypeScript complains about `bs5Breadcrumb` property:

```typescript
// Add to your typings file
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

### Scope Type Safety

Create typed scope interfaces:

```typescript
interface ProductDetailScope extends ng.IScope {
    product: Product;
    categoryName: string;
}

controller: ['$scope', ($scope: ProductDetailScope) => {
    // $scope.product is now typed
}]
```

## Build Configuration

Ensure your `tsconfig.json` includes:

```json
{
    "compilerOptions": {
        "target": "ES6",
        "module": "ES6",
        "moduleResolution": "node",
        "esModuleInterop": true,
        "allowSyntheticDefaultImports": true,
        "types": ["angular", "@uirouter/angularjs"]
    }
}
```

## License

MIT