# ng1bs5 Standalone HTML Demos

This directory contains standalone HTML demos for all ng1bs5 components. These demos can run without any build tools - just open the HTML files in your browser!

## 📁 Structure

```
html-demo/
├── index.html              # Main table of contents
├── accordion-demo.html     # Accordion component demo
├── alert-demo.html         # Alert component demo
├── collapse-demo.html      # Collapse component demo
├── dropdown-demo.html      # Dropdown component demo
├── modal-demo.html         # Modal component demo
├── offcanvas-demo.html     # Offcanvas component demo
├── popover-demo.html       # Popover component demo
├── toast-demo.html         # Toast component demo
└── tooltip-demo.html       # Tooltip component demo
```

## 🚀 Usage

### Option 1: Open Locally
Simply open any HTML file in your web browser:
```bash
# Open the index (table of contents)
open html-demo/index.html

# Or open a specific component demo
open html-demo/popover-demo.html
```

### Option 2: Use a Local Server
For best results, serve the files with a local HTTP server:

```bash
# Using Python
cd html-demo
python -m http.server 8000

# Using Node.js http-server
npx http-server html-demo -p 8000

# Then open http://localhost:8000 in your browser
```

## 📦 What's Included

Each demo file includes:
- **Live Examples**: Interactive demonstrations of the component
- **Code Samples**: HTML markup examples
- **Usage Instructions**: How to integrate the component into your project
- **Configuration Options**: Available attributes and settings

## 🔧 How It Works

These demos use:
1. **AngularJS 1.8.3** from CDN
2. **Bootstrap 5.0.2 CSS** from CDN
3. **ng1bs5 Library** from `../dist/ng1bs5.js`

**Important:** ng1bs5.js includes all Bootstrap 5 JavaScript functionality. You do **NOT** need to include `bootstrap.bundle.min.js` separately!

No build tools, no npm install, no compilation - just pure HTML, CSS, and JavaScript!

## 📝 Component List

### Overlays & Popups
- **Modal** - Dialog boxes and popup windows
- **Offcanvas** - Sidebar panels
- **Popover** - Contextual overlays (uses `bs-popover` directive)
- **Tooltip** - Helpful hints on hover (uses `bs-tooltip` directive)
- **Toast** - Push notifications
- **Dropdown** - Toggleable contextual menus

### Navigation & Content
- **Accordion** - Collapsible content panels
- **Collapse** - Show/hide content dynamically

### Feedback & Status
- **Alert** - Contextual feedback messages

## 💡 Tips

1. **View Source**: Right-click any demo and select "View Page Source" to see the complete HTML
2. **Customize**: Copy any demo file and modify it for your needs
3. **Learn by Doing**: Each demo is self-contained and easy to understand
4. **No Bootstrap JS needed**: ng1bs5.js replaces bootstrap.bundle.min.js

## ⚠️ Important Note

**Do NOT include `bootstrap.bundle.min.js` when using ng1bs5.js!**

ng1bs5.js already includes all Bootstrap 5 JavaScript functionality. Including both will cause conflicts.

### ✅ Correct Setup:
```html
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/angular@1.8.3/angular.min.js"></script>
<script src="dist/ng1bs5.js"></script>
```

### ❌ Incorrect Setup:
```html
<script src="dist/ng1bs5.js"></script>
<script src="bootstrap.bundle.min.js"></script> <!-- DON'T DO THIS! -->
```

## 🔗 Related

- [ES6 Demo](../src/es6-demo/) - Modern ES6 module-based demos
- [GitHub Repository](https://github.com/chutichgn/ng1bs5)
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.0/)

## 📄 License

These demos are part of the ng1bs5 project and share the same license.
