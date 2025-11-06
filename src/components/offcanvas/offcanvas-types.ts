// Offcanvas Module Types

export interface OffcanvasOptions {
    offcanvasId: string;
    placement?: 'start' | 'end' | 'top' | 'bottom';
    scroll?: boolean | string;
    backdrop?: boolean | string;
    onShow?: () => void;
    onHide?: () => void;
    bindings?: Record<string, any>;
}

export interface OffcanvasInstance {
    scope: ng.IScope;
    element: ng.IAugmentedJQuery;
    destroy: () => void;
}

export interface IOffcanvasController {
    show(): void;
    hide(): void;
    toggle(): void;
}
