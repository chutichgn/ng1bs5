# ng1bs5 Demos - Quick Reference Card

## 📁 File Placement

```
your-ng1bs5-project/
├── src/
│   └── components/      # Your ng1bs5 source
├── dist/
│   └── ng1bs5.js       # Compiled library
├── html-demo/          # ← Copy here
└── es6-demo/           # ← Copy here
```

## ⚡ Quick Start

### HTML Demos (30 seconds)
```bash
# Just open!
open html-demo/index.html
```

### ES6 Demos (2 minutes)
```bash
cd es6-demo
npm install
npm run dev
```

## ✅ Correct Script Setup

### HTML Files:
```html
<!-- ✅ CORRECT -->
<script src="https://cdn.jsdelivr.net/npm/angular@1.8.3/angular.min.js"></script>
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="../dist/ng1bs5.js"></script>

<!-- ❌ WRONG - Don't include both! -->
<script src="../dist/ng1bs5.js"></script>
<script src="bootstrap.bundle.min.js"></script>
```

### ES6 Files:
```javascript
// ✅ CORRECT
import 'bootstrap/dist/css/bootstrap.min.css';
import ModalModule from '@ng1bs5/modal';

// ❌ WRONG
import * as bootstrap from 'bootstrap';
import ModalModule from '@ng1bs5/modal';
```

## 🎯 ng1bs5 Directives

| Directive | Usage | Example |
|-----------|-------|---------|
| `bs-popover` | Popovers | `<button bs-popover data-bs-title="Hi">` |
| `bs-tooltip` | Tooltips | `<button bs-tooltip data-bs-title="Hi">` |
| `data-bs-toggle` | Modal, Dropdown | `<button data-bs-toggle="modal">` |
| `data-bs-target` | Target element | `data-bs-target="#myModal">` |
| `data-bs-dismiss` | Close/dismiss | `<button data-bs-dismiss="modal">` |

## 📝 Module Setup

### HTML Demos:
```javascript
angular.module('myApp', [
  'ng1bs5.modal',
  'ng1bs5.popover',
  'ng1bs5.tooltip'
]);
```

### ES6 Demos:
```javascript
import ModalModule from '@ng1bs5/modal';
import PopoverModule from '@ng1bs5/popover';

angular.module('myApp', [
  ModalModule.name,
  PopoverModule.name
]);
```

## 🔧 Webpack Alias

In `es6-demo/webpack.config.js`:
```javascript
resolve: {
  alias: {
    '@ng1bs5': path.resolve(__dirname, '../src/components')
  }
}
```

Update this if your structure is different!

## 🐛 Common Errors & Fixes

| Error | Fix |
|-------|-----|
| "ng1bs5 is not defined" | Check `dist/ng1bs5.js` path |
| "Cannot resolve @ng1bs5" | Update webpack alias |
| Components not working | Remove bootstrap.bundle.min.js |
| Module not available | Check module name format |

## 📦 Build Commands

### ES6 Demo:
```bash
npm run dev      # Development server
npm run build    # Production build
npm run watch    # Watch mode
```

### HTML Demo:
```bash
# No build needed!
python -m http.server 8000  # Optional: local server
```

## 🎨 Component Examples

### Popover:
```html
<button bs-popover 
        data-bs-title="Title"
        data-bs-content="Content"
        data-bs-placement="top">
  Click me
</button>
```

### Modal:
```html
<button data-bs-toggle="modal" data-bs-target="#myModal">
  Open
</button>

<div class="modal fade" id="myModal">
  <div class="modal-dialog">
    <div class="modal-content">
      <!-- Content -->
    </div>
  </div>
</div>
```

### Tooltip:
```html
<button bs-tooltip 
        data-bs-title="Tooltip text"
        data-bs-placement="right">
  Hover me
</button>
```

## 📖 Documentation

- `html-demo/README.md` - HTML demo details
- `es6-demo/README.md` - ES6 demo details
- `UPDATED_DEMOS_README.md` - Full setup guide

## ⚠️ Remember

1. **ng1bs5.js replaces bootstrap.bundle.min.js**
2. **Never use both together**
3. **Use ng1bs5 directives (bs-popover, bs-tooltip)**
4. **Update webpack alias for your structure**

## 🎯 Success Checklist

- [ ] Demos in correct location
- [ ] `dist/ng1bs5.js` exists
- [ ] No bootstrap.bundle.min.js references
- [ ] Webpack alias updated (ES6)
- [ ] npm install complete (ES6)
- [ ] Demos open without errors

---

**Need more help?** Check the detailed README files!
