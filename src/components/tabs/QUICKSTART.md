# Quick Start Guide - Tabs Component

## Installation

### Step 1: Copy Files
Copy all `.js` files to `/src/components/tabs/`:
```
src/components/tabs/
├── tabs.module.js       (441 bytes)
├── tabs.directive.js    (14KB)
├── tabs.service.js      (2.5KB)
└── index.js            (329 bytes)
```

### Step 2: Build
Your main `/src/index.js` already imports the TabsModule, so just build:
```bash
npm run build
```

### Step 3: Use It!
```html
<bs5-tabset>
    <bs5-tab heading="Home" active="true">
        <p>Home content</p>
    </bs5-tab>
    <bs5-tab heading="Profile">
        <p>Profile content</p>
    </bs5-tab>
</bs5-tabset>
```

## Quick Examples

### Pills
```html
<bs5-tabset type="pills">
    <bs5-tab heading="Home" active="true">Content</bs5-tab>
    <bs5-tab heading="Profile">Content</bs5-tab>
</bs5-tabset>
```

### With Animation
```html
<bs5-tabset fade="true">
    <bs5-tab heading="Home" active="true">Content</bs5-tab>
    <bs5-tab heading="Profile">Content</bs5-tab>
</bs5-tabset>
```

### Vertical
```html
<bs5-tabset vertical="true" type="pills">
    <bs5-tab heading="Home" active="true">Content</bs5-tab>
    <bs5-tab heading="Profile">Content</bs5-tab>
</bs5-tabset>
```

### Programmatic Control
```javascript
angular.module('myApp', ['ng1bs5'])
    .controller('MyCtrl', function(TabsService) {
        // Show a tab
        TabsService.show('myTabset', 'profile-tab');
        
        // Get active tab
        const active = TabsService.getActiveTab('myTabset');
    });
```

```html
<bs5-tabset tabset-id="myTabset">
    <bs5-tab tab-id="home-tab" heading="Home" active="true">Content</bs5-tab>
    <bs5-tab tab-id="profile-tab" heading="Profile">Content</bs5-tab>
</bs5-tabset>
```

## All Options

### bs5-tabset
- `tabset-id`: ID for programmatic control
- `type`: 'tabs' | 'pills' | 'underline'
- `vertical`: true/false
- `justified`: true/false
- `fill`: true/false
- `fade`: true/false
- `on-select`: callback function

### bs5-tab
- `tab-id`: ID for programmatic control
- `heading`: Tab text
- `active`: true/false (initial state)
- `disabled`: true/false

See README.md for complete documentation!
