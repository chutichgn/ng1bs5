# Project Structure

```
ng1bs5/
├── src/
│   ├── services/                       # Core services
│   │   ├── dom.service.ts              # DOM manipulation service (COMPLETE)
│   │   └── position.service.ts         # Positioning service (COMPLETE)
│   ├── index.ts                        # Library entry point
│   ├── styles/
│   │   └── styles.css                  # Component styles
│   ├── types/                          # TypeScript definitions
│   │   ├── index.d.ts                  # Main type declarations
│   │   └── components.d.ts             # Component type declarations
│   ├── es6-demo/                       # Demo application
│   │   ├── app.ts                      # Demo app entry
│   │   ├── index.html                  # Demo HTML
│   │   └── components/                 # Demo components
│   └── components/                     # Bootstrap 5 Components
│       ├── accordion/
│       │   ├── accordion.module.ts     # COMPLETE ✅
│       │   └── README.md
│       ├── alert/
│       │   ├── alert.module.ts         # COMPLETE ✅
│       │   └── README.md
│       ├── autocomplete/
│       │   └── autocomplete.module.ts  # STUB - TODO
│       ├── breadcrumb/
│       │   ├── breadcrumb.module.ts    # COMPLETE ✅
│       │   ├── README.md
│       │   └── README-TYPESCRIPT.md
│       ├── collapse/
│       │   ├── collapse.module.ts      # COMPLETE ✅
│       │   └── README.md
│       ├── datepicker/
│       │   └── datepicker.module.ts    # STUB - TODO
│       ├── dropdown/
│       │   ├── dropdown.module.ts      # COMPLETE ✅
│       │   ├── README.md
│       │   └── dropdown.spec.ts
│       ├── icons/
│       │   ├── icons.module.ts         # COMPLETE ✅
│       │   └── README.md
│       ├── loading-overlay/
│       │   └── loading-overlay.module.ts # STUB - TODO
│       ├── modal/
│       │   └── modal.module.ts         # COMPLETE ✅
│       ├── offcanvas/
│       │   └── offcanvas.module.ts     # COMPLETE ✅
│       ├── pagination/
│       │   ├── pagination.module.ts    # COMPLETE ✅
│       │   └── README.md
│       ├── popover/
│       │   ├── popover.module.ts       # COMPLETE ✅
│       │   ├── README.md
│       │   └── popover.spec.ts
│       ├── progressbar/
│       │   ├── progressbar.module.ts   # COMPLETE ✅
│       │   └── README.md
│       ├── rating/
│       │   └── rating.module.ts        # STUB - TODO
│       ├── tabs/
│       │   └── tabs.module.ts          # STUB - TODO
│       ├── toast/
│       │   └── toast.module.ts         # STUB - TODO
│       └── tooltip/
│           ├── tooltip.module.ts       # COMPLETE ✅
│           └── README.md
│ 
├── dist/
│   ├── lib/
│   │   ├── ng1bs5.js                   # Compiled bundle
│   │   ├── ng1bs5.d.ts                 # Type declarations
│   │   └── ng1bs5.js.map               # Source map
│   └── es6-demo/
│       └── demo.js
├── webpack.config.js                   # Webpack config for ng1bs5
├── webpack.es6-demo.js                 # Webpack config for demo
├── tsconfig.json                       # TypeScript configuration
├── package.json                        # NPM dependencies
├── README.md                           # Main documentation
└── PROJECT_STRUCTURE.md                # This file
```

## Component Status

### Completed (10/16 - 62.5%)
✅ Accordion
✅ Alert
✅ Breadcrumb
✅ Collapse
✅ Dropdown
✅ Icons
✅ Pagination
✅ Popover
✅ Progressbar
✅ Tooltip

### In Progress (0/16)
(None currently)

### TODO (6/16 - 37.5%)
❌ Autocomplete
❌ Datepicker
❌ Loading Overlay
❌ Modal
❌ Offcanvas
❌ Rating
❌ Tabs
❌ Toast

## File Naming Conventions

- **Modules**: `*.module.ts` - Main component implementation
- **Services**: `*.service.ts` - Injectable services
- **Interfaces**: `*.interface.ts` - TypeScript interfaces
- **Types**: `*.types.ts` - Type definitions
- **Specs**: `*.spec.ts` - Unit tests
- **README**: `README.md` - Component documentation

## TypeScript Configuration

### tsconfig.json
The project uses TypeScript with the following key settings:
- Target: ES6
- Module: ES6
- Strict mode enabled
- AngularJS type definitions included
- Source maps for debugging

### Type Declarations
All components export proper TypeScript interfaces and types for:
- Component options
- Service methods
- Directive attributes
- Controller APIs

## Build Output

### Development Build
- `dist/lib/ng1bs5.js` - Unminified bundle
- `dist/lib/ng1bs5.js.map` - Source maps
- `dist/lib/ng1bs5.d.ts` - Type declarations

### Production Build
- `dist/lib/ng1bs5.min.js` - Minified bundle
- `dist/lib/ng1bs5.min.js.map` - Minified source maps
- `dist/lib/ng1bs5.d.ts` - Type declarations