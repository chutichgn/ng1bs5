# ng1bs5 Modal Component

Bootstrap 5 Modal wrapper for AngularJS using ES6 classes and Strict DI.

## Installation

Copy all files to `src/components/modal/` in your ng1bs5 project.

Update `src/index.js`:
```javascript
import modalModule from './components/modal';

angular.module('ng1bs5', [
  // ... other modules
  modalModule
]);
```

## Basic Usage

```html
<bs5-modal visible="$ctrl.showModal">
  <div class="modal-header">
    <h5 class="modal-title">Modal Title</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
  </div>
  
  <div class="modal-body">
    Modal content here
  </div>
  
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    <button type="button" class="btn btn-primary">Save</button>
  </div>
</bs5-modal>
```

## Component Bindings

| Binding | Type | Default | Description |
|---------|------|---------|-------------|
| `visible` | `<` | `false` | Control modal visibility |
| `backdrop` | `@` | `'true'` | Backdrop: `'true'`, `'false'`, or `'static'` |
| `keyboard` | `<` | `true` | Close on ESC key |
| `focus` | `<` | `true` | Auto-focus on open |
| `size` | `@` | `''` | Size: `'sm'`, `'lg'`, `'xl'`, `'fullscreen'` |
| `centered` | `<` | `false` | Vertically center |
| `scrollable` | `<` | `false` | Scrollable body |
| `modalInstance` | `=?` | - | Expose modal instance |
| `onShow` | `&` | - | Event: modal starting to show |
| `onShown` | `&` | - | Event: modal fully shown |
| `onHide` | `&` | - | Event: modal starting to hide |
| `onHidden` | `&` | - | Event: modal fully hidden |
| `onHidePrevented` | `&` | - | Event: close prevented (static backdrop) |

## Examples

### Static Backdrop

```html
<bs5-modal 
  visible="$ctrl.showModal"
  backdrop="'static'"
  keyboard="false">
  <div class="modal-header">
    <h5 class="modal-title">Cannot Close Outside</h5>
  </div>
  <div class="modal-body">
    Click button to close.
  </div>
  <div class="modal-footer">
    <button type="button" class="btn btn-primary" data-bs-dismiss="modal">OK</button>
  </div>
</bs5-modal>
```

### Large Centered Modal

```html
<bs5-modal 
  visible="$ctrl.showModal"
  size="lg"
  centered="true">
  <div class="modal-header">
    <h5 class="modal-title">Large Modal</h5>
  </div>
  <div class="modal-body">Content</div>
</bs5-modal>
```

### With Event Handlers

```html
<bs5-modal 
  visible="$ctrl.showModal"
  on-shown="$ctrl.handleShown($event)"
  on-hidden="$ctrl.handleHidden($event)">
  <!-- content -->
</bs5-modal>
```

```javascript
class MyController {
  handleShown($event) {
    console.log('Modal opened', $event);
  }
  
  handleHidden($event) {
    console.log('Modal closed', $event);
  }
}
```

### Programmatic Control

```html
<bs5-modal 
  visible="$ctrl.showModal"
  modal-instance="$ctrl.myModal">
  <!-- content -->
</bs5-modal>

<button ng-click="$ctrl.myModal.toggle()">Toggle</button>
```

### Scrollable Modal

```html
<bs5-modal scrollable="true">
  <div class="modal-header">
    <h5 class="modal-title">Scrollable</h5>
  </div>
  <div class="modal-body">
    <!-- Long content that scrolls -->
  </div>
</bs5-modal>
```

### Fullscreen

```html
<!-- Always fullscreen -->
<bs5-modal size="fullscreen">
  <!-- content -->
</bs5-modal>

<!-- Fullscreen below sm breakpoint -->
<bs5-modal size="fullscreen-sm-down">
  <!-- content -->
</bs5-modal>
```

## Modal Instance Methods

Access via `modal-instance="$ctrl.myModal"`:

- `show()` - Show modal
- `hide()` - Hide modal
- `toggle()` - Toggle visibility
- `handleUpdate()` - Readjust position after content changes
- `dispose()` - Destroy instance (auto-called on $onDestroy)

## Controller Example

```javascript
class ExampleController {
  constructor() {
    this.showModal = false;
    this.modalInstance = null;
  }
  
  openModal() {
    this.showModal = true;
  }
  
  closeModal() {
    this.showModal = false;
    // or: this.modalInstance.hide();
  }
  
  handleModalShown($event) {
    console.log('Modal is now visible');
  }
  
  handleModalHidden($event) {
    console.log('Modal is now hidden');
    // Clean up, reset form, etc.
  }
}
```

## Dependencies

Requires Bootstrap 5 JS and CSS:

```bash
npm install bootstrap@^5.0.0
```

```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
window.bootstrap = bootstrap;
```

Or via CDN:
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
```

## Notes

- Modal options cannot be changed after initialization
- Use `handleUpdate()` when dynamically changing modal content
- Event callbacks automatically trigger AngularJS digest cycles
- Modal instance is properly disposed on component destruction
