# Changelog

All notable changes to the Toast component will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2024-10-08

### Added
- Initial release of Toast component
- Programmatic API for creating toasts
- ES6 class-based service with Strict DI
- Bootstrap 5 native styling integration
- Fade in/out animations with configurable timing
- Auto-hide functionality with custom delays
- 9 positioning options (top, middle, bottom × start, center, end)
- Timestamp display support
- Four type variants: success, error, warning, info
- Flexible layouts: with title (colored header) or without title (colored body)
- `ToastService.create()` method for full control
- `ToastService.success()` convenience method
- `ToastService.error()` convenience method
- `ToastService.warning()` convenience method
- `ToastService.info()` convenience method
- Manual toast hiding via returned `hide()` method
- Close button support with configurable visibility
- Toast stacking with proper spacing
- XSS protection via HTML escaping

### Features
- **Animation**: Smooth fade in/out effects using Bootstrap 5's native transitions
- **Auto-hide**: Automatic dismissal after configurable delay
- **Positioning**: Place toasts anywhere on screen with 9 position options
- **Timestamps**: Display creation time in 12-hour format
- **Types**: Pre-configured color schemes for success, error, warning, and info
- **Layouts**: Colored header with white body, or fully colored body without header
- **Stacking**: Multiple toasts stack vertically with proper spacing
- **Manual Control**: Programmatically hide toasts before auto-hide triggers

### Technical Details
- Pure Bootstrap 5 CSS (no custom JavaScript animation)
- Minimal CSS footprint (positioning only)
- No dependencies on Bootstrap 5 JavaScript
- ES6 classes with arrow functions
- Strict Dependency Injection
- jqLite DOM manipulation
- Memory-safe (proper element cleanup)

### Browser Support
- Chrome 51+
- Firefox 54+
- Safari 10+
- Edge 15+

---

## Future Plans

### [1.1.0] - Planned
- TypeScript definitions
- Progress bar support
- Custom templates
- Grouped toasts
- Sound notifications

### [1.2.0] - Planned
- Accessibility improvements (ARIA live regions)
- Keyboard navigation
- RTL support
- Theme customization
- Animation presets

---

## Known Issues

None

---

## License

MIT License

---

## Support

- GitHub Issues: https://github.com/chutichgn/ng1bs5/issues
- Documentation: https://github.com/chutichgn/ng1bs5
