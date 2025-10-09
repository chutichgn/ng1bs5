# Dropdown Component Integration Guide

This guide explains how to integrate the new dropdown component into your ng1bs5 library.

## Files Created

1. **`/src/components/dropdown/dropdown.module.js`** - Main dropdown module
2. **`/src/components/dropdown/README.md`** - Documentation
3. **`/html-demo/dropdown-demo.html`** - Pure HTML demo
4. **`/src/es6-demo/components/dropdown-demo.component.js`** - AngularJS ES6 demo component

## Integration Steps

### Step 1: Update Main Index File

Update `/src/index.js` to import and register the dropdown module:

```javascript
import DropdownModule from './components/dropdown/dropdown.module';

const NG1BS5_MODULE_NAME = 'ng1bs5';

angular.module(NG1BS5_MODULE_NAME, [
    AccordionModule,
    AlertModule,
    AutocompleteModule,
    CollapseModule,
    DatepickerModule,
    DropdownModule,  // Add this line
    IconsModule,
    LoadingOverlayModule,
    ModalModule,
    OffcanvasModule,
    PaginationModule,
    PopoverModule,
    ProgressbarModule,
    RatingModule,
    TabsModule,
    ToastModule,
    TooltipModule
]);

export default NG1BS5_MODULE_NAME;
```

### Step 2: Create Component Directory

Create the directory structure:

```
/src/components/dropdown/
├── dropdown.module.js
└── README.md
```

### Step 3: Add Demo Files (Optional)

If you want to add demos:

**HTML Demo:**
- Place `dropdown-demo.html` in `/html-demo/`

**ES6 Demo:**
- Place `dropdown-demo.component.js` in `/src/es6-demo/components/`
- Register it in your demo app's main module

Example demo app registration:

```javascript
// /src/es6-demo/app.js
import angular from 'angular';
import ng1bs5 from '../index';
import DropdownDemoComponent from './components/dropdown-demo.component';

angular.module('demoApp', [ng1bs5])
    .component('dropdownDemo', DropdownDemoComponent);
```

### Step 4: Update Project Structure Documentation

Update `/PROJECT_STRUCTURE.md` to mark dropdown as COMPLETE:

```markdown
├── dropdown/
│   ├── dropdown.module.js         # COMPLETE ✅
│   └── README.md                  # Full documentation
```

### Step 5: Build the Library

Run your build process:

```bash
npm run build
```

This will compile the ES6 code with Babel and bundle it with Webpack.

## Testing the Component

### Manual Testing

1. **HTML Demo:**
   ```bash
   # Serve the html-demo directory
   # Open dropdown-demo.html in browser
   ```

2. **ES6 Demo:**
   ```bash
   npm run dev
   # or
   npm start
   # Navigate to the dropdown demo page
   ```

### Testing Checklist

- [ ] Basic dropdown opens and closes
- [ ] Split button dropdown works
- [ ] All directions work (up, end, start, down)
- [ ] Keyboard navigation (ESC, Arrow keys)
- [ ] Auto-close behaviors work correctly
- [ ] Events fire properly
- [ ] Programmatic control methods work
- [ ] Forms in dropdowns work
- [ ] Dark mode styling works
- [ ] Menu alignment options work
- [ ] Accessibility attributes are correct
- [ ] No console errors

## Component Features

### Directives

1. **`ng1bs5-dropdown`** - Container directive
2. **`ng1bs5-dropdown-toggle`** - Toggle button/link
3. **`ng1bs5-dropdown-menu`** - Menu container

### Configuration Options

- `ng1bs5-dropdown-auto-close`: Auto-close behavior
- `ng1bs5-dropdown-offset`: Custom positioning offset
- `ng1bs5-dropdown-boundary`: Overflow boundary
- `ng1bs5-dropdown-reference`: Reference element
- `ng1bs5-dropdown-display`: Display type (dynamic/static)
- Event callbacks: `onShow`, `onShown`, `onHide`, `onHidden`

### Controller API

Accessible via `$dropdown` controller:
- `toggle()` - Toggle dropdown
- `show()` - Show dropdown
- `hide()` - Hide dropdown
- `update()` - Update position

## Bootstrap 5 Compatibility

This component implements the Bootstrap 5.0 Dropdown API:
- ✅ All dropdown directions
- ✅ Auto-close behaviors
- ✅ Keyboard navigation
- ✅ Event system
- ✅ Accessibility (ARIA)
- ⚠️ Simplified positioning (no Popper.js dependency)

## Known Limitations

1. **No Popper.js Integration**: This implementation uses simplified CSS-based positioning. For complex positioning scenarios (viewport detection, collision detection), you may want to integrate Popper.js.

2. **Static Positioning in Navbars**: Like Bootstrap 5, dropdowns in navbars use static positioning by default.

3. **Browser Compatibility**: Tested on modern browsers (Chrome, Firefox, Safari, Edge latest versions).

## Future Enhancements

Possible improvements for future versions:

1. **Popper.js Integration**: Add optional Popper.js support for advanced positioning
2. **Animation Options**: Configurable animation/transition duration
3. **Nested Dropdowns**: Support for multi-level dropdown menus
4. **Custom Templates**: Allow custom dropdown menu templates
5. **Unit Tests**: Add comprehensive unit tests using Jasmine/Karma

## Troubleshooting

### Dropdown doesn't show
- Check that Bootstrap 5 CSS is loaded
- Verify the directive names are correct
- Check browser console for errors

### Click outside doesn't close
- Verify `autoClose` is set correctly
- Check for JavaScript errors preventing event listeners

### Keyboard navigation not working
- Ensure dropdown items have class `dropdown-item`
- Check that items are not disabled

### Styling issues
- Ensure Bootstrap 5 CSS is loaded
- Check for CSS conflicts with custom styles
- Use browser dev tools to inspect applied classes

## Support

For issues and questions:
1. Check the README.md documentation
2. Review the demo examples
3. Check Bootstrap 5 documentation: https://getbootstrap.com/docs/5.0/components/dropdowns/
4. Open an issue on GitHub

## License

Same as ng1bs5 library (MIT)