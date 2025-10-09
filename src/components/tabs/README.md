# Tabs Component

Bootstrap 5 tabs component for AngularJS using ES6 style with Strict DI.

## Features

- ✅ Multiple tab styles (tabs, pills, underline)
- ✅ Vertical and horizontal orientations
- ✅ Fill and justified layouts
- ✅ Fade animations
- ✅ Keyboard navigation (Arrow keys)
- ✅ Programmatic tab control via service
- ✅ Bootstrap 5 events (show.bs.tab, shown.bs.tab, hide.bs.tab, hidden.bs.tab)
- ✅ Disabled tabs support
- ✅ Active tab on initialization
- ✅ Accessible (ARIA attributes)

## Basic Usage

### Simple Tabs

```html
<bs5-tabset>
    <bs5-tab heading="Home" active="true">
        <p>Home tab content...</p>
    </bs5-tab>
    <bs5-tab heading="Profile">
        <p>Profile tab content...</p>
    </bs5-tab>
    <bs5-tab heading="Contact">
        <p>Contact tab content...</p>
    </bs5-tab>
</bs5-tabset>
```

### Pills Style

```html
<bs5-tabset type="pills">
    <bs5-tab heading="Home" active="true">
        <p>Home tab content...</p>
    </bs5-tab>
    <bs5-tab heading="Profile">
        <p>Profile tab content...</p>
    </bs5-tab>
</bs5-tabset>
```

### Underline Style

```html
<bs5-tabset type="underline">
    <bs5-tab heading="Home" active="true">
        <p>Home tab content...</p>
    </bs5-tab>
    <bs5-tab heading="Profile">
        <p>Profile tab content...</p>
    </bs5-tab>
</bs5-tabset>
```

### With Fade Animation

```html
<bs5-tabset fade="true">
    <bs5-tab heading="Home" active="true">
        <p>Home tab content...</p>
    </bs5-tab>
    <bs5-tab heading="Profile">
        <p>Profile tab content...</p>
    </bs5-tab>
</bs5-tabset>
```

### Vertical Tabs

```html
<bs5-tabset vertical="true">
    <bs5-tab heading="Home" active="true">
        <p>Home tab content...</p>
    </bs5-tab>
    <bs5-tab heading="Profile">
        <p>Profile tab content...</p>
    </bs5-tab>
    <bs5-tab heading="Messages">
        <p>Messages tab content...</p>
    </bs5-tab>
</bs5-tabset>
```

### Fill Layout

```html
<bs5-tabset fill="true">
    <bs5-tab heading="Home" active="true">
        <p>Home tab content...</p>
    </bs5-tab>
    <bs5-tab heading="Much Longer Nav Link">
        <p>Profile tab content...</p>
    </bs5-tab>
    <bs5-tab heading="Link">
        <p>Link tab content...</p>
    </bs5-tab>
</bs5-tabset>
```

### Justified Layout

```html
<bs5-tabset justified="true">
    <bs5-tab heading="Home" active="true">
        <p>Home tab content...</p>
    </bs5-tab>
    <bs5-tab heading="Profile">
        <p>Profile tab content...</p>
    </bs5-tab>
    <bs5-tab heading="Contact">
        <p>Contact tab content...</p>
    </bs5-tab>
</bs5-tabset>
```

### Disabled Tabs

```html
<bs5-tabset>
    <bs5-tab heading="Active" active="true">
        <p>Active tab content...</p>
    </bs5-tab>
    <bs5-tab heading="Link">
        <p>Link tab content...</p>
    </bs5-tab>
    <bs5-tab heading="Disabled" disabled="true">
        <p>This content won't be accessible...</p>
    </bs5-tab>
</bs5-tabset>
```

## Programmatic Control

### Using TabsService

```javascript
angular.module('myApp', ['ng1bs5'])
    .controller('MyController', function(TabsService) {

        // Show a specific tab
        TabsService.show('myTabset', 'profile-tab');

        // Get active tab
        const activeTab = TabsService.getActiveTab('myTabset');

        // Get all tabs
        const tabs = TabsService.getTabs('myTabset');

        // Disable a tab
        TabsService.disable('myTabset', 'profile-tab');

        // Enable a tab
        TabsService.enable('myTabset', 'profile-tab');
    });
```

```html
<bs5-tabset tabset-id="myTabset">
    <bs5-tab tab-id="home-tab" heading="Home" active="true">
        <p>Home tab content...</p>
    </bs5-tab>
    <bs5-tab tab-id="profile-tab" heading="Profile">
        <p>Profile tab content...</p>
    </bs5-tab>
    <bs5-tab tab-id="contact-tab" heading="Contact">
        <p>Contact tab content...</p>
    </bs5-tab>
</bs5-tabset>
```

## Events

### Handling Tab Selection

```html
<bs5-tabset on-select="handleTabSelect(tab, previousTab)">
    <bs5-tab heading="Home" active="true">
        <p>Home tab content...</p>
    </bs5-tab>
    <bs5-tab heading="Profile">
        <p>Profile tab content...</p>
    </bs5-tab>
</bs5-tabset>
```

```javascript
angular.module('myApp', ['ng1bs5'])
    .controller('MyController', function($scope) {
        $scope.handleTabSelect = function(tab, previousTab) {
            console.log('Selected tab:', tab.heading);
            console.log('Previous tab:', previousTab ? previousTab.heading : 'none');
        };
    });
```

### Bootstrap 5 Native Events

You can also listen to native Bootstrap 5 tab events:

```javascript
angular.module('myApp', ['ng1bs5'])
    .controller('MyController', function($element) {
        const button = $element[0].querySelector('[data-bs-toggle="tab"]');

        // Event fires on tab show, but before the new tab has been shown
        button.addEventListener('show.bs.tab', function(event) {
            console.log('About to show:', event.target);
            console.log('Previously active:', event.detail.relatedTarget);
        });

        // Event fires after a tab has been shown
        button.addEventListener('shown.bs.tab', function(event) {
            console.log('Shown:', event.target);
            console.log('Previously active:', event.detail.relatedTarget);
        });

        // Event fires when a new tab is to be shown (previous tab is to be hidden)
        button.addEventListener('hide.bs.tab', function(event) {
            console.log('About to hide:', event.target);
            console.log('Next active:', event.detail.relatedTarget);
        });

        // Event fires after a new tab is shown (previous tab is hidden)
        button.addEventListener('hidden.bs.tab', function(event) {
            console.log('Hidden:', event.target);
            console.log('Now active:', event.detail.relatedTarget);
        });
    });
```

## Keyboard Navigation

The tabs component supports keyboard navigation:

- **Arrow Left/Up**: Navigate to previous tab
- **Arrow Right/Down**: Navigate to next tab

Keyboard navigation automatically skips disabled tabs and wraps around at the ends.

## API Reference

### Bs5Tabset Directive

#### Bindings

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `tabset-id` | string | - | Unique identifier for the tabset (required for programmatic control) |
| `type` | string | `'tabs'` | Tab style: `'tabs'`, `'pills'`, or `'underline'` |
| `vertical` | boolean/string | `false` | Display tabs vertically |
| `justified` | boolean/string | `false` | Make tabs equal width |
| `fill` | boolean/string | `false` | Make tabs fill available space proportionally |
| `fade` | boolean/string | `false` | Enable fade animation when switching tabs |
| `on-select` | function | - | Callback function when a tab is selected |

### Bs5Tab Directive

#### Bindings

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `tab-id` | string | - | Unique identifier for the tab (required for programmatic control) |
| `heading` | string | - | Tab heading text |
| `active` | boolean/string | `false` | Set this tab as active on initialization |
| `disabled` | boolean/string | `false` | Disable the tab |

### TabsService Methods

#### `register(id, controller)`
Register a tabset controller (called automatically).

#### `unregister(id)`
Unregister a tabset controller (called automatically).

#### `show(tabsetId, tabId)`
Show a specific tab in a tabset.

```javascript
TabsService.show('myTabset', 'profile-tab');
```

#### `getActiveTab(tabsetId)`
Get the currently active tab in a tabset.

```javascript
const activeTab = TabsService.getActiveTab('myTabset');
console.log(activeTab.heading); // "Profile"
```

#### `getTabs(tabsetId)`
Get all tabs in a tabset.

```javascript
const tabs = TabsService.getTabs('myTabset');
console.log(tabs.length); // 3
```

#### `disable(tabsetId, tabId)`
Disable a specific tab.

```javascript
TabsService.disable('myTabset', 'profile-tab');
```

#### `enable(tabsetId, tabId)`
Enable a specific tab.

```javascript
TabsService.enable('myTabset', 'profile-tab');
```

## Advanced Examples

### Dynamic Tabs

```html
<div ng-controller="TabsController">
    <bs5-tabset tabset-id="dynamicTabs">
        <bs5-tab
                ng-repeat="tab in tabs track by tab.id"
                tab-id="{{tab.id}}"
                heading="{{tab.title}}"
                active="{{$first}}">
            <p>{{tab.content}}</p>
        </bs5-tab>
    </bs5-tabset>

    <button ng-click="addTab()">Add Tab</button>
</div>
```

```javascript
angular.module('myApp', ['ng1bs5'])
    .controller('TabsController', function($scope) {
        $scope.tabs = [
            { id: 'tab1', title: 'Tab 1', content: 'Content 1' },
            { id: 'tab2', title: 'Tab 2', content: 'Content 2' }
        ];

        let counter = 3;
        $scope.addTab = function() {
            $scope.tabs.push({
                id: 'tab' + counter,
                title: 'Tab ' + counter,
                content: 'Content ' + counter
            });
            counter++;
        };
    });
```

### Complex Content

```html
<bs5-tabset type="pills" fade="true">
    <bs5-tab heading="Dashboard" active="true">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">Dashboard Content</h5>
                <p class="card-text">Complex dashboard with charts and data...</p>
            </div>
        </div>
    </bs5-tab>

    <bs5-tab heading="Form">
        <form>
            <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="email" class="form-control">
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </bs5-tab>
</bs5-tabset>
```

## Styling

The component uses Bootstrap 5's native CSS classes. You can customize the appearance using Bootstrap's CSS variables or by overriding the classes:

```css
/* Custom tab styling */
.nav-tabs .nav-link {
    color: #6c757d;
}

.nav-tabs .nav-link.active {
    color: #0d6efd;
    border-color: #0d6efd;
}

/* Custom pill styling */
.nav-pills .nav-link.active {
    background-color: #198754;
}
```

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

## Dependencies

- AngularJS 1.x
- Bootstrap 5 CSS

## License

MIT