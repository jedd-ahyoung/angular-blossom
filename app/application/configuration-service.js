'use strict'

/**
* Defines application-wide key value pairs 
*/

Application.Services.factory('configuration', function($q, $rootScope, $http) { 
	return {
		ITEMS_URL : 'menu/items.json'		
	}
});