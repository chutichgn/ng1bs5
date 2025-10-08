# ng1bs5 API Reference

Complete API documentation for the ng1bs5 loading overlay module.

## Table of Contents

- [Service API](#service-api)
  - [Configuration Methods](#configuration-methods)
  - [Control Methods](#control-methods)
  - [Utility Methods](#utility-methods)
- [Directive API](#directive-api)
  - [Attributes](#directive-attributes)
- [Template Options](#template-options)
- [Events](#events)

---

## Service API

Access the service in your controller/service:

```javascript
angular.module('myApp')
  .controller('MyCtrl', function(LoadingOverlayService) {
    // Use service methods
  });
```

### Configuration Methods

#### `setGlobalConfig(config)`

Set global configuration for all overlays.

**Parameters:**
- `config` (Object) - Configuration object

**Config Options:**
```javascript
{
  template: String,           // Inline template string
  templateUrl: String,        // Template URL (ng-template id)
  templateOptions: Object,    // Options passed to template
  activeClass: String,        // CSS class added when active
  delay: Number              // Delay before hiding (ms)
}
```

**Example:**
```javascript
LoadingOverlayService.setGlobalConfig({
  templateUrl: 'defaultTemplate.html',
  templateOptions: {
    spinnerClass: 'text-primary',
    loadingText: 'Loading...'
  },
  delay: 300
});
```

**Returns:** `undefined`

---

### Control Methods

#### `start(options)`

Start/show a loading overlay.

**Parameters:**
- `options` (Object) - Options object

**Options:**
```javascript
{
  referenceId: String  // ID of overlay to start (optional)
}
```

**Examples:**

```javascript
// Start specific overlay
LoadingOverlayService.start({ referenceId: 'myPanel' });

// Start all overlays without reference ID
LoadingOverlayService.start();
```

**Behavior:**
- If overlay not registered yet, command is queued
- Overlay shows immediately when registered
- Adds `bs-loading-overlay-active` class to element
- Adds custom `activeClass` if configured

**Returns:** `undefined`

---

#### `stop(options)`

Stop/hide a loading overlay.

**Parameters:**
- `options` (Object) - Options object

**Options:**
```javascript
{
  referenceId: String  // ID of overlay to stop (optional)
}
```

**Examples:**

```javascript
// Stop specific overlay
LoadingOverlayService.stop({ referenceId: 'myPanel' });

// Stop all overlays without reference ID
LoadingOverlayService.stop();
```

**Behavior:**
- Respects configured `delay` before hiding
- If overlay not registered yet, command is queued
- Removes `bs-loading-overlay-active` class
- Removes custom `activeClass` if configured

**Returns:** `undefined`

---

#### `wrap(options, promise)`

Automatically manage overlay lifecycle with a promise.

**Parameters:**
- `options` (Object) - Options object
- `promise` (Promise) - Promise or function returning promise

**Options:**
```javascript
{
  referenceId: String  // ID of overlay to manage (optional)
}
```

**Examples:**

```javascript
// With $http
LoadingOverlayService.wrap(
  { referenceId: 'userPanel' },
  $http.get('/api/users')
).then(function(response) {
  $scope.users = response.data;
});

// With $timeout
LoadingOverlayService.wrap(
  { referenceId: 'panel' },
  $timeout(function() {
    return 'Result';
  }, 2000)
).then(function(result) {
  console.log(result);
});

// With function returning promise
LoadingOverlayService.wrap(
  { referenceId: 'panel' },
  function() {
    return $http.get('/api/data');
  }
).then(function(response) {
  // Handle response
});

// Global overlay (no reference ID)
LoadingOverlayService.wrap(
  {},
  $http.get('/api/data')
);
```

**Behavior:**
- Starts overlay immediately
- Stops overlay when promise resolves
- Stops overlay when promise rejects
- Returns the same promise (chainable)

**Returns:** `Promise` - The same promise passed in

**Error Handling:**
```javascript
LoadingOverlayService.wrap(
  { referenceId: 'panel' },
  $http.get('/api/users')
).then(
  function(response) {
    // Success
  },
  function(error) {
    // Error - overlay still stops
    console.error(error);
  }
);
```

---

### Utility Methods

#### `isRegistered(referenceId)`

Check if an overlay is registered.

**Parameters:**
- `referenceId` (String) - Reference ID to check

**Example:**
```javascript
if (LoadingOverlayService.isRegistered('myPanel')) {
  // Overlay is registered and ready
  LoadingOverlayService.start({ referenceId: 'myPanel' });
} else {
  console.log('Overlay not registered yet');
}
```

**Returns:** `Boolean` - `true` if registered, `false` otherwise

**Use Case:**
Useful for checking if directive has initialized before trying to use overlay.

---

#### `getRegisteredIds()`

Get array of all registered overlay IDs.

**Parameters:** None

**Example:**
```javascript
var ids = LoadingOverlayService.getRegisteredIds();
console.log('Registered overlays:', ids);
// Output: ['panel1', 'panel2', 'userList']
```

**Returns:** `Array<String>` - Array of registered reference IDs

**Use Case:**
Debugging and seeing what overlays are available.

---

#### `debugOverlays()`

Get detailed debug information about all overlays.

**Parameters:** None

**Example:**
```javascript
var debug = LoadingOverlayService.debugOverlays();
console.log(debug);
```

**Returns:** `Object`
```javascript
{
  registered: Array<String>,    // Array of registered IDs
  pending: Array<String>,        // Array of IDs with pending commands
  details: Object               // Detailed info about each overlay
}
```

**Example Output:**
```javascript
{
  registered: ['panel1', 'panel2'],
  pending: ['panel3'],
  details: {
    'panel1': {
      referenceId: 'panel1',
      isActive: false,
      hasTemplate: true
    },
    'panel2': {
      referenceId: 'panel2',
      isActive: true,
      hasTemplate: true
    }
  }
}
```

**Use Case:**
Debugging registration and state issues.

---

#### `getAllOverlays()`

Get detailed information about all registered overlays.

**Parameters:** None

**Example:**
```javascript
var overlays = LoadingOverlayService.getAllOverlays();
console.log(overlays);
```

**Returns:** `Object` - Map of overlay IDs to details

**Example Output:**
```javascript
{
  'panel1': {
    referenceId: 'panel1',
    isActive: false,
    hasTemplate: true
  },
  'panel2': {
    referenceId: 'panel2',
    isActive: true,
    hasTemplate: true
  }
}
```

---

#### `registerOverlay(id, overlay)`

Register an overlay instance. **Internal method** - used by directive.

**Parameters:**
- `id` (String) - Unique ID
- `overlay` (Object) - Overlay instance

**Note:** You typically don't need to call this manually. The directive handles registration.

---

#### `unregisterOverlay(id)`

Unregister an overlay. **Internal method** - used by directive.

**Parameters:**
- `id` (String) - Overlay ID to unregister

**Note:** You typically don't need to call this manually. The directive handles cleanup.

---

#### `generateOverlayId()`

Generate a unique overlay ID. **Internal method** - used by directive.

**Returns:** `String` - Unique ID like `"overlay-1"`

---

## Directive API

### Directive Attributes

#### `bs-loading-overlay` (required)

The main directive. Value is the reference ID.

**Value:** `String` - Unique reference ID

**Example:**
```html
<div bs-loading-overlay="myPanel">
  Content
</div>
```

**Notes:**
- ID must be unique across your app
- Used to control the overlay from JavaScript
- Directive automatically sets element position to `relative`

---

#### `bs-loading-overlay-template`

Inline template string for this overlay.

**Value:** `String` - HTML template string

**Example:**
```html
<div bs-loading-overlay="panel1"
     bs-loading-overlay-template="<div class='spinner-border'></div>">
  Content
</div>
```

**Note:** Use `templateUrl` instead for cleaner code.

---

#### `bs-loading-overlay-template-url`

Template URL (ng-template ID) for this overlay.

**Value:** `String` - Template ID or URL

**Example:**
```html
<div bs-loading-overlay="panel1"
     bs-loading-overlay-template-url="customTemplate.html">
  Content
</div>
```

**Overrides:** Global template configuration

---

#### `bs-loading-overlay-template-options`

Options passed to the template.

**Value:** `Object` (as Angular expression)

**Example:**
```html
<div bs-loading-overlay="panel1"
     bs-loading-overlay-template-url="largeSpinner.html"
     bs-loading-overlay-template-options="{ 
       loadingText: 'Saving...', 
       spinnerClass: 'text-success' 
     }">
  Content
</div>
```

**Common Options:**
```javascript
{
  spinnerClass: 'text-primary',     // Bootstrap text color
  spinnerStyle: { width: '4rem' },  // Custom CSS
  loadingText: 'Loading...',        // Text to display
  showText: true,                   // Show/hide text
  textClass: 'text-primary'         // Text color class
}
```

**Note:** Available options depend on your template.

---

#### `bs-loading-overlay-active-class`

CSS class added to element when overlay is active.

**Value:** `String` - CSS class name

**Example:**
```html
<div bs-loading-overlay="panel1"
     bs-loading-overlay-active-class="loading">
  Content
</div>
```

```css
.loading {
  opacity: 0.5;
  pointer-events: none;
}
```

**Use Case:** Apply custom styling when loading.

---

#### `bs-loading-overlay-delay`

Delay (in milliseconds) before hiding overlay.

**Value:** `Number` - Milliseconds

**Example:**
```html
<div bs-loading-overlay="panel1"
     bs-loading-overlay-delay="500">
  Content
</div>
```

**Use Case:** Prevent flashing on quick operations.

---

#### `bs-loading-overlay-reference-id`

Alternative way to set reference ID.

**Value:** `String` - Reference ID

**Example:**
```html
<!-- These are equivalent -->
<div bs-loading-overlay="myPanel"></div>
<div bs-loading-overlay bs-loading-overlay-reference-id="myPanel"></div>
```

**Note:** Use `bs-loading-overlay="id"` syntax instead (shorter).

---

## Template Options

Templates receive an `options` object on their scope.

### Default Template Options

```javascript
{
  spinnerClass: String,      // Bootstrap class (e.g., 'text-primary')
  spinnerStyle: Object,      // CSS style object
  loadingText: String,       // Text to display
  showText: Boolean,         // Show/hide text
  textClass: String          // Text color class
}
```

### Using Options in Template

```html
<script type="text/ng-template" id="myTemplate.html">
  <div class="bs-loading-overlay">
    <div class="spinner-border" 
         ng-class="options.spinnerClass || 'text-primary'"
         ng-style="options.spinnerStyle || { width: '3rem', height: '3rem' }">
    </div>
    <div ng-if="options.showText" 
         ng-class="options.textClass || 'text-primary'">
      {{ options.loadingText || 'Loading...' }}
    </div>
  </div>
</script>
```

### Setting Options

**Global:**
```javascript
LoadingOverlayService.setGlobalConfig({
  templateUrl: 'myTemplate.html',
  templateOptions: {
    spinnerClass: 'text-danger',
    showText: true,
    loadingText: 'Please wait...'
  }
});
```

**Per Directive:**
```html
<div bs-loading-overlay="panel"
     bs-loading-overlay-template-options="{
       spinnerClass: 'text-success',
       loadingText: 'Saving...'
     }">
</div>
```

---

## Events

The directive doesn't emit custom events, but you can use Angular's built-in events:

### Element Classes

Monitor class changes to detect overlay state:

```javascript
$scope.$watch(function() {
  return element.hasClass('bs-loading-overlay-active');
}, function(isActive) {
  if (isActive) {
    console.log('Overlay started');
  } else {
    console.log('Overlay stopped');
  }
});
```

### Custom Active Class

```html
<div bs-loading-overlay="panel"
     bs-loading-overlay-active-class="my-loading-class">
</div>
```

```javascript
$scope.$watch(function() {
  return element.hasClass('my-loading-class');
}, function(isLoading) {
  // React to loading state
});
```

---

## Complete Examples

### Example 1: Basic Usage

```javascript
angular.module('myApp', ['ng1bs5'])
  .run(function(LoadingOverlayService) {
    LoadingOverlayService.setGlobalConfig({
      templateUrl: 'defaultTemplate.html'
    });
  })
  .controller('MainCtrl', function($scope, LoadingOverlayService) {
    $scope.load = function() {
      LoadingOverlayService.start({ referenceId: 'panel' });
      
      setTimeout(function() {
        LoadingOverlayService.stop({ referenceId: 'panel' });
      }, 2000);
    };
  });
```

### Example 2: With HTTP

```javascript
.controller('UserCtrl', function($scope, $http, LoadingOverlayService) {
  $scope.loadUsers = function() {
    LoadingOverlayService.wrap(
      { referenceId: 'userList' },
      $http.get('/api/users')
    ).then(function(response) {
      $scope.users = response.data;
    }).catch(function(error) {
      console.error('Failed to load users:', error);
    });
  };
});
```

### Example 3: Multiple Overlays

```javascript
.controller('MultiCtrl', function($scope, $http, LoadingOverlayService) {
  $scope.loadAll = function() {
    // Start all overlays
    LoadingOverlayService.wrap(
      { referenceId: 'users' },
      $http.get('/api/users')
    ).then(function(response) {
      $scope.users = response.data;
    });
    
    LoadingOverlayService.wrap(
      { referenceId: 'posts' },
      $http.get('/api/posts')
    ).then(function(response) {
      $scope.posts = response.data;
    });
  };
});
```

### Example 4: Custom Template Options

```html
<div bs-loading-overlay="savePanel"
     bs-loading-overlay-template-url="largeSpinner.html"
     bs-loading-overlay-template-options="{
       loadingText: 'Saving your changes...',
       spinnerClass: 'text-success',
       spinnerStyle: { width: '4rem', height: '4rem' },
       showText: true
     }">
  <!-- Form content -->
</div>
```

```javascript
$scope.save = function() {
  LoadingOverlayService.wrap(
    { referenceId: 'savePanel' },
    $http.post('/api/save', $scope.formData)
  ).then(function() {
    alert('Saved!');
  });
};
```

---

## Method Chaining

Since `wrap()` returns a promise, you can chain operations:

```javascript
LoadingOverlayService
  .wrap({ referenceId: 'panel' }, $http.get('/api/users'))
  .then(function(response) {
    return response.data;
  })
  .then(function(users) {
    return users.filter(u => u.active);
  })
  .then(function(activeUsers) {
    $scope.users = activeUsers;
  })
  .catch(function(error) {
    console.error(error);
  });
```

---

## TypeScript Definitions

If using TypeScript, here are the type definitions:

```typescript
interface LoadingOverlayConfig {
  template?: string;
  templateUrl?: string;
  templateOptions?: any;
  activeClass?: string;
  delay?: number;
}

interface LoadingOverlayOptions {
  referenceId?: string;
}

interface LoadingOverlayService {
  setGlobalConfig(config: LoadingOverlayConfig): void;
  start(options?: LoadingOverlayOptions): void;
  stop(options?: LoadingOverlayOptions): void;
  wrap<T>(options: LoadingOverlayOptions, promise: Promise<T> | (() => Promise<T>)): Promise<T>;
  isRegistered(referenceId: string): boolean;
  getRegisteredIds(): string[];
  debugOverlays(): {
    registered: string[];
    pending: string[];
    details: Record<string, any>;
  };
  getAllOverlays(): Record<string, any>;
}
```

---

## See Also

- **[Getting Started Guide](GETTING-STARTED-COMPLETE.md)** - Quick start guide
- **[Usage Examples](USAGE.md)** - Real-world usage patterns  
- **[Template Guide](NG-TEMPLATE-GUIDE.md)** - Working with templates
- **[Troubleshooting](TROUBLESHOOTING-CSS.md)** - Common issues

---

**Questions?** Check the [demos](demo-ng-template.html) for live examples!
