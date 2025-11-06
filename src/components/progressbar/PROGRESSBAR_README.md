# Progressbar Component (TypeScript)

Bootstrap 5 progress bar component for AngularJS with TypeScript support.

## Features

- ✅ Full TypeScript support with type definitions
- ✅ Single progress bars with `<bs5-progressbar>`
- ✅ Stacked progress bars with `<bs5-progress>` and `<bs5-bar>`
- ✅ Multiple types: success, info, warning, danger
- ✅ Animated and striped styles
- ✅ Configurable max values
- ✅ Optional transition animations
- ✅ Accessibility (ARIA) support

## Installation

### NPM Dependencies

```bash
npm install angular @types/angular
npm install --save-dev typescript
```

### Project Setup

```bash
# Copy files to your project
src/components/progressbar/
├── progressbar.module.ts
├── progressbar.types.ts
└── README.md
```

### TypeScript Configuration

```json
{
  "compilerOptions": {
    "target": "ES6",
    "module": "ES6",
    "strict": true,
    "esModuleInterop": true,
    "declaration": true
  }
}
```

## Usage

### Import Module

```typescript
import * as angular from 'angular';
import ProgressbarModule from './components/progressbar/progressbar.module';

angular.module('myApp', [ProgressbarModule]);
```

### Type-Safe Controller

```typescript
import * as angular from 'angular';

interface IMyScope extends angular.IScope {
    progress: number;
    type: string;
}

class MyController {
    static $inject = ['$scope'];

    constructor(private $scope: IMyScope) {
        $scope.progress = 75;
        $scope.type = 'success';
    }
}
```

## Components

### bs5-progressbar

Single progress bar directive.

**Attributes:**
- `value` (=): Current progress value
- `max` (@, default: 100): Maximum value
- `type` (@): Bootstrap type ('success', 'info', 'warning', 'danger')
- `animate` (=?, default: true): Enable animations
- `title` (@, default: 'progressbar'): ARIA label

**Examples:**

```html
<!-- Basic -->
<bs5-progressbar value="55"></bs5-progressbar>

<!-- With type -->
<bs5-progressbar value="75" type="success"></bs5-progressbar>

<!-- Striped and animated -->
<bs5-progressbar class="progress-striped active" value="60" type="info">
    60%
</bs5-progressbar>

<!-- Custom max -->
<bs5-progressbar max="200" value="150">
    {{150}} / {{200}}
</bs5-progressbar>

<!-- No animation -->
<bs5-progressbar animate="false" value="myValue">
    {{myValue}}%
</bs5-progressbar>
```

### bs5-progress + bs5-bar

Stacked progress bars.

**bs5-progress Attributes:**
- `max` (@, default: 100): Shared maximum value
- `animate` (=?, default: true): Enable animations
- `title` (@, default: 'progressbar'): ARIA label

**bs5-bar Attributes:**
- `value` (=): Current value
- `type` (@): Bootstrap type
- `title` (@, default: 'progressbar'): ARIA label

**Example:**

```html
<bs5-progress>
    <bs5-bar value="35" type="success">35%</bs5-bar>
    <bs5-bar value="20" type="warning">20%</bs5-bar>
    <bs5-bar value="15" type="danger">15%</bs5-bar>
</bs5-progress>
```

## TypeScript Examples

### Dynamic Progress Bar

```typescript
interface IProgressScope extends angular.IScope {
    value: number;
    type: string;
}

class ProgressController {
    static $inject = ['$scope', '$interval'];

    constructor(
        private $scope: IProgressScope,
        private $interval: angular.IIntervalService
    ) {
        $scope.value = 0;
        $scope.type = 'info';

        $interval(() => {
            $scope.value = ($scope.value + 10) % 100;
            $scope.type = this.getType($scope.value);
        }, 1000);
    }

    private getType(value: number): string {
        if (value < 30) return 'danger';
        if (value < 70) return 'warning';
        return 'success';
    }
}
```

### Stacked Bars with Types

```typescript
interface IStackedBar {
    value: number;
    type: string;
}

interface IStackedScope extends angular.IScope {
    bars: IStackedBar[];
}

class StackedController {
    static $inject = ['$scope'];

    constructor(private $scope: IStackedScope) {
        $scope.bars = [
            { value: 25, type: 'success' },
            { value: 35, type: 'info' },
            { value: 20, type: 'warning' },
            { value: 10, type: 'danger' }
        ];
    }
}
```

```html
<bs5-progress>
    <bs5-bar ng-repeat="bar in bars track by $index" 
             value="bar.value" 
             type="{{bar.type}}">
        <span ng-hide="bar.value < 5">{{bar.value}}%</span>
    </bs5-bar>
</bs5-progress>
```

## Type Definitions

The component exports these TypeScript interfaces:

```typescript
export interface IProgressbarScope extends angular.IScope {
    value: number;
    max: number;
    type?: string;
    animate: boolean;
    title: string;
}

export interface IProgressScope extends angular.IScope {
    max: number;
    animate: boolean;
    title: string;
}

export interface IBarScope extends angular.IScope {
    value: number;
    type?: string;
    title: string;
    max: number;
    animate: boolean;
}

export interface IProgressController {
    max: number;
    animate: boolean;
    bars: IBarScope[];
    addBar(bar: IBarScope): void;
    removeBar(bar: IBarScope): void;
}
```

## Building

```bash
# Compile TypeScript
npm run build

# Watch mode
npm run watch

# Clean
npm run clean
```

## API Reference

### Directives

| Directive | Type | Description |
|-----------|------|-------------|
| bs5-progressbar | E | Single progress bar |
| bs5-progress | E | Container for stacked bars |
| bs5-bar | E | Individual bar in stack |

### Controller

| Name | Type | Description |
|------|------|-------------|
| Bs5ProgressController | Controller | Manages stacked bars |

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- IE 11+ (with polyfills)

## Requirements

- AngularJS 1.8.x
- Bootstrap 5.x CSS
- TypeScript 5.x

## License

MIT
