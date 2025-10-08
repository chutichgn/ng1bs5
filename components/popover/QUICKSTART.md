# Popover Component - Quick Start Guide

Get up and running with the bs5Popover directive in 5 minutes!

## Installation

```bash
# In your project directory
cd /path/to/angular-bootstrap-5
npm install
npm run build
```

## Basic Setup

### 1. Include Dependencies

```html
<!DOCTYPE html>
<html ng-app="myApp">
<head>
    <!-- Bootstrap 5 CSS (required) -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    
    <!-- AngularJS -->
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.3/angular.min.js"></script>
    
    <!-- Angular Bootstrap 5 (your built library) -->
    <script src="dist/angular-bootstrap-5.js"></script>
</head>
```

### 2. Initialize Your App

```javascript
angular.module('myApp', ['ng1bs5'])
    .controller('MainController', function() {
        var vm = this;
        // Your controller code
    });
```

## Common Use Cases

### Simple Text Popover

```html
<button bs5-popover="Hello! This is a popover." title="Greeting">
    Click Me
</button>
```

### HTML Content

```html
<button bs5-popover="<strong>Bold</strong> and <em>italic</em> text!" 
        title="Formatted Text"
        html="true">
    Rich Content
</button>
```

### Different Triggers

```html
<!-- Click to toggle (default) -->
<button bs5-popover="Click content" title="Click">Click</button>

<!-- Hover to show -->
<button bs5-popover="Hover content" title="Hover" trigger="hover">Hover</button>

<!-- Focus to show -->
<input bs5-popover="Focus content" title="Focus" trigger="focus" placeholder="Focus me">
```

### Custom Placement

```html
<button bs5-popover="Content" title="Top" placement="top">Top</button>
<button bs5-popover="Content" title="Right" placement="right">Right</button>
<button bs5-popover="Content" title="Bottom" placement="bottom">Bottom</button>
<button bs5-popover="Content" title="Left" placement="left">Left</button>
```

### With Template

```html
<button bs5-popover
        template-url="my-popover.html"
        title="Interactive">
    Show Template
</button>

<script type="text/ng-template" id="my-popover.html">
    <div>
        <p>Custom template content</p>
        <button class="btn btn-sm btn-primary" ng-click="close('done')">
            Done
        </button>
    </div>
</script>
```

### With Controller

```html
<!-- In HTML -->
<button bs5-popover
        template-url="counter-popover.html"
        title="Counter"
        popover-controller="CounterController as counter"
        handler="vm.handleClose($data)">
    Counter Popover
</button>

<script type="text/ng-template" id="counter-popover.html">
    <div>
        <p>Count: {{counter.count}}</p>
        <button ng-click="counter.increment()">+</button>
        <button ng-click="close({count: counter.count})">Save</button>
    </div>
</script>
```

```javascript
// In JavaScript
angular.module('myApp')
    .controller('CounterController', function() {
        var vm = this;
        vm.count = 0;
        
        vm.increment = function() {
            vm.count++;
        };
    })
    .controller('MainController', function() {
        var vm = this;
        
        vm.handleClose = function(data) {
            console.log('Popover closed with:', data);
        };
    });
```

## Configuration Options

### All Attributes

```html
<button bs5-popover="Content text"
        title="Popover Title"
        placement="right"
        trigger="click"
        animate="true"
        html="false"
        delay="0"
        offset="[0, 0]"
        fallback-placements="['left', 'right', 'top', 'bottom']"
        template-url="optional-template.html"
        popover-controller="OptionalController as ctrl"
        container="body"
        handler="vm.handleData($data)">
    Fully Configured
</button>
```

### Delay Examples

```html
<!-- Simple delay (milliseconds) -->
<button bs5-popover="Content" delay="500">Delayed</button>

<!-- Different show/hide delays -->
<button bs5-popover="Content" delay="{show: 300, hide: 800}">Custom</button>
```

### Positioning Examples

```html
<!-- With offset -->
<button bs5-popover="Content" 
        offset="[20, 10]"
        placement="right">
    Offset
</button>

<!-- Custom fallbacks -->
<button bs5-popover="Content"
        placement="top"
        fallback-placements="['bottom', 'left', 'right']">
    Smart Position
</button>
```

## Common Patterns

### Confirmation Dialog

```html
<button bs5-popover
        template-url="confirm-delete.html"
        title="Confirm Delete"
        handler="vm.confirmDelete($data)">
    Delete Item
</button>

<script type="text/ng-template" id="confirm-delete.html">
    <div>
        <p>Are you sure?</p>
        <button class="btn btn-sm btn-danger" ng-click="close(true)">
            Yes, Delete
        </button>
        <button class="btn btn-sm btn-secondary" ng-click="dismiss(false)">
            Cancel
        </button>
    </div>
</script>
```

### Form Input

```html
<button bs5-popover
        template-url="quick-form.html"
        title="Add Note"
        handler="vm.saveNote($data)">
    Add Note
</button>

<script type="text/ng-template" id="quick-form.html">
    <div>
        <textarea class="form-control" 
                  ng-model="note" 
                  rows="3"
                  placeholder="Enter note..."></textarea>
        <div class="mt-2">
            <button class="btn btn-sm btn-primary" 
                    ng-click="close(note)"
                    ng-disabled="!note">
                Save
            </button>
        </div>
    </div>
</script>
```

## Tips & Tricks

### 1. Keep It Simple
Popovers work best with brief content. For complex content, consider using a modal instead.

### 2. Choose the Right Trigger
- **Click**: Best for interactive content (forms, buttons)
- **Hover**: Best for informational content (help text)
- **Focus**: Best for form field hints

### 3. Mobile-Friendly
Use `trigger="click"` for better mobile experience, as hover doesn't work well on touch devices.

### 4. Test Positioning
Always test your popovers at different screen sizes and positions to ensure they fit properly.

### 5. Provide Exit Options
Always give users a clear way to close the popover, especially with click triggers.

## Troubleshooting

### Popover Doesn't Show
1. Check Bootstrap 5 CSS is loaded
2. Verify directive name is `bs5-popover` (not `bs-popover`)
3. Check browser console for errors
4. Ensure ng1bs5 module is imported

### Content Not Displaying
1. For HTML: Make sure `html="true"` is set
2. For templates: Verify template ID matches templateUrl
3. Check template syntax for errors

### Positioning Issues
1. Try different fallback placements
2. Adjust offset if needed
3. Check container positioning (relative/absolute/fixed)
4. Ensure enough space in viewport

### Controller Not Working
1. Verify controller is registered
2. Check controller name spelling
3. Use "as" syntax: `popover-controller="MyCtrl as ctrl"`
4. Check for JavaScript errors

## Next Steps

- **Full Documentation**: See [README.md](README.md) for complete API
- **Examples**: Check [examples/popover-examples.html](../../examples/popover-examples.html)
- **Tests**: Review [popover.spec.js](popover.spec.js) for test examples
- **Implementation**: See [IMPLEMENTATION.md](IMPLEMENTATION.md) for technical details

## Support

For issues or questions:
1. Check the full [README.md](README.md) documentation
2. Review the [examples](../../examples/popover-examples.html)
3. Look at the [test suite](popover.spec.js) for usage patterns

## Example Project Structure

```
my-project/
├── index.html
├── app.js
├── controllers/
│   └── main.controller.js
└── templates/
    └── popovers/
        ├── confirm.html
        ├── form.html
        └── info.html
```

**index.html**
```html
<!DOCTYPE html>
<html ng-app="myApp">
<head>
    <link rel="stylesheet" href="bootstrap.min.css">
    <script src="angular.min.js"></script>
    <script src="angular-bootstrap-5.js"></script>
    <script src="app.js"></script>
    <script src="controllers/main.controller.js"></script>
</head>
<body ng-controller="MainController as vm">
    <button bs5-popover="Hello!" title="Greeting">Test</button>
</body>
</html>
```

**app.js**
```javascript
angular.module('myApp', ['ng1bs5']);
```

**main.controller.js**
```javascript
angular.module('myApp')
    .controller('MainController', function() {
        var vm = this;
        // Controller code
    });
```

---

**Ready to use!** The Popover component is production-ready with all features implemented. Happy coding! 🎉
