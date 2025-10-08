# ng1bs5 ES6 Demo

This is a modern ES6-style demo application that shows how to use ng1bs5 components with ES6 modules, Webpack, and Babel.

## 📁 Structure

```
es6-demo/
├── src/
│   ├── app.js                    # Main application entry point
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
└── .gitignore
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
cd es6-demo
npm install
```

2. Run development server:
```bash
npm run dev
```
This will start a development server at `http://localhost:9000` with hot module replacement.

3. Build for production:
```bash
npm run build
```
This creates optimized files in `../dist/es6-demo/`

## 📦 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run watch` - Build and watch for changes

## 🔧 How It Works

This demo uses:
- **ES6 Modules**: Import/export syntax for modular code
- **Webpack**: Module bundler and development server
- **Babel**: Transpile ES6+ to browser-compatible JavaScript
- **Bootstrap 5**: Loaded as an npm package
- **ng1bs5 Components**: Imported directly from source via webpack alias

### Import Components

Components can be imported in two ways:

#### 1. From the ng1bs5 library (when available):
```javascript
import { ModalModule } from '@ng1bs5/modal';
import { PopoverModule } from '@ng1bs5/popover';

angular.module('myApp', [
  ModalModule.name,
  PopoverModule.name
]);
```

#### 2. Direct import (as shown in examples):
```javascript
import './components/modal-example';
import './components/popover-example';
```

## 📝 Component Examples

Each component example in `src/components/` demonstrates:
- ES6 class-based controllers
- Component-based architecture
- Integration with ng1bs5 components
- Best practices for AngularJS + ES6

### Example Structure

```javascript
// modal-example.js
import angular from 'angular';
// import { ModalModule } from '@ng1bs5/modal';

class ModalExampleController {
  constructor($scope) {
    'ngInject';
    // Controller logic
  }
}

const ModalExampleComponent = {
  template: `...`,
  controller: ModalExampleController
};

const module = angular.module('modalExample', [
  // ModalModule.name
])
.component('modalExample', ModalExampleComponent);

export default module;
```

## 🎯 Key Features

### Webpack Configuration
- **Alias for ng1bs5**: `@ng1bs5` points to your components directory
- **Hot Module Replacement**: Changes reflect immediately
- **Production Build**: Optimized bundle with content hashing

### Babel Configuration
- **ES6+ Support**: Use modern JavaScript features
- **AngularJS Compatibility**: Transpiled to ES5 for browser support
- **ngInject Support**: Dependency injection annotations

## 📖 Usage in Your Project

To use this setup in your own project:

1. Copy the configuration files:
   - `webpack.config.js`
   - `.babelrc`
   - `package.json`

2. Install dependencies:
   ```bash
   npm install
   ```

3. Import ng1bs5 components:
   ```javascript
   import { ModalModule } from '@ng1bs5/modal';
   ```

4. Add to your Angular module:
   ```javascript
   angular.module('myApp', [
     ModalModule.name
   ]);
   ```

5. Use in your templates:
   ```html
   <button data-bs-toggle="modal" data-bs-target="#myModal">
     Open Modal
   </button>
   ```

## 🔍 Debugging

### Development Mode
- Open browser DevTools
- Source maps are enabled for debugging original ES6 code
- Check console for any errors

### Common Issues

**Components not working?**
- Ensure Bootstrap CSS is loaded
- Check that Bootstrap JS is available globally (`window.bootstrap`)
- Verify component modules are imported correctly

**Build errors?**
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Clear webpack cache: `rm -rf node_modules/.cache`

## 🎨 Customization

### Adding New Components

1. Create a new component file in `src/components/`:
```javascript
// src/components/my-component.js
import angular from 'angular';

class MyComponentController {
  // ...
}

const MyComponent = {
  template: `...`,
  controller: MyComponentController
};

export default angular.module('myComponent', [])
  .component('myComponent', MyComponent);
```

2. Import in `src/app.js`:
```javascript
import './components/my-component';
```

3. Use in `src/index.html`:
```html
<my-component></my-component>
```

### Styling

Add custom styles by:
1. Creating a CSS file in `src/`
2. Importing it in `app.js`: `import './styles.css'`

## 🔗 Related

- [Standalone HTML Demos](../html-demo/) - No-build-tool demos
- [ng1bs5 Components](../components/) - Source components
- [GitHub Repository](https://github.com/chutichgn/ng1bs5)

## 📄 License

This demo is part of the ng1bs5 project and shares the same license.

## 🤝 Contributing

To add more component examples:
1. Create a new file in `src/components/`
2. Follow the existing component structure
3. Import it in `app.js`
4. Add corresponding HTML in `index.html`

## 💡 Tips

- **Hot Reload**: Changes to JS/HTML files will automatically reload the browser
- **Bundle Analysis**: Run `npm run build -- --analyze` to visualize bundle size
- **Production Testing**: Build and serve: `npm run build && npx http-server ../dist/es6-demo`

## 📚 Learn More

- [Webpack Documentation](https://webpack.js.org/)
- [Babel Documentation](https://babeljs.io/)
- [AngularJS Style Guide](https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md)
- [Bootstrap 5 Documentation](https://getbootstrap.com/docs/5.0/)
