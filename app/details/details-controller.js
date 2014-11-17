(function (window, module) {
	'use strict';

	var detailsController = function(menu, $scope, $routeParams){
		menu.get($routeParams.id)
			.then(function (data) {
				$scope.item = data;
			});
	};

	module.controller('details', ['menu', '$scope', '$routeParams', detailsController]); 
})(window, angular.module('application.controllers'));