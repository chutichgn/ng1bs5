/**
 * bsLoadingOverlay Directive
 * Creates and manages loading overlay for an element
 */
function bsLoadingOverlayDirective($timeout, $compile, $templateRequest, LoadingOverlayService) {
    return {
        restrict: 'A',
        scope: false,
        link: function(scope, element, attrs, ctrl, transclude) {
            const service = LoadingOverlayService;

            // Get configuration from directive attributes
            const referenceId = attrs.bsLoadingOverlay || attrs.bsLoadingOverlayReferenceId || null;
            const activeClass = attrs.bsLoadingOverlayActiveClass || service.globalConfig.activeClass;
            const template = attrs.bsLoadingOverlayTemplate || service.globalConfig.template;
            const templateUrl = attrs.bsLoadingOverlayTemplateUrl || service.globalConfig.templateUrl;
            const delay = parseInt(attrs.bsLoadingOverlayDelay || attrs.loadingOverlayDelay) || service.globalConfig.delay || 0;

            // Parse template options if provided
            let templateOptions = service.globalConfig.templateOptions;
            if (attrs.bsLoadingOverlayTemplateOptions) {
                try {
                    templateOptions = scope.$eval(attrs.bsLoadingOverlayTemplateOptions);
                } catch (e) {
                    // Silently fail - use global config instead
                }
            }

            // Generate unique ID for this overlay
            const overlayId = referenceId || service.generateOverlayId();

            // State
            let isActive = false;
            let overlayElement = null;
            let hideTimeout = null;

            // Set element position to relative if not already positioned
            const position = element.css('position');
            if (position === 'static' || position === '') {
                element.css('position', 'relative');
            }

            /**
             * Create overlay element from inline template
             */
            const createOverlayFromTemplate = function(templateContent) {
                if (overlayElement) {
                    return;
                }

                // Create overlay wrapper with proper classes
                const wrapper = angular.element('<div class="bs-loading-overlay-wrapper"></div>');

                // Set inline styles to ensure visibility
                wrapper.css({
                    'position': 'absolute',
                    'top': '0',
                    'left': '0',
                    'right': '0',
                    'bottom': '0',
                    'z-index': '99999',
                    'pointer-events': 'auto'
                });

                const templateScope = scope.$new();

                // Add template options to scope
                if (templateOptions) {
                    templateScope.options = templateOptions;
                }

                const compiledTemplate = $compile(templateContent)(templateScope);
                wrapper.append(compiledTemplate);
                overlayElement = wrapper;

                // Initially hidden
                overlayElement.css('display', 'none');

                // Add to element
                element.append(overlayElement);
            };

            /**
             * Create overlay element from template URL
             */
            const createOverlayFromTemplateUrl = function(url) {
                if (overlayElement) {
                    return;
                }

                // Create overlay wrapper with proper classes
                const wrapper = angular.element('<div class="bs-loading-overlay-wrapper"></div>');

                // Set inline styles to ensure visibility
                wrapper.css({
                    'position': 'absolute',
                    'top': '0',
                    'left': '0',
                    'right': '0',
                    'bottom': '0',
                    'z-index': '99999',
                    'pointer-events': 'auto'
                });

                // Load template
                $templateRequest(url).then(function(templateContent) {
                    const templateScope = scope.$new();

                    // Add template options to scope
                    if (templateOptions) {
                        templateScope.options = templateOptions;
                    }

                    const compiledTemplate = $compile(templateContent)(templateScope);
                    wrapper.append(compiledTemplate);
                    overlayElement = wrapper;

                    // Initially hidden
                    overlayElement.css('display', 'none');

                    // Add to element
                    element.append(overlayElement);
                }).catch(function(error) {
                    console.error('Error loading overlay template:', error);
                });
            };

            /**
             * Create overlay element
             */
            const createOverlayElement = function() {
                // Priority: inline template > templateUrl
                if (template) {
                    createOverlayFromTemplate(template);
                } else if (templateUrl) {
                    createOverlayFromTemplateUrl(templateUrl);
                }
            };

            /**
             * Start overlay
             */
            const start = function() {
                // Cancel any pending hide timeout
                if (hideTimeout) {
                    $timeout.cancel(hideTimeout);
                    hideTimeout = null;
                }

                if (isActive) {
                    return;
                }

                isActive = true;

                // Add active class to element
                element.addClass('bs-loading-overlay-active');

                // Add user-defined active class
                if (activeClass) {
                    element.addClass(activeClass);
                }

                // Show overlay element
                if (template || templateUrl) {
                    createOverlayElement();
                    $timeout(() => {
                        if (overlayElement) {
                            overlayElement.css('display', 'flex');
                        }
                    });
                }
            };

            /**
             * Stop overlay
             */
            const stop = function() {
                if (!isActive) {
                    return;
                }

                // Apply delay before hiding
                hideTimeout = $timeout(() => {
                    isActive = false;
                    hideTimeout = null;

                    // Remove active class from element
                    element.removeClass('bs-loading-overlay-active');

                    // Remove user-defined active class
                    if (activeClass) {
                        element.removeClass(activeClass);
                    }

                    // Hide overlay element
                    if (overlayElement) {
                        overlayElement.css('display', 'none');
                    }
                }, delay);
            };

            // Create overlay instance
            const overlayInstance = {
                referenceId: referenceId,
                start: start,
                stop: stop
            };

            // Register overlay with service
            service.registerOverlay(overlayId, overlayInstance);

            // Cleanup on destroy
            scope.$on('$destroy', function() {
                if (hideTimeout) {
                    $timeout.cancel(hideTimeout);
                }
                service.unregisterOverlay(overlayId);
                if (overlayElement) {
                    overlayElement.remove();
                }
            });
        }
    };
}

// Strict DI
bsLoadingOverlayDirective.$inject = ['$timeout', '$compile', '$templateRequest', 'LoadingOverlayService'];


export default bsLoadingOverlayDirective;