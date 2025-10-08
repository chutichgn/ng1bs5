# ng1bs5 Demos - Quick Reference Guide

## 🚀 5-Minute Setup

### HTML Demo (No Build Tools)

```bash
# 1. Copy html-demo folder to your project root
# 2. Ensure dist/ng1bs5.js exists
# 3. Open in browser
open html-demo/index.html
```

### ES6 Demo (With Build Tools)

```bash
# 1. Copy es6-demo folder to your project root
cd es6-demo

# 2. Install dependencies
npm install

# 3. Start dev server
npm run dev

# 4. Build for production
npm run build
```

## 📁 Where to Place Files

```
your-ng1bs5-project/
├── components/           # Your ng1bs5 components
├── dist/
│   └── ng1bs5.js        # Must exist for html-demo
├── html-demo/           # ← Copy here
└── es6-demo/            # ← Copy here
```

## 🔧 Quick Configuration

### HTML Demo - Update Module Names

```javascript
// In each *-demo.html file
angular.module('demoApp', ['ng1bs5.COMPONENT_NAME']);
```

### ES6 Demo - Update Imports

```javascript
// In src/app.js
import { ModalModule } from '@ng1bs5/modal';
import { PopoverModule } from '@ng1bs5/popover';
// Add your other components

angular.module('ng1bs5Demo', [
  ModalModule.name,
  PopoverModule.name,
  // Add your other modules
]);
```

## 📝 Available Components

Both demos include examples for:

| Component | Description |
|-----------|-------------|
| Modal | Dialog boxes and popups |
| Popover | Contextual overlays |
| Tooltip | Hover hints |
| Dropdown | Toggleable menus |
| Accordion | Collapsible panels |
| Collapse | Show/hide content |
| Offcanvas | Sidebar panels |
| Toast | Notifications |
| Alert | Feedback messages |

## 🎯 Component Usage

### HTML Syntax (Both Demos)

**Modal:**
```html
<button data-bs-toggle="modal" data-bs-target="#myModal">Open</button>
<div class="modal fade" id="myModal">...</div>
```

**Popover:**
```html
<button bs-popover 
        data-bs-title="Title" 
        data-bs-content="Content">
  Click me
</button>
```

**Tooltip:**
```html
<button bs-tooltip 
        data-bs-title="Tooltip text">
  Hover me
</button>
```

**Dropdown:**
```html
<div class="dropdown">
  <button class="dropdown-toggle" data-bs-toggle="dropdown">Menu</button>
  <ul class="dropdown-menu">
    <li><a class="dropdown-item" href="#">Item</a></li>
  </ul>
</div>
```

**Accordion:**
```html
<div class="accordion" id="acc">
  <div class="accordion-item">
    <h2 class="accordion-header">
      <button class="accordion-button" data-bs-toggle="collapse" 
              data-bs-target="#item1">Title</button>
    </h2>
    <div id="item1" class="accordion-collapse collapse show">
      <div class="accordion-body">Content</div>
    </div>
  </div>
</div>
```

## 🔍 Common Issues & Fixes

### HTML Demo Issues

❌ **"ng1bs5 is not defined"**
```bash
# Fix: Ensure dist/ng1bs5.js exists
# Or update the script src path in HTML files
```

❌ **"Module 'ng1bs5.modal' not available"**
```javascript
// Fix: Check module name matches your component export
angular.module('app', ['ng1bs5.modal']); // Correct format
```

❌ **Components not responding**
```html
<!-- Fix: Ensure Bootstrap JS is loaded -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
```

### ES6 Demo Issues

❌ **"Cannot resolve '@ng1bs5/modal'"**
```javascript
// Fix: Update webpack.config.js alias
resolve: {
  alias: {
    '@ng1bs5': path.resolve(__dirname, '../components')
  }
}
```

❌ **Build errors**
```bash
# Fix: Clean install
rm -rf node_modules package-lock.json
npm install
```

❌ **Module not found after import**
```javascript
// Fix: Check export format in your component
// Ensure your component exports a module:
export default angular.module('componentName', []);

// Or export as named:
export const ComponentModule = angular.module('componentName', []);
```

## 📚 Key Files to Edit

### HTML Demo
- `html-demo/index.html` - Add links to new demos
- `html-demo/*-demo.html` - Individual component demos
- Update `angular.module('app', ['ng1bs5.YOUR_COMPONENT'])`

### ES6 Demo
- `es6-demo/src/app.js` - Add component imports
- `es6-demo/src/index.html` - Add component markup
- `es6-demo/src/components/` - Create component examples
- `es6-demo/webpack.config.js` - Configure aliases

## 🎨 Customization Checklist

### HTML Demo
- [ ] Update CDN links if needed
- [ ] Update path to `dist/ng1bs5.js`
- [ ] Add your module names
- [ ] Customize styling
- [ ] Add new component demos

### ES6 Demo
- [ ] Update webpack alias to point to components
- [ ] Import your component modules
- [ ] Add modules to main app
- [ ] Create component examples
- [ ] Update HTML template

## 💻 Development Commands

### HTML Demo
```bash
# No build needed! Just open:
open html-demo/index.html

# Or serve locally:
python -m http.server 8000
# OR
npx http-server html-demo -p 8000
```

### ES6 Demo
```bash
# Development
npm run dev          # Start dev server on port 9000

# Production
npm run build        # Build to ../dist/es6-demo/

# Watch mode
npm run watch        # Build and watch for changes
```

## 🌐 Browser Support

Both demos support:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Modern mobile browsers

## 📦 Dependencies

### HTML Demo
- AngularJS 1.8.3 (CDN)
- Bootstrap 5.0.2 (CDN)
- Your ng1bs5 library

### ES6 Demo
- AngularJS 1.8.3 (npm)
- Bootstrap 5.3.2 (npm)
- Webpack 5
- Babel 7
- Your ng1bs5 components

## 🎯 Quick Testing

### Test HTML Demo
```bash
# 1. Open html-demo/index.html
# 2. Click a component link
# 3. Try the interactive examples
# 4. Check browser console for errors
```

### Test ES6 Demo
```bash
cd es6-demo
npm install
npm run dev
# 1. Browser opens to http://localhost:9000
# 2. Click through component tabs
# 3. Check for hot reload (edit a file)
# 4. Build: npm run build
```

## 📖 Documentation Links

- [HTML Demo README](html-demo/README.md) - Full HTML demo docs
- [ES6 Demo README](es6-demo/README.md) - Full ES6 demo docs
- [Main Demo README](DEMOS_README.md) - Overview of both
- [Bootstrap 5 Docs](https://getbootstrap.com/docs/5.0/) - Bootstrap reference
- [AngularJS Guide](https://docs.angularjs.org/guide) - AngularJS reference

## 🚨 Important Notes

1. **HTML demos require** `dist/ng1bs5.js` to exist
2. **ES6 demos import** components directly from source
3. **Module names** must match your component exports
4. **Bootstrap JS** is required for interactive components
5. **Use local server** for HTML demos to avoid CORS issues

## ✅ Success Checklist

- [ ] Demos copied to project root
- [ ] Dependencies installed (ES6 only)
- [ ] Module names updated
- [ ] Import paths configured (ES6 only)
- [ ] HTML demos open in browser
- [ ] ES6 dev server running
- [ ] Components working as expected
- [ ] No console errors
- [ ] Production build successful (ES6 only)

---

**Need more help?** Check the detailed README files in each demo folder!
