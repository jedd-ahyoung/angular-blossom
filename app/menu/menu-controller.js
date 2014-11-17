(function (window, module) {
	'use strict';

	var menuController = function(menu, $scope){
		menu.get()
			.then(function (data) {
				$scope.items = data;
			});
	};

	module.controller('menu', ['menu', '$scope', menuController]);
})(window, angular.module('application.controllers'));