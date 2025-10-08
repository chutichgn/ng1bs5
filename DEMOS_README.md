# ng1bs5 Demo Examples

Complete demo examples for the ng1bs5 library - Bootstrap 5 components for AngularJS with ES6 support.

## 📁 Project Structure

```
ng1bs5/
├── components/              # ng1bs5 source components
├── dist/
│   ├── ng1bs5.js           # Compiled library
│   └── es6-demo/           # Built ES6 demo (after build)
│       └── index.html
├── html-demo/              # Standalone HTML demos
│   ├── index.html          # Table of contents
│   ├── accordion-demo.html
│   ├── alert-demo.html
│   ├── collapse-demo.html
│   ├── dropdown-demo.html
│   ├── modal-demo.html
│   ├── offcanvas-demo.html
│   ├── popover-demo.html
│   ├── toast-demo.html
│   ├── tooltip-demo.html
│   └── README.md
└── es6-demo/               # ES6 module demos
    ├── src/
    │   ├── app.js
    │   ├── index.html
    │   └── components/
    ├── webpack.config.js
    ├── package.json
    └── README.md
```

## 🎯 Two Types of Demos

### 1. Standalone HTML Demos (`html-demo/`)

**Perfect for:** Quick testing, learning, and simple projects

**Features:**
- ✅ No build tools required
- ✅ Just open in browser
- ✅ Uses compiled `dist/ng1bs5.js`
- ✅ CDN-based dependencies

**Usage:**
```bash
# Open directly in browser
open html-demo/index.html

# Or serve with local server
python -m http.server 8000
```

[👉 View HTML Demo README](html-demo/README.md)

### 2. ES6 Module Demos (`es6-demo/`)

**Perfect for:** Modern applications, production projects, learning ES6 patterns

**Features:**
- ✅ ES6 modules (import/export)
- ✅ Webpack + Babel build system
- ✅ Hot module replacement
- ✅ Direct component imports
- ✅ Production optimization

**Usage:**
```bash
cd es6-demo
npm install
npm run dev     # Development server
npm run build   # Production build
```

[👉 View ES6 Demo README](es6-demo/README.md)

## 🚀 Quick Start

### Option 1: View Standalone Demos

```bash
# No installation needed!
open html-demo/index.html
```

### Option 2: Run ES6 Demo

```bash
# Install and run
cd es6-demo
npm install
npm run dev
```

## 📦 Available Components

Both demo types include examples for:

### Overlays & Popups
- **Modal** - Dialog boxes and popup windows
- **Offcanvas** - Sidebar panels
- **Popover** - Contextual overlays
- **Tooltip** - Helpful hints on hover
- **Toast** - Push notifications
- **Dropdown** - Toggleable contextual menus

### Navigation & Content
- **Accordion** - Collapsible content panels
- **Collapse** - Show/hide content dynamically

### Feedback & Status
- **Alert** - Contextual feedback messages

## 🔧 Integration Guide

### For Standalone HTML Projects

1. Include required dependencies:
```html
<!-- AngularJS -->
<script src="https://cdn.jsdelivr.net/npm/angular@1.8.3/angular.min.js"></script>

<!-- Bootstrap CSS -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Bootstrap JS (for interactive components) -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>

<!-- ng1bs5 Library -->
<script src="dist/ng1bs5.js"></script>
```

2. Add module dependency:
```javascript
angular.module('myApp', ['ng1bs5.modal']);
```

3. Use in template:
```html
<button data-bs-toggle="modal" data-bs-target="#myModal">
  Open Modal
</button>
```

### For ES6/Module Projects

1. Install dependencies:
```bash
npm install angular bootstrap
```

2. Import and use:
```javascript
import angular from 'angular';
import { ModalModule } from '@ng1bs5/modal';

const app = angular.module('myApp', [
  ModalModule.name
]);
```

3. Configure Webpack alias (see `es6-demo/webpack.config.js`):
```javascript
resolve: {
  alias: {
    '@ng1bs5': path.resolve(__dirname, './components')
  }
}
```

## 📖 Documentation

- **HTML Demos**: See [html-demo/README.md](html-demo/README.md)
- **ES6 Demos**: See [es6-demo/README.md](es6-demo/README.md)
- **Bootstrap 5**: [Official Documentation](https://getbootstrap.com/docs/5.0/)
- **AngularJS**: [Official Guide](https://docs.angularjs.org/)

## 🎓 Learning Path

1. **Start with HTML Demos** - Get familiar with each component
2. **Review Code Examples** - Understand basic usage patterns
3. **Explore ES6 Demos** - Learn modern integration patterns
4. **Build Your Project** - Apply what you've learned

## 🤝 Contributing

### Adding a New Component Demo

#### For HTML Demo:
1. Copy an existing demo file (e.g., `modal-demo.html`)
2. Replace component-specific code
3. Update `html-demo/index.html` to link to the new demo
4. Follow the existing structure and styling

#### For ES6 Demo:
1. Create a new file in `es6-demo/src/components/`
2. Import it in `es6-demo/src/app.js`
3. Add the component to `es6-demo/src/index.html`
4. Follow ES6 class and module patterns

### Demo File Requirements

Each demo should include:
- ✅ Component title and description
- ✅ Live interactive examples
- ✅ Code samples with syntax highlighting
- ✅ Usage instructions
- ✅ Link back to main index
- ✅ Consistent styling

## 📊 Comparison

| Feature | HTML Demo | ES6 Demo |
|---------|-----------|----------|
| Setup Time | Instant | 5 minutes |
| Build Tools | None | Webpack + Babel |
| Module System | None | ES6 Imports |
| Hot Reload | No | Yes |
| Modern JS | No | Yes |
| Production Ready | Basic | Yes |
| Learning Curve | Easy | Moderate |
| Best For | Quick tests, Demos | Production apps |

## 💡 Tips

### For HTML Demos:
- Open DevTools to see console output
- View page source to see complete HTML
- Copy and modify for your needs
- Use a local server for best results

### For ES6 Demos:
- Keep DevTools open for hot reload
- Check webpack output for errors
- Use source maps for debugging
- Build for production before deployment

## 🐛 Troubleshooting

### HTML Demos

**Components not working?**
- Check browser console for errors
- Ensure all CDN resources loaded
- Verify `dist/ng1bs5.js` exists

**Styling issues?**
- Confirm Bootstrap CSS is loaded
- Check for CSS conflicts
- Clear browser cache

### ES6 Demos

**Build errors?**
```bash
rm -rf node_modules package-lock.json
npm install
```

**Hot reload not working?**
- Restart dev server: `npm run dev`
- Check webpack terminal output
- Clear browser cache

**Import errors?**
- Verify webpack alias configuration
- Check component export names
- Ensure all dependencies installed

## 🔗 Resources

- [GitHub Repository](https://github.com/chutichgn/ng1bs5)
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.0/components/)
- [AngularJS Developer Guide](https://docs.angularjs.org/guide)
- [Webpack Documentation](https://webpack.js.org/)
- [Babel Documentation](https://babeljs.io/)

## 📄 License

This project follows the license of the main ng1bs5 library.

## 🎉 Getting Help

- Check demo READMEs for specific instructions
- Review component documentation
- Look at code examples in demo files
- Open an issue on GitHub

---

**Happy Coding!** 🚀

Choose the demo type that fits your needs and start building with ng1bs5!
