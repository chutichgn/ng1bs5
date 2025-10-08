# ng1bs5 Usage Guide

Complete guide for using ng1bs5 in your AngularJS 1.x applications.

## Installation

### Via NPM
```bash
npm install ng1bs5
```

### Via GitHub
```bash
git clone https://github.com/chutichgn/ng1bs5.git
cd ng1bs5
npm install
npm run build
```

## Basic Setup

### Option 1: Script Tag (Simplest)

```html
<!DOCTYPE html>
<html ng-app="myApp">
<head>
    <meta charset="UTF-8">
    <title>My App</title>
    
    <!-- Bootstrap 5 CSS (required) -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- AngularJS 1.x (required) -->
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.3/angular.min.js"></script>
    
    <!-- ng1bs5 -->
    <script src="node_modules/ng1bs5/dist/ng1bs5.js"></script>
</head>
<body>
    <div ng-controller="MainCtrl as vm">
        <bs5-alert type="success" dismissible="true">
            Success! ng1bs5 is working.
        </bs5-alert>
    </div>
    
    <script>
        // Just add 'ng1bs5' as a dependency - that's it!
        angular.module('myApp', ['ng1bs5'])
            .controller('MainCtrl', function() {
                var vm = this;
                // Your code here
            });
    </script>
</body>
</html>
```

### Option 2: Webpack/ES6 Modules

**Install:**
```bash
npm install ng1bs5 angular bootstrap
```

**app.js:**
```javascript
import angular from 'angular';
import ng1bs5 from 'ng1bs5';
import 'bootstrap/dist/css/bootstrap.min.css';

// Create your app with ng1bs5 as dependency
angular.module('myApp', [ng1bs5])
    .controller('MainController', function() {
        var vm = this;
        vm.message = 'Hello from ng1bs5!';
    });

// Bootstrap the application
angular.bootstrap(document, ['myApp']);
```

**index.html:**
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>My App</title>
</head>
<body ng-controller="MainController as vm">
    <div class="container">
        <h1>{{vm.message}}</h1>
        <bs5-alert type="info">ng1bs5 is loaded!</bs5-alert>
    </div>
    
    <script src="dist/bundle.js"></script>
</body>
</html>
```

**webpack.config.js:**
```javascript
const path = require('path');

module.exports = {
    entry: './app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};
```

### Option 3: Individual Components (Tree Shaking)

If you only need specific components:

```javascript
import angular from 'angular';
import AlertModule from 'ng1bs5/components/alert/alert.module';
import TooltipModule from 'ng1bs5/components/tooltip/tooltip.module';
import PopoverModule from 'ng1bs5/components/popover/popover.module';

angular.module('myApp', [
    AlertModule,
    TooltipModule,
    PopoverModule
]);
```

This approach results in smaller bundle sizes since you only include what you need.

## Using Components

### Alert Component
```html
<bs5-alert type="success" dismissible="true">
    Success message!
</bs5-alert>

<bs5-alert type="warning" dismissible="true" timeout="5000">
    This will auto-close after 5 seconds
</bs5-alert>
```

### Tooltip Component
```html
<button bs5-tooltip="Tooltip text" placement="top">
    Hover me
</button>

<button bs5-tooltip="Click tooltip" trigger="click" placement="right">
    Click me
</button>
```

### Popover Component
```html
<button bs5-popover="Popover content" 
        title="Popover Title" 
        placement="right">
    Click for popover
</button>

<!-- With template -->
<button bs5-popover
        template-url="my-popover.html"
        title="Interactive"
        handler="vm.handleClose($data)">
    Advanced popover
</button>

<script type="text/ng-template" id="my-popover.html">
    <div>
        <p>Custom content</p>
        <button ng-click="close('done')">Done</button>
    </div>
</script>
```

### Collapse Component
```html
<button ng-click="vm.isCollapsed = !vm.isCollapsed">
    Toggle
</button>

<div bs5-collapse="vm.isCollapsed">
    <p>Collapsible content</p>
</div>
```

### Accordion Component
```html
<bs5-accordion close-others="true">
    <bs5-accordion-group heading="Section 1" is-open="true">
        Content 1
    </bs5-accordion-group>
    <bs5-accordion-group heading="Section 2">
        Content 2
    </bs5-accordion-group>
</bs5-accordion>
```

### Pagination Component
```html
<bs5-pagination
    current-page="vm.currentPage"
    number-items="vm.totalItems"
    page-size="10"
    page-change="vm.onPageChange($page, $pageSize)">
</bs5-pagination>
```

### Progressbar Component
```html
<bs5-progressbar 
    value="vm.progress" 
    bg-type="success"
    stripes="true"
    animate="true"
    display-percent="true">
</bs5-progressbar>
```

### Icons Component
```html
<bs5-icon icon="heart-fill" color="red" size="24"></bs5-icon>
<bs5-icon icon="star" color="gold" size="32"></bs5-icon>
```

## CDN Usage

For quick prototyping, you can use a CDN:

```html
<!DOCTYPE html>
<html ng-app="myApp">
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.3/angular.min.js"></script>
    
    <!-- Replace with actual CDN once published -->
    <script src="https://cdn.jsdelivr.net/npm/ng1bs5@latest/dist/ng1bs5.js"></script>
</head>
<body>
    <script>
        angular.module('myApp', ['ng1bs5']);
    </script>
</body>
</html>
```

## TypeScript Support

While the library is written in ES6, you can use it with TypeScript:

**app.ts:**
```typescript
import * as angular from 'angular';
import ng1bs5 from 'ng1bs5';

angular.module('myApp', [ng1bs5]);
```

Type definitions are not yet included but may be added in future versions.

## Best Practices

### 1. Module Organization
```javascript
// Good: Clear module dependencies
angular.module('myApp', ['ng1bs5'])
    .config(AppConfig)
    .run(AppRun);

// Bad: Forgetting to include ng1bs5
angular.module('myApp', [])  // Missing 'ng1bs5'!
```

### 2. Component Usage
```javascript
// Good: Use components in templates
vm.showAlert = true;
```
```html
<bs5-alert ng-if="vm.showAlert">Message</bs5-alert>
```

```javascript
// Bad: Manipulating DOM directly
vm.showAlert = function() {
    document.getElementById('alert').style.display = 'block';
}
```

### 3. Services (for applicable components)
```javascript
// Good: Use service-based components properly
$bs5Modal.open({
    templateUrl: 'modal.html',
    controller: 'ModalCtrl'
});

// Bad: Not handling promises
$bs5Modal.open({ /* ... */ });  // No .result.then()
```

## Common Issues

### Components not showing
**Problem:** Components don't appear
**Solution:** 
1. Check Bootstrap 5 CSS is loaded
2. Verify module dependency: `['ng1bs5']`
3. Check browser console for errors

### Module not found
**Problem:** `Error: [$injector:modulerr]`
**Solution:** 
1. Ensure ng1bs5.js is loaded before your app
2. Check script tag order in HTML
3. Verify module name is exactly `'ng1bs5'`

### Webpack build errors
**Problem:** Build fails with module resolution errors
**Solution:**
1. Install peer dependencies: `npm install angular bootstrap`
2. Check webpack externals configuration
3. Ensure loaders are configured for CSS

## Examples

Check out complete examples:
- [Basic Demo](../example.html)
- [Popover Examples](../examples/popover-examples.html)
- [Component Gallery](../examples/) (coming soon)

## Support

- **Issues**: [GitHub Issues](https://github.com/chutichgn/ng1bs5/issues)
- **Documentation**: [GitHub Wiki](https://github.com/chutichgn/ng1bs5/wiki)
- **Discussions**: [GitHub Discussions](https://github.com/chutichgn/ng1bs5/discussions)

## What's Included

When you add `ng1bs5` as a dependency, you get:

✅ Accordion
✅ Alert
✅ Collapse
✅ Icons
✅ Pagination
✅ Progressbar
✅ Tooltip
✅ Popover

🔄 In Progress:
- Autocomplete
- Datepicker
- Modal
- Rating
- Tabs
- Toast
- Offcanvas
- Loading Overlay

## Upgrading from ES5 Version

If you're migrating from the old ES5 `angular-bootstrap-5` library:

### Changes:
1. **Module name**: `ngBootstrap5` → `ng1bs5`
2. **File name**: `angular-bootstrap-5.js` → `ng1bs5.js`
3. **Import style**: Now supports ES6 imports

### Migration:
```javascript
// Old
angular.module('app', ['ngBootstrap5']);

// New
angular.module('app', ['ng1bs5']);
```

All component APIs remain the same, so your templates don't need changes!

## Contributing

Want to help complete the remaining components? See [CONTRIBUTING.md](CONTRIBUTING.md)

## License

MIT License - see [LICENSE](LICENSE) file for details.
