'use strict'

/**
* The application file bootstraps the angular app by  initializing the main module and 
* creating namespaces and moduled for controllers, filters, services, and directives. 
*/

var Application = Application || {};

Application.Controllers = Application.Controllers || {};

Application.Filters = angular.module('application.filters', []);
Application.Services = angular.module('application.services', []);
Application.Directives = angular.module('application.directives', []);


angular.module('application', ['application.filters', 'application.services', 'application.directives']).
  config(['$routeProvider', function($routeProvider) {
    
    $routeProvider.
      when('/about', {templateUrl: 'about/about-partial.html'}).
      when('/:view/', {templateUrl: 'details/details-partial.html',   controller: Application.Controllers.DetailsController}).
      otherwise({templateUrl: '/errors/error-partial.html', controller: Application.Controllers.ErrorController});
  }]);