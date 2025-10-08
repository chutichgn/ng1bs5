# Toast Examples

Comprehensive usage examples for the Toast component.

## Table of Contents

- [Basic Examples](#basic-examples)
- [Type Variants](#type-variants)
- [Positioning](#positioning)
- [Animation](#animation)
- [Auto-hide](#auto-hide)
- [Timestamps](#timestamps)
- [Layout Variations](#layout-variations)
- [Real-World Scenarios](#real-world-scenarios)
- [Advanced Patterns](#advanced-patterns)

---

## Basic Examples

### Success Toast

```javascript
ToastService.success('Profile updated successfully!', 'Success');
```

### Error Toast

```javascript
ToastService.error('Failed to load data', 'Error');
```

### Warning Toast

```javascript
ToastService.warning('Unsaved changes', 'Warning');
```

### Info Toast

```javascript
ToastService.info('New message received', 'Info');
```

---

## Type Variants

### All Types Side by Side

```javascript
class ExampleController {
    static $inject = ['ToastService', '$timeout'];
    
    constructor(ToastService, $timeout) {
        this.ToastService = ToastService;
        this.$timeout = $timeout;
    }
    
    showAllTypes() {
        this.ToastService.success('Success message', 'Success');
        
        this.$timeout(() => {
            this.ToastService.error('Error message', 'Error');
        }, 500);
        
        this.$timeout(() => {
            this.ToastService.warning('Warning message', 'Warning');
        }, 1000);
        
        this.$timeout(() => {
            this.ToastService.info('Info message', 'Info');
        }, 1500);
    }
}
```

---

## Positioning

### Top Positions

```javascript
// Top left
ToastService.success('Top left toast', 'Success', {
    position: 'top-start'
});

// Top center
ToastService.info('Top center toast', 'Info', {
    position: 'top-center'
});

// Top right (default)
ToastService.success('Top right toast', 'Success', {
    position: 'top-end'
});
```

### Middle Positions

```javascript
// Middle left
ToastService.warning('Middle left toast', 'Warning', {
    position: 'middle-start'
});

// Screen center
ToastService.info('Center toast', 'Info', {
    position: 'middle-center'
});

// Middle right
ToastService.success('Middle right toast', 'Success', {
    position: 'middle-end'
});
```

### Bottom Positions

```javascript
// Bottom left
ToastService.success('Bottom left toast', 'Success', {
    position: 'bottom-start'
});

// Bottom center
ToastService.info('Bottom center toast', 'Info', {
    position: 'bottom-center'
});

// Bottom right
ToastService.warning('Bottom right toast', 'Warning', {
    position: 'bottom-end'
});
```

---

## Animation

### With Animation (Smooth Fade)

```javascript
ToastService.success('Smooth fade in/out', 'Animated', {
    animation: true  // Default
});
```

### Without Animation (Instant)

```javascript
ToastService.info('Instant appearance', 'No Animation', {
    animation: false
});
```

---

## Auto-hide

### Auto-hide with Default Delay (5 seconds)

```javascript
ToastService.success('Auto-hiding in 5 seconds', 'Success', {
    autohide: true  // Default
});
```

### Custom Delay

```javascript
// Short delay (2 seconds)
ToastService.info('Quick notification', 'Info', {
    autohide: true,
    delay: 2000
});

// Long delay (10 seconds)
ToastService.warning('Important message', 'Warning', {
    autohide: true,
    delay: 10000
});
```

### No Auto-hide (Manual Close Only)

```javascript
ToastService.error('Critical error - click X to dismiss', 'Error', {
    autohide: false
});
```

---

## Timestamps

### With Timestamp in Header

```javascript
ToastService.success(
    'Message sent at current time',
    'Success',
    { timestamp: true }
);
```

### With Timestamp in Body (No Title)

```javascript
ToastService.info(
    'This message was created now',
    '',  // Empty title
    { timestamp: true }
);
```

---

## Layout Variations

### With Title (Colored Header + White Body)

```javascript
ToastService.success(
    'Your profile has been updated successfully',
    'Profile Updated',  // Has title
    { timestamp: true }
);
```

### Without Title (Colored Body)

```javascript
ToastService.success(
    'Profile updated successfully!',
    '',  // Empty title
    { timestamp: true }
);
```

---

## Real-World Scenarios

### Save Operation

```javascript
class SaveController {
    static $inject = ['ToastService', '$http'];
    
    constructor(ToastService, $http) {
        this.ToastService = ToastService;
        this.$http = $http;
    }
    
    saveData(data) {
        // Show saving toast
        const savingToast = this.ToastService.info(
            'Saving your changes...',
            'Please wait',
            { 
                autohide: false,
                animation: false 
            }
        );
        
        // Make API call
        this.$http.post('/api/save', data)
            .then(() => {
                savingToast.hide();
                
                this.ToastService.success(
                    'Your changes have been saved',
                    'Success',
                    { 
                        animation: true,
                        timestamp: true 
                    }
                );
            })
            .catch((error) => {
                savingToast.hide();
                
                this.ToastService.error(
                    error.message || 'Failed to save changes',
                    'Error',
                    { 
                        autohide: false,
                        timestamp: true 
                    }
                );
            });
    }
}
```

### Form Validation

```javascript
class FormController {
    static $inject = ['ToastService'];
    
    constructor(ToastService) {
        this.ToastService = ToastService;
    }
    
    validateAndSubmit(form) {
        const errors = this.validate(form);
        
        if (errors.length > 0) {
            errors.forEach((error, index) => {
                setTimeout(() => {
                    this.ToastService.error(error, 'Validation Error', {
                        delay: 5000
                    });
                }, index * 500);
            });
            return;
        }
        
        this.submitForm(form);
    }
    
    validate(form) {
        const errors = [];
        if (!form.email) errors.push('Email is required');
        if (!form.password) errors.push('Password is required');
        return errors;
    }
}
```

### Session Expiration Warning

```javascript
class SessionController {
    static $inject = ['ToastService', '$interval'];
    
    constructor(ToastService, $interval) {
        this.ToastService = ToastService;
        this.$interval = $interval;
    }
    
    startSessionTimer() {
        // Warn 5 minutes before expiration
        this.$interval(() => {
            this.ToastService.warning(
                'Your session will expire in 5 minutes',
                'Session Warning',
                { 
                    delay: 10000,
                    position: 'top-center' 
                }
            );
        }, 25 * 60 * 1000);
    }
}
```

### Notification System

```javascript
class NotificationController {
    static $inject = ['ToastService', '$rootScope'];
    
    constructor(ToastService, $rootScope) {
        this.ToastService = ToastService;
        
        $rootScope.$on('notification', (event, data) => {
            this.showNotification(data);
        });
    }
    
    showNotification(notification) {
        this.ToastService.create({
            message: notification.message,
            title: notification.title || '',
            type: notification.type || 'info',
            timestamp: true,
            delay: notification.delay || 5000,
            autohide: !notification.persistent,
            position: notification.position || 'top-end'
        });
    }
}
```

---

## Advanced Patterns

### Progress Indicator

```javascript
class ProgressController {
    static $inject = ['ToastService', '$interval'];
    
    constructor(ToastService, $interval) {
        this.ToastService = ToastService;
        this.$interval = $interval;
    }
    
    showProgress(taskName) {
        let progress = 0;
        
        const toast = this.ToastService.info(
            `${taskName}: ${progress}%`,
            'Processing',
            { 
                autohide: false,
                animation: false 
            }
        );
        
        const interval = this.$interval(() => {
            progress += 10;
            
            const body = toast.element[0].querySelector('.toast-body');
            if (body) {
                body.textContent = `${taskName}: ${progress}%`;
            }
            
            if (progress >= 100) {
                this.$interval.cancel(interval);
                toast.hide();
                
                this.ToastService.success(
                    `${taskName} completed!`,
                    'Done'
                );
            }
        }, 500);
    }
}
```

---

## Tips and Best Practices

### Do's

✅ Use appropriate types for context  
✅ Set `autohide: false` for critical errors  
✅ Use timestamps for audit logs  
✅ Show loading toasts without auto-hide  
✅ Stack toasts with delays for better UX  

### Don'ts

❌ Don't show too many toasts at once  
❌ Don't use long delays for success messages  
❌ Don't forget to hide loading toasts  
❌ Don't use toasts for critical confirmations  
❌ Don't rely solely on toasts for error reporting  

---

## See Also

- [README](./README.md) - Overview and quick start
- [API Reference](./API.md) - Complete API documentation
- [Changelog](./CHANGELOG.md) - Version history
