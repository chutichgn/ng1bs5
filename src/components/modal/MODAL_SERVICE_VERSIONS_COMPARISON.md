# Modal Service Versions Comparison

## Version 1: Template + Controller Only ✅ Recommended

**File:** `modal.service.v1.ts`

### What Works
```typescript
// ✅ Works perfectly
Bs5ModalService.open({
    template: signInFormHtml,
    controller: SignInFormCtrl,
    controllerAs: '$ctrl',
    size: 'lg'
});
```

### Controller Usage
```typescript
class SignInFormCtrl extends BaseController {
    static $inject = [
        ...BaseController.$inject,
        'SecurityService',
        '$bs5ModalInstance'  // ✅ Injected directly
    ];

    private $bs5ModalInstance: any;

    constructor(...args: any[]) {
        const [base, child] = BaseController.extractServices(args);
        super(...base);
        [this.SecurityService, this.$bs5ModalInstance] = child;
    }

    submit(): void {
        this.$bs5ModalInstance.close(result);
    }
}
```

### Pros
- ✅ Clean, reliable injection
- ✅ No workarounds or hacks
- ✅ Predictable behavior
- ✅ Standard AngularJS pattern

### Cons
- ❌ Doesn't support `component` option
- ❌ Must use `template` + `controller`

---

## Version 2: Both Template + Controller AND Component ⚠️ Experimental

**File:** `modal.service.v2.ts`

### What Works
```typescript
// ✅ Works - template + controller
Bs5ModalService.open({
    template: signInFormHtml,
    controller: SignInFormCtrl,
    controllerAs: '$ctrl'
});

// ⚠️ Should work - component (experimental)
Bs5ModalService.open({
    component: 'signInForm',
    controllerAs: '$ctrl'
});
```

### Controller Usage (Same for Both)
```typescript
class SignInFormCtrl extends BaseController {
    static $inject = [
        ...BaseController.$inject,
        'SecurityService',
        '$bs5ModalInstance'  // ✅ Injected (via workaround)
    ];

    private $bs5ModalInstance: any;

    constructor(...args: any[]) {
        const [base, child] = BaseController.extractServices(args);
        super(...base);
        [this.SecurityService, this.$bs5ModalInstance] = child;
    }
}
```

### How It Works
1. Creates global registry for modal instances
2. Uses `$provide.decorator` to override `$bs5ModalInstance` resolution
3. Falls back to scope-based access if injection fails

### Pros
- ✅ Supports both `template` + `controller` and `component`
- ✅ Same controller code for both approaches
- ✅ Injectable `$bs5ModalInstance`

### Cons
- ⚠️ Uses global registry (potential memory leak if not cleaned up)
- ⚠️ Decorator pattern may not work in all AngularJS versions
- ⚠️ More complex, harder to debug
- ⚠️ Not a standard AngularJS pattern

---

## Recommendation

### Use Version 1 If:
- You want reliable, production-ready code
- You're okay using `template` + `controller`
- You prefer standard AngularJS patterns

### Use Version 2 If:
- You must use `component` option
- You're willing to test thoroughly
- You understand the workarounds and risks

---

## Alternative: Scope-Based Access (Simplest)

**Works with ANY version**, no injection needed:

```typescript
class SignInFormCtrl extends BaseController {
    static $inject = [
        ...BaseController.$inject,
        'SecurityService'
    ];

    private $bs5ModalInstance: any;

    constructor(...args: any[]) {
        const [base, child] = BaseController.extractServices(args);
        super(...base);
        [this.SecurityService] = child;
        
        // ✅ Works for both template and component
        this.$bs5ModalInstance = (this.$scope as any).$bs5ModalInstance;
        this.initialize();
    }
}
```

**Benefits:**
- ✅ Works with Version 1 OR Version 2
- ✅ Works with `template` OR `component`
- ✅ No complex workarounds
- ✅ Reliable and simple

**Recommendation:** Start with Version 1 + scope-based access. It's the most reliable combination.
