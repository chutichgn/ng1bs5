# ng1bs5 Quick Reference

Quick reference guide for common operations.

## Setup (One Time)

### 1. Include Files
```html
<link href="ng1bs5.css" rel="stylesheet">
<script src="module.js"></script>
<script src="loading-overlay.service.js"></script>
<script src="loading-overlay.directive.js"></script>
```

### 2. Add Template
```html
<script type="text/ng-template" id="defaultTemplate.html">
  <div class="bs-loading-overlay" style="...">
    <div class="spinner-border"></div>
  </div>
</script>
```

### 3. Configure Module
```javascript
angular.module('myApp', ['ng1bs5'])
  .run(function(LoadingOverlayService) {
    LoadingOverlayService.setGlobalConfig({
      templateUrl: 'defaultTemplate.html'
    });
  });
```

---

## Basic Usage

### Add Directive
```html
<div bs-loading-overlay="myPanel" style="min-height: 200px;">
  Content
</div>
```

### Control from JavaScript
```javascript
// Start
LoadingOverlayService.start({ referenceId: 'myPanel' });

// Stop
LoadingOverlayService.stop({ referenceId: 'myPanel' });
```

---

## Common Patterns

### With HTTP Request
```javascript
LoadingOverlayService.wrap(
  { referenceId: 'userList' },
  $http.get('/api/users')
).then(function(response) {
  $scope.users = response.data;
});
```

### With Timeout
```javascript
LoadingOverlayService.start({ referenceId: 'panel' });

$timeout(function() {
  LoadingOverlayService.stop({ referenceId: 'panel' });
}, 2000);
```

### Form Submission
```javascript
$scope.save = function() {
  LoadingOverlayService.wrap(
    { referenceId: 'form' },
    $http.post('/api/save', $scope.data)
  ).then(function() {
    alert('Saved!');
  });
};
```

---

## Customization

### Custom Template Per Overlay
```html
<div bs-loading-overlay="panel"
     bs-loading-overlay-template-url="customTemplate.html">
</div>
```

### Template Options
```html
<div bs-loading-overlay="panel"
     bs-loading-overlay-template-options="{
       loadingText: 'Saving...',
       spinnerClass: 'text-success'
     }">
</div>
```

### Custom Active Class
```html
<div bs-loading-overlay="panel"
     bs-loading-overlay-active-class="loading">
</div>
```

### Delay Before Hiding
```html
<div bs-loading-overlay="panel"
     bs-loading-overlay-delay="500">
</div>
```

---

## Service Methods

```javascript
// Start overlay
LoadingOverlayService.start({ referenceId: 'id' });

// Stop overlay
LoadingOverlayService.stop({ referenceId: 'id' });

// Wrap promise (auto start/stop)
LoadingOverlayService.wrap({ referenceId: 'id' }, promise);

// Check if registered
LoadingOverlayService.isRegistered('id');

// Get all registered IDs
LoadingOverlayService.getRegisteredIds();

// Debug info
LoadingOverlayService.debugOverlays();

// Set global config
LoadingOverlayService.setGlobalConfig({ templateUrl: 'template.html' });
```

---

## Directive Attributes

```html
<div bs-loading-overlay="id"                              <!-- Required: Reference ID -->
     bs-loading-overlay-template="<div>...</div>"         <!-- Inline template -->
     bs-loading-overlay-template-url="template.html"      <!-- Template URL -->
     bs-loading-overlay-template-options="{ ... }"        <!-- Template options -->
     bs-loading-overlay-active-class="loading"            <!-- Active class -->
     bs-loading-overlay-delay="300">                      <!-- Hide delay (ms) -->
</div>
```

---

## Templates

### Available Templates (ng1bs5-templates.html)

- `defaultTemplate.html` - Default spinner (light background)
- `growSpinner.html` - Grow spinner (dark background)
- `largeSpinner.html` - Large spinner with text
- `multiSpinner.html` - Multiple colored spinners

### Template Options

```javascript
{
  spinnerClass: 'text-primary',     // Spinner color
  spinnerStyle: { width: '3rem' },  // Custom styles
  loadingText: 'Loading...',        // Display text
  showText: true,                   // Show/hide text
  textClass: 'text-primary'         // Text color
}
```

---

## Error Handling

```javascript
LoadingOverlayService.wrap(
  { referenceId: 'panel' },
  $http.get('/api/data')
)
.then(function(response) {
  // Success
})
.catch(function(error) {
  // Error - overlay automatically stops
  console.error(error);
});
```

---

## Multiple Overlays

```javascript
// Start multiple
LoadingOverlayService.start({ referenceId: 'panel1' });
LoadingOverlayService.start({ referenceId: 'panel2' });

// Or start all at once
LoadingOverlayService.start();

// Stop all
LoadingOverlayService.stop();
```

---

## Debugging

```javascript
// Check registration
LoadingOverlayService.isRegistered('myPanel')  // true/false

// List all overlays
LoadingOverlayService.getRegisteredIds()  // ['panel1', 'panel2']

// Full debug info
LoadingOverlayService.debugOverlays()
```

### Console Commands

```javascript
// Get service
var service = angular.element(document.body).injector().get('LoadingOverlayService');

// Check element in DOM
document.querySelector('[bs-loading-overlay="myPanel"]')
```

---

## Best Practices

✅ **Always use reference IDs** for better control  
✅ **Use `wrap()` with promises** for automatic cleanup  
✅ **Set minimum height** on overlay containers  
✅ **Handle errors** in catch blocks  
✅ **Include ng1bs5.css** (required!)  

❌ Don't forget to configure a template  
❌ Don't use without setting element height  
❌ Don't ignore error handling  

---

## Troubleshooting

**Overlay not showing?**
- Check `ng1bs5.css` is included
- Verify element has height (`style="min-height: 200px"`)
- Confirm template is configured
- Check browser console for errors

**Overlay not registered?**
```javascript
// Check if element exists
document.querySelector('[bs-loading-overlay="myId"]')

// Check if registered
LoadingOverlayService.isRegistered('myId')
```

**Need help?**
- [Getting Started](GETTING-STARTED-COMPLETE.md)
- [API Reference](API.md)
- [Usage Examples](USAGE.md)
- [Troubleshooting](TROUBLESHOOTING-CSS.md)

---

## Complete Example

```html
<!DOCTYPE html>
<html ng-app="myApp">
<head>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="ng1bs5.css" rel="stylesheet">
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
  <script src="module.js"></script>
  <script src="loading-overlay.service.js"></script>
  <script src="loading-overlay.directive.js"></script>
</head>
<body ng-controller="MainCtrl">
  
  <script type="text/ng-template" id="defaultTemplate.html">
    <div class="bs-loading-overlay" style="position:absolute;top:0;left:0;right:0;bottom:0;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,0.9);z-index:99999;">
      <div class="spinner-border text-primary" style="width:3rem;height:3rem;"></div>
    </div>
  </script>
  
  <button ng-click="load()">Load</button>
  <div bs-loading-overlay="panel" style="min-height:200px;">Content</div>
  
  <script>
    angular.module('myApp', ['ng1bs5'])
      .run(function(LoadingOverlayService) {
        LoadingOverlayService.setGlobalConfig({ templateUrl: 'defaultTemplate.html' });
      })
      .controller('MainCtrl', function($scope, $timeout, LoadingOverlayService) {
        $scope.load = function() {
          LoadingOverlayService.start({ referenceId: 'panel' });
          $timeout(() => LoadingOverlayService.stop({ referenceId: 'panel' }), 2000);
        };
      });
  </script>
</body>
</html>
```

---

**Print this page for quick reference!**
