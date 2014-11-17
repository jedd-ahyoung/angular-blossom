(function (window, ng) {
	'use strict';

	/**
	* Defines application-wide key value pairs 
	*/

	var configurationConstant = {
		ITEMS_URL : 'menu/items.json'
	};

	ng.module('application.constants')
		.constant('configuration', configurationConstant);
})(window, window.angular);