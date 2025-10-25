# AngularJS Offcanvas Component

Bootstrap 5 Offcanvas component ported to AngularJS using ES6 syntax (components, classes, import/export) with Babel and Webpack.

## Installation

```javascript
import offcanvasModule from './offcanvas/offcanvas.module';

angular.module('myApp', [offcanvasModule]);
```

## Basic Usage

### Template

```html
<offcanvas offcanvas-id="userPanel" placement="end">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title">Title</h5>
    <button type="button" class="btn-close" ng-click="$ctrl.close()"></button>
  </div>
  <div class="offcanvas-body">
    <p>Your content here</p>
  </div>
</offcanvas>

<button ng-click="$ctrl.openPanel()">Open Panel</button>
```

### Controller

```javascript
class MyController {
  constructor(OffcanvasService) {
    'ngInject';
    this.OffcanvasService = OffcanvasService;
  }
  
  openPanel() {
    this.OffcanvasService.show('userPanel');
  }
  
  close() {
    this.OffcanvasService.hide('userPanel');
  }
}

export default MyController;
```

## Component API

### Bindings

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `offcanvas-id` | `@` | required | Unique identifier for the offcanvas instance |
| `placement` | `@` | `'end'` | Position: `'start'`, `'end'`, `'top'`, `'bottom'` |
| `scroll` | `@` | `'false'` | Allow body scroll: `'true'` or `'false'` |
| `backdrop` | `@` | `'true'` | Show backdrop: `'true'` or `'false'` |
| `on-show` | `&` | - | Callback function when offcanvas opens |
| `on-hide` | `&` | - | Callback function when offcanvas closes |

### Placement Options

```html
<!-- Right side (default) -->
<offcanvas offcanvas-id="right" placement="end">...</offcanvas>

<!-- Left side -->
<offcanvas offcanvas-id="left" placement="start">...</offcanvas>

<!-- Top -->
<offcanvas offcanvas-id="top" placement="top">...</offcanvas>

<!-- Bottom -->
<offcanvas offcanvas-id="bottom" placement="bottom">...</offcanvas>
```

### Backdrop & Scroll Options

```html
<!-- No backdrop -->
<offcanvas offcanvas-id="noBackdrop" backdrop="false">...</offcanvas>

<!-- Allow body scroll -->
<offcanvas offcanvas-id="scrollable" scroll="true">...</offcanvas>

<!-- Both options combined -->
<offcanvas offcanvas-id="panel" backdrop="false" scroll="true">...</offcanvas>
```

### Callbacks

```html
<offcanvas 
  offcanvas-id="myPanel"
  on-show="$ctrl.handleOpen()"
  on-hide="$ctrl.handleClose()">
  ...
</offcanvas>
```

```javascript
class MyController {
  handleOpen() {
    console.log('Offcanvas opened');
  }
  
  handleClose() {
    console.log('Offcanvas closed');
  }
}
```

## OffcanvasService API

Programmatic control via dependency injection.

### Methods

#### `show(id)`
Opens the specified offcanvas.

```javascript
this.OffcanvasService.show('userPanel');
```

#### `hide(id)`
Closes the specified offcanvas.

```javascript
this.OffcanvasService.hide('userPanel');
```

#### `toggle(id)`
Toggles the specified offcanvas.

```javascript
this.OffcanvasService.toggle('userPanel');
```

## Complete Example

### Component File

```javascript
// user-settings.component.js
import template from './user-settings.html';

class UserSettingsController {
  constructor(OffcanvasService) {
    'ngInject';
    this.OffcanvasService = OffcanvasService;
    this.user = {
      name: 'John Doe',
      email: 'john@example.com',
      notifications: true
    };
  }
  
  openSettings() {
    this.OffcanvasService.show('settingsPanel');
  }
  
  closeSettings() {
    this.OffcanvasService.hide('settingsPanel');
  }
  
  saveSettings() {
    // Save logic
    console.log('Settings saved', this.user);
    this.closeSettings();
  }
  
  onPanelClosed() {
    console.log('Settings panel closed');
  }
}

export const UserSettingsComponent = {
  template,
  controller: UserSettingsController,
  bindings: {}
};
```

### Template File

```html
<!-- user-settings.html -->
<div>
  <button class="btn btn-primary" ng-click="$ctrl.openSettings()">
    <i class="bi bi-gear"></i> Settings
  </button>

  <offcanvas 
    offcanvas-id="settingsPanel"
    placement="end"
    on-hide="$ctrl.onPanelClosed()">
    
    <div class="offcanvas-header bg-dark text-white">
      <h5 class="offcanvas-title">User Settings</h5>
      <button 
        type="button" 
        class="btn-close btn-close-white"
        ng-click="$ctrl.closeSettings()">
      </button>
    </div>
    
    <div class="offcanvas-body">
      <form name="settingsForm">
        <div class="mb-3">
          <label class="form-label">Name</label>
          <input 
            type="text" 
            class="form-control" 
            ng-model="$ctrl.user.name"
            required>
        </div>
        
        <div class="mb-3">
          <label class="form-label">Email</label>
          <input 
            type="email" 
            class="form-control" 
            ng-model="$ctrl.user.email"
            required>
        </div>
        
        <div class="mb-3 form-check">
          <input 
            type="checkbox" 
            class="form-check-input" 
            id="notifications"
            ng-model="$ctrl.user.notifications">
          <label class="form-check-label" for="notifications">
            Enable notifications
          </label>
        </div>
        
        <div class="d-grid gap-2">
          <button 
            type="button" 
            class="btn btn-primary"
            ng-click="$ctrl.saveSettings()"
            ng-disabled="settingsForm.$invalid">
            Save Changes
          </button>
          <button 
            type="button" 
            class="btn btn-outline-secondary"
            ng-click="$ctrl.closeSettings()">
            Cancel
          </button>
        </div>
      </form>
    </div>
  </offcanvas>
</div>
```

### Module Registration

```javascript
// user-settings.module.js
import angular from 'angular';
import offcanvasModule from '../offcanvas/offcanvas.module';
import { UserSettingsComponent } from './user-settings.component';

const MODULE_NAME = 'app.userSettings';

angular
  .module(MODULE_NAME, [offcanvasModule])
  .component('userSettings', UserSettingsComponent);

export default MODULE_NAME;
```

## Multiple Offcanvas Example

```html
<!-- Multiple offcanvas panels -->
<button ng-click="$ctrl.showLeft()">Left Panel</button>
<button ng-click="$ctrl.showRight()">Right Panel</button>
<button ng-click="$ctrl.showTop()">Top Panel</button>

<offcanvas offcanvas-id="left" placement="start">
  <div class="offcanvas-header">
    <h5>Left Panel</h5>
    <button class="btn-close" ng-click="$ctrl.hideLeft()"></button>
  </div>
  <div class="offcanvas-body">Left content</div>
</offcanvas>

<offcanvas offcanvas-id="right" placement="end">
  <div class="offcanvas-header">
    <h5>Right Panel</h5>
    <button class="btn-close" ng-click="$ctrl.hideRight()"></button>
  </div>
  <div class="offcanvas-body">Right content</div>
</offcanvas>

<offcanvas offcanvas-id="top" placement="top">
  <div class="offcanvas-header">
    <h5>Top Panel</h5>
    <button class="btn-close" ng-click="$ctrl.hideTop()"></button>
  </div>
  <div class="offcanvas-body">Top content</div>
</offcanvas>
```

```javascript
class MultiPanelController {
  constructor(OffcanvasService) {
    'ngInject';
    this.OffcanvasService = OffcanvasService;
  }
  
  showLeft() { this.OffcanvasService.show('left'); }
  hideLeft() { this.OffcanvasService.hide('left'); }
  
  showRight() { this.OffcanvasService.show('right'); }
  hideRight() { this.OffcanvasService.hide('right'); }
  
  showTop() { this.OffcanvasService.show('top'); }
  hideTop() { this.OffcanvasService.hide('top'); }
}
```

## Styling

Requires Bootstrap 5 CSS:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
```

### Custom Styles

```css
/* Custom width for end/start placement */
.offcanvas-start,
.offcanvas-end {
  width: 400px;
}

/* Custom height for top/bottom placement */
.offcanvas-top,
.offcanvas-bottom {
  height: 50vh;
}

/* Custom header styling */
.offcanvas-header {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

/* Custom animation speed */
.offcanvas {
  transition: transform 0.5s ease-in-out;
}

/* Custom backdrop */
.offcanvas-backdrop {
  background-color: rgba(0, 0, 0, 0.8);
}
```

## Architecture

### File Structure

```
offcanvas/
├── offcanvas.directive.js    # Component directive & controller
├── offcanvas.service.js      # Service for programmatic control
└── offcanvas.module.js       # Module definition
```

### Component Implementation

**offcanvas.directive.js** - ES6 class-based component controller:
- Manages component lifecycle (`$onInit`, `$onDestroy`)
- Handles show/hide/toggle logic
- Manages backdrop creation/removal
- Controls body scroll behavior
- Registers with OffcanvasService

**offcanvas.service.js** - Service class:
- Maintains registry of offcanvas instances (Map)
- Provides programmatic API
- Handles instance registration/unregistration

**offcanvas.module.js** - Module configuration:
- Registers component and service
- Declares dependencies

## Build Configuration

### Babel Configuration

Ensure `babel-plugin-angularjs-annotate` is configured:

```javascript
// .babelrc or babel.config.js
{
  "presets": ["@babel/preset-env"],
  "plugins": ["angularjs-annotate"]
}
```

### Webpack Configuration

```javascript
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      }
    ]
  }
};
```

## Features

✅ **Bootstrap 5 Compatible** - Full Bootstrap 5 offcanvas styling support  
✅ **ES6 Syntax** - Modern JavaScript with classes and modules  
✅ **Four Placements** - start, end, top, bottom  
✅ **Backdrop Control** - Show/hide backdrop with click-to-close  
✅ **Scroll Control** - Lock or allow body scroll  
✅ **Programmatic API** - Service-based control  
✅ **Lifecycle Callbacks** - onShow and onHide events  
✅ **Multiple Instances** - Support for multiple offcanvas panels  
✅ **Memory Safe** - Proper cleanup on component destruction  
✅ **Smooth Animations** - CSS transition-based animations  

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

Requires AngularJS 1.5+ for component support.

## Dependencies

- AngularJS 1.5+
- Bootstrap 5.0+ CSS
- Babel (with angularjs-annotate plugin)
- Webpack

## TODO (from module.js comments)

Future enhancements to align with Bootstrap 5 spec:

- [ ] ESC key support to close
- [ ] Static backdrop option (non-dismissible)
- [ ] Template and templateUrl support
- [ ] Promise-based API
- [ ] $bs5Offcanvas factory service

## License

MIT

## Credits

Ported from [Bootstrap 5 Offcanvas](https://getbootstrap.com/docs/5.0/components/offcanvas/)
