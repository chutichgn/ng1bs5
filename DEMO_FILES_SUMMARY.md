# ng1bs5 Demo Files Summary

This package contains complete demo examples for the ng1bs5 library in two formats: Standalone HTML demos and ES6 module demos.

## 📦 What's Included

### 1. Standalone HTML Demos (`html-demo/`)

**9 Component Demos + Index:**
- `index.html` - Main table of contents with links to all demos
- `accordion-demo.html` - Collapsible content panels
- `alert-demo.html` - Contextual feedback messages
- `collapse-demo.html` - Show/hide content dynamically
- `dropdown-demo.html` - Toggleable contextual menus
- `modal-demo.html` - Dialog boxes and popup windows
- `offcanvas-demo.html` - Sidebar panels
- `popover-demo.html` - Contextual overlays
- `toast-demo.html` - Push notifications
- `tooltip-demo.html` - Helpful hints on hover
- `README.md` - Complete documentation

**Key Features:**
- No build tools required
- Uses `../dist/ng1bs5.js` (compiled library)
- CDN-based Bootstrap and AngularJS
- Open directly in browser or use local server

### 2. ES6 Module Demos (`es6-demo/`)

**Full ES6 Project Structure:**
```
es6-demo/
├── src/
│   ├── app.js                    # Main application
│   ├── index.html                # HTML template
│   └── components/               # Component examples
│       ├── accordion-example.js
│       ├── dropdown-example.js
│       ├── modal-example.js
│       ├── popover-example.js
│       └── tooltip-example.js
├── webpack.config.js             # Webpack configuration
├── package.json                  # Dependencies
├── .babelrc                      # Babel configuration
├── .gitignore                    # Git ignore rules
└── README.md                     # Complete documentation
```

**Key Features:**
- Modern ES6 imports/exports
- Webpack + Babel build system
- Hot module replacement
- Direct component imports from source
- Production-ready build output to `../dist/es6-demo/`

## 🚀 Quick Start

### For HTML Demos:

1. Place the `html-demo` folder in your ng1bs5 project root
2. Ensure `dist/ng1bs5.js` exists
3. Open `html-demo/index.html` in a browser

**OR use a local server:**
```bash
cd html-demo
python -m http.server 8000
# Open http://localhost:8000
```

### For ES6 Demos:

1. Place the `es6-demo` folder in your ng1bs5 project root
2. Install dependencies:
```bash
cd es6-demo
npm install
```

3. Run development server:
```bash
npm run dev
```

4. Build for production:
```bash
npm run build
```
Output will be in `../dist/es6-demo/index.html`

## 📂 Project Structure

Both demo folders should be placed at the root of your ng1bs5 project:

```
ng1bs5/                    # Your project root
├── components/            # ng1bs5 source components
├── dist/
│   ├── ng1bs5.js         # Compiled library (required for html-demo)
│   └── es6-demo/         # Built ES6 demo (created after build)
├── html-demo/            # ← Place html-demo folder here
│   ├── index.html
│   ├── *-demo.html
│   └── README.md
└── es6-demo/             # ← Place es6-demo folder here
    ├── src/
    ├── webpack.config.js
    ├── package.json
    └── README.md
```

## 🔧 Configuration

### HTML Demos Configuration

Each HTML demo file uses:
```html
<!-- AngularJS from CDN -->
<script src="https://cdn.jsdelivr.net/npm/angular@1.8.3/angular.min.js"></script>

<!-- Bootstrap CSS from CDN -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">

<!-- Bootstrap JS from CDN -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>

<!-- ng1bs5 Library (local) -->
<script src="../dist/ng1bs5.js"></script>
```

### ES6 Demos Configuration

The ES6 demo is configured to import components directly from source via webpack alias:

```javascript
// webpack.config.js
resolve: {
  alias: {
    '@ng1bs5': path.resolve(__dirname, '../components')
  }
}
```

Update the imports in `src/app.js` to match your component structure:
```javascript
import { ModalModule } from '@ng1bs5/modal';
import { PopoverModule } from '@ng1bs5/popover';
// etc.
```

## 📝 Customization

### Adding Components to HTML Demos

To add a new component demo:

1. Copy an existing demo file (e.g., `modal-demo.html`)
2. Rename it (e.g., `button-demo.html`)
3. Update the content:
   - Page title
   - Component examples
   - Code samples
   - Module name in AngularJS
4. Add a link in `index.html`

### Adding Components to ES6 Demos

To add a new component example:

1. Create `src/components/new-component-example.js`:
```javascript
import angular from 'angular';

class NewComponentController {
  constructor($scope) {
    'ngInject';
    // Controller logic
  }
}

const NewComponentExample = {
  template: `...`,
  controller: NewComponentController
};

export default angular.module('newComponentExample', [])
  .component('newComponentExample', NewComponentExample);
```

2. Import in `src/app.js`:
```javascript
import './components/new-component-example';
```

3. Add to `src/index.html`:
```html
<new-component-example></new-component-example>
```

## 🎯 Use Cases

### HTML Demos are Perfect For:
- ✅ Quick testing and prototyping
- ✅ Learning how each component works
- ✅ Simple projects without build tools
- ✅ Documentation and examples
- ✅ Sharing demos with others

### ES6 Demos are Perfect For:
- ✅ Modern production applications
- ✅ Large-scale projects
- ✅ Team development with modules
- ✅ Learning modern JavaScript patterns
- ✅ CI/CD integration

## 📚 Documentation

Each demo folder includes its own detailed README:

- **[html-demo/README.md](html-demo/README.md)** - Complete HTML demo documentation
- **[es6-demo/README.md](es6-demo/README.md)** - Complete ES6 demo documentation
- **[DEMOS_README.md](DEMOS_README.md)** - Overview of both demo types

## 🔗 Integration Examples

### Using in Your HTML Project

```html
<!DOCTYPE html>
<html ng-app="myApp">
<head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet">
</head>
<body>
    <div ng-controller="MyController">
        <button data-bs-toggle="modal" data-bs-target="#myModal">Open Modal</button>
        <!-- Modal markup -->
    </div>

    <script src="https://cdn.jsdelivr.net/npm/angular@1.8.3/angular.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="dist/ng1bs5.js"></script>
    <script>
        angular.module('myApp', ['ng1bs5.modal'])
            .controller('MyController', function($scope) {
                // Your logic
            });
    </script>
</body>
</html>
```

### Using in Your ES6 Project

```javascript
// app.js
import angular from 'angular';
import { ModalModule } from '@ng1bs5/modal';
import { PopoverModule } from '@ng1bs5/popover';

const app = angular.module('myApp', [
    ModalModule.name,
    PopoverModule.name
]);

app.controller('MyController', function($scope) {
    // Your logic
});
```

## 🐛 Troubleshooting

### HTML Demos

**"ng1bs5 is not defined"**
- Ensure `dist/ng1bs5.js` exists in the correct location
- Check browser console for 404 errors
- Use a local server instead of opening files directly

**Components not working**
- Verify Bootstrap CSS and JS are loaded from CDN
- Check that module names match (e.g., 'ng1bs5.modal')
- Open browser DevTools and check console for errors

### ES6 Demos

**"Cannot resolve module"**
- Check webpack alias configuration in `webpack.config.js`
- Verify component paths are correct
- Run `npm install` to ensure dependencies are installed

**Build errors**
```bash
# Clean install
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Hot reload not working**
- Restart dev server: `Ctrl+C` then `npm run dev`
- Clear browser cache
- Check webpack output for errors

## 💡 Tips

1. **Start with HTML demos** to understand each component
2. **Review the code** in demo files to learn patterns
3. **Use ES6 demos** as a template for your modern projects
4. **Customize freely** - both demos are well-commented
5. **Check the browser console** for helpful error messages

## 📊 File Count Summary

- **HTML Demos**: 10 HTML files + 1 README
- **ES6 Demos**: 5 JS components + 1 main app + config files + README
- **Total Documentation**: 3 README files with complete instructions

## 🎉 Next Steps

1. **Choose your demo type** based on your project needs
2. **Copy the appropriate folder** to your ng1bs5 project
3. **Follow the README** in that folder for detailed instructions
4. **Start building** with ng1bs5 components!

## 🤝 Need Help?

- Read the component-specific README files
- Check the example code in demo files
- Review Bootstrap 5 documentation for component details
- Open an issue on the ng1bs5 GitHub repository

---

**Happy Coding with ng1bs5!** 🚀
