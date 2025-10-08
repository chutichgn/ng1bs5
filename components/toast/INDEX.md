# Toast Component Documentation

Complete documentation for the ng1bs5 Toast component.

## 📚 Documentation Structure

### Getting Started
- **[README.md](./README.md)** - Overview, features, installation, and quick start guide
- **[QUICK-REFERENCE.md](./QUICK-REFERENCE.md)** - Fast lookup reference for common tasks

### Detailed Guides
- **[API.md](./API.md)** - Complete API reference with all methods and options
- **[EXAMPLES.md](./EXAMPLES.md)** - Real-world examples and integration patterns

### Project Information
- **[CHANGELOG.md](./CHANGELOG.md)** - Version history and release notes
- **[CONTRIBUTING.md](./CONTRIBUTING.md)** - Guide for contributors

---

## 🚀 Quick Links

### For New Users
1. Start with [README.md](./README.md) for an overview
2. Try the [Quick Start](./README.md#quick-start) examples
3. Check [QUICK-REFERENCE.md](./QUICK-REFERENCE.md) for common patterns

### For Developers
1. Review [API.md](./API.md) for detailed API docs
2. Browse [EXAMPLES.md](./EXAMPLES.md) for integration patterns
3. Read [CONTRIBUTING.md](./CONTRIBUTING.md) before contributing

### For Troubleshooting
1. Check [FAQ](#faq) section below
2. Review [EXAMPLES.md](./EXAMPLES.md) for working patterns
3. Search [GitHub Issues](https://github.com/chutichgn/ng1bs5/issues)

---

## 📖 Documentation by Topic

### Installation & Setup
- [Installation](./README.md#installation)
- [Project Setup](./README.md#quick-start)
- [Development Setup](./CONTRIBUTING.md#development-setup)

### Basic Usage
- [Quick Start](./README.md#quick-start)
- [Basic Examples](./EXAMPLES.md#basic-examples)
- [Quick Reference](./QUICK-REFERENCE.md)

### Configuration
- [Configuration Options](./README.md#configuration-options)
- [Position Options](./README.md#position-options)
- [API Reference](./API.md#options)

### Advanced Features
- [Advanced Usage](./README.md#advanced-usage)
- [Real-World Use Cases](./EXAMPLES.md#real-world-use-cases)
- [Integration Examples](./EXAMPLES.md#integration-examples)
- [Advanced Patterns](./EXAMPLES.md#advanced-patterns)

### API Documentation
- [ToastService Methods](./API.md#methods)
- [Configuration Options](./API.md#options)
- [Return Values](./API.md#return-values)
- [Type Definitions](./API.md#type-definitions)

### Styling & Customization
- [Styling](./README.md#styling)
- [Custom Styling](./README.md#custom-styling)
- [Color Schemes](./QUICK-REFERENCE.md#color-schemes)

### Integration
- [HTTP Interceptor](./EXAMPLES.md#with-http-interceptor)
- [State Changes](./EXAMPLES.md#with-state-change-events)
- [Form Validation](./EXAMPLES.md#with-form-validation)

### Best Practices
- [UI/UX Guidelines](./EXAMPLES.md#uiux-best-practices)
- [Coding Standards](./CONTRIBUTING.md#coding-standards)
- [Common Patterns](./QUICK-REFERENCE.md#common-patterns)

### Testing
- [Manual Testing](./CONTRIBUTING.md#manual-testing)
- [Test Checklist](./CONTRIBUTING.md#test-checklist)
- [Browser Testing](./CONTRIBUTING.md#browser-testing)

### Contributing
- [Getting Started](./CONTRIBUTING.md#getting-started)
- [Development Setup](./CONTRIBUTING.md#development-setup)
- [Submitting Changes](./CONTRIBUTING.md#submitting-changes)
- [Pull Request Process](./CONTRIBUTING.md#pull-request-process)

### Version History
- [Changelog](./CHANGELOG.md)
- [Migration Guides](./CHANGELOG.md#migration-guides)
- [Breaking Changes](./CHANGELOG.md#breaking-changes)

---

## 🎯 Common Tasks

### How do I...?

#### Show a success message?
```javascript
ToastService.success('Operation completed!', 'Success');
```
[More examples →](./README.md#quick-start)

#### Show an error that requires manual close?
```javascript
ToastService.error('Something went wrong', 'Error', {
  autohide: false
});
```
[More examples →](./EXAMPLES.md#form-submission)

#### Change the toast position?
```javascript
ToastService.info('Message', 'Title', {
  position: 'bottom-end'
});
```
[Position options →](./README.md#position-options)

#### Add a timestamp?
```javascript
ToastService.success('Saved', 'Success', {
  timestamp: true
});
```
[Timestamp examples →](./API.md#timestamp)

#### Create a toast without a title?
```javascript
ToastService.success('Simple message', '');
```
[Colored body examples →](./EXAMPLES.md#basic-examples)

#### Control toast duration?
```javascript
ToastService.info('Quick message', '', {
  delay: 2000  // 2 seconds
});
```
[Timing guide →](./QUICK-REFERENCE.md#timing-guide)

#### Manually hide a toast?
```javascript
const toast = ToastService.info('Loading...', '', {
  autohide: false
});
// Later...
toast.hide();
```
[Manual control →](./API.md#manual-control)

#### Disable animation?
```javascript
ToastService.success('Instant', '', {
  animation: false
});
```
[Animation options →](./API.md#animation)

---

## 📋 FAQ

### General

**Q: Do I need Bootstrap JavaScript?**  
A: No. This component provides all toast functionality without Bootstrap's JavaScript.

**Q: What versions are supported?**  
A: AngularJS 1.5+ and Bootstrap 5.0+

**Q: Can I use this with Angular (not AngularJS)?**  
A: No, this is for AngularJS (1.x). For Angular 2+, use different libraries.

### Usage

**Q: Can I show multiple toasts?**  
A: Yes! Toasts automatically stack at the configured position.

**Q: How do I prevent XSS attacks?**  
A: Messages are automatically escaped. Don't disable this unless you control the content.

**Q: Can I use HTML in messages?**  
A: By default, no (for security). For custom HTML, extend the service.

**Q: Do toasts work on mobile?**  
A: Yes! They're fully responsive and touch-friendly.

### Styling

**Q: Can I customize colors?**  
A: Yes! Override Bootstrap classes or add custom CSS.

**Q: How do I change the toast width?**  
A: Use custom CSS:
```css
.toast { min-width: 300px; }
```

**Q: Can I add custom icons?**  
A: Currently not built-in, but you can extend the service to add them.

### Performance

**Q: Are there memory leaks?**  
A: No, toasts are properly cleaned up when removed.

**Q: How many toasts can I show?**  
A: No hard limit, but showing many simultaneously may affect UX.

**Q: Does this work with SSR?**  
A: This is a client-side component and requires a browser environment.

### Troubleshooting

**Q: Toast not appearing?**  
A: Ensure Bootstrap 5 CSS is loaded and check browser console for errors.

**Q: Animation not working?**  
A: Check that `animation: true` is set.

**Q: Auto-hide not working?**  
A: Verify `autohide: true` and `delay` is set appropriately.

---

## 🔗 External Resources

### Official Links
- [GitHub Repository](https://github.com/chutichgn/ng1bs5)
- [NPM Package](https://www.npmjs.com/package/ng1bs5)
- [Issue Tracker](https://github.com/chutichgn/ng1bs5/issues)

### Related Documentation
- [AngularJS Documentation](https://docs.angularjs.org/)
- [Bootstrap 5 Toast Docs](https://getbootstrap.com/docs/5.3/components/toasts/)
- [Bootstrap 5 CSS](https://getbootstrap.com/docs/5.3/)

### Community
- 💬 Discord: [Join our community](https://discord.gg/ng1bs5)
- 📧 Email: support@ng1bs5.com
- 🐦 Twitter: [@ng1bs5](https://twitter.com/ng1bs5)

---

## 📝 Quick Reference Card

| Feature | Syntax |
|---------|--------|
| Success | `ToastService.success('msg', 'title')` |
| Error | `ToastService.error('msg', 'title')` |
| Warning | `ToastService.warning('msg', 'title')` |
| Info | `ToastService.info('msg', 'title')` |
| Custom | `ToastService.create({ options })` |
| Manual hide | `toast.hide()` |

| Option | Values | Default |
|--------|--------|---------|
| type | success, error, warning, info | info |
| delay | milliseconds | 5000 |
| autohide | true, false | true |
| animation | true, false | true |
| position | 9 positions | top-end |

---

## 🎓 Learning Path

### Beginner
1. Read [README.md](./README.md)
2. Try [Quick Start](./README.md#quick-start)
3. Practice with [Basic Examples](./EXAMPLES.md#basic-examples)

### Intermediate
1. Study [API Reference](./API.md)
2. Review [Real-World Use Cases](./EXAMPLES.md#real-world-use-cases)
3. Learn [Integration Patterns](./EXAMPLES.md#integration-examples)

### Advanced
1. Master [Advanced Patterns](./EXAMPLES.md#advanced-patterns)
2. Read [Coding Standards](./CONTRIBUTING.md#coding-standards)
3. Contribute to the project!

---

## 📊 Component Overview

```
Toast Component
├── Toast Service (Main API)
│   ├── create(options)
│   ├── success(message, title, options)
│   ├── error(message, title, options)
│   ├── warning(message, title, options)
│   └── info(message, title, options)
│
├── Configuration
│   ├── Message & Title
│   ├── Type & Styling
│   ├── Timing & Animation
│   ├── Position
│   └── Behavior
│
└── Features
    ├── Auto-hide with custom delay
    ├── Manual close button
    ├── Fade in/out animations
    ├── 9 position options
    ├── Timestamp display
    ├── Multiple toast stacking
    └── Responsive design
```

---

## 🚦 Status

- ✅ Stable Release: v1.0.0
- ✅ Production Ready
- ✅ Well Documented
- ✅ Actively Maintained

---

## 📄 License

MIT License - See [LICENSE](../../LICENSE) for details.

---

**Need help?** Check the [FAQ](#faq) or [create an issue](https://github.com/chutichgn/ng1bs5/issues).
