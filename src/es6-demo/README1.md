# ng1bs5 Demo Application

> **Bootstrap 5 Components for AngularJS with Tabs Component & UI-Router Integration**

This demo application showcases all ng1bs5 components in a portal-like interface using our newly developed **Tabs Component** integrated with **UI-Router** for state management.

## 🎯 What's New

### ✨ Features Added

1. **Tabs Component Integration**
   - Uses the `<bs5-tabset>` component we just developed
   - Each component demo is in its own tab
   - Smooth fade animations between tabs
   - Professional portal-like interface

2. **UI-Router Integration**
   - Each component demo has its own route/state
   - Deep linking support (shareable URLs)
   - Browser back/forward navigation works
   - States synchronized with tabs

3. **Bidirectional Synchronization**
   - Clicking a tab → Changes the route
   - Navigating to a route → Activates the corresponding tab
   - Direct state links work seamlessly

4. **Component Portal Architecture**
   - Clean, organized component showcase
   - Each component in its own view file
   - Easy to add new component demos
   - Modular and maintainable structure

## 🏗️ Architecture

```
Demo App Architecture:
┌─────────────────────────────────────┐
│          Main Container             │
│  ┌──────────────────────────────┐  │
│  │   <bs5-tabset>               │  │
│  │   ┌───────────────────────┐  │  │
│  │   │  Tab 1: Tabs Demo     │  │  │ ← State: /tabs
│  │   │  <div ui-view>        │  │  │
│  │   │    [tabs-demo.html]   │  │  │
│  │   └───────────────────────┘  │  │
│  │   ┌───────────────────────┐  │  │
│  │   │  Tab 2: Modal Demo    │  │  │ ← State: /modal
│  │   │  <div ui-view>        │  │  │
│  │   │    [modal-demo.html]  │  │  │
│  │   └───────────────────────┘  │  │
│  │   ... more tabs ...          │  │
│  └──────────────────────────────┘  │
└─────────────────────────────────────┘
```

### Key Components

1. **app.js**
   - UI-Router configuration
   - State definitions for each component
   - Tab/state synchronization logic
   - Application controller

2. **index.html**
   - Main layout with `<bs5-tabset>`
   - Each tab contains `<div ui-view></div>`
   - State indicator
   - Navigation helpers

3. **views/*.html**
   - Individual component demos
   - Each file is a separate UI-Router view
   - Loaded on-demand when tab/state is activated

## 📦 Installation

### Prerequisites

```bash
# Ensure you have Node.js installed
node --version  # Should be >= 14.x
npm --version   # Should be >= 6.x
```

### Setup

```bash
# 1. Navigate to the demo directory
cd src/es6-demo

# 2. Install dependencies
npm install

# 3. Install UI-Router
npm install @uirouter/angularjs

# 4. Run development server
npm run dev
```

The demo will open in your browser at `http://localhost:8080`

## 🚀 Usage

### Development Mode

```bash
npm run dev
```

Starts a development server with:
- Hot module replacement
- Auto-refresh on file changes
- Source maps for debugging

### Build for Production

```bash
npm run build
```

Creates optimized bundles in the `dist/` folder.

### Watch Mode

```bash
npm run watch
```

Watches for file changes and rebuilds automatically.

## 📂 Project Structure

```
es6-demo/
├── app.js                    # Main app with UI-Router config
├── index.html                # Main HTML with tabs component
├── package.json              # Dependencies and scripts
├── webpack.config.js         # Webpack configuration
├── views/                    # Component demo views
│   ├── tabs-demo.html        # Tabs component examples
│   ├── modal-demo.html       # Modal examples
│   ├── popover-demo.html     # Popover examples
│   ├── tooltip-demo.html     # Tooltip examples
│   ├── accordion-demo.html   # Accordion examples
│   ├── dropdown-demo.html    # Dropdown examples
│   ├── collapse-demo.html    # Collapse examples
│   ├── alert-demo.html       # Alert examples
│   ├── offcanvas-demo.html   # Offcanvas examples
│   ├── toast-demo.html       # Toast examples
│   ├── pagination-demo.html  # Pagination examples
│   └── progressbar-demo.html # Progressbar examples
└── components/               # Component example modules (if any)
```

## 🔧 Configuration

### Adding a New Component Demo

1. **Create the view file:**
   ```bash
   touch views/my-component-demo.html
   ```

2. **Add content to the view:**
   ```html
   <div class="demo-content">
       <h3>My Component</h3>
       <!-- Your demo content -->
   </div>
   ```

3. **Add a state in app.js:**
   ```javascript
   .state('myComponent', {
       url: '/my-component',
       template: '<div ng-include="\'views/my-component-demo.html\'"></div>',
       data: {
           displayName: 'My Component',
           description: 'Component description'
       }
   })
   ```

4. **Add a tab in index.html:**
   ```html
   <bs5-tab tab-id="myComponent-tab" heading="My Component">
       <div ui-view></div>
   </bs5-tab>
   ```

### UI-Router State Configuration

States are configured in `app.js`:

```javascript
$stateProvider
    .state('tabs', {
        url: '/tabs',
        template: '<div ng-include="\'views/tabs-demo.html\'"></div>',
        data: {
            displayName: 'Tabs',
            description: 'Bootstrap 5 tabs component'
        }
    })
    // ... more states
```

Each state:
- Has a unique URL for deep linking
- Loads its own view template
- Contains metadata (displayName, description)
- Syncs with the corresponding tab

## 💡 How It Works

### Tab ↔ State Synchronization

**When you click a tab:**
```
1. Tab selection triggers onSelect callback
2. Callback extracts state name from tab-id
3. $state.go() navigates to that state
4. UI-Router loads the appropriate view
```

**When you navigate to a URL:**
```
1. UI-Router activates the state
2. State transition listener fires
3. TabsService.show() activates corresponding tab
4. Tab content displays the view
```

### Example Flow

```
User clicks "Modal" tab
  ↓
onTabSelect(tab) called
  ↓
Extract state: "modal" from tab-id "modal-tab"
  ↓
$state.go('modal')
  ↓
URL changes to /modal
  ↓
UI-Router loads views/modal-demo.html
  ↓
Content displays in the tab
```

## 🎨 Customization

### Styling

Edit the `<style>` section in `index.html` or create a separate CSS file:

```css
/* Custom tab colors */
.nav-tabs .nav-link.active {
    color: #your-color;
    border-bottom-color: #your-color;
}

/* Custom animations */
.tab-content {
    animation: fadeIn 0.5s ease-in-out;
}
```

### Adding Bootstrap Icons

The demo uses Bootstrap Icons. To add them:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.0/font/bootstrap-icons.css">
```

## 📖 Key Files Explained

### app.js

**Purpose:** Application entry point and configuration

**Key Sections:**
- **Imports:** AngularJS, UI-Router, ng1bs5, Bootstrap CSS
- **Module Definition:** Creates 'ng1bs5Demo' module
- **UI-Router Config:** Defines all states and routes
- **Controller:** Handles tab/state synchronization
- **Run Block:** Initializes the app

### index.html

**Purpose:** Main application layout

**Key Sections:**
- **Header:** Branding and info
- **Tabs Component:** Portal interface with `<bs5-tabset>`
- **State Indicator:** Shows current active state
- **Footer:** Links and credits

### views/*.html

**Purpose:** Individual component demonstrations

**Structure:**
```html
<div class="demo-content">
    <div class="alert alert-info">
        <!-- Component description -->
    </div>
    
    <div class="card">
        <!-- Examples and demos -->
    </div>
    
    <div class="card">
        <!-- Code samples -->
    </div>
</div>
```

## 🐛 Troubleshooting

### Tabs not syncing with routes

**Problem:** Clicking tabs doesn't change the URL or vice versa.

**Solution:**
1. Check that `tab-id` matches the state name + "-tab"
2. Ensure `tabset-id="demoTabset"` is set
3. Verify `onSelect` callback is wired correctly

### Views not loading

**Problem:** Content doesn't appear when navigating.

**Solution:**
1. Check that view files exist in `views/` folder
2. Verify file paths in state definitions
3. Check browser console for errors

### UI-Router not working

**Problem:** Routes don't work at all.

**Solution:**
1. Ensure `@uirouter/angularjs` is installed
2. Check that it's imported in `app.js`
3. Verify it's in the module dependencies array

## 🔗 Links

- **ng1bs5 GitHub:** https://github.com/chutichgn/ng1bs5
- **UI-Router Docs:** https://ui-router.github.io/ng1/
- **Bootstrap 5 Docs:** https://getbootstrap.com/docs/5.0/
- **AngularJS Guide:** https://docs.angularjs.org/guide

## 🎓 Learning Resources

### Understanding the Tabs Component

See `src/components/tabs/README.md` for:
- Complete API documentation
- Usage examples
- Programmatic control
- Event handling

### Understanding UI-Router

Key concepts:
- **States:** Named routes with configuration
- **Views:** Templates loaded for each state
- **Transitions:** Navigating between states
- **Parameters:** Passing data between states

## 📝 Notes

### Why Tabs + UI-Router?

**Benefits:**
1. **Deep Linking:** Each component has its own URL
2. **Browser Navigation:** Back/forward buttons work
3. **Bookmarkable:** Users can bookmark specific components
4. **Organized:** Clean separation of concerns
5. **Scalable:** Easy to add new components

### Performance

- Views are loaded on-demand (not all at once)
- Webpack code-splitting for optimal bundle size
- Lazy loading of component demos
- Smooth transitions with CSS animations

## 🤝 Contributing

To add a new component demo:

1. Create view file in `views/`
2. Add state definition in `app.js`
3. Add tab in `index.html`
4. Test the integration
5. Submit a pull request

## 📄 License

MIT License - see LICENSE file for details

---

**Built with ❤️ using ng1bs5, UI-Router, and Bootstrap 5**
