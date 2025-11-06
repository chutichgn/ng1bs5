# ng1bs5 Breadcrumb Component

Bootstrap 5 Breadcrumb component for AngularJS with UI Router integration. Built with TypeScript ES6.

Converted from [ncy-angular-breadcrumb](https://github.com/ncuillery/angular-breadcrumb) to TypeScript ES6 and adapted for Bootstrap 5.

## Features

- ✅ TypeScript ES6 implementation
- ✅ Automatic breadcrumb generation from UI Router states
- ✅ Bootstrap 5 styling
- ✅ Custom breadcrumb labels with interpolation
- ✅ Parent state override
- ✅ Abstract state support
- ✅ Skip/force state inclusion
- ✅ Multiple display modes (full breadcrumb, last item only, text)
- ✅ Custom templates
- ✅ Dynamic label updates

## Dependencies

- AngularJS 1.x
- **Angular UI Router** (`ui.router.state`)
- Bootstrap 5 CSS

## Installation

1. Ensure Angular UI Router is installed:
```bash
npm install @uirouter/angularjs
```

2. Import the breadcrumb module in your `/src/index.js`:
```javascript
import BreadcrumbModule from './components/breadcrumb/breadcrumb.module';

angular.module('ng1bs5', [
    // ... other modules
    BreadcrumbModule,
    // ... other modules
]);
```

## Basic Usage

### 1. Configure States with Breadcrumb Data

In your UI Router state configuration:

```javascript
$stateProvider
    .state('home', {
        url: '/home',
        template: '<h1>Home</h1>',
        bs5Breadcrumb: {
            label: 'Home'
        }
    })
    .state('products', {
        url: '/products',
        template: '<h1>Products</h1>',
        bs5Breadcrumb: {
            label: 'Products',
            parent: 'home'
        }
    })
    .state('products.detail', {
        url: '/:id',
        template: '<h1>Product Details</h1>',
        bs5Breadcrumb: {
            label: 'Product {{productName}}'
        }
    });
```

### 2. Add Breadcrumb Directive to Template

```html
<!-- Full breadcrumb trail -->
<div ng1bs5-breadcrumb></div>

<!-- Output: Home / Products / Product ABC -->
```

## Directives

### `ng1bs5-breadcrumb`

Displays the full breadcrumb trail.

```html
<div ng1bs5-breadcrumb></div>
```

**Output (Bootstrap 5):**
```html
<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#/home">Home</a></li>
        <li class="breadcrumb-item"><a href="#/products">Products</a></li>
        <li class="breadcrumb-item active" aria-current="page">Product ABC</li>
    </ol>
</nav>
```

### `ng1bs5-breadcrumb-last`

Displays only the last breadcrumb item (current page).

```html
<div ng1bs5-breadcrumb-last></div>

<!-- Output: Product ABC -->
```

**With custom template:**
```html
<div ng1bs5-breadcrumb-last="<strong>{{ncyBreadcrumbLabel}}</strong>"></div>

<!-- Output: <strong>Product ABC</strong> -->
```

### `ng1bs5-breadcrumb-text`

Displays breadcrumb as plain text with custom separator.

```html
<div ng1bs5-breadcrumb-text></div>
<!-- Output: Home / Products / Product ABC -->

<div ng1bs5-breadcrumb-text ng1bs5-breadcrumb-text-separator=" > "></div>
<!-- Output: Home > Products > Product ABC -->
```

## State Configuration

### Basic Breadcrumb

```javascript
$stateProvider.state('myState', {
    url: '/my-state',
    bs5Breadcrumb: {
        label: 'My State'
    }
});
```

### Dynamic Labels with Interpolation

Labels support AngularJS interpolation from the current scope:

```javascript
$stateProvider.state('user', {
    url: '/user/:userId',
    controller: function($scope, user) {
        $scope.userName = user.name;
    },
    bs5Breadcrumb: {
        label: 'User {{userName}}'
    }
});
```

### Custom Parent State

Override the default parent/child relationship:

```javascript
$stateProvider
    .state('products', {
        url: '/products',
        bs5Breadcrumb: {
            label: 'Products'
        }
    })
    .state('products.detail', {
        url: '/:id',
        bs5Breadcrumb: {
            label: 'Details',
            parent: 'home' // Override: go to 'home' instead of 'products'
        }
    });
```

**Dynamic parent function:**
```javascript
bs5Breadcrumb: {
    label: 'Details',
    parent: function($scope) {
        return $scope.backToList ? 'products.list' : 'products';
    }
}
```

### Skip State in Breadcrumb

```javascript
$stateProvider.state('intermediate', {
    url: '/intermediate',
    bs5Breadcrumb: {
        skip: true // This state won't appear in breadcrumb
    }
});
```

### Force Abstract State Inclusion

By default, abstract states are excluded. Force inclusion:

```javascript
$stateProvider.state('abstract', {
    abstract: true,
    bs5Breadcrumb: {
        label: 'Section',
        force: true // Include even though it's abstract
    }
});
```

## Provider Configuration

Configure breadcrumb behavior globally:

```javascript
angular.module('myApp').config(function($breadcrumbProvider) {
    $breadcrumbProvider.setOptions({
        // Use custom HTML template
        template: '<nav>...</nav>',
        
        // Or use a template URL
        templateUrl: '/templates/my-breadcrumb.html',
        
        // Include abstract states by default
        includeAbstract: false,
        
        // Prefix state (appears before all breadcrumbs)
        prefixStateName: 'home'
    });
});
```

### Custom Template

```javascript
$breadcrumbProvider.setOptions({
    template: '<nav aria-label="breadcrumb">' +
        '<ul class="my-breadcrumb">' +
        '<li ng-repeat="step in steps">' +
        '<a href="{{step.bs5BreadcrumbLink}}">{{step.bs5BreadcrumbLabel}}</a>' +
        '</li>' +
        '</ul>' +
        '</nav>'
});
```

### Available Template Variables

In custom templates, you have access to:
- `steps` - Array of breadcrumb steps
- `step.bs5BreadcrumbLabel` - Label text
- `step.bs5BreadcrumbLink` - URL
- `step.abstract` - Boolean, is abstract state
- `$last` - Boolean, is last item (current page)

## Examples

### Complete State Configuration

```javascript
angular.module('myApp').config(function($stateProvider, $breadcrumbProvider) {
    // Configure breadcrumb
    $breadcrumbProvider.setOptions({
        prefixStateName: 'home',
        template: 'bootstrap5'
    });
    
    // Define states
    $stateProvider
        .state('home', {
            url: '/',
            template: '<home-component></home-component>',
            bs5Breadcrumb: {
                label: 'Home'
            }
        })
        .state('dashboard', {
            url: '/dashboard',
            template: '<dashboard></dashboard>',
            bs5Breadcrumb: {
                label: 'Dashboard'
            }
        })
        .state('users', {
            url: '/users',
            abstract: true,
            template: '<ui-view></ui-view>',
            bs5Breadcrumb: {
                label: 'Users',
                force: true // Show even though abstract
            }
        })
        .state('users.list', {
            url: '/list',
            template: '<users-list></users-list>',
            bs5Breadcrumb: {
                label: 'All Users'
            }
        })
        .state('users.detail', {
            url: '/:userId',
            template: '<user-detail></user-detail>',
            controller: function($scope, $stateParams, UserService) {
                UserService.get($stateParams.userId).then(function(user) {
                    $scope.currentUser = user;
                });
            },
            bs5Breadcrumb: {
                label: '{{currentUser.name}}'
            }
        })
        .state('users.edit', {
            url: '/:userId/edit',
            template: '<user-edit></user-edit>',
            bs5Breadcrumb: {
                label: 'Edit User',
                parent: 'users.detail({"userId": userId})' // Go back to detail
            }
        });
});
```

### In Your HTML

```html
<!DOCTYPE html>
<html ng-app="myApp">
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div class="container">
        <!-- Full breadcrumb -->
        <div ng1bs5-breadcrumb></div>
        
        <!-- Page title (last breadcrumb only) -->
        <h1 ng1bs5-breadcrumb-last></h1>
        
        <!-- Main content -->
        <ui-view></ui-view>
    </div>
</body>
</html>
```

## Advanced Usage

### Ignore Specific Views

If you have nested views and want to ignore certain view loads:

```javascript
$scope.ncyBreadcrumbIgnore = true;
```

### Access Breadcrumb Service

```javascript
angular.module('myApp').controller('MyController', function($breadcrumb) {
    // Get current breadcrumb chain
    var chain = $breadcrumb.getStatesChain();
    
    // Get last step
    var lastStep = $breadcrumb.getLastStep();
    
    console.log('Current page:', lastStep.ncyBreadcrumbLabel);
});
```

## API Reference

### Provider: `$breadcrumbProvider`

Provider that returns an instance of `$breadcrumb` service. Contains the global configuration of the module.

#### Configuration Properties

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `prefixStateName` | `string` \| `null` | `null` | Contains an existing state name (usually the home page). If defined, the state is the first step of the breadcrumb, whatever the current state. Can be defined with a state's name or a function returning a state's name. Accepts URL params with the same syntax as UI-Router `ui-sref`. |
| `template` | `string` | `'bootstrap5'` | Template name (`'bootstrap5'`) or custom HTML template. Ignored if `templateUrl` is defined. |
| `templateUrl` | `string` \| `null` | `null` | Path to custom template file. Takes precedence over `template` property. |
| `includeAbstract` | `boolean` | `false` | When `true`, abstract states are included in the breadcrumb by default. |

#### Methods

##### `setOptions(options)`

Setter for options, defined in a `module.config` block.

**Parameters:**
- `options` (Object) - Configuration object with properties listed above

**Example:**
```javascript
angular.module('myApp').config(function($breadcrumbProvider) {
    $breadcrumbProvider.setOptions({
        prefixStateName: 'home',
        template: 'bootstrap5',
        includeAbstract: false
    });
});
```

**With function-based prefix:**
```javascript
$breadcrumbProvider.setOptions({
    prefixStateName: function() {
        return 'home';
    }
});
```

**With URL params:**
```javascript
$breadcrumbProvider.setOptions({
    prefixStateName: 'home({section: "main"})'
});
```

---

### Service: `$breadcrumb`

Service responsible for accessing `$state` and providing breadcrumb data to directives.

#### Methods

##### `getStatesChain([exitOnFirst])`

Returns the state chain to the current state (all steps of the breadcrumb).

**Parameters:**
- `exitOnFirst` (boolean, optional) - Internal parameter. When true, returns only the first/last state.

**Returns:** Array of state objects enriched with:
- `bs5BreadcrumbLink` (string) - The href for the breadcrumb step
- `bs5BreadcrumbLabel` (string) - The label for the breadcrumb step
- `bs5BreadcrumbStateRef` (string) - The state reference

**Example:**
```javascript
angular.module('myApp').controller('MyCtrl', function($breadcrumb) {
    var chain = $breadcrumb.getStatesChain();
    console.log(chain);
    // [{name: 'home', bs5BreadcrumbLabel: 'Home', bs5BreadcrumbLink: '/home'}, ...]
});
```

##### `getLastStep()`

Returns the last step of the breadcrumb (generally the current state), except if it's configured as skipped (returns its parent instead).

**Returns:** State object enriched with `bs5BreadcrumbLink` and `bs5BreadcrumbLabel`, or `undefined` if no steps exist.

**Example:**
```javascript
var lastStep = $breadcrumb.getLastStep();
console.log(lastStep.bs5BreadcrumbLabel); // "Current Page"
```

##### `$getLastViewScope()`

Returns the scope of the last loaded view. Used internally for label interpolation.

**Returns:** Angular scope object

---

### Directive: `ng1bs5-breadcrumb`

Main directive that displays the full breadcrumb trail.

#### Usage

```html
<div ng1bs5-breadcrumb></div>
```

The directive requires no attribute value. Configuration is done via `$breadcrumbProvider`.

#### Output Example

```html
<nav aria-label="breadcrumb">
    <ol class="breadcrumb">
        <li class="breadcrumb-item"><a href="#/home">Home</a></li>
        <li class="breadcrumb-item"><a href="#/products">Products</a></li>
        <li class="breadcrumb-item active" aria-current="page">Product Detail</li>
    </ol>
</nav>
```

#### Scope Variables (in custom templates)

- `steps` - Array of breadcrumb steps
- `step.bs5BreadcrumbLabel` - Label text
- `step.bs5BreadcrumbLink` - URL href
- `step.abstract` - Boolean, whether state is abstract
- `$last` - Boolean, whether this is the last item

---

### Directive: `ng1bs5-breadcrumb-last`

Displays only the last breadcrumb step (current page).

#### Usage

**Basic:**
```html
<span ng1bs5-breadcrumb-last></span>
<!-- Output: Product Detail -->
```

**With inline template:**
```html
<title ng1bs5-breadcrumb-last="My App - {{bs5BreadcrumbLabel}}"></title>
<!-- Output: My App - Product Detail -->
```

**With heading:**
```html
<h1 ng1bs5-breadcrumb-last></h1>
<!-- Output: <h1>Product Detail</h1> -->
```

#### Scope Variables

- `bs5BreadcrumbLabel` - Label of the last step
- `bs5BreadcrumbLink` - URL of the last step

#### Configuration

You can configure a global template in the provider:

```javascript
$breadcrumbProvider.setOptions({
    templateLast: '<strong>{{bs5BreadcrumbLabel}}</strong>'
});
```

---

### Directive: `ng1bs5-breadcrumb-text`

Renders breadcrumb as plain text with customizable separator.

#### Usage

**Basic:**
```html
<span ng1bs5-breadcrumb-text></span>
<!-- Output: Home / Products / Product Detail -->
```

**Custom separator:**
```html
<span ng1bs5-breadcrumb-text ng1bs5-breadcrumb-text-separator=" > "></span>
<!-- Output: Home > Products > Product Detail -->
```

**With inline template:**
```html
<span ng1bs5-breadcrumb-text="Navigation: {{bs5BreadcrumbChain}}"></span>
<!-- Output: Navigation: Home / Products / Product Detail -->
```

#### Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `ng1bs5-breadcrumb-text` | `string` | - | Optional inline template using `{{bs5BreadcrumbChain}}` variable |
| `ng1bs5-breadcrumb-text-separator` | `string` | `' / '` | Separator between breadcrumb steps |

#### Scope Variables

- `bs5BreadcrumbChain` - Full breadcrumb text with separators

---

### State Configuration: `bs5Breadcrumb`

State-specific breadcrumb configuration added to each UI-Router state under the `bs5Breadcrumb` key.

#### Properties

| Property | Type | Required | Description |
|----------|------|----------|-------------|
| `label` | `string` | Recommended | Label for the breadcrumb step. Supports Angular interpolation (`{{variable}}`). If not defined, uses state name. |
| `parent` | `string` \| `function` | No | Override parent state for breadcrumb hierarchy. Can be state name or function returning state name. Supports URL params. |
| `skip` | `boolean` | No | When `true`, excludes state from breadcrumb trail. |
| `force` | `boolean` | No | When `true`, includes abstract state in breadcrumb (overrides `includeAbstract: false`). |

#### Property Details

##### `label`

Contains the label for the breadcrumb step. Supports Angular expressions evaluated against the current state controller's scope.

**Basic example:**
```javascript
$stateProvider.state('products', {
    url: '/products',
    bs5Breadcrumb: {
        label: 'Products'
    }
});
```

**With interpolation:**
```javascript
$stateProvider.state('product.detail', {
    url: '/:productId',
    controller: function($scope, product) {
        $scope.productName = product.name;
    },
    bs5Breadcrumb: {
        label: 'Product: {{productName}}'
    }
});
```

##### `parent`

Overrides the parent state for breadcrumb hierarchy only (doesn't affect routing).

**String example:**
```javascript
$stateProvider.state('product.edit', {
    url: '/edit',
    bs5Breadcrumb: {
        label: 'Edit Product',
        parent: 'products' // Override to skip product.detail
    }
});
```

**With URL params:**
```javascript
bs5Breadcrumb: {
    parent: 'category.list({cat: "electronics"})'
}
```

**Function example:**
```javascript
$stateProvider.state('product.edit', {
    url: '/edit',
    bs5Breadcrumb: {
        label: 'Edit',
        parent: function($scope) {
            return $scope.returnToList ? 'products' : 'product.detail';
        }
    }
});
```

**Function with params:**
```javascript
bs5Breadcrumb: {
    parent: function($scope) {
        return 'user.detail({userId: ' + $scope.userId + '})';
    }
}
```

##### `skip`

Excludes the state from breadcrumb trail. Useful for modal states, overlays, or side panels.

```javascript
$stateProvider.state('product.gallery', {
    url: '/gallery',
    bs5Breadcrumb: {
        skip: true // Never shown in breadcrumb
    }
});
```

##### `force`

Forces inclusion of abstract states in breadcrumb.

```javascript
$stateProvider.state('admin', {
    abstract: true,
    url: '/admin',
    bs5Breadcrumb: {
        label: 'Administration',
        force: true // Show even though abstract
    }
});
```

---

### Complete State Configuration Example

```javascript
angular.module('myApp').config(function($stateProvider, $breadcrumbProvider) {
    // Configure breadcrumb
    $breadcrumbProvider.setOptions({
        prefixStateName: 'home',
        includeAbstract: false
    });
    
    // Define states with breadcrumb config
    $stateProvider
        .state('home', {
            url: '/',
            template: '<home></home>',
            bs5Breadcrumb: {
                label: 'Home'
            }
        })
        .state('products', {
            url: '/products',
            abstract: true,
            template: '<ui-view></ui-view>',
            bs5Breadcrumb: {
                label: 'Products',
                force: true // Include abstract state
            }
        })
        .state('products.list', {
            url: '/list',
            template: '<product-list></product-list>',
            bs5Breadcrumb: {
                label: 'All Products'
            }
        })
        .state('products.detail', {
            url: '/:productId',
            template: '<product-detail></product-detail>',
            controller: function($scope, $stateParams, ProductService) {
                ProductService.get($stateParams.productId).then(function(product) {
                    $scope.product = product;
                });
            },
            bs5Breadcrumb: {
                label: '{{product.name}}'
            }
        })
        .state('products.edit', {
            url: '/:productId/edit',
            template: '<product-edit></product-edit>',
            bs5Breadcrumb: {
                label: 'Edit',
                parent: 'products.detail({productId: productId})'
            }
        })
        .state('products.gallery', {
            url: '/:productId/gallery',
            template: '<gallery-modal></gallery-modal>',
            bs5Breadcrumb: {
                skip: true // Modal, don't show in breadcrumb
            }
        });
});
```

---

### TypeScript Interfaces

For TypeScript users, the module provides these interfaces:

```typescript
interface BreadcrumbOptions {
    prefixStateName: string | null;
    template: string;
    templateUrl: string | null;
    includeAbstract: boolean;
}

interface BreadcrumbStep {
    name: string;
    abstract?: boolean;
    bs5Breadcrumb?: {
        label?: string;
        parent?: string | ((scope: any) => string);
        skip?: boolean;
        force?: boolean;
    };
    bs5BreadcrumbLink?: string;
    bs5BreadcrumbLabel?: string;
    bs5BreadcrumbStateRef?: string;
}
```

---

## Styling

The component uses Bootstrap 5 breadcrumb classes. You can customize with CSS:

```css
/* Custom breadcrumb styling */
.breadcrumb {
    background-color: transparent;
    padding: 0;
    margin-bottom: 1rem;
}

.breadcrumb-item + .breadcrumb-item::before {
    content: "›";
    color: #6c757d;
}

.breadcrumb-item.active {
    color: #212529;
    font-weight: 600;
}
```

## Migration from ncy-angular-breadcrumb

If migrating from the original `ncy-angular-breadcrumb`:

### Directive Names
```html
<!-- Old -->
<div ncy-breadcrumb></div>
<div ncy-breadcrumb-last></div>
<div ncy-breadcrumb-text></div>

<!-- New -->
<div ng1bs5-breadcrumb></div>
<div ng1bs5-breadcrumb-last></div>
<div ng1bs5-breadcrumb-text></div>
```

### State Configuration
```javascript
// Old
$stateProvider.state('myState', {
    bs5Breadcrumb: {
        label: 'My State'
    }
});

// New
$stateProvider.state('myState', {
    bs5Breadcrumb: {
        label: 'My State'
    }
});
```

### Provider
```javascript
// Same API, no changes needed
$breadcrumbProvider.setOptions({...});
```

### Template
The default template now uses Bootstrap 5 markup. Bootstrap 3 is no longer supported. If you need custom styling, use a custom template.

## Troubleshooting

### Breadcrumb not showing

1. **Check UI Router is installed:**
```javascript
// Ensure ui.router.state is loaded
angular.module('myApp', ['ng1bs5', 'ui.router']);
```

2. **Verify state has breadcrumb config:**
```javascript
$stateProvider.state('myState', {
    bs5Breadcrumb: {
        label: 'My Label' // Required
    }
});
```

3. **Check Bootstrap CSS is loaded**

### Dynamic labels not updating

Ensure the scope variable is defined in the controller:

```javascript
controller: function($scope) {
    $scope.myVariable = 'value'; // Must exist
}
```

### Abstract states not showing

Set `includeAbstract: true` in provider config or use `force: true` on specific states.

## Browser Support

Same as Bootstrap 5 and AngularJS 1.x:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT License - Same as ng1bs5 library

## Credits

Converted from [ncy-angular-breadcrumb](https://github.com/ncuillery/angular-breadcrumb) by Nicolas Cuillery.