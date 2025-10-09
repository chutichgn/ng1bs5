# ng1bs5 Demo App Update - Integration Guide

## 🎉 What We've Built

We've completely updated your ng1bs5 demo application with:

1. **Tabs Component Integration** - Using the component we just developed
2. **UI-Router Integration** - State-based routing for each component demo
3. **Portal Architecture** - Clean, organized component showcase
4. **Bidirectional Sync** - Tabs ↔ Routes work seamlessly together

## 📦 Deliverables

### Core Files

1. **app.js** - Updated with UI-Router configuration and tab/state synchronization
2. **index.html** - Redesigned using `<bs5-tabset>` component
3. **webpack.config.js** - Webpack configuration for building the demo
4. **package.json** - Updated dependencies including UI-Router
5. **.babelrc** - Babel configuration for ES6 transpilation

### Component Demo Views (in views/ folder)

- **tabs-demo.html** - Comprehensive tabs component examples
- **modal-demo.html** - Modal component examples
- **popover-demo.html** - Popover component examples  
- **tooltip-demo.html** - Tooltip component examples
- **accordion-demo.html** - Accordion component examples
- **dropdown-demo.html** - Dropdown component placeholder
- **collapse-demo.html** - Collapse component placeholder
- **alert-demo.html** - Alert component placeholder
- **offcanvas-demo.html** - Offcanvas component placeholder
- **toast-demo.html** - Toast component placeholder
- **pagination-demo.html** - Pagination component placeholder
- **progressbar-demo.html** - Progressbar component placeholder

### Documentation

- **DEMO-README.md** - Comprehensive documentation for the demo app
- **INSTALL.md** - Quick installation guide
- **DOWNLOAD.md** - File listing and download instructions

## 🚀 Quick Start

### Step 1: Copy Files to Your Project

```bash
# Copy all files to your es6-demo directory
cp app.js /path/to/ng1bs5/src/es6-demo/
cp index.html /path/to/ng1bs5/src/es6-demo/
cp webpack.config.js /path/to/ng1bs5/src/es6-demo/
cp package.json /path/to/ng1bs5/src/es6-demo/
cp .babelrc /path/to/ng1bs5/src/es6-demo/

# Copy views folder
cp -r views/ /path/to/ng1bs5/src/es6-demo/
```

### Step 2: Install Dependencies

```bash
cd /path/to/ng1bs5/src/es6-demo/
npm install
```

This installs:
- `@uirouter/angularjs` - For state-based routing
- `angular` - AngularJS framework
- `bootstrap` - Bootstrap 5 CSS
- Webpack and Babel tooling

### Step 3: Run the Demo

```bash
npm run dev
```

The demo will open at `http://localhost:8080`

## 🏗️ Architecture Overview

### How It Works

```
┌─────────────────────────────────────────────────┐
│              Browser URL Bar                    │
│              /tabs, /modal, etc.                │
└────────────────┬────────────────────────────────┘
                 │
                 ↓
┌─────────────────────────────────────────────────┐
│              UI-Router States                   │
│  Each component demo has its own state          │
└────────────────┬────────────────────────────────┘
                 │
                 ↓
┌─────────────────────────────────────────────────┐
│            <bs5-tabset> Component               │
│  ┌────────┬────────┬────────┬────────┐         │
│  │ Tabs   │ Modal  │Popover │Tooltip │ ...     │
│  └────────┴────────┴────────┴────────┘         │
│  ┌────────────────────────────────────┐        │
│  │      <div ui-view></div>           │        │
│  │  (State content loads here)        │        │
│  └────────────────────────────────────┘        │
└─────────────────────────────────────────────────┘
                 │
                 ↓
┌─────────────────────────────────────────────────┐
│           View Templates                        │
│  views/tabs-demo.html                          │
│  views/modal-demo.html                         │
│  etc.                                           │
└─────────────────────────────────────────────────┘
```

### Key Interactions

1. **User clicks a tab**
   - Tab's `onSelect` callback fires
   - Extracts state name from `tab-id`
   - Calls `$state.go(stateName)`
   - UI-Router loads the view
   - Content appears in tab

2. **User navigates to URL directly**
   - UI-Router activates state
   - State transition listener fires
   - `TabsService.show()` activates corresponding tab
   - Tab highlights and content displays

3. **Browser back/forward**
   - UI-Router handles navigation
   - Tabs stay synchronized
   - Correct content displays

## 🔧 Configuration Details

### UI-Router States (in app.js)

Each component demo is configured as a state:

```javascript
$stateProvider
    .state('tabs', {
        url: '/tabs',                              // URL path
        template: '<div ng-include="\'views/tabs-demo.html\'"></div>',
        data: {
            displayName: 'Tabs',                   // Display name
            description: 'Bootstrap 5 tabs component'  // Description
        }
    })
```

### Tab Configuration (in index.html)

Each tab corresponds to a state:

```html
<bs5-tab 
    tab-id="tabs-tab"           <!-- State name + '-tab' -->
    heading="Tabs">             <!-- Display text -->
    <div ui-view></div>         <!-- State content loads here -->
</bs5-tab>
```

**Important:** The `tab-id` must match the state name with "-tab" suffix.

Example:
- State name: `tabs` → Tab ID: `tabs-tab`
- State name: `modal` → Tab ID: `modal-tab`

### Synchronization Logic (in app.js)

```javascript
// Listen for tab selection
$scope.onTabSelect = function(tab) {
    const stateName = tab.tabId.replace('-tab', '');
    $state.go(stateName);
};

// Listen for state changes
$transitions.onSuccess({}, function(transition) {
    $scope.currentState = transition.to().name;
    const tabId = transition.to().name + '-tab';
    TabsService.show('demoTabset', tabId);
});
```

## 📝 Customization Guide

### Adding a New Component Demo

#### 1. Create the View File

Create `views/my-component-demo.html`:

```html
<div class="demo-content">
    <div class="alert alert-info">
        <h5>My Component</h5>
        <p class="mb-0">Component description here.</p>
    </div>

    <div class="card">
        <div class="card-header bg-primary text-white">
            <h5 class="mb-0">Example 1</h5>
        </div>
        <div class="card-body">
            <!-- Your demo content -->
        </div>
    </div>

    <div class="card">
        <div class="card-header bg-dark text-white">
            <h5 class="mb-0">Code</h5>
        </div>
        <div class="card-body">
            <div class="code-example">
                <pre><code><!-- Your code example --></code></pre>
            </div>
        </div>
    </div>
</div>
```

#### 2. Add State Definition

In `app.js`, add to `$stateProvider`:

```javascript
.state('myComponent', {
    url: '/my-component',
    template: '<div ng-include="\'views/my-component-demo.html\'"></div>',
    data: {
        displayName: 'My Component',
        description: 'Description of my component'
    }
})
```

#### 3. Add Tab

In `index.html`, inside `<bs5-tabset>`:

```html
<bs5-tab 
    tab-id="myComponent-tab" 
    heading="My Component">
    <div ui-view></div>
</bs5-tab>
```

#### 4. Test

```bash
npm run dev
```

Navigate to `http://localhost:8080/my-component` or click the tab.

### Changing Tab Styles

Modify the `<bs5-tabset>` in `index.html`:

```html
<!-- Pills style -->
<bs5-tabset tabset-id="demoTabset" type="pills" fade="true">

<!-- Underline style -->
<bs5-tabset tabset-id="demoTabset" type="underline" fade="true">

<!-- Vertical tabs -->
<bs5-tabset tabset-id="demoTabset" vertical="true" type="pills">

<!-- Justified tabs -->
<bs5-tabset tabset-id="demoTabset" justified="true">
```

### Custom Styling

Add custom CSS in `index.html` `<style>` section:

```css
/* Custom tab colors */
.nav-tabs {
    border-bottom: 2px solid #your-color;
}

.nav-tabs .nav-link.active {
    color: #your-color;
    border-bottom-color: #your-color;
}

/* Custom card styles */
.card-header {
    background: linear-gradient(135deg, #color1, #color2);
}
```

## 🎨 Features Showcase

### 1. Deep Linking

Users can bookmark or share direct links to specific components:
- `http://localhost:8080/tabs`
- `http://localhost:8080/modal`
- `http://localhost:8080/popover`

### 2. Browser Navigation

Back and forward buttons work correctly:
- Click Modal tab → Browser URL: /modal
- Click Tabs tab → Browser URL: /tabs
- Press Back → Returns to /modal
- Tab automatically switches back to Modal

### 3. Programmatic Navigation

You can navigate programmatically:

```javascript
// In your controller
$scope.goToModal = function() {
    $state.go('modal');
};

// Or using TabsService
TabsService.show('demoTabset', 'modal-tab');
```

### 4. State Data Access

Access current state information:

```javascript
// Get current state
const currentState = $state.current.name;

// Get state data
const stateData = $state.current.data;
console.log(stateData.displayName); // "Modal"
console.log(stateData.description); // "Dialog boxes..."

// Check if state is active
const isActive = $state.is('modal');
```

## 🐛 Troubleshooting

### Issue: Tabs and routes not syncing

**Symptoms:**
- Clicking tab doesn't change URL
- URL change doesn't switch tabs

**Solutions:**
1. Verify `tab-id` format: `{stateName}-tab`
2. Check `tabset-id="demoTabset"` is set
3. Ensure `onSelect="onTabSelect(tab)"` is present
4. Verify state names match in app.js

### Issue: Views not loading

**Symptoms:**
- Blank content when switching tabs
- Console errors about missing files

**Solutions:**
1. Check view files exist in `views/` folder
2. Verify file paths in state templates
3. Check for typos in ng-include paths
4. Look for JavaScript errors in console

### Issue: UI-Router not working

**Symptoms:**
- Routes don't work at all
- 404 errors on navigation

**Solutions:**
1. Verify `@uirouter/angularjs` is installed: `npm list @uirouter/angularjs`
2. Check import in app.js: `import uiRouter from '@uirouter/angularjs'`
3. Ensure it's in module deps: `angular.module('app', [uiRouter, ...])`
4. Check webpack devServer has `historyApiFallback: true`

### Issue: Webpack build errors

**Symptoms:**
- Build fails
- Module not found errors

**Solutions:**
1. Delete node_modules and reinstall: `rm -rf node_modules && npm install`
2. Clear webpack cache: `rm -rf node_modules/.cache`
3. Check webpack.config.js for correct paths
4. Verify all dependencies are in package.json

## 📊 Performance Considerations

### Lazy Loading

Views are loaded on-demand:
- Only active tab's content is rendered
- Other views load when tabs are clicked
- Reduces initial load time

### Code Splitting

Webpack splits code into chunks:
- `vendors.js` - Third-party libraries (Angular, UI-Router, Bootstrap)
- `ng1bs5.js` - ng1bs5 components
- `bundle.js` - Application code

### Optimization Tips

1. **Use production mode:** `npm run build`
2. **Enable gzip compression** on your server
3. **Use CDN for Bootstrap CSS**
4. **Lazy load heavy components**
5. **Implement route guards** for authentication

## 🔗 Important Links

- **ng1bs5 GitHub:** https://github.com/chutichgn/ng1bs5
- **UI-Router Guide:** https://ui-router.github.io/guide/ng1/
- **UI-Router API:** https://ui-router.github.io/ng1/docs/latest/
- **Bootstrap 5 Docs:** https://getbootstrap.com/docs/5.0/
- **Webpack Docs:** https://webpack.js.org/

## 📚 Additional Resources

### Tabs Component Docs

See `src/components/tabs/README.md` for complete documentation on:
- All attributes and options
- Programmatic control
- Events and callbacks
- Advanced examples

### UI-Router Concepts

Key concepts to understand:
- **States:** Named application states with URL
- **Views:** Templates/controllers for states
- **Transitions:** Moving between states
- **Resolve:** Pre-loading data before state activation
- **Parameters:** Passing data in URLs

## ✅ Checklist

Before deploying, ensure:

- [ ] All dependencies installed (`npm install`)
- [ ] Demo runs successfully (`npm run dev`)
- [ ] All tabs are accessible
- [ ] Routes work correctly
- [ ] Browser back/forward work
- [ ] Deep links work
- [ ] No console errors
- [ ] Views load properly
- [ ] Animations are smooth
- [ ] Mobile responsive

## 🎓 Learning Path

To fully understand the demo:

1. **Start with app.js**
   - Understand state configuration
   - See how synchronization works
   - Learn the controller logic

2. **Examine index.html**
   - See how tabs are structured
   - Understand ui-view placement
   - Review the layout

3. **Look at view files**
   - See the demo patterns
   - Learn the structure
   - Understand the styling

4. **Experiment**
   - Add a new component demo
   - Try different tab styles
   - Modify the synchronization
   - Add new features

## 🤝 Support

If you have questions:

1. Check DEMO-README.md for detailed documentation
2. Review this integration guide
3. Look at the code comments
4. Check UI-Router documentation
5. Open an issue on GitHub

## 🎉 What's Next?

Consider adding:

1. **Animation Effects**
   - Slide transitions
   - Fade effects
   - Custom animations

2. **State Parameters**
   - Pass data between states
   - Query parameters
   - Optional parameters

3. **Route Guards**
   - Authentication checks
   - Authorization rules
   - Data validation

4. **Advanced Features**
   - Nested states
   - Abstract states
   - Multiple named views
   - State inheritance

5. **More Component Demos**
   - Complete all placeholder demos
   - Add advanced examples
   - Include best practices

---

**You now have a modern, maintainable component portal powered by ng1bs5 tabs and UI-Router!** 🚀
