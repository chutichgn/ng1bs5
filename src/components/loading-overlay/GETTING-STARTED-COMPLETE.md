# Getting Started with ng1bs5

## What is ng1bs5?

ng1bs5 is a lightweight, Bootstrap 5 compatible loading overlay module for AngularJS (1.x). It provides an easy way to show loading indicators over any element or your entire page.

## Features

✅ **Bootstrap 5 Compatible** - Works seamlessly with Bootstrap 5  
✅ **Flexible** - Use with any element or globally  
✅ **Promise Integration** - Automatic overlay management with promises  
✅ **Command Queueing** - Works even when called before directive initialization  
✅ **Customizable** - Use pre-built templates or create your own  
✅ **Zero Dependencies** - Only requires AngularJS and Bootstrap 5  
✅ **Lightweight** - ~18 KB total for core files  

## Quick Start (5 Minutes)

### Step 1: Include Files

Add these files to your HTML in this order:

```html
<!DOCTYPE html>
<html ng-app="myApp">
<head>
  <!-- Bootstrap 5 CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
  
  <!-- ng1bs5 CSS (REQUIRED!) -->
  <link href="ng1bs5.css" rel="stylesheet">
  
  <!-- AngularJS -->
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
  
  <!-- ng1bs5 Module -->
  <script src="module.js"></script>
  <script src="loading-overlay.service.js"></script>
  <script src="loading-overlay.directive.js"></script>
</head>
<body>
  <!-- Your app content -->
</body>
</html>
```

### Step 2: Add a Template

Add a template in your HTML (recommended approach):

```html
<body>
  <!-- Loading overlay template -->
  <script type="text/ng-template" id="defaultTemplate.html">
    <div class="bs-loading-overlay" style="
      position: absolute !important;
      top: 0; left: 0; right: 0; bottom: 0;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      background-color: rgba(255, 255, 255, 0.9) !important;
      z-index: 99999 !important;
      pointer-events: auto !important;
    ">
      <div class="spinner-border text-primary" 
           role="status"
           style="width: 3rem; height: 3rem;">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </script>
  
  <!-- Your app content -->
</body>
```

**Alternative:** Include pre-built templates file:
```html
<script src="ng1bs5-templates.html"></script>
```

### Step 3: Configure Module

Configure your Angular module:

```javascript
angular.module('myApp', ['ng1bs5'])
  .run(function(LoadingOverlayService) {
    // Set global template
    LoadingOverlayService.setGlobalConfig({
      templateUrl: 'defaultTemplate.html'
    });
  });
```

### Step 4: Add Directive to Element

Add the directive to any element you want to show loading overlay on:

```html
<div bs-loading-overlay="myPanel" style="min-height: 200px;">
  <h3>My Content</h3>
  <p>This area will show a loading overlay</p>
</div>
```

### Step 5: Control from JavaScript

Control the overlay from your controller:

```javascript
angular.module('myApp')
  .controller('MainCtrl', function($scope, $timeout, LoadingOverlayService) {
    
    $scope.loadData = function() {
      // Start the overlay
      LoadingOverlayService.start({ referenceId: 'myPanel' });
      
      // Simulate loading
      $timeout(function() {
        // Stop the overlay
        LoadingOverlayService.stop({ referenceId: 'myPanel' });
      }, 2000);
    };
    
  });
```

### Complete Working Example

```html
<!DOCTYPE html>
<html ng-app="myApp">
<head>
  <meta charset="UTF-8">
  <title>ng1bs5 Quick Start</title>
  
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <link href="ng1bs5.css" rel="stylesheet">
  
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
  <script src="module.js"></script>
  <script src="loading-overlay.service.js"></script>
  <script src="loading-overlay.directive.js"></script>
</head>
<body ng-controller="MainCtrl">
  
  <!-- Template -->
  <script type="text/ng-template" id="defaultTemplate.html">
    <div class="bs-loading-overlay" style="
      position: absolute !important;
      top: 0; left: 0; right: 0; bottom: 0;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      background-color: rgba(255, 255, 255, 0.9) !important;
      z-index: 99999 !important;
    ">
      <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;"></div>
    </div>
  </script>
  
  <div class="container mt-5">
    <h1>ng1bs5 Quick Start</h1>
    
    <button class="btn btn-primary" ng-click="loadData()">
      Load Data
    </button>
    
    <div bs-loading-overlay="myPanel" 
         class="mt-3 p-4 border rounded"
         style="min-height: 200px; background-color: #f8f9fa;">
      <h3>Content Area</h3>
      <p>Click the button to see the loading overlay!</p>
    </div>
  </div>
  
  <script>
    angular.module('myApp', ['ng1bs5'])
      .run(function(LoadingOverlayService) {
        LoadingOverlayService.setGlobalConfig({
          templateUrl: 'defaultTemplate.html'
        });
      })
      .controller('MainCtrl', function($scope, $timeout, LoadingOverlayService) {
        $scope.loadData = function() {
          LoadingOverlayService.start({ referenceId: 'myPanel' });
          
          $timeout(function() {
            LoadingOverlayService.stop({ referenceId: 'myPanel' });
          }, 2000);
        };
      });
  </script>
</body>
</html>
```

## Installation Options

### Option 1: Download Files

Download these files and include them in your project:
- `ng1bs5.css` (required)
- `module.js` (required)
- `loading-overlay.service.js` (required)
- `loading-overlay.directive.js` (required)
- `ng1bs5-templates.html` (optional - or create your own)

### Option 2: Single File

Use the all-in-one module file:
```html
<link href="ng1bs5.css" rel="stylesheet">
<script src="ng1bs5.module.js"></script>
```

## File Structure

```
your-project/
├── css/
│   └── ng1bs5.css                    (3.3 KB - Required)
├── js/
│   ├── module.js                     (367 B - Required)
│   ├── loading-overlay.service.js    (7.4 KB - Required)
│   └── loading-overlay.directive.js  (6.6 KB - Required)
└── templates/
    └── ng1bs5-templates.html         (4.2 KB - Optional)
```

## Basic Concepts

### 1. Reference ID

Every overlay needs a unique reference ID to control it:

```html
<div bs-loading-overlay="myUniqueId">
  Content
</div>
```

```javascript
LoadingOverlayService.start({ referenceId: 'myUniqueId' });
LoadingOverlayService.stop({ referenceId: 'myUniqueId' });
```

### 2. Templates

Templates define what the overlay looks like. You can:

**A. Use global template (recommended):**
```javascript
LoadingOverlayService.setGlobalConfig({
  templateUrl: 'defaultTemplate.html'
});
```

**B. Override per directive:**
```html
<div bs-loading-overlay="panel1"
     bs-loading-overlay-template-url="customTemplate.html">
</div>
```

### 3. Element Positioning

The element with `bs-loading-overlay` must have:
- A defined size (width/height or content)
- Position: relative (automatically set)

```html
<!-- Good - has size -->
<div bs-loading-overlay="panel1" style="min-height: 200px;">
  Content
</div>

<!-- Also good - has content -->
<div bs-loading-overlay="panel2">
  <h3>Title</h3>
  <p>This has natural height</p>
</div>
```

## Common Patterns

### Pattern 1: Simple Button Click

```javascript
$scope.onClick = function() {
  LoadingOverlayService.start({ referenceId: 'myPanel' });
  
  // Do something
  $timeout(function() {
    LoadingOverlayService.stop({ referenceId: 'myPanel' });
  }, 2000);
};
```

### Pattern 2: With HTTP Request

```javascript
$scope.loadUsers = function() {
  LoadingOverlayService.start({ referenceId: 'userList' });
  
  $http.get('/api/users')
    .then(function(response) {
      $scope.users = response.data;
    })
    .finally(function() {
      LoadingOverlayService.stop({ referenceId: 'userList' });
    });
};
```

### Pattern 3: Using wrap() Method

The `wrap()` method automatically manages start/stop:

```javascript
$scope.loadUsers = function() {
  LoadingOverlayService.wrap(
    { referenceId: 'userList' },
    $http.get('/api/users')
  ).then(function(response) {
    $scope.users = response.data;
  });
};
```

### Pattern 4: Multiple Overlays

```html
<div bs-loading-overlay="panel1">Panel 1</div>
<div bs-loading-overlay="panel2">Panel 2</div>
```

```javascript
// Start both
LoadingOverlayService.start({ referenceId: 'panel1' });
LoadingOverlayService.start({ referenceId: 'panel2' });

// Or start all at once
LoadingOverlayService.start();
```

## Next Steps

Now that you have the basics:

1. **[Read the API Documentation](API.md)** - Learn all available methods and options
2. **[See Typical Usage Examples](USAGE.md)** - Real-world usage patterns
3. **[Explore Templates](NG-TEMPLATE-GUIDE.md)** - Customize the look
4. **[Try the Demos](demo-ng-template.html)** - See it in action

## Troubleshooting

### Overlay Not Showing?

**Check:**
1. Is `ng1bs5.css` included? (Required!)
2. Does the element have height? (Add `style="min-height: 200px"`)
3. Is the template configured?
4. Check browser console for errors

**Debug:**
```javascript
// Check if overlay is registered
LoadingOverlayService.isRegistered('myPanel')  // Should return true

// See all registered overlays
LoadingOverlayService.getRegisteredIds()
```

### Overlay Not Registering?

See **[NOT-REGISTERING-GUIDE.md](NOT-REGISTERING-GUIDE.md)** for complete debugging guide.

### Z-Index Issues?

See **[TROUBLESHOOTING-CSS.md](TROUBLESHOOTING-CSS.md)** for CSS debugging.

## Requirements

- **AngularJS:** 1.5+ (tested with 1.8.2)
- **Bootstrap:** 5.0+ (for spinner classes)
- **Browsers:** All modern browsers (Chrome, Firefox, Safari, Edge)

## License

MIT License - Free to use in personal and commercial projects.

## Need Help?

- **[Complete API Reference](API.md)**
- **[Usage Examples](USAGE.md)**
- **[Troubleshooting Guide](TROUBLESHOOTING-CSS.md)**
- **[Demo Files](index.html)**

---

**You're ready to go!** 🚀

Start with the complete example above, then explore the documentation to learn more advanced features.
