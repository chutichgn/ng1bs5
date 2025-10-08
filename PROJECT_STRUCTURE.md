# Project Structure

```
ng1bs5/
├── src/
│   ├── services/                       # Core services
│   ├── index.js                        # Library entry
│   │   ├── dom.service.js              # DOM manipulation service (COMPLETE)
│   │   └── position.service.js         # Positioning service (COMPLETE)
│   ├── styles/
│   │   └── styles.css                  # Component styles
│   ├── es6-demo/                       # Main entry point Demo moved here
│   │   ├── app.js                      # No more nested src/
│   │   ├── index.html                  # demo angularjs app
│   │   └── components/  # Demo examples
│   └─── components/                     # Components similar to  bootstrap 5 native js 
│       ├── accordion/
│       │   └── accordion.module.js        # COMPLETE
│       ├── alert/
│       │   └── alert.module.js            # COMPLETE
│       ├── autocomplete/
│       │   └── autocomplete.module.js     # STUB - TODO
│       ├── collapse/
│       │   └── collapse.module.js         # COMPLETE
│       ├── datepicker/
│       │   └── datepicker.module.js       # STUB - TODO
│       ├── icons/
│       │   └── icons.module.js            # COMPLETE
│       ├── loading-overlay/
│       │   └── loading-overlay.module.js  # STUB - TODO
│       ├── modal/
│       │   └── modal.module.js            # STUB - TODO
│       ├── offcanvas/
│       │   └── offcanvas.module.js        # STUB - TODO
│       ├── pagination/
│       │   └── pagination.module.js       # COMPLETE
│       ├── popover/
│       │   ├── popover.module.js          # COMPLETE ✅
│       │   ├── README.md                  # Full documentation
│       │   └── popover.spec.js            # Unit tests
│       ├── progressbar/
│       │   └── progressbar.module.js      # COMPLETE
│       ├── rating/
│       ├── accordion/
│       │   └── accordion.module.js        # COMPLETE
│       ├── alert/
│       │   └── alert.module.js            # COMPLETE
│       ├── autocomplete/
│       │   └── autocomplete.module.js     # STUB - TODO
│       ├── collapse/
│       │   └── collapse.module.js         # COMPLETE
│       ├── datepicker/
│       │   └── datepicker.module.js       # STUB - TODO
│       ├── icons/
│       │   └── icons.module.js            # COMPLETE
│       ├── loading-overlay/
│       │   └── loading-overlay.module.js  # STUB - TODO
│       ├── modal/
│       │   └── modal.module.js            # STUB - TODO
│       ├── offcanvas/
│       │   └── offcanvas.module.js        # STUB - TODO
│       ├── pagination/
│       │   └── pagination.module.js       # COMPLETE
│       ├── popover/
│       │   ├── popover.module.js          # COMPLETE ✅
│       │   ├── README.md                  # Full documentation
│       │   └── popover.spec.js            # Unit tests
│       ├── progressbar/
│       │   └── progressbar.module.js      # COMPLETE
│       ├── rating/
│       │   └── rating.module.js           # STUB - TODO
│       ├── tabs/
│       │   └── tabs.module.js             # STUB - TODO
│       ├── toast/
│       │   └── toast.module.js            # STUB - TODO
│       └── tooltip/
│           └── tooltip.module.js          # COMPLETE
│ 
├── webpack.config.js           # Webpack config for ng1bs5
├── webpack.es6-demo.js           # Webpack configuration for es6-demo
├── dist/
│   ├── lib/
│   │   └── ng1bs5.js
│   └── es6-demo/
├── index.js                    # 
├── package.json                # NPM dependencies
...
 
 
```