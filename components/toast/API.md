# Toast API Reference

Complete API documentation for the Toast component.

## ToastService

The `ToastService` is the main service for creating toast notifications programmatically.

### Dependency Injection

```javascript
class MyController {
    static $inject = ['ToastService'];
    
    constructor(ToastService) {
        this.ToastService = ToastService;
    }
}
```

## Methods

### `create(options)`

Creates and displays a toast notification.

**Signature:**
```javascript
ToastService.create(options: ToastOptions): ToastInstance
```

**Parameters:**

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `options` | `ToastOptions` | Yes | - | Configuration object |

**Returns:** `ToastInstance` - Object with `element` and `hide()` method

**Example:**
```javascript
const toast = ToastService.create({
    message: 'Task completed',
    title: 'Success',
    type: 'success'
});
```

---

### `success(message, title, options)`

Convenience method for creating success toasts.

**Signature:**
```javascript
ToastService.success(
    message: string, 
    title?: string, 
    options?: Partial<ToastOptions>
): ToastInstance
```

**Example:**
```javascript
ToastService.success('Saved successfully!', 'Success');
ToastService.success('Done!', 'Success', { timestamp: true });
```

---

### `error(message, title, options)`

Convenience method for creating error toasts.

**Example:**
```javascript
ToastService.error('Failed to save!', 'Error');
ToastService.error('Error!', 'Error', { autohide: false });
```

---

### `warning(message, title, options)`

Convenience method for creating warning toasts.

**Example:**
```javascript
ToastService.warning('Unsaved changes!', 'Warning');
```

---

### `info(message, title, options)`

Convenience method for creating info toasts.

**Example:**
```javascript
ToastService.info('New message received', 'Notification', { 
    timestamp: true 
});
```

---

## Configuration Options

### `ToastOptions`

```typescript
interface ToastOptions {
    message: string;
    title?: string;
    type?: 'success' | 'error' | 'warning' | 'info';
    delay?: number;
    autohide?: boolean;
    animation?: boolean;
    timestamp?: boolean;
    position?: ToastPosition;
    closeButton?: boolean;
}
```

**Properties:**

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `message` | `string` | `''` | **Required.** Toast message content |
| `title` | `string` | `''` | Toast title. If empty, body will be colored |
| `type` | `'success' \| 'error' \| 'warning' \| 'info'` | `'info'` | Toast visual type |
| `delay` | `number` | `5000` | Auto-hide delay in milliseconds |
| `autohide` | `boolean` | `true` | Whether to auto-hide after delay |
| `animation` | `boolean` | `true` | Enable fade in/out animation |
| `timestamp` | `boolean` | `false` | Show current time in toast |
| `position` | `ToastPosition` | `'top-end'` | Position on screen |
| `closeButton` | `boolean` | `true` | Show close (X) button |

---

## Positions

Available position values:

```typescript
type ToastPosition = 
    | 'top-start'      // Top left
    | 'top-center'     // Top center
    | 'top-end'        // Top right (default)
    | 'middle-start'   // Middle left
    | 'middle-center'  // Screen center
    | 'middle-end'     // Middle right
    | 'bottom-start'   // Bottom left
    | 'bottom-center'  // Bottom center
    | 'bottom-end';    // Bottom right
```

**Visual Reference:**

```
┌─────────────────────────────────────┐
│  top-start    top-center    top-end │
│                                      │
│middle-start middle-center middle-end│
│                                      │
│bottom-start bottom-center bottom-end│
└─────────────────────────────────────┘
```

---

## Toast Types

| Type | Background | Text Color | Use Case |
|------|------------|------------|----------|
| `success` | Green | White | Successful operations |
| `error` | Red | White | Errors and failures |
| `warning` | Yellow | Dark | Warnings and cautions |
| `info` | Blue | White | Information and notifications |

---

## Return Value

### `ToastInstance`

```typescript
interface ToastInstance {
    element: jqLite;
    hide: () => void;
}
```

**Properties:**

| Property | Type | Description |
|----------|------|-------------|
| `element` | `jqLite` | The toast's jqLite-wrapped DOM element |
| `hide` | `Function` | Method to manually hide the toast |

**Example:**
```javascript
const toast = ToastService.success('Processing...', '', { 
    autohide: false 
});

// Later, manually hide it
toast.hide();
```

---

## Layout Variations

### With Title (Colored Header)

When `title` is provided:
- Colored header with title
- White body with message
- Timestamp in header (if enabled)

```javascript
ToastService.success(
    'Your changes have been saved',
    'Success',
    { timestamp: true }
);
```

---

### Without Title (Colored Body)

When `title` is empty (`''`):
- No header
- Fully colored body
- Close button inline
- Timestamp in body (if enabled)

```javascript
ToastService.success(
    'Saved successfully!',
    '',  // Empty title
    { timestamp: true }
);
```

---

## Animation

### With Animation (Default)

```javascript
ToastService.success('Done!', 'Success', { animation: true });
```

- Fades in over 150ms
- Fades out over 150ms when closing

### Without Animation

```javascript
ToastService.info('Quick note', 'Info', { animation: false });
```

- Appears instantly
- Disappears instantly

---

## Auto-hide

### Enabled (Default)

```javascript
ToastService.info('Auto-hiding...', 'Info', {
    autohide: true,
    delay: 3000  // Disappears after 3 seconds
});
```

### Disabled

```javascript
ToastService.warning('Important!', 'Warning', {
    autohide: false  // Stays until X clicked
});
```

---

## Timestamp

Display the current time when the toast was created.

```javascript
ToastService.success('Message sent', 'Success', { 
    timestamp: true  // Shows "3:45 PM"
});
```

**Format:** 12-hour format with AM/PM

---

## Complete Example

```javascript
class NotificationController {
    static $inject = ['ToastService'];
    
    constructor(ToastService) {
        this.ToastService = ToastService;
    }
    
    saveData() {
        // Show loading
        const loading = this.ToastService.info(
            'Saving your data...',
            'Please wait',
            { autohide: false, animation: false }
        );
        
        // Simulate API call
        setTimeout(() => {
            // Hide loading
            loading.hide();
            
            // Show success
            this.ToastService.success(
                'Your data has been saved successfully',
                'Success',
                { animation: true, timestamp: true }
            );
        }, 2000);
    }
    
    showError() {
        this.ToastService.error(
            'Unable to connect to server',
            'Connection Error',
            { 
                autohide: false,  // Manual close only
                timestamp: true 
            }
        );
    }
    
    showWarning() {
        this.ToastService.warning(
            'Your session will expire in 5 minutes',
            'Warning',
            { delay: 10000 }  // Show for 10 seconds
        );
    }
}
```

---

## Stacking

Multiple toasts stack vertically with 0.5rem spacing:

```javascript
ToastService.success('First toast', 'Success');
ToastService.info('Second toast', 'Info');
ToastService.warning('Third toast', 'Warning');
```

---

## Error Handling

If `message` is empty, an error is logged to console:

```javascript
ToastService.create({ message: '' });
// Console: "Toast message is required"
```

---

## Browser Compatibility

- Chrome 51+
- Firefox 54+
- Safari 10+
- Edge 15+

Requires CSS Transitions and ES6 support.

---

## See Also

- [README](./README.md) - Overview and quick start
- [Examples](./EXAMPLES.md) - More usage examples
- [Changelog](./CHANGELOG.md) - Version history
