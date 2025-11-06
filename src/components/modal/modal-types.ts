// Modal Module Types

export type ModalSize = 'sm' | 'md' | 'lg' | 'xl' | 'fullscreen' | 'fullscreen-sm-down' | 'fullscreen-md-down' | 'fullscreen-lg-down' | 'fullscreen-xl-down' | 'fullscreen-xxl-down';

export interface ModalOptions {
    staticBackdrop?: boolean;
    size?: ModalSize;
    centered?: boolean;
    scrollable?: boolean;
    container?: string;
    controller?: string | Function | any[];
    controllerAs?: string;
    templateUrl?: string;
    template?: string;
    component?: string;
    resolve?: Record<string, any>;
}

export interface ModalInstance {
    close: (result?: any) => void;
    dismiss: (reason?: any) => void;
    result: ng.IPromise<any>;
    opened: ng.IPromise<void>;
    closed: ng.IPromise<any>;
    rendered: ng.IPromise<void>;
}

export interface ModalController {
    visible?: boolean;
    backdrop?: string;
    keyboard?: boolean;
    focus?: boolean;
    size?: ModalSize;
    centered?: boolean;
    scrollable?: boolean;
    modalInstance?: ModalInstanceAPI;
    onClose?: (params: { $result: any }) => void;
    onDismiss?: (params: { $reason: any }) => void;
    onShow?: (params: { $event: any }) => void;
    onShown?: (params: { $event: any }) => void;
    onHide?: (params: { $event: any }) => void;
    onHidden?: (params: { $event: any }) => void;
    onHidePrevented?: (params: { $event: any }) => void;
}

export interface ModalInstanceAPI {
    show: () => void;
    hide: () => void;
    toggle: () => void;
    handleUpdate: () => void;
    dispose: () => void;
}

/**
 * Utility: Get Bootstrap modal dialog CSS classes
 */
export function getModalDialogClasses(size?: ModalSize, centered?: boolean, scrollable?: boolean): string {
    return [
        'modal-dialog',
        size  && `modal-${size}`,
        centered && 'modal-dialog-centered',
        scrollable && 'modal-dialog-scrollable'
    ].filter(Boolean).join(' ');
}