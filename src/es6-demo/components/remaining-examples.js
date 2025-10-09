// Create remaining example components

// Toast Example
import angular from 'angular';

class ToastExampleController {
  constructor($scope) {
    'ngInject';
    this.$scope = $scope;
  }
  
  showToast(toastId) {
    const toastEl = document.getElementById(toastId);
    if (toastEl) {
      const toast = new bootstrap.Toast(toastEl);
      toast.show();
    }
  }
}

export const toastExampleModule = angular.module('toastExample', [])
  .component('toastExample', {
    template: `
      <div class="demo-content">
        <div class="alert alert-info">
          <h5><i class="bi bi-bell"></i> Toast Component</h5>
          <p class="mb-0">Push notifications using Bootstrap 5 toasts.</p>
        </div>
        
        <div class="card">
          <div class="card-header bg-primary text-white">
            <h5 class="mb-0">Toast Examples</h5>
          </div>
          <div class="card-body">
            <button class="btn btn-primary me-2" ng-click="$ctrl.showToast('toast1')">Show Toast</button>
            <button class="btn btn-success me-2" ng-click="$ctrl.showToast('toast2')">Show Success</button>
            <button class="btn btn-danger" ng-click="$ctrl.showToast('toast3')">Show Error</button>
            
            <div class="toast-container position-fixed top-0 end-0 p-3">
              <div id="toast1" class="toast" role="alert">
                <div class="toast-header">
                  <strong class="me-auto">Notification</strong>
                  <small>Just now</small>
                  <button type="button" class="btn-close" data-bs-dismiss="toast"></button>
                </div>
                <div class="toast-body">Hello! This is a toast message.</div>
              </div>
              
              <div id="toast2" class="toast" role="alert">
                <div class="toast-header bg-success text-white">
                  <strong class="me-auto">Success</strong>
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast"></button>
                </div>
                <div class="toast-body">Operation completed successfully!</div>
              </div>
              
              <div id="toast3" class="toast" role="alert">
                <div class="toast-header bg-danger text-white">
                  <strong class="me-auto">Error</strong>
                  <button type="button" class="btn-close btn-close-white" data-bs-dismiss="toast"></button>
                </div>
                <div class="toast-body">An error occurred!</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    controller: ToastExampleController
  });

// Offcanvas Example
class OffcanvasExampleController {
  constructor($scope) {
    'ngInject';
    this.$scope = $scope;
  }
}

export const offcanvasExampleModule = angular.module('offcanvasExample', [])
  .component('offcanvasExample', {
    template: `
      <div class="demo-content">
        <div class="alert alert-info">
          <h5><i class="bi bi-layout-sidebar"></i> Offcanvas Component</h5>
          <p class="mb-0">Hidden sidebar content that slides in from the edge.</p>
        </div>
        
        <div class="card">
          <div class="card-header bg-primary text-white">
            <h5 class="mb-0">Offcanvas Examples</h5>
          </div>
          <div class="card-body">
            <button class="btn btn-primary me-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasLeft">
              Left Offcanvas
            </button>
            <button class="btn btn-success me-2" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight">
              Right Offcanvas
            </button>
            <button class="btn btn-info" data-bs-toggle="offcanvas" data-bs-target="#offcanvasTop">
              Top Offcanvas
            </button>
            
            <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasLeft">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title">Left Offcanvas</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
              </div>
              <div class="offcanvas-body">
                <p>Content for the left offcanvas goes here.</p>
                <ul>
                  <li>Navigation item 1</li>
                  <li>Navigation item 2</li>
                  <li>Navigation item 3</li>
                </ul>
              </div>
            </div>
            
            <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title">Right Offcanvas</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
              </div>
              <div class="offcanvas-body">
                <p>Content for the right offcanvas goes here.</p>
                <p>Perfect for additional navigation or settings.</p>
              </div>
            </div>
            
            <div class="offcanvas offcanvas-top" tabindex="-1" id="offcanvasTop">
              <div class="offcanvas-header">
                <h5 class="offcanvas-title">Top Offcanvas</h5>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
              </div>
              <div class="offcanvas-body">
                <p>Content for the top offcanvas goes here.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    `,
    controller: OffcanvasExampleController
  });

// Pagination Example
class PaginationExampleController {
  constructor($scope) {
    'ngInject';
    this.$scope = $scope;
    this.currentPage = 1;
    this.totalPages = 10;
  }
  
  setPage(page) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }
}

export const paginationExampleModule = angular.module('paginationExample', [])
  .component('paginationExample', {
    template: `
      <div class="demo-content">
        <div class="alert alert-info">
          <h5><i class="bi bi-file-earmark-text"></i> Pagination Component</h5>
          <p class="mb-0">Page navigation controls.</p>
        </div>
        
        <h3 class="mb-3">Pagination Examples</h3>
        
        <div class="card mb-4">
          <div class="card-header bg-primary text-white">
            <h5 class="mb-0">Basic Pagination</h5>
          </div>
          <div class="card-body">
            <nav>
              <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#">Previous</a></li>
                <li class="page-item"><a class="page-link" href="#">1</a></li>
                <li class="page-item active"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
              </ul>
            </nav>
          </div>
        </div>
        
        <div class="card mb-4">
          <div class="card-header bg-success text-white">
            <h5 class="mb-0">Dynamic Pagination</h5>
          </div>
          <div class="card-body">
            <p>Current Page: <strong>{{$ctrl.currentPage}}</strong> / {{$ctrl.totalPages}}</p>
            <nav>
              <ul class="pagination">
                <li class="page-item" ng-class="{disabled: $ctrl.currentPage === 1}">
                  <a class="page-link" ng-click="$ctrl.setPage($ctrl.currentPage - 1)">Previous</a>
                </li>
                <li class="page-item" ng-repeat="page in [1,2,3,4,5]" ng-class="{active: page === $ctrl.currentPage}">
                  <a class="page-link" ng-click="$ctrl.setPage(page)">{{page}}</a>
                </li>
                <li class="page-item" ng-class="{disabled: $ctrl.currentPage === $ctrl.totalPages}">
                  <a class="page-link" ng-click="$ctrl.setPage($ctrl.currentPage + 1)">Next</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        
        <div class="card">
          <div class="card-header bg-info text-white">
            <h5 class="mb-0">Sizing</h5>
          </div>
          <div class="card-body">
            <nav><ul class="pagination pagination-lg">
              <li class="page-item active"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
            </ul></nav>
            
            <nav><ul class="pagination">
              <li class="page-item active"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
            </ul></nav>
            
            <nav><ul class="pagination pagination-sm mb-0">
              <li class="page-item active"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
            </ul></nav>
          </div>
        </div>
      </div>
    `,
    controller: PaginationExampleController
  });

// Progressbar Example
class ProgressbarExampleController {
  constructor($scope, $interval) {
    'ngInject';
    this.$scope = $scope;
    this.$interval = $interval;
    this.progress = 25;
    this.animatedProgress = 0;
    
    // Animate progress
    this.$interval(() => {
      this.animatedProgress = (this.animatedProgress + 1) % 101;
    }, 100);
  }
  
  setProgress(value) {
    this.progress = value;
  }
}
ProgressbarExampleController.$inject = ['$scope', '$interval'];

export const progressbarExampleModule = angular.module('progressbarExample', [])
  .component('progressbarExample', {
    template: `
      <div class="demo-content">
        <div class="alert alert-info">
          <h5><i class="bi bi-bar-chart"></i> Progressbar Component</h5>
          <p class="mb-0">Progress indicators and loading bars.</p>
        </div>
        
        <h3 class="mb-3">Progressbar Examples</h3>
        
        <div class="card mb-4">
          <div class="card-header bg-primary text-white">
            <h5 class="mb-0">Basic Progressbars</h5>
          </div>
          <div class="card-body">
            <div class="progress mb-3">
              <div class="progress-bar" style="width: 0%">0%</div>
            </div>
            <div class="progress mb-3">
              <div class="progress-bar" style="width: 25%">25%</div>
            </div>
            <div class="progress mb-3">
              <div class="progress-bar" style="width: 50%">50%</div>
            </div>
            <div class="progress mb-3">
              <div class="progress-bar" style="width: 75%">75%</div>
            </div>
            <div class="progress">
              <div class="progress-bar" style="width: 100%">100%</div>
            </div>
          </div>
        </div>
        
        <div class="card mb-4">
          <div class="card-header bg-success text-white">
            <h5 class="mb-0">Colored Progressbars</h5>
          </div>
          <div class="card-body">
            <div class="progress mb-3">
              <div class="progress-bar bg-success" style="width: 25%">Success</div>
            </div>
            <div class="progress mb-3">
              <div class="progress-bar bg-info" style="width: 50%">Info</div>
            </div>
            <div class="progress mb-3">
              <div class="progress-bar bg-warning" style="width: 75%">Warning</div>
            </div>
            <div class="progress">
              <div class="progress-bar bg-danger" style="width: 100%">Danger</div>
            </div>
          </div>
        </div>
        
        <div class="card mb-4">
          <div class="card-header bg-info text-white">
            <h5 class="mb-0">Dynamic Progressbar</h5>
          </div>
          <div class="card-body">
            <p>Progress: {{$ctrl.progress}}%</p>
            <div class="progress mb-3" style="height: 25px;">
              <div class="progress-bar progress-bar-striped progress-bar-animated" 
                   ng-style="{width: $ctrl.progress + '%'}">
                {{$ctrl.progress}}%
              </div>
            </div>
            <button class="btn btn-primary btn-sm me-2" ng-click="$ctrl.setProgress(0)">0%</button>
            <button class="btn btn-primary btn-sm me-2" ng-click="$ctrl.setProgress(25)">25%</button>
            <button class="btn btn-primary btn-sm me-2" ng-click="$ctrl.setProgress(50)">50%</button>
            <button class="btn btn-primary btn-sm me-2" ng-click="$ctrl.setProgress(75)">75%</button>
            <button class="btn btn-primary btn-sm" ng-click="$ctrl.setProgress(100)">100%</button>
          </div>
        </div>
        
        <div class="card mb-4">
          <div class="card-header bg-warning text-dark">
            <h5 class="mb-0">Animated Progressbar</h5>
          </div>
          <div class="card-body">
            <div class="progress" style="height: 25px;">
              <div class="progress-bar progress-bar-striped progress-bar-animated" 
                   ng-style="{width: $ctrl.animatedProgress + '%'}">
                {{$ctrl.animatedProgress}}%
              </div>
            </div>
          </div>
        </div>
        
        <div class="card">
          <div class="card-header bg-secondary text-white">
            <h5 class="mb-0">Stacked Progressbar</h5>
          </div>
          <div class="card-body">
            <div class="progress">
              <div class="progress-bar" style="width: 15%">15%</div>
              <div class="progress-bar bg-success" style="width: 30%">30%</div>
              <div class="progress-bar bg-info" style="width: 20%">20%</div>
            </div>
          </div>
        </div>
      </div>
    `,
    controller: ProgressbarExampleController
  });
