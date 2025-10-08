# ng1bs5 Typical Usage Examples

Real-world usage patterns and examples for ng1bs5 loading overlays.

## Table of Contents

- [Basic Usage](#basic-usage)
- [HTTP Requests](#http-requests)
- [Form Submissions](#form-submissions)
- [Data Tables](#data-tables)
- [File Uploads](#file-uploads)
- [Multi-Step Operations](#multi-step-operations)
- [Page-Level Overlays](#page-level-overlays)
- [Error Handling](#error-handling)
- [Advanced Patterns](#advanced-patterns)

---

## Basic Usage

### Simple Button Click

Show overlay for a fixed duration:

```javascript
angular.module('myApp')
  .controller('SimpleCtrl', function($scope, $timeout, LoadingOverlayService) {
    
    $scope.doSomething = function() {
      // Start overlay
      LoadingOverlayService.start({ referenceId: 'myPanel' });
      
      // Simulate work
      $timeout(function() {
        // Stop overlay
        LoadingOverlayService.stop({ referenceId: 'myPanel' });
        
        // Update UI
        $scope.message = 'Done!';
      }, 2000);
    };
    
  });
```

```html
<div ng-controller="SimpleCtrl">
  <button ng-click="doSomething()">Do Something</button>
  
  <div bs-loading-overlay="myPanel" style="min-height: 200px;">
    <p>{{ message }}</p>
  </div>
</div>
```

---

## HTTP Requests

### Loading Data from API

**Method 1: Manual Control**

```javascript
.controller('UserListCtrl', function($scope, $http, LoadingOverlayService) {
  
  $scope.loadUsers = function() {
    LoadingOverlayService.start({ referenceId: 'userList' });
    
    $http.get('/api/users')
      .then(function(response) {
        $scope.users = response.data;
      })
      .catch(function(error) {
        $scope.error = 'Failed to load users';
        console.error(error);
      })
      .finally(function() {
        LoadingOverlayService.stop({ referenceId: 'userList' });
      });
  };
  
  // Load on init
  $scope.loadUsers();
  
});
```

**Method 2: Using wrap() (Recommended)**

```javascript
.controller('UserListCtrl', function($scope, $http, LoadingOverlayService) {
  
  $scope.loadUsers = function() {
    LoadingOverlayService.wrap(
      { referenceId: 'userList' },
      $http.get('/api/users')
    ).then(function(response) {
      $scope.users = response.data;
    }).catch(function(error) {
      $scope.error = 'Failed to load users';
      console.error(error);
    });
  };
  
  $scope.loadUsers();
  
});
```

**HTML:**

```html
<div ng-controller="UserListCtrl">
  <button ng-click="loadUsers()">Refresh</button>
  
  <div bs-loading-overlay="userList" class="table-container">
    <table class="table" ng-if="users.length">
      <tr ng-repeat="user in users">
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
      </tr>
    </table>
    
    <p ng-if="!users.length">No users found</p>
    <div ng-if="error" class="alert alert-danger">{{ error }}</div>
  </div>
</div>
```

---

## Form Submissions

### Saving Form Data

```javascript
.controller('ProfileCtrl', function($scope, $http, LoadingOverlayService) {
  
  $scope.user = {
    name: '',
    email: '',
    bio: ''
  };
  
  $scope.saveProfile = function() {
    if ($scope.profileForm.$invalid) {
      return;
    }
    
    LoadingOverlayService.wrap(
      { referenceId: 'profileForm' },
      $http.post('/api/profile', $scope.user)
    ).then(function(response) {
      $scope.successMessage = 'Profile saved successfully!';
      
      // Clear message after 3 seconds
      $timeout(function() {
        $scope.successMessage = null;
      }, 3000);
      
    }).catch(function(error) {
      $scope.errorMessage = error.data.message || 'Failed to save profile';
    });
  };
  
});
```

```html
<div ng-controller="ProfileCtrl">
  <form name="profileForm" ng-submit="saveProfile()">
    <div bs-loading-overlay="profileForm" class="form-container">
      
      <div class="mb-3">
        <label>Name</label>
        <input type="text" 
               class="form-control" 
               ng-model="user.name" 
               required>
      </div>
      
      <div class="mb-3">
        <label>Email</label>
        <input type="email" 
               class="form-control" 
               ng-model="user.email" 
               required>
      </div>
      
      <div class="mb-3">
        <label>Bio</label>
        <textarea class="form-control" 
                  ng-model="user.bio" 
                  rows="4"></textarea>
      </div>
      
      <button type="submit" 
              class="btn btn-primary" 
              ng-disabled="profileForm.$invalid">
        Save Profile
      </button>
      
      <div ng-if="successMessage" class="alert alert-success mt-3">
        {{ successMessage }}
      </div>
      
      <div ng-if="errorMessage" class="alert alert-danger mt-3">
        {{ errorMessage }}
      </div>
      
    </div>
  </form>
</div>
```

---

## Data Tables

### Searchable/Filterable Table

```javascript
.controller('ProductListCtrl', function($scope, $http, $timeout, LoadingOverlayService) {
  
  $scope.products = [];
  $scope.searchQuery = '';
  
  var searchTimeout;
  
  $scope.loadProducts = function() {
    LoadingOverlayService.wrap(
      { referenceId: 'productTable' },
      $http.get('/api/products', {
        params: { search: $scope.searchQuery }
      })
    ).then(function(response) {
      $scope.products = response.data;
    });
  };
  
  // Debounced search
  $scope.onSearchChange = function() {
    if (searchTimeout) {
      $timeout.cancel(searchTimeout);
    }
    
    searchTimeout = $timeout(function() {
      $scope.loadProducts();
    }, 500);
  };
  
  // Initial load
  $scope.loadProducts();
  
  // Delete product
  $scope.deleteProduct = function(productId) {
    if (!confirm('Delete this product?')) return;
    
    LoadingOverlayService.wrap(
      { referenceId: 'productTable' },
      $http.delete('/api/products/' + productId)
    ).then(function() {
      $scope.loadProducts(); // Reload list
    });
  };
  
});
```

```html
<div ng-controller="ProductListCtrl">
  <div class="mb-3">
    <input type="text" 
           class="form-control" 
           placeholder="Search products..." 
           ng-model="searchQuery" 
           ng-change="onSearchChange()">
  </div>
  
  <div bs-loading-overlay="productTable" style="min-height: 400px;">
    <table class="table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Stock</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr ng-repeat="product in products">
          <td>{{ product.name }}</td>
          <td>{{ product.price | currency }}</td>
          <td>{{ product.stock }}</td>
          <td>
            <button class="btn btn-sm btn-danger" 
                    ng-click="deleteProduct(product.id)">
              Delete
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    
    <p ng-if="!products.length" class="text-muted">
      No products found
    </p>
  </div>
</div>
```

---

## File Uploads

### Upload with Progress

```javascript
.controller('UploadCtrl', function($scope, $http, LoadingOverlayService) {
  
  $scope.selectedFile = null;
  
  $scope.onFileSelect = function(file) {
    $scope.selectedFile = file;
  };
  
  $scope.uploadFile = function() {
    if (!$scope.selectedFile) return;
    
    var formData = new FormData();
    formData.append('file', $scope.selectedFile);
    
    LoadingOverlayService.wrap(
      { referenceId: 'uploadArea' },
      $http.post('/api/upload', formData, {
        headers: { 'Content-Type': undefined },
        transformRequest: angular.identity
      })
    ).then(function(response) {
      $scope.uploadSuccess = true;
      $scope.uploadedUrl = response.data.url;
      $scope.selectedFile = null;
      
    }).catch(function(error) {
      $scope.uploadError = error.data.message || 'Upload failed';
    });
  };
  
});
```

```html
<div ng-controller="UploadCtrl">
  <div bs-loading-overlay="uploadArea" 
       bs-loading-overlay-template-options="{ loadingText: 'Uploading...' }"
       class="upload-container p-4 border rounded">
    
    <input type="file" 
           id="fileInput"
           onchange="angular.element(this).scope().onFileSelect(this.files[0])"
           class="form-control mb-3">
    
    <button class="btn btn-primary" 
            ng-click="uploadFile()" 
            ng-disabled="!selectedFile">
      Upload File
    </button>
    
    <div ng-if="uploadSuccess" class="alert alert-success mt-3">
      File uploaded successfully! 
      <a ng-href="{{ uploadedUrl }}" target="_blank">View file</a>
    </div>
    
    <div ng-if="uploadError" class="alert alert-danger mt-3">
      {{ uploadError }}
    </div>
    
  </div>
</div>
```

---

## Multi-Step Operations

### Sequential Operations

```javascript
.controller('OrderCtrl', function($scope, $http, $q, LoadingOverlayService) {
  
  $scope.placeOrder = function() {
    LoadingOverlayService.start({ referenceId: 'orderProcess' });
    
    // Step 1: Validate inventory
    $http.post('/api/orders/validate', $scope.cart)
      .then(function(response) {
        // Step 2: Process payment
        return $http.post('/api/payment/process', {
          amount: response.data.total,
          method: $scope.paymentMethod
        });
      })
      .then(function(paymentResponse) {
        // Step 3: Create order
        return $http.post('/api/orders/create', {
          items: $scope.cart,
          paymentId: paymentResponse.data.id
        });
      })
      .then(function(orderResponse) {
        // Success!
        $scope.orderComplete = true;
        $scope.orderId = orderResponse.data.orderId;
      })
      .catch(function(error) {
        $scope.orderError = error.data.message;
      })
      .finally(function() {
        LoadingOverlayService.stop({ referenceId: 'orderProcess' });
      });
  };
  
});
```

### Parallel Operations

```javascript
.controller('DashboardCtrl', function($scope, $http, $q, LoadingOverlayService) {
  
  $scope.loadDashboard = function() {
    LoadingOverlayService.start({ referenceId: 'dashboard' });
    
    // Load multiple endpoints in parallel
    $q.all({
      users: $http.get('/api/stats/users'),
      sales: $http.get('/api/stats/sales'),
      orders: $http.get('/api/stats/orders')
    })
    .then(function(results) {
      $scope.stats = {
        users: results.users.data,
        sales: results.sales.data,
        orders: results.orders.data
      };
    })
    .catch(function(error) {
      $scope.error = 'Failed to load dashboard';
    })
    .finally(function() {
      LoadingOverlayService.stop({ referenceId: 'dashboard' });
    });
  };
  
  $scope.loadDashboard();
  
});
```

---

## Page-Level Overlays

### Full Page Loading

```javascript
.controller('AppCtrl', function($scope, $http, LoadingOverlayService) {
  
  $scope.loadApp = function() {
    LoadingOverlayService.wrap(
      { referenceId: 'appContainer' },
      $http.get('/api/init')
    ).then(function(response) {
      $scope.appData = response.data;
      $scope.isReady = true;
    });
  };
  
  $scope.loadApp();
  
});
```

```html
<body ng-controller="AppCtrl">
  <div bs-loading-overlay="appContainer" style="min-height: 100vh;">
    
    <!-- Show when ready -->
    <div ng-if="isReady">
      <!-- Your app content -->
      <nav>...</nav>
      <main>...</main>
    </div>
    
    <!-- Show while loading -->
    <div ng-if="!isReady" class="text-center p-5">
      <p>Loading application...</p>
    </div>
    
  </div>
</body>
```

### Route Change Loading

```javascript
.config(function($routeProvider) {
  $routeProvider
    .when('/users', {
      templateUrl: 'views/users.html',
      controller: 'UserCtrl',
      resolve: {
        users: function($http) {
          return $http.get('/api/users');
        }
      }
    });
})
.run(function($rootScope, LoadingOverlayService) {
  // Show overlay on route change start
  $rootScope.$on('$routeChangeStart', function() {
    LoadingOverlayService.start({ referenceId: 'mainView' });
  });
  
  // Hide on success
  $rootScope.$on('$routeChangeSuccess', function() {
    LoadingOverlayService.stop({ referenceId: 'mainView' });
  });
  
  // Hide on error
  $rootScope.$on('$routeChangeError', function() {
    LoadingOverlayService.stop({ referenceId: 'mainView' });
  });
});
```

```html
<div bs-loading-overlay="mainView" ng-view style="min-height: 600px;"></div>
```

---

## Error Handling

### Graceful Error Handling

```javascript
.controller('DataCtrl', function($scope, $http, LoadingOverlayService) {
  
  $scope.loadData = function() {
    LoadingOverlayService.wrap(
      { referenceId: 'dataPanel' },
      $http.get('/api/data')
    )
    .then(function(response) {
      $scope.data = response.data;
      $scope.error = null;
    })
    .catch(function(error) {
      // Handle different error types
      if (error.status === 404) {
        $scope.error = 'Data not found';
      } else if (error.status === 403) {
        $scope.error = 'Access denied';
      } else if (error.status === 500) {
        $scope.error = 'Server error. Please try again later.';
      } else {
        $scope.error = 'Failed to load data';
      }
      
      console.error('Load error:', error);
    });
  };
  
  $scope.retry = function() {
    $scope.error = null;
    $scope.loadData();
  };
  
  $scope.loadData();
  
});
```

```html
<div bs-loading-overlay="dataPanel" style="min-height: 300px;">
  <div ng-if="data && !error">
    <!-- Show data -->
    <pre>{{ data | json }}</pre>
  </div>
  
  <div ng-if="error" class="alert alert-danger">
    <h5>Error</h5>
    <p>{{ error }}</p>
    <button class="btn btn-primary" ng-click="retry()">
      Try Again
    </button>
  </div>
</div>
```

### Timeout Handling

```javascript
.controller('TimeoutCtrl', function($scope, $http, $timeout, LoadingOverlayService) {
  
  $scope.loadWithTimeout = function() {
    var timeout = $timeout(function() {
      // Request took too long
      $scope.timeoutError = true;
    }, 10000); // 10 second timeout
    
    LoadingOverlayService.wrap(
      { referenceId: 'panel' },
      $http.get('/api/slow-endpoint')
    )
    .then(function(response) {
      $timeout.cancel(timeout);
      $scope.data = response.data;
      $scope.timeoutError = false;
    })
    .catch(function(error) {
      $timeout.cancel(timeout);
      if (!$scope.timeoutError) {
        $scope.error = 'Request failed';
      }
    });
  };
  
});
```

---

## Advanced Patterns

### Conditional Overlays

```javascript
.controller('ConditionalCtrl', function($scope, $http, LoadingOverlayService) {
  
  $scope.loadData = function(showOverlay) {
    var options = showOverlay ? { referenceId: 'dataPanel' } : {};
    
    var promise = $http.get('/api/data');
    
    if (showOverlay) {
      LoadingOverlayService.wrap(options, promise)
        .then(handleSuccess)
        .catch(handleError);
    } else {
      promise.then(handleSuccess).catch(handleError);
    }
  };
  
  function handleSuccess(response) {
    $scope.data = response.data;
  }
  
  function handleError(error) {
    $scope.error = error.data.message;
  }
  
});
```

### Nested Overlays

```javascript
.controller('NestedCtrl', function($scope, $http, LoadingOverlayService) {
  
  // Load parent data
  $scope.loadParent = function() {
    LoadingOverlayService.wrap(
      { referenceId: 'parent' },
      $http.get('/api/parent')
    ).then(function(response) {
      $scope.parent = response.data;
    });
  };
  
  // Load child data (independent overlay)
  $scope.loadChild = function() {
    LoadingOverlayService.wrap(
      { referenceId: 'child' },
      $http.get('/api/child')
    ).then(function(response) {
      $scope.child = response.data;
    });
  };
  
});
```

```html
<div bs-loading-overlay="parent" class="parent-container">
  <h3>Parent Data</h3>
  <button ng-click="loadParent()">Load Parent</button>
  
  <div bs-loading-overlay="child" class="child-container mt-3">
    <h4>Child Data</h4>
    <button ng-click="loadChild()">Load Child</button>
  </div>
</div>
```

### Service Wrapper

Create a wrapper service for common patterns:

```javascript
.factory('DataService', function($http, LoadingOverlayService) {
  return {
    load: function(url, overlayId) {
      return LoadingOverlayService.wrap(
        { referenceId: overlayId },
        $http.get(url)
      ).then(function(response) {
        return response.data;
      });
    },
    
    save: function(url, data, overlayId) {
      return LoadingOverlayService.wrap(
        { referenceId: overlayId },
        $http.post(url, data)
      ).then(function(response) {
        return response.data;
      });
    },
    
    delete: function(url, overlayId) {
      return LoadingOverlayService.wrap(
        { referenceId: overlayId },
        $http.delete(url)
      ).then(function(response) {
        return response.data;
      });
    }
  };
});

// Usage
.controller('MyCtrl', function($scope, DataService) {
  $scope.loadUsers = function() {
    DataService.load('/api/users', 'userList')
      .then(function(users) {
        $scope.users = users;
      })
      .catch(function(error) {
        $scope.error = 'Failed to load users';
      });
  };
});
```

---

## Best Practices

### 1. Always Use Reference IDs

```javascript
// Good
LoadingOverlayService.start({ referenceId: 'userList' });

// Avoid (harder to control)
LoadingOverlayService.start();
```

### 2. Use wrap() for Promises

```javascript
// Good - automatic cleanup
LoadingOverlayService.wrap(
  { referenceId: 'panel' },
  $http.get('/api/data')
);

// Works but more code
LoadingOverlayService.start({ referenceId: 'panel' });
$http.get('/api/data').finally(function() {
  LoadingOverlayService.stop({ referenceId: 'panel' });
});
```

### 3. Handle Errors

```javascript
// Always catch errors
LoadingOverlayService.wrap(
  { referenceId: 'panel' },
  $http.get('/api/data')
).then(function(response) {
  // Success
}).catch(function(error) {
  // Handle error
  console.error(error);
});
```

### 4. Set Minimum Height

```html
<!-- Good - has height -->
<div bs-loading-overlay="panel" style="min-height: 200px;">

<!-- May not show overlay properly -->
<div bs-loading-overlay="panel">
```

### 5. Use Template Options

```html
<!-- Customize per use case -->
<div bs-loading-overlay="saveForm"
     bs-loading-overlay-template-options="{
       loadingText: 'Saving...',
       spinnerClass: 'text-success'
     }">
</div>
```

---

## Common Pitfalls

### ❌ Forgetting ng1bs5.css

```html
<!-- Will not work without CSS! -->
<script src="loading-overlay.service.js"></script>
<script src="loading-overlay.directive.js"></script>
```

### ❌ No Template Configured

```javascript
// No template set!
angular.module('myApp', ['ng1bs5']);
```

### ❌ Calling Before Registration

```javascript
// This works! Commands are queued
$scope.init = function() {
  LoadingOverlayService.start({ referenceId: 'panel' });
  // Overlay will start once directive registers
};
```

---

## See Also

- **[API Reference](API.md)** - Complete API documentation
- **[Getting Started](GETTING-STARTED-COMPLETE.md)** - Setup guide
- **[Template Guide](NG-TEMPLATE-GUIDE.md)** - Working with templates
- **[Live Demos](demo-ng-template.html)** - Interactive examples

---

**Need more examples?** Check the [demo files](index.html) for live, interactive examples!
