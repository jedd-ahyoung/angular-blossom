'use strict'

/**
* Defines the service that performs CRUD operations on menu items
*/

Application.Services.factory('menu', function(configuration, $q, $rootScope, $http) { 
		return {
		
			/**
			* Retrieves menu Items
			* @param {string} id the name of the single menu item to get.
			* @return {Promise} Resolves to JSON array of menu items.
			*/
			get : function(id){
				
				var items, deferred;
				
				deferred = $q.defer();
				
				$http.get(configuration.ITEMS_URL).
				  success(function(data, status, headers, config) {
				    
				    console.debug(data);
						deferred.resolve(data);
						
				  }).
				  error(function(data, status, headers, config) {				  
				  
				    console.error(data, status, headers, config);
				    deferred.reject(data);
				    
				    
				  });
				
				return deferred.promise;
			},
		
	}
});