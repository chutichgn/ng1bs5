# Popover Component Documentation

## Overview

The `bs5Popover` directive creates Bootstrap 5 styled popovers with advanced features including templates, controllers, multiple triggers, and smart positioning with fallback support.

## Basic Usage

```html
<button bs5-popover="Popover content" title="Popover Title">
    Click me
</button>
```

## Features

- ✅ Multiple trigger types (click, hover, focus)
- ✅ Smart positioning with automatic fallback
- ✅ HTML content support
- ✅ External template loading
- ✅ Controller binding for complex interactions
- ✅ Promise-based handler callbacks
- ✅ Configurable animations and delays
- ✅ Custom container support
- ✅ Offset positioning

## Directive Attributes

### Required Attributes

| Attribute | Type | Description |
|-----------|------|-------------|
| `bs5-popover` | string | The content to display in the popover body |

### Optional Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `title` | string | `''` | The popover title/header text |
| `placement` | string | `'right'` | Position: `'top'`, `'right'`, `'bottom'`, `'left'` |
| `trigger` | string | `'click'` | Trigger type: `'click'`, `'hover'`, `'focus'` |
| `animate` | boolean | `true` | Enable fade animation |
| `html` | boolean | `false` | Allow HTML content in popover body |
| `delay` | number\|object | `0` | Delay in ms or `{show: ms, hide: ms}` |
| `offset` | array | `[0, 0]` | X and Y offset: `[x, y]` |
| `fallback-placements` | array | `['left', 'right', 'top', 'bottom']` | Alternative placements if primary doesn't fit |
| `template-url` | string | - | URL to load template content |
| `popover-controller` | string | - | Controller to bind to popover scope |
| `container` | string | `'body'` | CSS selector for container element |
| `handler` | function | - | Callback function when popover closes with data |

## Usage Examples

### 1. Simple Text Popover

```html
<button bs5-popover="Simple popover content" title="Title">
    Show Popover
</button>
```

### 2. HTML Content

```html
<button bs5-popover="<strong>Bold</strong> and <em>italic</em>" 
        title="Formatted Content"
        html="true">
    HTML Popover
</button>
```

### 3. Different Placements

```html
<button bs5-popover="Content" title="Top" placement="top">Top</button>
<button bs5-popover="Content" title="Right" placement="right">Right</button>
<button bs5-popover="Content" title="Bottom" placement="bottom">Bottom</button>
<button bs5-popover="Content" title="Left" placement="left">Left</button>
```

### 4. Trigger Options

```html
<!-- Click (default) -->
<button bs5-popover="Click to toggle" trigger="click">Click</button>

<!-- Hover -->
<button bs5-popover="Hover to show" trigger="hover">Hover</button>

<!-- Focus -->
<input bs5-popover="Focus to show" trigger="focus" />
```

### 5. Template-based Popover

```html
<button bs5-popover
        template-url="my-popover.html"
        title="Template Popover">
    Show Template
</button>

<script type="text/ng-template" id="my-popover.html">
    <div>
        <p>Template content here</p>
        <button class="btn btn-sm btn-primary" ng-click="close('data')">
            Close
        </button>
        <button class="btn btn-sm btn-secondary" ng-click="dismiss('reason')">
            Cancel
        </button>
    </div>
</script>
```

### 6. Popover with Controller

```html
<button bs5-popover
        template-url="interactive-popover.html"
        title="Interactive"
        popover-controller="PopoverController as ctrl"
        handler="vm.onPopoverClose($data)">
    Interactive Popover
</button>

<script type="text/ng-template" id="interactive-popover.html">
    <div>
        <p>Count: {{ctrl.counter}}</p>
        <button ng-click="ctrl.increment()">+</button>
        <button ng-click="ctrl.decrement()">-</button>
        <hr>
        <button ng-click="close({count: ctrl.counter})">Save</button>
        <button ng-click="dismiss('cancelled')">Cancel</button>
    </div>
</script>
```

**Controller Definition:**

```javascript
angular.module('myApp')
    .controller('PopoverController', function() {
        var ctrl = this;
        ctrl.counter = 0;
        
        ctrl.increment = function() {
            ctrl.counter++;
        };
        
        ctrl.decrement = function() {
            ctrl.counter--;
        };
    });
```

**Handler Function:**

```javascript
vm.onPopoverClose = function(data) {
    if (data && data.count !== undefined) {
        console.log('Saved count:', data.count);
        vm.savedCount = data.count;
    }
};
```

### 7. Delayed Show/Hide

```html
<!-- Single delay value -->
<button bs5-popover="Content" delay="500">Delay 500ms</button>

<!-- Different show/hide delays -->
<button bs5-popover="Content" delay="{show: 300, hide: 800}">
    Custom Delays
</button>
```

### 8. Custom Positioning

```html
<button bs5-popover="Content"
        placement="right"
        offset="[20, 10]"
        fallback-placements="['left', 'top', 'bottom']">
    Custom Position
</button>
```

### 9. Custom Container

```html
<div id="popover-container" style="position: relative;">
    <button bs5-popover="Content" container="#popover-container">
        Contained Popover
    </button>
</div>
```

### 10. No Animation

```html
<button bs5-popover="Content" animate="false">
    Instant Popover
</button>
```

## Popover Scope API

When using templates, the popover scope provides special methods:

### Methods Available in Template

| Method | Parameters | Description |
|--------|------------|-------------|
| `close(data)` | `data`: any | Closes popover and resolves promise with data |
| `dismiss(reason)` | `reason`: any | Closes popover and rejects promise with reason |

### Properties

| Property | Type | Description |
|----------|------|-------------|
| `title` | string | The popover title (from attribute) |
| `popover` | object | Reference to popover instance |

## Handler Callback

The `handler` attribute accepts a function that will be called when the popover is closed using `close(data)`:

```javascript
// In your controller
vm.handlePopover = function(data) {
    console.log('Popover closed with:', data);
    // data contains whatever was passed to close(data)
};
```

```html
<button bs5-popover
        template-url="template.html"
        handler="vm.handlePopover($data)">
    Popover
</button>
```

**Note:** The handler is NOT called when using `dismiss(reason)`.

## Advanced Features

### Smart Positioning with Fallback

The popover automatically adjusts its position if it doesn't fit in the viewport using the specified placement. You can control the fallback order:

```html
<button bs5-popover="Content"
        placement="top"
        fallback-placements="['bottom', 'left', 'right']">
    Smart Position
</button>
```

### Controller Lifecycle

When using `popover-controller`, the controller's `$onInit()` method will be called if it exists:

```javascript
angular.module('myApp')
    .controller('MyPopoverController', function($http) {
        var ctrl = this;
        
        ctrl.$onInit = function() {
            // Load data when popover opens
            $http.get('/api/data').then(function(response) {
                ctrl.data = response.data;
            });
        };
    });
```

### Promise-based Interaction

The internal promise system allows you to handle both success and failure cases:

```javascript
// In template
<button ng-click="close({action: 'save', value: data})">Save</button>
<button ng-click="dismiss('user_cancelled')">Cancel</button>
```

The `close()` resolves the promise, `dismiss()` rejects it. The handler only receives resolved values.

## Styling

The popover uses standard Bootstrap 5 classes:
- `.popover` - Main container
- `.popover-arrow` - Arrow element
- `.popover-header` - Title/header
- `.popover-body` - Content area

You can add custom CSS to style your popovers:

```css
.popover {
    max-width: 400px; /* Override default width */
}

.popover-header {
    background-color: #007bff;
    color: white;
}

.popover-body {
    padding: 15px;
}
```

## Common Patterns

### Confirmation Popover

```html
<button bs5-popover
        template-url="confirm-popover.html"
        title="Confirm Action"
        handler="vm.onConfirm($data)">
    Delete Item
</button>

<script type="text/ng-template" id="confirm-popover.html">
    <div>
        <p>Are you sure you want to delete this item?</p>
        <div class="d-flex gap-2">
            <button class="btn btn-sm btn-danger" ng-click="close(true)">
                Yes, Delete
            </button>
            <button class="btn btn-sm btn-secondary" ng-click="dismiss(false)">
                Cancel
            </button>
        </div>
    </div>
</script>
```

### Form in Popover

```html
<button bs5-popover
        template-url="form-popover.html"
        title="Quick Form"
        popover-controller="FormPopoverController as formCtrl"
        handler="vm.handleFormSubmit($data)">
    Add Item
</button>

<script type="text/ng-template" id="form-popover.html">
    <form ng-submit="formCtrl.submit()">
        <div class="mb-2">
            <input type="text" 
                   class="form-control form-control-sm" 
                   ng-model="formCtrl.name"
                   placeholder="Name"
                   required>
        </div>
        <div class="mb-2">
            <input type="email" 
                   class="form-control form-control-sm" 
                   ng-model="formCtrl.email"
                   placeholder="Email"
                   required>
        </div>
        <div class="d-flex gap-1">
            <button type="submit" class="btn btn-sm btn-primary">
                Submit
            </button>
            <button type="button" 
                    class="btn btn-sm btn-secondary" 
                    ng-click="dismiss()">
                Cancel
            </button>
        </div>
    </form>
</script>
```

## Best Practices

1. **Use appropriate triggers**: 
   - `click` for actions that require confirmation
   - `hover` for additional information
   - `focus` for form field help text

2. **Keep content concise**: Popovers should be quick to read and interact with

3. **Provide clear close options**: Always give users a way to dismiss the popover

4. **Consider mobile**: Click triggers work better on touch devices than hover

5. **Test positioning**: Make sure popovers work in different viewport sizes

6. **Use controllers for complex logic**: Don't put too much logic in templates

7. **Handle promises properly**: Always consider both success and failure cases

## Troubleshooting

### Popover doesn't show
- Check that Bootstrap 5 CSS is loaded
- Verify the directive attribute is correct: `bs5-popover` not `bs-popover`
- Check browser console for JavaScript errors

### Positioning issues
- Ensure container has proper position context (relative/absolute/fixed)
- Check that fallback placements are appropriate for your layout
- Try adjusting the offset

### Template not loading
- Verify templateUrl path is correct
- Check that template is defined before directive is used
- Look for template syntax errors

### Controller not working
- Ensure controller is registered with Angular
- Check controller name spelling in `popover-controller` attribute
- Verify controller syntax (use `as` syntax for best results)

## Migration from ES5

If you're migrating from the old ES5 version:

```javascript
// Old ES5
angular.module('app', ['bs5.popover'])
    .directive('myDirective', ['$bs5Popover', function($bs5Popover) {
        // ...
    }]);

// New ES6
import angular from 'angular';
import PopoverModule from 'angular-bootstrap-5/components/popover/popover.module';

angular.module('app', [PopoverModule])
    .directive('myDirective', ['$bs5Popover', function($bs5Popover) {
        // ...
    }]);
```

## Browser Support

The popover component works in all browsers supported by:
- AngularJS 1.8.x
- Bootstrap 5.x
- Modern ES6 features (via Babel transpilation)

## See Also

- [Tooltip Component](../tooltip/README.md) - Similar but simpler component
- [Modal Component](../modal/README.md) - For larger overlays
- [Bootstrap 5 Popovers Documentation](https://getbootstrap.com/docs/5.3/components/popovers/)
