# ng1bs5 Demos - Updated for Your Project Structure

This package contains the updated demo files for your ng1bs5 library, with the following important corrections:

## 🔧 Key Changes Made

### 1. HTML Demos Now Use ng1bs5.js (NOT Bootstrap JS)

**All HTML demos have been updated to:**
- ✅ Use `../dist/ng1bs5.js` instead of `bootstrap.bundle.min.js`
- ✅ Include clear warnings that both should NOT be used together
- ✅ Use ng1bs5 directives like `bs-popover` and `bs-tooltip`

### 2. ES6 Demo Updated for New Project Structure

**The ES6 demo has been updated to:**
- ✅ Import from `../src/components/` (not `../components/`)
- ✅ Webpack alias `@ng1bs5` points to `../src/components/`
- ✅ Use ng1bs5 components, not native Bootstrap JavaScript
- ✅ Emphasize ng1bs5 directives over manual Bootstrap initialization

### 3. Project Structure

Your new project structure is:
```
ng1bs5/
├── src/
│   ├── components/      # ng1bs5 components (moved here)
│   ├── services/        # Services (moved here)
│   ├── styles/          # Styles (moved here)
│   ├── index.js         # Main entry (moved here)
│   └── module.js        # Module definition (moved here)
├── dist/
│   ├── ng1bs5.js       # Compiled library (includes all Bootstrap JS)
│   └── es6-demo/       # Built ES6 demo (after npm run build)
├── html-demo/          # ← Place standalone demos here
│   ├── index.html
│   └── *-demo.html
└── es6-demo/           # ← Place ES6 demos here
    ├── src/
    ├── webpack.config.js
    └── package.json
```

## 📦 What's Included

### HTML Demos (`html-demo/`)
- **10 files total**: 1 index + 9 component demos
- Each demo uses `../dist/ng1bs5.js` ONLY (no bootstrap.bundle.min.js)
- Components: Modal, Popover, Tooltip, Toast, Dropdown, Accordion, Collapse, Offcanvas, Alert

### ES6 Demos (`es6-demo/`)
- Full Webpack + Babel setup
- Imports from `../src/components/` via `@ng1bs5` alias
- 5 component examples showing ng1bs5 usage
- Tab-based interface demonstrating all components

## 🚀 Installation Instructions

### For HTML Demos:

1. Copy the `html-demo` folder to your project root:
```bash
cp -r html-demo /path/to/your/ng1bs5/
```

2. Make sure `dist/ng1bs5.js` exists

3. Open in browser:
```bash
cd /path/to/your/ng1bs5
open html-demo/index.html
```

### For ES6 Demos:

1. Copy the `es6-demo` folder to your project root:
```bash
cp -r es6-demo /path/to/your/ng1bs5/
```

2. Install dependencies:
```bash
cd /path/to/your/ng1bs5/es6-demo
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
# Output will be in ../dist/es6-demo/
```

## ⚠️ Critical: ng1bs5.js vs Bootstrap JS

### The Problem

Bootstrap 5 has its own JavaScript bundle (`bootstrap.bundle.min.js`) that provides functionality for interactive components like modals, popovers, tooltips, etc.

ng1bs5 **wraps** this functionality with AngularJS directives and includes it in the compiled library.

### The Solution

**Never use both together!**

#### ✅ HTML Demos (Correct Way):
```html
<!-- AngularJS -->
<script src="https://cdn.jsdelivr.net/npm/angular@1.8.3/angular.min.js"></script>

<!-- Bootstrap CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- ng1bs5 (includes all Bootstrap JS functionality) -->
<script src="../dist/ng1bs5.js"></script>
```

#### ❌ HTML Demos (Wrong Way):
```html
<script src="../dist/ng1bs5.js"></script>
<script src="bootstrap.bundle.min.js"></script> <!-- DON'T DO THIS! -->
```

#### ✅ ES6 Demos (Correct Way):
```javascript
// Import Bootstrap CSS only
import 'bootstrap/dist/css/bootstrap.min.css';

// Import ng1bs5 components (they include Bootstrap JS functionality)
import ModalModule from '@ng1bs5/modal';
import PopoverModule from '@ng1bs5/popover';
```

#### ❌ ES6 Demos (Wrong Way):
```javascript
import * as bootstrap from 'bootstrap';  // DON'T DO THIS!
import ModalModule from '@ng1bs5/modal';
```

## 🎯 How to Use ng1bs5 Components

### Directives Provided by ng1bs5

ng1bs5 provides AngularJS directives that wrap Bootstrap functionality:

#### Popover
```html
<button bs-popover 
        data-bs-title="Popover Title"
        data-bs-content="Popover content here"
        data-bs-placement="top">
  Click for Popover
</button>
```

#### Tooltip
```html
<button bs-tooltip 
        data-bs-title="Tooltip text"
        data-bs-placement="right">
  Hover for Tooltip
</button>
```

#### Modal
```html
<!-- Trigger -->
<button data-bs-toggle="modal" data-bs-target="#myModal">
  Open Modal
</button>

<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <!-- Modal content here -->
    </div>
  </div>
</div>
```

#### Dropdown
```html
<div class="dropdown">
  <button class="btn dropdown-toggle" data-bs-toggle="dropdown">
    Menu
  </button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Item</a></li>
  </ul>
</div>
```

### Module Imports (ES6)

When using ES6 imports, add ng1bs5 modules to your app:

```javascript
import angular from 'angular';
import ModalModule from '@ng1bs5/modal';
import PopoverModule from '@ng1bs5/popover';
import TooltipModule from '@ng1bs5/tooltip';

const app = angular.module('myApp', [
  ModalModule.name,
  PopoverModule.name,
  TooltipModule.name
]);
```

### Module Dependencies (HTML)

When using standalone HTML, add ng1bs5 modules:

```javascript
angular.module('myApp', [
  'ng1bs5.modal',
  'ng1bs5.popover',
  'ng1bs5.tooltip'
]);
```

## 🔧 Webpack Configuration

The ES6 demo includes a webpack configuration with an alias for easy imports:

```javascript
// webpack.config.js
resolve: {
  alias: {
    // This points to your src/components/ folder
    '@ng1bs5': path.resolve(__dirname, '../src/components')
  }
}
```

This allows you to import like:
```javascript
import ModalModule from '@ng1bs5/modal';
// Instead of:
import ModalModule from '../src/components/modal';
```

**Important:** If your project structure is different, update this path in `webpack.config.js`.

## 📋 Component Checklist

Make sure your ng1bs5 components export modules correctly:

### Example Component Structure (in src/components/modal/):

```javascript
// src/components/modal/index.js
import angular from 'angular';

class ModalDirective {
  constructor() {
    this.restrict = 'A';
    // ... directive logic
  }
}

const ModalModule = angular.module('ng1bs5.modal', [])
  .directive('bsModal', () => new ModalDirective());

export default ModalModule;
// or
export { ModalModule };
```

## 🧪 Testing the Demos

### Test HTML Demos:
```bash
# Method 1: Open directly
open html-demo/index.html

# Method 2: Use local server (recommended)
cd html-demo
python -m http.server 8000
# Open http://localhost:8000
```

### Test ES6 Demos:
```bash
cd es6-demo
npm install
npm run dev
# Opens http://localhost:9000 automatically
```

## 🐛 Troubleshooting

### HTML Demos

**Issue:** "ng1bs5 is not defined"
- **Solution:** Ensure `dist/ng1bs5.js` exists and path is correct

**Issue:** Components not working
- **Solution:** Check browser console for errors
- **Solution:** Verify module names match your exports (e.g., 'ng1bs5.modal')

**Issue:** Conflicts or double initialization
- **Solution:** Remove any `bootstrap.bundle.min.js` script tags

### ES6 Demos

**Issue:** "Cannot resolve '@ng1bs5/modal'"
- **Solution:** Check webpack.config.js alias points to `../src/components/`
- **Solution:** Verify component exists in that location

**Issue:** Build errors
- **Solution:** `rm -rf node_modules package-lock.json && npm install`

**Issue:** Components not rendering
- **Solution:** Check that modules are imported and added to Angular module
- **Solution:** Verify component exports match import statements

## 📚 Documentation Files

- **html-demo/README.md** - Complete HTML demo documentation
- **es6-demo/README.md** - Complete ES6 demo documentation
- **This file** - Overview and setup instructions

## ✅ Quick Checklist

Before using these demos:

- [ ] Copy demo folders to ng1bs5 project root
- [ ] Verify `dist/ng1bs5.js` exists (for HTML demos)
- [ ] Verify `src/components/` exists (for ES6 demos)
- [ ] Update webpack alias if project structure differs
- [ ] Install npm dependencies for ES6 demo
- [ ] Remove any bootstrap.bundle.min.js references
- [ ] Test that components work as expected

## 🎉 You're Ready!

Both demo types are now configured correctly for your project structure:
- HTML demos use `dist/ng1bs5.js` only
- ES6 demos import from `src/components/` 
- No Bootstrap JS conflicts
- ng1bs5 directives properly demonstrated

Choose the demo type that fits your needs and start exploring your ng1bs5 components!

---

**Questions or Issues?**
- Check the README in each demo folder
- Review the code examples in the demo files
- Test with a simple component first before adding complexity
