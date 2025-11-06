# Offcanvas Module - TypeScript Conversion

Bootstrap 5 Offcanvas component for AngularJS converted to TypeScript with ES6.

## Files Converted

- **offcanvas-types.ts** - TypeScript interfaces
- **offcanvas.service.ts** - Service with Map-based registry
- **offcanvas.directive.ts** - Component controller with full typing
- **offcanvas.module.ts** - Module definition

## Key Features

### Type Safety
```typescript
create(component: OffcanvasComponent, options: OffcanvasOptions): OffcanvasInstance
```

### Strong Typing for Placement
```typescript
placement?: 'start' | 'end' | 'top' | 'bottom';
```

### Interface Implementation
```typescript
class OffcanvasController implements IOffcanvasController {
    show(): void;
    hide(): void;
    toggle(): void;
}
```

## Usage

```typescript
constructor(private OffcanvasService: OffcanvasService) {}

openPanel(): void {
    this.OffcanvasService.show('userPanel');
}
```

## Installation

```bash
npm install --save-dev typescript @types/angular
```

See OFFCANVAS.md for complete API documentation and examples.
