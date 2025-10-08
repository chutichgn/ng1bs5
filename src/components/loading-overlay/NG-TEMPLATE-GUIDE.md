# Using ng-template Instead of JavaScript Templates

## Overview

**New Recommended Approach:** Use `<script type="text/ng-template">` instead of `default-templates.js`

This is cleaner, more maintainable, and follows Angular best practices.

## Quick Start

### Step 1: Include Templates in Your HTML

Add these templates anywhere in your HTML (typically in `<body>` or a separate file):

```html
<!-- Default Spinner -->
<script type="text/ng-template" id="defaultTemplate.html">
  <div class="bs-loading-overlay bs-loading-overlay-light" style="
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    background-color: rgba(255, 255, 255, 0.9) !important;
    z-index: 99999 !important;
    pointer-events: auto !important;
  ">
    <div class="spinner-border" 
         role="status"
         ng-class="options.spinnerClass || 'text-primary'"
         ng-style="options.spinnerStyle || { width: '3rem', height: '3rem' }">
      <span class="visually-hidden">{{ options.loadingText || 'Loading...' }}</span>
    </div>
  </div>
</script>
```

### Step 2: Configure Service

```javascript
angular.module('myApp', ['ng1bs5'])
  .run(function(LoadingOverlayService) {
    LoadingOverlayService.setGlobalConfig({
      templateUrl: 'defaultTemplate.html'  // Reference the ng-template id
    });
  });
```

### Step 3: Use the Directive

```html
<div bs-loading-overlay="myPanel">
  Your content
</div>
```

```javascript
// Control it
LoadingOverlayService.start({ referenceId: 'myPanel' });
LoadingOverlayService.stop({ referenceId: 'myPanel' });
```

## Complete HTML Setup

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
  
  <!-- Templates -->
  <script type="text/ng-template" id="defaultTemplate.html">
    <div class="bs-loading-overlay" style="...">
      <div class="spinner-border"></div>
    </div>
  </script>
  
  <!-- Your content -->
  <div bs-loading-overlay="myPanel">
    Content
  </div>
  
  <script>
    angular.module('myApp', ['ng1bs5'])
      .run(function(LoadingOverlayService) {
        LoadingOverlayService.setGlobalConfig({
          templateUrl: 'defaultTemplate.html'
        });
      })
      .controller('MainCtrl', function($scope, LoadingOverlayService) {
        // Use it
      });
  </script>
</body>
</html>
```

## All Available Templates

We provide 4 pre-built templates:

### 1. Default Spinner (Light)
```html
<script type="text/ng-template" id="defaultTemplate.html">
  <!-- Light background, primary spinner -->
</script>
```

**Use:**
```javascript
templateUrl: 'defaultTemplate.html'
```

### 2. Grow Spinner (Dark)
```html
<script type="text/ng-template" id="growSpinner.html">
  <!-- Dark background, growing spinner -->
</script>
```

**Use:**
```javascript
templateUrl: 'growSpinner.html'
```

### 3. Large Spinner with Text
```html
<script type="text/ng-template" id="largeSpinner.html">
  <!-- Large spinner with loading text -->
</script>
```

**Use:**
```javascript
templateUrl: 'largeSpinner.html'
```

### 4. Multiple Spinners
```html
<script type="text/ng-template" id="multiSpinner.html">
  <!-- Three colored spinners -->
</script>
```

**Use:**
```javascript
templateUrl: 'multiSpinner.html'
```

## Including Pre-built Templates

### Option 1: Copy from ng1bs5-templates.html

The file `ng1bs5-templates.html` contains all 4 templates. You can:

**A. Include the entire file:**
```html
<script src="ng1bs5-templates.html"></script>
```

**B. Copy templates into your HTML:**
```html
<!-- Copy the <script type="text/ng-template"> tags from ng1bs5-templates.html -->
```

### Option 2: Use ng-include

```html
<div ng-include="'ng1bs5-templates.html'"></div>
```

## Configuration

### Global Configuration

Set a default template for all overlays:

```javascript
angular.module('myApp', ['ng1bs5'])
  .run(function(LoadingOverlayService) {
    LoadingOverlayService.setGlobalConfig({
      templateUrl: 'defaultTemplate.html',
      templateOptions: {
        spinnerClass: 'text-primary',
        loadingText: 'Loading...'
      }
    });
  });
```

### Per-Directive Configuration

Override the global template for specific overlays:

```html
<!-- Use custom template for this overlay -->
<div bs-loading-overlay="panel1"
     bs-loading-overlay-template-url="growSpinner.html">
</div>

<!-- With options -->
<div bs-loading-overlay="panel2"
     bs-loading-overlay-template-url="largeSpinner.html"
     bs-loading-overlay-template-options="{ loadingText: 'Please wait...', spinnerClass: 'text-success' }">
</div>
```

## Template Options

All templates support these options via `options` scope variable:

```javascript
{
  spinnerClass: 'text-primary',    // Bootstrap text color class
  spinnerStyle: { width: '3rem', height: '3rem' },  // Custom styles
  loadingText: 'Loading...',       // Text to display
  showText: true,                  // Show/hide text (growSpinner)
  textClass: 'text-primary'        // Text color class
}
```

### Example Usage

```html
<div bs-loading-overlay="panel"
     bs-loading-overlay-template-url="largeSpinner.html"
     bs-loading-overlay-template-options="{ 
       loadingText: 'Saving data...', 
       spinnerClass: 'text-success',
       spinnerStyle: { width: '5rem', height: '5rem' }
     }">
</div>
```

## Creating Custom Templates

You can create your own templates:

```html
<script type="text/ng-template" id="myCustomSpinner.html">
  <div class="bs-loading-overlay" style="
    position: absolute !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    background-color: rgba(100, 50, 200, 0.8) !important;
    z-index: 99999 !important;
  ">
    <!-- Your custom spinner HTML -->
    <div class="my-custom-spinner">
      <i class="fas fa-cog fa-spin fa-3x"></i>
      <p>{{ options.loadingText || 'Custom Loading...' }}</p>
    </div>
  </div>
</script>
```

**Use it:**
```html
<div bs-loading-overlay="panel"
     bs-loading-overlay-template-url="myCustomSpinner.html">
</div>
```

## Required Files

**With ng-template approach, you only need:**

```html
<!-- CSS -->
<link href="ng1bs5.css" rel="stylesheet">

<!-- JavaScript -->
<script src="module.js"></script>
<script src="loading-overlay.service.js"></script>
<script src="loading-overlay.directive.js"></script>

<!-- NO NEED for default-templates.js! -->
```

## Migration from default-templates.js

### Old Way (JavaScript Templates)

```html
<script src="default-templates.js"></script>

<script>
angular.module('myApp', ['ng1bs5'])
  .run(function(LoadingOverlayService) {
    LoadingOverlayService.setGlobalConfig({
      template: NG1BS5_DEFAULT_SPINNER_TEMPLATE  // JavaScript variable
    });
  });
</script>
```

### New Way (ng-template)

```html
<!-- Include template in HTML -->
<script type="text/ng-template" id="defaultTemplate.html">
  <div class="bs-loading-overlay">
    <div class="spinner-border"></div>
  </div>
</script>

<script>
angular.module('myApp', ['ng1bs5'])
  .run(function(LoadingOverlayService) {
    LoadingOverlayService.setGlobalConfig({
      templateUrl: 'defaultTemplate.html'  // Template ID
    });
  });
</script>
```

## Advantages

✅ **No separate JavaScript file** for templates  
✅ **Templates are HTML** where they belong  
✅ **Easier to customize** - just edit HTML  
✅ **Better IDE support** - syntax highlighting for HTML  
✅ **Angular's template cache** - automatic caching  
✅ **Can use ng-include** - modular organization  
✅ **Smaller file size** - one less JS file to load  

## Examples

- **[quick-example-ng-template.html](quick-example-ng-template.html)** - Simple example
- **[demo-ng-template.html](demo-ng-template.html)** - All templates demo
- **[ng1bs5-templates.html](ng1bs5-templates.html)** - Ready-to-use templates file

## Summary

**Before (Old Way):**
```html
<script src="default-templates.js"></script>
template: NG1BS5_DEFAULT_SPINNER_TEMPLATE
```

**After (New Way):**
```html
<script type="text/ng-template" id="defaultTemplate.html">...</script>
templateUrl: 'defaultTemplate.html'
```

**Result:** Cleaner, more maintainable code! 🎉
