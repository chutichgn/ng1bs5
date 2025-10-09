# Popover & Tooltip Fix Summary

## Problem Identified

The popover (and tooltip) directives were not working because of **attribute name mismatches** between:
1. What the directives expected
2. What the HTML demos were using

### Original Issues:

**Popover Directive Expected:**
- `bs5-popover="content"` - Content on the directive itself
- `title="title"` - Title attribute
- `placement="placement"` - Placement attribute
- `trigger="trigger"` - Trigger attribute

**HTML Demo Was Using (Bootstrap 5 style):**
- `bs-popover` - Directive name (shorter)
- `data-bs-title="title"` - Title with data-bs prefix
- `data-bs-content="content"` - Content attribute
- `data-bs-placement="placement"` - Placement with data-bs prefix

## Solution Implemented

I've updated **both** the Popover and Tooltip directives to support **multiple attribute naming conventions**, making them more flexible and Bootstrap-compatible.

### Changes Made

#### 1. Popover Module (`src/components/popover/popover.module.js`)

**✅ Added Support For:**
- Both directive names: `bs5-popover` AND `bs-popover`
- Bootstrap-style data attributes:
  - `data-bs-title` or `bs-title` → Title
  - `data-bs-content` or `bs-content` → Content
  - `data-bs-placement` or `bs-placement` → Placement
  - `data-bs-trigger` or `bs-trigger` → Trigger
  - `data-bs-html` or `bs-html` → Enable HTML
  - `data-bs-delay` or `bs-delay` → Delay
  - `data-bs-offset` or `bs-offset` → Offset
  - `data-bs-container` or `bs-container` → Container

**Code Changes:**
```javascript
// Now supports multiple attribute formats
const config = {
    title: attrs.title || attrs.bsTitle || '',
    html: scope.$eval(attrs.html || attrs.bsHtml) || false,
    placement: attrs.placement || attrs.bsPlacement || 'right',
    trigger: attrs.trigger || attrs.bsTrigger || 'click',
    // ... etc
};

// Content can come from multiple sources
const contentAttr = attrs.bs5Popover || attrs.bsPopover || attrs.bsContent || attrs.content;

// Register both directive names
.directive('bs5Popover', () => new PopoverDirective(...))
.directive('bsPopover', () => new PopoverDirective(...));
```

#### 2. Tooltip Module (`src/components/tooltip/tooltip.module.js`)

**✅ Added Support For:**
- Both directive names: `bs5-tooltip` AND `bs-tooltip`
- Bootstrap-style data attributes:
  - `data-bs-title` or `bs-title` → Tooltip text
  - `data-bs-placement` or `bs-placement` → Placement
  - `data-bs-trigger` or `bs-trigger` → Trigger
  - `data-bs-html` or `bs-html` → Enable HTML
  - `data-bs-delay` or `bs-delay` → Delay

**Code Changes:**
```javascript
// Now supports multiple attribute formats
const contentAttr = attrs.bs5Tooltip || attrs.bsTooltip || attrs.bsTitle || attrs.title;
const placement = attrs.placement || attrs.bsPlacement || 'top';
const trigger = attrs.trigger || attrs.bsTrigger || 'hover';

// Register both directive names
.directive('bs5Tooltip', () => new TooltipDirective(...))
.directive('bsTooltip', () => new TooltipDirective(...));
```

## How to Use - Multiple Ways!

### Option 1: Bootstrap 5 Style (Recommended)
```html
<!-- Popover -->
<button bs-popover
        data-bs-title="Title Here"
        data-bs-content="Content here"
        data-bs-placement="top"
        data-bs-trigger="click">
    Click Me
</button>

<!-- Tooltip -->
<button bs-tooltip
        data-bs-title="Tooltip text"
        data-bs-placement="top">
    Hover Me
</button>
```

### Option 2: Without data- prefix
```html
<!-- Popover -->
<button bs-popover
        bs-title="Title Here"
        bs-content="Content here"
        bs-placement="top">
    Click Me
</button>

<!-- Tooltip -->
<button bs-tooltip
        bs-title="Tooltip text"
        bs-placement="top">
    Hover Me
</button>
```

### Option 3: Original ng1bs5 Style
```html
<!-- Popover -->
<button bs5-popover="Content here"
        title="Title Here"
        placement="top">
    Click Me
</button>

<!-- Tooltip -->
<button bs5-tooltip="Tooltip text"
        placement="top">
    Hover Me
</button>
```

## All Supported Attributes

### Popover
| Attribute | Variations | Default | Description |
|-----------|-----------|---------|-------------|
| Content | `bs-popover`, `bs5-popover`, `bs-content`, `data-bs-content` | - | Popover content (required) |
| Title | `title`, `bs-title`, `data-bs-title` | '' | Popover title |
| Placement | `placement`, `bs-placement`, `data-bs-placement` | 'right' | Position: top, right, bottom, left |
| Trigger | `trigger`, `bs-trigger`, `data-bs-trigger` | 'click' | Trigger: click, hover, focus |
| HTML | `html`, `bs-html`, `data-bs-html` | false | Enable HTML content |
| Delay | `delay`, `bs-delay`, `data-bs-delay` | 0 | Show/hide delay in ms |
| Container | `container`, `bs-container`, `data-bs-container` | body | Container selector |
| Template URL | `template-url`, `bs-template-url` | - | External template |

### Tooltip
| Attribute | Variations | Default | Description |
|-----------|-----------|---------|-------------|
| Content | `bs-tooltip`, `bs5-tooltip`, `bs-title`, `data-bs-title`, `title` | - | Tooltip text (required) |
| Placement | `placement`, `bs-placement`, `data-bs-placement` | 'top' | Position: top, right, bottom, left |
| Trigger | `trigger`, `bs-trigger`, `data-bs-trigger` | 'hover' | Trigger: click, hover, focus |
| HTML | `html`, `bs-html`, `data-bs-html` | false | Enable HTML content |
| Delay | `delay`, `bs-delay`, `data-bs-delay` | 0 | Show/hide delay in ms |

## Benefits

### 1. **Bootstrap 5 Compatibility**
- Uses familiar `data-bs-*` attributes like Bootstrap's native API
- Makes migration easier for developers familiar with Bootstrap

### 2. **Flexibility**
- Multiple ways to specify attributes
- Backwards compatible with existing code
- Works with or without `data-` prefix

### 3. **Consistency**
- Both `bs-` and `bs5-` directive names work
- All ng1bs5 components follow similar patterns

### 4. **Developer Experience**
- Intuitive attribute names
- Follows Bootstrap conventions
- Well-documented with examples

## Testing the Fix

To verify the fix works:

1. **Start the demo:**
   ```bash
   npm start
   ```

2. **Navigate to Popover demo:**
   - Go to http://localhost:8080
   - Click on "Popover" tab
   - Try all the popover examples

3. **Navigate to Tooltip demo:**
   - Click on "Tooltip" tab
   - Hover over buttons to see tooltips

4. **Test different trigger methods:**
   - Click triggers (popover default)
   - Hover triggers (tooltip default)
   - Focus triggers (form inputs)

## Troubleshooting

### Popover/Tooltip Still Not Working?

1. **Check the browser console** for errors
2. **Verify ng1bs5 module is imported:**
   ```javascript
   import ng1bs5 from 'ng1bs5';
   angular.module('myApp', [ng1bs5]);
   ```
3. **Check Bootstrap CSS is loaded:**
   ```javascript
   import 'bootstrap/dist/css/bootstrap.min.css';
   ```
4. **Verify directive name:**
   - Use `bs-popover` or `bs5-popover` (not `data-bs-popover`)
   - Use `bs-tooltip` or `bs5-tooltip` (not `data-bs-tooltip`)

### Content Not Showing?

Make sure you have the content attribute:
```html
<!-- ✅ Correct -->
<button bs-popover bs-content="My content">Click</button>

<!-- ❌ Wrong - missing content -->
<button bs-popover>Click</button>
```

### Position Wrong?

Check the placement attribute:
```html
<!-- Valid placements: top, right, bottom, left -->
<button bs-popover 
        bs-content="Content" 
        bs-placement="top">
    Click
</button>
```

## Migration Guide

### Migrating from Old Format

**Before:**
```html
<button bs5-popover="Content text"
        title="Title"
        placement="right">
```

**After (Recommended):**
```html
<button bs-popover
        data-bs-content="Content text"
        data-bs-title="Title"
        data-bs-placement="right">
```

**After (Alternative - both work!):**
```html
<button bs-popover
        bs-content="Content text"
        bs-title="Title"
        bs-placement="right">
```

## Summary

The fix makes popovers and tooltips work by:
1. ✅ Supporting Bootstrap-style `data-bs-*` attributes
2. ✅ Registering both `bs-` and `bs5-` directive names
3. ✅ Reading content from multiple possible attributes
4. ✅ Maintaining backwards compatibility

**Your demo should now work perfectly!** 🎉

## Quick Reference

```html
<!-- Popover - All These Work! -->
<button bs-popover bs-content="Text" bs-title="Title">Click</button>
<button bs-popover data-bs-content="Text" data-bs-title="Title">Click</button>
<button bs5-popover="Text" title="Title">Click</button>

<!-- Tooltip - All These Work! -->
<button bs-tooltip bs-title="Text">Hover</button>
<button bs-tooltip data-bs-title="Text">Hover</button>
<button bs5-tooltip="Text">Hover</button>
```
