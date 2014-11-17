(function (window, module) {
	'use strict';

	/**
	* Defines a menu item.
	*/

	var menuItemDirective = function () {
		return {
			restrict : 'E',
			replace : true,
			templateUrl : 'menu/menu-item-template.html',
			scope: {
				id : '=id',
				name : '=name'
			},
			//TODO: define directive controller.
			link : function(scope, element, attrs) {

			}
		};
	};

	module.directive('menuItem', menuItemDirective);
})(window, angular.module('application.directives'));