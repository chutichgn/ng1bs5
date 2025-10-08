# Migration to ng-template - Summary

## What Changed

**Old Approach:** JavaScript template variables in `default-templates.js`
```javascript
var NG1BS5_DEFAULT_SPINNER_TEMPLATE = `<div>...</div>`;
```

**New Approach:** HTML templates using `<script type="text/ng-template">`
```html
<script type="text/ng-template" id="defaultTemplate.html">
  <div>...</div>
</script>
```

## Why This Change?

### ✅ Advantages

1. **Cleaner Architecture**
   - Templates are HTML, not JavaScript strings
   - No more escaping issues with quotes
   - Better separation of concerns

2. **Better Developer Experience**
   - IDE syntax highlighting for HTML
   - Easier to edit and maintain
   - Can use HTML formatters

3. **Smaller Footprint**
   - One less JavaScript file to load
   - Templates cached by Angular automatically
   - Can include only templates you need

4. **More Flexible**
   - Can use ng-include to organize templates
   - Easy to override specific templates
   - Can put templates anywhere (separate file, inline, etc.)

5. **Angular Best Practice**
   - This is the standard Angular 1.x way
   - Works with Angular's $templateCache
   - Better integration with Angular ecosystem

## Files Created

### 1. ng1bs5-templates.html
**File containing all pre-built templates**

Contains 4 templates:
- `defaultTemplate.html` - Default spinner (light)
- `growSpinner.html` - Grow spinner (dark)
- `largeSpinner.html` - Large spinner with text
- `multiSpinner.html` - Multiple spinners

**Usage:**
```html
<!-- Option 1: Include entire file -->
<script src="ng1bs5-templates.html"></script>

<!-- Option 2: Copy templates you need into your HTML -->
<script type="text/ng-template" id="defaultTemplate.html">
  ...
</script>
```

### 2. quick-example-ng-template.html
Simple working example using ng-template approach

### 3. demo-ng-template.html
Complete demo showing all 4 templates

### 4. NG-TEMPLATE-GUIDE.md
Complete documentation for using ng-template

## Migration Guide

### Before (Old Way)

```html
<head>
  <script src="module.js"></script>
  <script src="default-templates.js"></script>
  <script src="loading-overlay.service.js"></script>
  <script src="loading-overlay.directive.js"></script>
</head>

<script>
angular.module('myApp', ['ng1bs5'])
  .run(function(LoadingOverlayService) {
    LoadingOverlayService.setGlobalConfig({
      template: NG1BS5_DEFAULT_SPINNER_TEMPLATE  // JavaScript variable
    });
  });
</script>
```

### After (New Way)

```html
<head>
  <script src="module.js"></script>
  <script src="loading-overlay.service.js"></script>
  <script src="loading-overlay.directive.js"></script>
  <!-- No default-templates.js needed! -->
</head>

<body>
  <!-- Include template -->
  <script type="text/ng-template" id="defaultTemplate.html">
    <div class="bs-loading-overlay" style="...">
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
</body>
```

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
  
  <!-- Template -->
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
      <div class="spinner-border text-primary" 
           role="status"
           style="width: 3rem; height: 3rem;">
        <span class="visually-hidden">Loading...</span>
      </div>
    </div>
  </script>
  
  <!-- Content -->
  <button ng-click="load()">Load Data</button>
  
  <div bs-loading-overlay="myPanel" style="min-height: 200px;">
    <h3>Content</h3>
    <p>{{ data }}</p>
  </div>
  
  <script>
    angular.module('myApp', ['ng1bs5'])
      .run(function(LoadingOverlayService) {
        LoadingOverlayService.setGlobalConfig({
          templateUrl: 'defaultTemplate.html'
        });
      })
      .controller('MainCtrl', function($scope, $timeout, LoadingOverlayService) {
        $scope.load = function() {
          LoadingOverlayService.wrap(
            { referenceId: 'myPanel' },
            $timeout(function() {
              return 'Loaded!';
            }, 2000)
          ).then(function(result) {
            $scope.data = result;
          });
        };
      });
  </script>
</body>
</html>
```

## Backward Compatibility

**Good news:** Both approaches still work!

- ✅ Old way (JavaScript templates) still works
- ✅ New way (ng-template) is recommended
- ✅ You can mix both approaches
- ✅ No breaking changes

**However:**
- `default-templates.js` is now **deprecated**
- New projects should use ng-template
- Existing projects can migrate at their own pace

## File Comparison

### Old Approach Files
```
module.js                     (367 B)
default-templates.js          (3.9 KB)  ← Can remove this!
loading-overlay.service.js    (7.4 KB)
loading-overlay.directive.js  (6.6 KB)
```
**Total:** 18.3 KB

### New Approach Files
```
module.js                     (367 B)
loading-overlay.service.js    (7.4 KB)
loading-overlay.directive.js  (6.6 KB)
ng1bs5-templates.html         (5 KB)   ← Include only what you need
```
**Total:** 19.4 KB (but templates are HTML, easier to customize)

**Or even lighter:**
```
module.js                     (367 B)
loading-overlay.service.js    (7.4 KB)
loading-overlay.directive.js  (6.6 KB)
<inline template in HTML>     (~1 KB)
```
**Total:** 15.4 KB! ✨

## Quick Reference

### Configuration

**Old:**
```javascript
LoadingOverlayService.setGlobalConfig({
  template: NG1BS5_DEFAULT_SPINNER_TEMPLATE
});
```

**New:**
```javascript
LoadingOverlayService.setGlobalConfig({
  templateUrl: 'defaultTemplate.html'
});
```

### Per-Directive

**Old:**
```html
<div bs-loading-overlay
     bs-loading-overlay-template="<div>...</div>">
</div>
```

**New:**
```html
<div bs-loading-overlay
     bs-loading-overlay-template-url="myTemplate.html">
</div>
```

## Examples & Documentation

1. **[ng1bs5-templates.html](ng1bs5-templates.html)** - All pre-built templates
2. **[quick-example-ng-template.html](quick-example-ng-template.html)** - Simple example
3. **[demo-ng-template.html](demo-ng-template.html)** - Complete demo
4. **[NG-TEMPLATE-GUIDE.md](NG-TEMPLATE-GUIDE.md)** - Full documentation

## Summary

**What to do:**
1. ✅ Use `<script type="text/ng-template">` for new projects
2. ✅ Use `templateUrl` instead of `template` in config
3. ✅ Copy templates from `ng1bs5-templates.html` or create your own
4. ✅ Remove `default-templates.js` dependency

**Benefits:**
- Cleaner code
- Better developer experience
- Smaller footprint (optional)
- More flexible
- Angular best practice

**Result:** Modern, maintainable template management! 🎉
