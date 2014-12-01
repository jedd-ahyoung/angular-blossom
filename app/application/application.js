(function (window, ng) {
	'use strict';

	/**
	* The application file bootstraps the angular app by  initializing the main module and 
	* creating namespaces and moduled for controllers, filters, services, and directives. 
	*/

	ng.module('application.filters', []);
	ng.module('application.services', []);
	ng.module('application.directives', []);
	ng.module('application.constants', []);
	ng.module('application.controllers', []);

	ng.module('application', [
		'application.filters',
		'application.services',
		'application.directives',
		'application.constants',
		'application.controllers',
		'ngRoute'
	])
		.config(['$routeProvider', function ($routeProvider) {
			$routeProvider
				.when('/about', {templateUrl: 'about/about-partial.html'})
				.when('/:id/', {templateUrl: 'details/details-partial.html'})
				.otherwise({templateUrl: 'error/error-partial.html'});
		}]);
})(window, window.angular);
