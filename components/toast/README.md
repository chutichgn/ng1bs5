# Toast Component

Bootstrap 5 Toast notifications for AngularJS 1.x with programmatic API and ES6 support.

## Features

- ✅ **Programmatic API** - Create toasts from anywhere in your code
- ✅ **Bootstrap 5 Native** - Uses Bootstrap 5's built-in toast styles
- ✅ **ES6 Classes** - Modern JavaScript with Strict DI
- ✅ **Smooth Animations** - Fade in/out effects with configurable timing
- ✅ **Auto-hide** - Automatic dismissal with custom delays
- ✅ **Positioning** - 9 different position options
- ✅ **Timestamps** - Optional timestamp display
- ✅ **Type Variants** - Success, Error, Warning, Info styles
- ✅ **Flexible Layouts** - With or without titles, colored headers or bodies

## Installation

```bash
npm install angularjs-bootstrap-5
```

Or include the module in your app:

```javascript
import angular from 'angular';
import ToastModule from 'angularjs-bootstrap-5/components/toast/toast.module';

angular.module('myApp', [ToastModule]);
```

## Quick Start

### Basic Usage

```javascript
class MyController {
    static $inject = ['ToastService'];
    
    constructor(ToastService) {
        this.ToastService = ToastService;
    }
    
    showToast() {
        this.ToastService.success('Operation completed!', 'Success');
    }
}
```

### With Options

```javascript
this.ToastService.create({
    message: 'Your changes have been saved',
    title: 'Success',
    type: 'success',
    animation: true,
    autohide: true,
    delay: 5000,
    timestamp: true,
    position: 'top-end'
});
```

## Documentation

- [API Reference](./API.md) - Complete API documentation
- [Examples](./EXAMPLES.md) - More usage examples
- [Changelog](./CHANGELOG.md) - Version history

## Basic Example

```javascript
import angular from 'angular';
import ToastModule from 'angularjs-bootstrap-5/components/toast/toast.module';

class AppController {
    static $inject = ['ToastService'];
    
    constructor(ToastService) {
        this.ToastService = ToastService;
    }
    
    saveData() {
        // Show loading toast
        this.ToastService.info('Saving...', '', { autohide: false });
        
        // Simulate API call
        setTimeout(() => {
            // Show success toast
            this.ToastService.success(
                'Your data has been saved successfully',
                'Success',
                { timestamp: true }
            );
        }, 2000);
    }
}

angular
    .module('myApp', [ToastModule])
    .controller('AppController', AppController);
```

## Quick API Reference

### Methods

```javascript
// Convenience methods
ToastService.success(message, title, options);
ToastService.error(message, title, options);
ToastService.warning(message, title, options);
ToastService.info(message, title, options);

// Full control
ToastService.create({
    message: 'Toast message',
    title: 'Toast title',
    type: 'success',
    delay: 5000,
    autohide: true,
    animation: true,
    timestamp: false,
    position: 'top-end',
    closeButton: true
});
```

### Positions

`top-start`, `top-center`, `top-end`, `middle-start`, `middle-center`, `middle-end`, `bottom-start`, `bottom-center`, `bottom-end`

### Types

`success`, `error`, `warning`, `info`

## Styling

The toast component uses Bootstrap 5's native toast styles. Include Bootstrap 5 CSS:

```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
```

Import the toast positioning CSS:

```javascript
import 'angularjs-bootstrap-5/components/toast/toast.css';
```

## Dependencies

- AngularJS 1.8.x
- Bootstrap 5.x (CSS only)

## Browser Support

Same as Bootstrap 5:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT

## Contributing

Follow the ES6 class-based patterns in the ng1bs5 project. See [Contributing Guidelines](../../CONTRIBUTING.md).

## Related Components

- [Alert](../alert/) - Bootstrap 5 alerts
- [Modal](../modal/) - Bootstrap 5 modals
- [Tooltip](../tooltip/) - Bootstrap 5 tooltips

## Support

- GitHub Issues: https://github.com/chutichgn/ng1bs5/issues
- Documentation: https://github.com/chutichgn/ng1bs5