# ng1bs5 - Loading Overlay for AngularJS + Bootstrap 5

A lightweight, flexible loading overlay module for AngularJS (1.x) with Bootstrap 5 integration.

## Features

✨ **Easy to Use** - Add loading overlays with just a directive  
🎨 **Bootstrap 5 Styled** - Uses Bootstrap 5 spinner components  
🔧 **Highly Customizable** - Use templates or create your own  
⚡ **Promise Integration** - Automatic overlay management with promises  
🎯 **Smart Queueing** - Works even when called before directive initialization  
📦 **Lightweight** - Only ~18 KB for core files  
🚀 **Production Ready** - Clean code, no console logs  

## Quick Start

### 1. Include Files

```html
<!DOCTYPE html>
<html ng-app="myApp">
<head>
  <!-- Bootstrap 5 CSS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
  
  <!-- ng1bs5 CSS (Required!) -->
  <link href="ng1bs5.css" rel="stylesheet">
  
  <!-- AngularJS -->
  <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.8.2/angular.min.js"></script>
  
  <!-- ng1bs5 Module -->
  <script src="module.js"></script>
  <script src="loading-overlay.service.js"></script>
  <script src="loading-overlay.directive.js"></script>
</head>
```

### 2. Add Template

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
    ">
      <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;"></div>
    </div>
  </script>
</body>
```

### 3. Configure & Use

```javascript
angular.module('myApp', ['ng1bs5'])
  .run(function(LoadingOverlayService) {
    LoadingOverlayService.setGlobalConfig({
      templateUrl: 'defaultTemplate.html'
    });
  })
  .controller('MainCtrl', function($scope, $http, LoadingOverlayService) {
    
    $scope.loadData = function() {
      LoadingOverlayService.wrap(
        { referenceId: 'myPanel' },
        $http.get('/api/data')
      ).then(function(response) {
        $scope.data = response.data;
      });
    };
    
  });
```

```html
<div ng-controller="MainCtrl">
  <button ng-click="loadData()">Load Data</button>
  
  <div bs-loading-overlay="myPanel" style="min-height: 200px;">
    <pre>{{ data | json }}</pre>
  </div>
</div>
```

## Installation

### Download Files

Download and include these files:

**Required:**
- `ng1bs5.css` - Styles (3.3 KB)
- `module.js` - Module declaration (367 B)
- `loading-overlay.service.js` - Service (7.4 KB)
- `loading-overlay.directive.js` - Directive (6.6 KB)

**Optional:**
- `ng1bs5-templates.html` - Pre-built templates (4.2 KB)

**Or use single file:**
- `ng1bs5.module.js` - All-in-one (9.5 KB)

## Documentation

### Essential Guides

📘 **[Getting Started](GETTING-STARTED-COMPLETE.md)** - Complete setup guide (5 minutes)  
📗 **[API Reference](API.md)** - Complete API documentation  
📙 **[Usage Examples](USAGE.md)** - Real-world usage patterns  
⚡ **[Quick Reference](QUICK-REFERENCE.md)** - Cheat sheet for common tasks  

### Templates

✨ **[ng-template Guide](NG-TEMPLATE-GUIDE.md)** - Using `<script type="text/ng-template">` (recommended)  
🔄 **[Migration Guide](NG-TEMPLATE-MIGRATION.md)** - Migrate from old template approach  

### Troubleshooting

🔍 **[Not Registering?](NOT-REGISTERING-GUIDE.md)** - Fix registration issues  
🎨 **[CSS Troubleshooting](TROUBLESHOOTING-CSS.md)** - Z-index and visibility issues  
⏱️ **[Timing Issues](TIMING-ISSUE-GUIDE.md)** - Fix timing problems  
⚡ **[Quick Diagnosis](QUICK-DIAGNOSIS.md)** - Fast debugging  

### Reference

📄 **[Complete Summary](FINAL-SUMMARY.md)** - Everything in one place  
📋 **[All Files](index.html)** - Browse all files and demos  

## Basic Usage

### Simple Example

```javascript
// Start overlay
LoadingOverlayService.start({ referenceId: 'myPanel' });

// Stop overlay
LoadingOverlayService.stop({ referenceId: 'myPanel' });
```

### With HTTP Request

```javascript
LoadingOverlayService.wrap(
  { referenceId: 'userList' },
  $http.get('/api/users')
).then(function(response) {
  $scope.users = response.data;
});
```

### Form Submission

```javascript
$scope.saveForm = function() {
  LoadingOverlayService.wrap(
    { referenceId: 'myForm' },
    $http.post('/api/save', $scope.formData)
  ).then(function() {
    alert('Saved successfully!');
  }).catch(function(error) {
    alert('Save failed: ' + error.data.message);
  });
};
```

## API Overview

### Service Methods

```javascript
// Configuration
LoadingOverlayService.setGlobalConfig(config)

// Control
LoadingOverlayService.start(options)
LoadingOverlayService.stop(options)
LoadingOverlayService.wrap(options, promise)

// Utilities
LoadingOverlayService.isRegistered(referenceId)
LoadingOverlayService.getRegisteredIds()
LoadingOverlayService.debugOverlays()
```

### Directive Attributes

```html
<div bs-loading-overlay="referenceId"
     bs-loading-overlay-template-url="template.html"
     bs-loading-overlay-template-options="{ ... }"
     bs-loading-overlay-active-class="loading"
     bs-loading-overlay-delay="300">
</div>
```

## Customization

### Global Configuration

```javascript
LoadingOverlayService.setGlobalConfig({
  templateUrl: 'myTemplate.html',
  templateOptions: {
    spinnerClass: 'text-primary',
    loadingText: 'Loading...'
  },
  delay: 300
});
```

### Per-Directive Override

```html
<div bs-loading-overlay="panel"
     bs-loading-overlay-template-url="customTemplate.html"
     bs-loading-overlay-template-options="{
       loadingText: 'Saving...',
       spinnerClass: 'text-success'
     }">
</div>
```

### Custom Templates

```html
<script type="text/ng-template" id="myTemplate.html">
  <div class="bs-loading-overlay" style="...">
    <div class="text-center">
      <div class="spinner-border" ng-class="options.spinnerClass"></div>
      <div class="mt-2">{{ options.loadingText }}</div>
    </div>
  </div>
</script>
```

## Pre-built Templates

Four templates included in `ng1bs5-templates.html`:

1. **defaultTemplate.html** - Default spinner (light background)
2. **growSpinner.html** - Grow spinner (dark background)
3. **largeSpinner.html** - Large spinner with text
4. **multiSpinner.html** - Multiple colored spinners

## Examples

### Live Demos

- **[Quick Example](quick-example-ng-template.html)** - Simple working example
- **[Complete Demo](demo-ng-template.html)** - All features demo
- **[Debug Tools](not-registering-debug.html)** - Interactive debugging

### Code Examples

See **[USAGE.md](USAGE.md)** for complete examples:
- HTTP requests
- Form submissions
- File uploads
- Data tables
- Multi-step operations
- Error handling
- And more...

## Requirements

- **AngularJS:** 1.5+ (tested with 1.8.2)
- **Bootstrap:** 5.0+ (for spinner styles)
- **Browsers:** All modern browsers

## Features in Detail

### Automatic Command Queueing

Commands work even if called before directive initialization:

```javascript
// This works! Command is queued automatically
$scope.init = function() {
  LoadingOverlayService.start({ referenceId: 'panel' });
  // Overlay will start once directive registers
};
```

### Promise Integration

Automatic lifecycle management with promises:

```javascript
LoadingOverlayService.wrap(
  { referenceId: 'panel' },
  $http.get('/api/data')
)
// Overlay starts automatically
// Stops on resolve or reject
```

### Multiple Overlays

Control multiple overlays independently:

```javascript
LoadingOverlayService.start({ referenceId: 'panel1' });
LoadingOverlayService.start({ referenceId: 'panel2' });

// Or all at once
LoadingOverlayService.start();
```

### Flexible Templates

Use pre-built templates or create custom ones:

```javascript
// Use pre-built
templateUrl: 'defaultTemplate.html'

// Use custom
templateUrl: 'myCustomTemplate.html'

// Inline template
template: '<div>...</div>'
```

## Troubleshooting

### Overlay Not Showing?

1. ✅ Check `ng1bs5.css` is included (required!)
2. ✅ Verify element has height: `style="min-height: 200px"`
3. ✅ Confirm template is configured
4. ✅ Check browser console for errors

### Overlay Not Registering?

```javascript
// Check registration
LoadingOverlayService.isRegistered('myPanel')

// List all overlays
LoadingOverlayService.getRegisteredIds()

// Full debug info
LoadingOverlayService.debugOverlays()
```

See **[Troubleshooting Guides](TROUBLESHOOTING-CSS.md)** for complete help.

## Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers

## File Structure

```
ng1bs5/
├── css/
│   └── ng1bs5.css                    # Required CSS
├── js/
│   ├── module.js                     # Module declaration
│   ├── loading-overlay.service.js    # Service
│   ├── loading-overlay.directive.js  # Directive
│   └── ng1bs5.module.js             # All-in-one (alternative)
├── templates/
│   └── ng1bs5-templates.html         # Pre-built templates
├── docs/
│   ├── GETTING-STARTED-COMPLETE.md   # Setup guide
│   ├── API.md                        # API reference
│   ├── USAGE.md                      # Usage examples
│   ├── QUICK-REFERENCE.md            # Cheat sheet
│   └── ...more guides
├── examples/
│   ├── quick-example-ng-template.html
│   ├── demo-ng-template.html
│   └── ...more examples
└── index.html                        # File browser
```

## Contributing

This is a complete, production-ready module. Feel free to:
- Report issues
- Suggest improvements
- Share your customizations
- Contribute examples

## License

MIT License - Free for personal and commercial use.

## Credits

Created for AngularJS 1.x applications using Bootstrap 5.

## Learn More

### Quick Links

- 📘 [Getting Started](GETTING-STARTED-COMPLETE.md) - 5-minute setup
- 📗 [API Docs](API.md) - Complete reference
- 📙 [Examples](USAGE.md) - Real-world patterns
- ⚡ [Quick Ref](QUICK-REFERENCE.md) - Cheat sheet
- 🎨 [Templates](NG-TEMPLATE-GUIDE.md) - Customization
- 🔧 [Troubleshooting](TROUBLESHOOTING-CSS.md) - Common issues

### Demo Files

- [Quick Example](quick-example-ng-template.html)
- [Complete Demo](demo-ng-template.html)
- [All Files](index.html)

---

**Ready to get started?** Follow the **[Getting Started Guide](GETTING-STARTED-COMPLETE.md)** →

**Questions?** Check the **[API Reference](API.md)** or **[Usage Examples](USAGE.md)**

**Issues?** See **[Troubleshooting](TROUBLESHOOTING-CSS.md)**

---

Made with ❤️ for AngularJS developers
