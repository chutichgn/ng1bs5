/**
 * Modal Controller
 * Manages Bootstrap 5 Modal instance and lifecycle
 */
class ModalController {
  /**
   * @ngInject
   */
  constructor($element, $timeout, $scope, $attrs) {
    'ngInject';
    
    this.$element = $element;
    this.$timeout = $timeout;
    this.$scope = $scope;
    this.$attrs = $attrs;
    
    // Bootstrap modal instance
    this.modal = null;
    
    // Track initialization state
    this.initialized = false;
    
    // Track visibility to prevent duplicate show/hide calls
    this._isVisible = false;
  }
  
  /**
   * Initialize component
   * Sets up Bootstrap 5 Modal instance after DOM is ready
   */
  $onInit() {
    // Set default values
    this.backdrop = this.backdrop !== undefined ? this.backdrop : 'true';
    this.keyboard = this.keyboard !== false;
    this.focus = this.focus !== false;
    this.size = this.size || '';
    this.centered = this.centered || false;
    this.scrollable = this.scrollable || false;
    
    // Wait for next digest to ensure DOM is ready
    this.$timeout(() => {
      this._initializeModal();
      this._setupEventListeners();
      
      // Handle initial visibility state
      if (this.visible) {
        this.show();
      }
    });
  }
  
  /**
   * Handle changes to component bindings
   */
  $onChanges(changes) {
    // Handle visibility changes
    if (changes.visible && this.initialized) {
      if (changes.visible.currentValue && !this._isVisible) {
        this.show();
      } else if (!changes.visible.currentValue && this._isVisible) {
        this.hide();
      }
    }
    
    // Note: Bootstrap 5 Modal doesn't support dynamic option updates
    // If options change, modal would need to be disposed and recreated
    if (this.initialized && (changes.backdrop || changes.keyboard || changes.focus)) {
      console.warn('Modal options cannot be changed after initialization. ' +
                   'Consider using modalInstance.dispose() and reinitializing.');
    }
  }
  
  /**
   * Initialize Bootstrap 5 Modal instance
   * @private
   */
  _initializeModal() {
    const modalElement = this.$element[0].querySelector('.modal');
    
    if (!modalElement) {
      console.error('Modal element not found. Ensure template includes .modal div.');
      return;
    }
    
    // Parse backdrop option
    let backdropOption = true;
    if (this.backdrop === 'false') {
      backdropOption = false;
    } else if (this.backdrop === 'static') {
      backdropOption = 'static';
    }
    
    // Configure modal options
    const options = {
      backdrop: backdropOption,
      keyboard: this.keyboard,
      focus: this.focus
    };
    
    // Create Bootstrap 5 Modal instance
    this.modal = new bootstrap.Modal(modalElement, options);
    
    // Expose modal instance if binding provided
    if (this.$attrs.modalInstance !== undefined) {
      this.modalInstance = this.modal;
    }
    
    this.initialized = true;
  }
  
  /**
   * Set up Bootstrap modal event listeners
   * @private
   */
  _setupEventListeners() {
    const modalElement = this.$element[0].querySelector('.modal');
    
    // show.bs.modal - fired immediately when show() is called
    modalElement.addEventListener('show.bs.modal', (event) => {
      this.$scope.$apply(() => {
        if (this.onShow) {
          this.onShow({ 
            $event: {
              originalEvent: event,
              relatedTarget: event.relatedTarget
            }
          });
        }
      });
    });
    
    // shown.bs.modal - fired after modal is fully shown
    modalElement.addEventListener('shown.bs.modal', (event) => {
      this._isVisible = true;
      this.$scope.$apply(() => {
        if (this.onShown) {
          this.onShown({ 
            $event: {
              originalEvent: event,
              relatedTarget: event.relatedTarget
            }
          });
        }
      });
    });
    
    // hide.bs.modal - fired immediately when hide() is called
    modalElement.addEventListener('hide.bs.modal', (event) => {
      this.$scope.$apply(() => {
        if (this.onHide) {
          this.onHide({ 
            $event: {
              originalEvent: event
            }
          });
        }
      });
    });
    
    // hidden.bs.modal - fired after modal is fully hidden
    modalElement.addEventListener('hidden.bs.modal', (event) => {
      this._isVisible = false;
      this.$scope.$apply(() => {
        if (this.onHidden) {
          this.onHidden({ 
            $event: {
              originalEvent: event
            }
          });
        }
      });
    });
    
    // hidePrevented.bs.modal - fired when static backdrop prevents close
    modalElement.addEventListener('hidePrevented.bs.modal', (event) => {
      this.$scope.$apply(() => {
        if (this.onHidePrevented) {
          this.onHidePrevented({ 
            $event: {
              originalEvent: event
            }
          });
        }
      });
    });
  }
  
  /**
   * Show the modal
   * Public method that can be called programmatically
   */
  show() {
    if (this.modal && !this._isVisible) {
      this.modal.show();
    }
  }
  
  /**
   * Hide the modal
   * Public method that can be called programmatically
   */
  hide() {
    if (this.modal && this._isVisible) {
      this.modal.hide();
    }
  }
  
  /**
   * Toggle modal visibility
   * Public method that can be called programmatically
   */
  toggle() {
    if (this.modal) {
      this.modal.toggle();
    }
  }
  
  /**
   * Manually readjust modal position
   * Useful when modal content changes dynamically
   */
  handleUpdate() {
    if (this.modal) {
      this.modal.handleUpdate();
    }
  }
  
  /**
   * Get dialog CSS classes based on configuration
   * @private
   */
  _getDialogClasses() {
    const classes = ['modal-dialog'];
    
    // Size classes
    if (this.size === 'sm') {
      classes.push('modal-sm');
    } else if (this.size === 'lg') {
      classes.push('modal-lg');
    } else if (this.size === 'xl') {
      classes.push('modal-xl');
    } else if (this.size === 'fullscreen') {
      classes.push('modal-fullscreen');
    } else if (this.size && this.size.startsWith('fullscreen-')) {
      classes.push(`modal-${this.size}`);
    }
    
    // Centered modifier
    if (this.centered) {
      classes.push('modal-dialog-centered');
    }
    
    // Scrollable modifier
    if (this.scrollable) {
      classes.push('modal-dialog-scrollable');
    }
    
    return classes.join(' ');
  }
  
  /**
   * Cleanup on component destruction
   */
  $onDestroy() {
    // Dispose of Bootstrap modal instance
    if (this.modal) {
      // Hide modal if visible before disposing
      if (this._isVisible) {
        this.modal.hide();
      }
      
      // Wait a bit for hide animation to complete
      this.$timeout(() => {
        if (this.modal) {
          this.modal.dispose();
          this.modal = null;
        }
      }, 300);
    }
  }
}

export default ModalController;
