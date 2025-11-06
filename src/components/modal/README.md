# ng1bs5 Modal Component

Pure AngularJS modal component using Bootstrap 5 CSS classes (no Bootstrap JS dependency).

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
    <button type="button" class="btn-close" ng-click="close()"></button>
  </div>
  
  <div class="modal-body">
    Modal content here
  </div>
  
  <div class="modal-footer">
    <button type="button" class="btn btn-secondary" ng-click="dismiss('cancel')">Close</button>
    <button type="button" class="btn btn-primary" ng-click="close('saved')">Save</button>
  </div>
</bs5-modal>
```

**Note:** Inside the modal template, you can use `close(result)` and `dismiss(reason)` directly without accessing the parent controller.

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
| `onClose` | `&` | - | Callback when close(result) is called |
| `onDismiss` | `&` | - | Callback when dismiss(reason) is called |
| `onShow` | `&` | - | Event: modal starting to show |
| `onShown` | `&` | - | Event: modal fully shown |
| `onHide` | `&` | - | Event: modal starting to hide |
| `onHidden` | `&` | - | Event: modal fully hidden |
| `onHidePrevented` | `&` | - | Event: close prevented (static backdrop) |

## Examples

### Using close() and dismiss() in Template

```html
<bs5-modal 
  visible="$ctrl.showModal"
  on-close="$ctrl.handleClose($result)"
  on-dismiss="$ctrl.handleDismiss($reason)">
  
  <div class="modal-header">
    <h5 class="modal-title">Confirm Action</h5>
    <button type="button" class="btn-close" ng-click="dismiss('close-button')"></button>
  </div>
  
  <div class="modal-body">
    <p>Do you want to save changes?</p>
  </div>
  
  <div class="modal-footer">
    <button class="btn btn-secondary" ng-click="dismiss('cancel')">Cancel</button>
    <button class="btn btn-primary" ng-click="close('confirmed')">Save</button>
  </div>
</bs5-modal>
```

**Controller:**
```javascript
class MyController {
  handleClose($result) {
    console.log('Modal closed with result:', $result);
    this.showModal = false;
  }
  
  handleDismiss($reason) {
    console.log('Modal dismissed with reason:', $reason);
    this.showModal = false;
  }
}
```

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
    <button type="button" class="btn btn-primary" ng-click="close()">OK</button>
  </div>
</bs5-modal>
```

### Large Centered Modal

```html
<bs5-modal 
  visible="$ctrl.showModal"
  size="lg"
  centered="true"
  on-close="$ctrl.showModal = false">
  <div class="modal-header">
    <h5 class="modal-title">Large Modal</h5>
    <button type="button" class="btn-close" ng-click="close()"></button>
  </div>
  <div class="modal-body">
    Content
    <button class="btn btn-primary" ng-click="close()">Done</button>
  </div>
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

Requires only Bootstrap 5 CSS (no JavaScript dependency):

```bash
npm install bootstrap@^5.0.0
```

```javascript
import 'bootstrap/dist/css/bootstrap.min.css';
```

Or via CDN:
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
```

## Notes

- Modal options cannot be changed after initialization
- Use `handleUpdate()` when dynamically changing modal content
- Event callbacks automatically trigger AngularJS digest cycles
- Modal instance is properly disposed on component destruction

---

# $bs5Modal Service

The `$bs5Modal` service allows you to programmatically create modal windows from any controller.

## Usage

```javascript
$bs5Modal.open(options)
```

## Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `staticBackdrop` | `boolean` | `false` | If true, clicking backdrop won't close modal |
| `size` | `string` | `null` | Modal size: `'sm'`, `'lg'`, `'xl'`, or `null` |
| `centered` | `boolean` | `false` | Vertically center the modal |
| `scrollable` | `boolean` | `false` | Make modal body scrollable |
| `container` | `string` | `'body'` | Selector for element to contain the modal |
| `controller` | `string\|Function\|Array` | - | Controller for modal content |
| `controllerAs` | `string` | - | Alias for controller (requires `controller`) |
| `templateUrl` | `string` | - | URL to modal template (required if no `template`) |
| `template` | `string` | - | Inline modal template (required if no `templateUrl`) |
| `component` | `string` | - | Component name to render |
| `resolve` | `Object` | - | Values to inject into controller/component |

## Component Bindings

When using `options.component`, the component receives these bindings:

- `close` - Method to close modal: `$ctrl.close({$value: result})`
- `dismiss` - Method to dismiss modal: `$ctrl.dismiss({$value: reason})`
- `modalInstance` - The modal instance object
- `resolve` - Resolved values from `options.resolve`

Component must have `restrict: 'E'` and a template/templateUrl.

## Modal Instance

The `open()` method returns a modal instance with:

### Methods

- `close(result)` - Close modal with a result
- `dismiss(reason)` - Dismiss modal with a reason

### Promises

- `result` - Resolved on close, rejected on dismiss
- `opened` - Resolved when modal opens
- `closed` - Resolved when modal closes (after animation)
- `rendered` - Resolved when modal is rendered

## Examples

### Basic Template + Controller

**HTML:**
```html
<script type="text/ng-template" id="my-modal.html">
  <div class="modal-header">
    <h5 class="modal-title">{{title}}</h5>
    <button type="button" class="btn-close" ng-click="dismiss('close-button')"></button>
  </div>
  <div class="modal-body">
    {{message}}
  </div>
  <div class="modal-footer">
    <button class="btn btn-secondary" ng-click="dismiss('cancel')">Cancel</button>
    <button class="btn btn-primary" ng-click="close('confirmed')">OK</button>
  </div>
</script>
```

**Controller:**
```javascript
class MyController {
  constructor($bs5Modal) {
    'ngInject';
    this.$bs5Modal = $bs5Modal;
  }
  
  openModal() {
    const modalInstance = this.$bs5Modal.open({
      templateUrl: 'my-modal.html',
      controller: 'ModalController'
    });
    
    modalInstance.result.then(
      result => console.log('Closed with:', result),
      reason => console.log('Dismissed with:', reason)
    );
  }
}

class ModalController {
  constructor($scope, $bs5ModalInstance) {
    'ngInject';
    $scope.title = 'Confirm Action';
    $scope.message = 'Are you sure?';
    $scope.close = $bs5ModalInstance.close;
    $scope.dismiss = $bs5ModalInstance.dismiss;
  }
}
```

### Using Component

**Component:**
```javascript
class ConfirmModalController {
  $onInit() {
    this.items = this.resolve.items;
    this.selected = null;
  }
  
  selectItem(item) {
    this.selected = item;
    this.close({ $value: item });
  }
  
  cancel() {
    this.dismiss({ $value: 'cancelled' });
  }
}

angular.module('myApp').component('confirmModal', {
  bindings: {
    close: '&',
    dismiss: '&',
    modalInstance: '<',
    resolve: '<'
  },
  controller: ConfirmModalController,
  template: `
    <div class="modal-header">
      <h5 class="modal-title">Select Item</h5>
      <button type="button" class="btn-close" ng-click="$ctrl.cancel()"></button>
    </div>
    <div class="modal-body">
      <div ng-repeat="item in $ctrl.items">
        <button class="btn btn-link" ng-click="$ctrl.selectItem(item)">
          {{item.name}}
        </button>
      </div>
    </div>
    <div class="modal-footer">
      <button class="btn btn-secondary" ng-click="$ctrl.cancel()">Cancel</button>
    </div>
  `
});
```

**Usage:**
```javascript
class MainController {
  constructor($bs5Modal) {
    'ngInject';
    this.$bs5Modal = $bs5Modal;
    this.items = [
      { id: 1, name: 'Item 1' },
      { id: 2, name: 'Item 2' }
    ];
  }
  
  openModal() {
    const modalInstance = this.$bs5Modal.open({
      component: 'confirmModal',
      resolve: {
        items: () => this.items
      }
    });
    
    modalInstance.result.then(
      selectedItem => {
        console.log('Selected:', selectedItem);
      },
      () => {
        console.log('Modal dismissed');
      }
    );
  }
}
```

### With Options

```javascript
this.$bs5Modal.open({
  templateUrl: 'large-modal.html',
  controller: 'LargeModalCtrl',
  controllerAs: '$ctrl',
  size: 'lg',
  centered: true,
  staticBackdrop: true,
  scrollable: true,
  resolve: {
    userData: () => this.getUserData(),
    settings: () => ({ theme: 'dark' })
  }
});
```

### Inline Template

```javascript
this.$bs5Modal.open({
  template: `
    <div class="modal-header">
      <h5 class="modal-title">Quick Modal</h5>
    </div>
    <div class="modal-body">
      <p>{{message}}</p>
    </div>
    <div class="modal-footer">
      <button class="btn btn-primary" ng-click="close('ok')">OK</button>
    </div>
  `,
  controller: function($scope, $bs5ModalInstance) {
    $scope.message = 'This is a quick modal';
    $scope.close = $bs5ModalInstance.close;
  }
});
```

### Promise Handling

```javascript
const modalInstance = this.$bs5Modal.open({
  templateUrl: 'confirm.html',
  controller: 'ConfirmCtrl'
});

// Wait for modal to open
modalInstance.opened.then(() => {
  console.log('Modal is now open');
});

// Wait for modal to render
modalInstance.rendered.then(() => {
  console.log('Modal DOM is rendered');
});

// Handle close/dismiss
modalInstance.result.then(
  result => {
    console.log('Modal closed with result:', result);
  },
  reason => {
    console.log('Modal dismissed with reason:', reason);
  }
);

// Wait for close animation to complete
modalInstance.closed.then(
  result => console.log('Modal close animation done'),
  reason => console.log('Modal dismiss animation done')
);
```

## $bs5ModalInstance Injectable

When using a controller (not a component), inject `$bs5ModalInstance` to interact with the modal:

```javascript
class MyModalController {
  constructor($bs5ModalInstance) {
    'ngInject';
    this.modalInstance = $bs5ModalInstance;
  }
  
  save() {
    // Close with result
    this.modalInstance.close({ saved: true });
  }
  
  cancel() {
    // Dismiss with reason
    this.modalInstance.dismiss('user_cancelled');
  }
}
```
