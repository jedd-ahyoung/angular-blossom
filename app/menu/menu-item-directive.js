(function (window, ng) {
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

	window.Application.Directives = ng.module('application.directives');
	window.Application.Directives.directive('menuItem', menuItemDirective);
})(window, window.angular);