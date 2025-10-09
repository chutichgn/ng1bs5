# ng1bs5 Dropdown Component

Bootstrap 5 Dropdown component for AngularJS, following the official [Bootstrap 5.0 Dropdown API](https://getbootstrap.com/docs/5.0/components/dropdowns/).

## Features

- ✅ Single and split button dropdowns
- ✅ Multiple directions (down, up, start, end)
- ✅ Keyboard navigation (Arrow keys, ESC)
- ✅ Auto-close behavior configuration
- ✅ Dark dropdowns support
- ✅ Menu alignment options
- ✅ Custom offset positioning
- ✅ Event callbacks (onShow, onShown, onHide, onHidden)
- ✅ Accessibility (ARIA attributes)

## Installation

The dropdown component is included in the ng1bs5 library. Import it in your `index.js`:

```javascript
import DropdownModule from './components/dropdown/dropdown.module';

angular.module('ng1bs5', [
    // ... other modules
    DropdownModule
]);
```

## Basic Usage

### Simple Dropdown

```html
<div ng1bs5-dropdown>
    <button class="btn btn-secondary" ng1bs5-dropdown-toggle>
        Dropdown button
    </button>
    <ul ng1bs5-dropdown-menu>
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
    </ul>
</div>
```

### With Link Element

```html
<div ng1bs5-dropdown>
    <a class="btn btn-secondary" href="#" ng1bs5-dropdown-toggle>
        Dropdown link
    </a>
    <ul ng1bs5-dropdown-menu>
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
    </ul>
</div>
```

## Dropdown Directions

### Dropup

```html
<div class="btn-group dropup" ng1bs5-dropdown>
    <button class="btn btn-secondary" ng1bs5-dropdown-toggle>
        Dropup
    </button>
    <ul ng1bs5-dropdown-menu>
        <li><a class="dropdown-item" href="#">Action</a></li>
    </ul>
</div>
```

### Dropend (Right)

```html
<div class="btn-group dropend" ng1bs5-dropdown>
    <button class="btn btn-secondary" ng1bs5-dropdown-toggle>
        Dropend
    </button>
    <ul ng1bs5-dropdown-menu>
        <li><a class="dropdown-item" href="#">Action</a></li>
    </ul>
</div>
```

### Dropstart (Left)

```html
<div class="btn-group dropstart" ng1bs5-dropdown>
    <button class="btn btn-secondary" ng1bs5-dropdown-toggle>
        Dropstart
    </button>
    <ul ng1bs5-dropdown-menu>
        <li><a class="dropdown-item" href="#">Action</a></li>
    </ul>
</div>
```

## Split Button Dropdown

```html
<div class="btn-group" ng1bs5-dropdown>
    <button type="button" class="btn btn-danger">Action</button>
    <button type="button" class="btn btn-danger dropdown-toggle-split" 
            ng1bs5-dropdown-toggle>
        <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul ng1bs5-dropdown-menu>
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
</div>
```

## Menu Alignment

### Right-aligned Menu

```html
<div ng1bs5-dropdown>
    <button class="btn btn-secondary" ng1bs5-dropdown-toggle>
        Right-aligned menu
    </button>
    <ul ng1bs5-dropdown-menu class="dropdown-menu-end">
        <li><a class="dropdown-item" href="#">Action</a></li>
    </ul>
</div>
```

### Responsive Alignment

```html
<div ng1bs5-dropdown>
    <button class="btn btn-secondary" ng1bs5-dropdown-toggle>
        Left-aligned, right on lg+
    </button>
    <ul ng1bs5-dropdown-menu class="dropdown-menu-lg-end">
        <li><a class="dropdown-item" href="#">Action</a></li>
    </ul>
</div>
```

## Dark Dropdown

```html
<div ng1bs5-dropdown>
    <button class="btn btn-secondary" ng1bs5-dropdown-toggle>
        Dark dropdown
    </button>
    <ul ng1bs5-dropdown-menu class="dropdown-menu-dark">
        <li><a class="dropdown-item active" href="#">Active</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><hr class="dropdown-divider"></li>
        <li><a class="dropdown-item" href="#">Separated link</a></li>
    </ul>
</div>
```

## Menu Content

### Headers

```html
<ul ng1bs5-dropdown-menu>
    <li><h6 class="dropdown-header">Dropdown header</h6></li>
    <li><a class="dropdown-item" href="#">Action</a></li>
</ul>
```

### Dividers

```html
<ul ng1bs5-dropdown-menu>
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><hr class="dropdown-divider"></li>
    <li><a class="dropdown-item" href="#">Separated link</a></li>
</ul>
```

### Text

```html
<div ng1bs5-dropdown-menu class="p-4 text-muted" style="max-width: 200px;">
    <p>Some example text that's free-flowing within the dropdown menu.</p>
    <p class="mb-0">And this is more example text.</p>
</div>
```

### Forms

```html
<form ng1bs5-dropdown-menu class="p-4">
    <div class="mb-3">
        <label class="form-label">Email address</label>
        <input type="email" class="form-control" placeholder="email@example.com">
    </div>
    <div class="mb-3">
        <label class="form-label">Password</label>
        <input type="password" class="form-control" placeholder="Password">
    </div>
    <button type="submit" class="btn btn-primary">Sign in</button>
</form>
```

### Active and Disabled Items

```html
<ul ng1bs5-dropdown-menu>
    <li><a class="dropdown-item" href="#">Regular link</a></li>
    <li><a class="dropdown-item active" href="#" aria-current="true">Active link</a></li>
    <li><a class="dropdown-item disabled" href="#" tabindex="-1" aria-disabled="true">Disabled link</a></li>
</ul>
```

## Configuration Options

### Auto-close Behavior

Configure how the dropdown closes:

```html
<!-- Default: closes on any click (inside or outside) -->
<div ng1bs5-dropdown ng1bs5-dropdown-auto-close="true">
    ...
</div>

<!-- Closes only when clicking outside -->
<div ng1bs5-dropdown ng1bs5-dropdown-auto-close="outside">
    ...
</div>

<!-- Closes only when clicking inside -->
<div ng1bs5-dropdown ng1bs5-dropdown-auto-close="inside">
    ...
</div>

<!-- Manual close only -->
<div ng1bs5-dropdown ng1bs5-dropdown-auto-close="false">
    ...
</div>
```

### Custom Offset

```html
<!-- Offset by 10px horizontally, 20px vertically -->
<div ng1bs5-dropdown ng1bs5-dropdown-offset="10,20">
    <button class="btn btn-secondary" ng1bs5-dropdown-toggle>
        Offset dropdown
    </button>
    <ul ng1bs5-dropdown-menu>
        <li><a class="dropdown-item" href="#">Action</a></li>
    </ul>
</div>
```

### Static Display

Disable dynamic positioning:

```html
<div ng1bs5-dropdown ng1bs5-dropdown-display="static">
    ...
</div>
```

## Event Callbacks

```html
<div ng1bs5-dropdown 
     ng1bs5-dropdown-on-show="$ctrl.onDropdownShow()"
     ng1bs5-dropdown-on-shown="$ctrl.onDropdownShown()"
     ng1bs5-dropdown-on-hide="$ctrl.onDropdownHide()"
     ng1bs5-dropdown-on-hidden="$ctrl.onDropdownHidden()">
    <button class="btn btn-secondary" ng1bs5-dropdown-toggle>
        Dropdown with events
    </button>
    <ul ng1bs5-dropdown-menu>
        <li><a class="dropdown-item" href="#">Action</a></li>
    </ul>
</div>
```

In your controller:

```javascript
class MyController {
    onDropdownShow() {
        console.log('Dropdown is about to show');
    }
    
    onDropdownShown() {
        console.log('Dropdown is now visible');
    }
    
    onDropdownHide() {
        console.log('Dropdown is about to hide');
    }
    
    onDropdownHidden() {
        console.log('Dropdown is now hidden');
    }
}
```

## Programmatic Control

Access the dropdown controller to programmatically control it:

```html
<div ng1bs5-dropdown ng-init="myDropdown = $dropdown">
    <button class="btn btn-secondary" ng1bs5-dropdown-toggle>
        Dropdown
    </button>
    <ul ng1bs5-dropdown-menu>
        <li><a class="dropdown-item" href="#">Action</a></li>
    </ul>
</div>

<button class="btn btn-primary" ng-click="myDropdown.show()">
    Show Dropdown
</button>
<button class="btn btn-danger" ng-click="myDropdown.hide()">
    Hide Dropdown
</button>
```

## Keyboard Navigation

The dropdown supports standard keyboard interactions:

- **ESC**: Closes the dropdown and returns focus to the toggle button
- **Arrow Down**: Moves focus to the next dropdown item
- **Arrow Up**: Moves focus to the previous dropdown item

## Accessibility

The component automatically handles:

- `aria-expanded` attribute on the toggle button
- `aria-labelledby` reference (if you provide an `id` on the toggle)
- `tabindex` for keyboard navigation
- Proper focus management

Example with accessibility attributes:

```html
<div ng1bs5-dropdown>
    <button class="btn btn-secondary" 
            id="dropdownMenuButton1" 
            ng1bs5-dropdown-toggle>
        Dropdown button
    </button>
    <ul ng1bs5-dropdown-menu aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">Action</a></li>
    </ul>
</div>
```

## Sizing

Dropdowns work with all button sizes:

```html
<!-- Large -->
<div class="btn-group" ng1bs5-dropdown>
    <button class="btn btn-secondary btn-lg" ng1bs5-dropdown-toggle>
        Large button
    </button>
    <ul ng1bs5-dropdown-menu>...</ul>
</div>

<!-- Small -->
<div class="btn-group" ng1bs5-dropdown>
    <button class="btn btn-secondary btn-sm" ng1bs5-dropdown-toggle>
        Small button
    </button>
    <ul ng1bs5-dropdown-menu>...</ul>
</div>
```

## API Reference

### Directives

#### `ng1bs5-dropdown`
Main container directive for the dropdown component.

**Attributes:**
- `ng1bs5-dropdown-auto-close`: String - Auto-close behavior ('true'|'false'|'inside'|'outside')
- `ng1bs5-dropdown-offset`: String - Menu offset as "x,y" (default: "0,2")
- `ng1bs5-dropdown-boundary`: String - Overflow boundary (default: 'clippingParents')
- `ng1bs5-dropdown-reference`: String - Reference element (default: 'toggle')
- `ng1bs5-dropdown-display`: String - Display type ('dynamic'|'static')
- `ng1bs5-dropdown-on-show`: Expression - Callback before showing
- `ng1bs5-dropdown-on-shown`: Expression - Callback after shown
- `ng1bs5-dropdown-on-hide`: Expression - Callback before hiding
- `ng1bs5-dropdown-on-hidden`: Expression - Callback after hidden

**Controller Methods:**
- `toggle()`: Toggle dropdown visibility
- `show()`: Show the dropdown
- `hide()`: Hide the dropdown
- `update()`: Update dropdown position

#### `ng1bs5-dropdown-toggle`
Marks the element that toggles the dropdown.

#### `ng1bs5-dropdown-menu`
Marks the dropdown menu element.

## Browser Support

Same as Bootstrap 5.0:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- This implementation uses simplified positioning without Popper.js for basic use cases
- For complex positioning scenarios, consider integrating Popper.js
- The component automatically handles cleanup on scope destruction
- Click handlers use event.stopPropagation() to prevent unwanted bubbling

## Examples

See the `/src/es6-demo` directory for complete working examples.