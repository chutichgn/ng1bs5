# Modal Updates - Fullscreen Support

## Changes Made

### 1. **modal-types.ts**
- Updated `ModalOptions.size` to include fullscreen modes:
  - `'sm' | 'md' | 'lg' | 'xl'` (standard sizes)
  - `'fullscreen'` (always fullscreen)
  - `'fullscreen-sm-down'` (fullscreen below sm breakpoint)
  - `'fullscreen-md-down'` (fullscreen below md breakpoint)
  - `'fullscreen-lg-down'` (fullscreen below lg breakpoint)
  - `'fullscreen-xl-down'` (fullscreen below xl breakpoint)
  - `'fullscreen-xxl-down'` (fullscreen below xxl breakpoint)

- Updated `ModalController` interface with same size types

### 2. **modal.controller.ts**
- Refactored `_getDialogClasses()` to use cleaner array filter approach
- Now handles all size options including fullscreen modes
- `md` is default, so no class added for it

### 3. **modal.service.ts**
- Same refactored `_getDialogClasses()` implementation
- Consistent with controller implementation

## Usage Examples

```typescript
// Always fullscreen
$bs5Modal.open({
    size: 'fullscreen',
    template: '...'
});

// Fullscreen on mobile, normal on desktop
$bs5Modal.open({
    size: 'fullscreen-md-down',
    template: '...'
});

// Large modal (default behavior)
$bs5Modal.open({
    size: 'lg',
    template: '...'
});

// Medium modal (Bootstrap default)
$bs5Modal.open({
    size: 'md', // or omit size entirely
    template: '...'
});
```

## Implementation Details

The `_getDialogClasses()` method now:
1. Always adds `'modal-dialog'` base class
2. Adds `modal-{size}` for any size except 'md' (Bootstrap default)
3. Adds `modal-dialog-centered` if centered option is true
4. Adds `modal-dialog-scrollable` if scrollable option is true
5. Filters out falsy values and joins with space

This approach is cleaner, more maintainable, and automatically supports all Bootstrap 5 modal size variants.
