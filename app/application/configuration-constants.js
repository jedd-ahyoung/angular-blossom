(function (window, module) {
	'use strict';

	/**
	* Defines application-wide key value pairs 
	*/

	var configurationConstant = {
		ITEMS_URL : 'menu/items.json'
	};

	module.constant('configuration', configurationConstant);
})(window, angular.module('application.constants'));