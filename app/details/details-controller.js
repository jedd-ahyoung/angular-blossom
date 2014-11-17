(function (window, ng) {
	'use strict';

	var detailsController = function(menu, $scope, $routeParams){
		menu.get($routeParams.id)
			.then(function (data) {
				$scope.item = data;
			});
	};

	ng.module('application.controllers')
		.controller('details', ['menu', '$scope', '$routeParams', detailsController]); 
})(window, angular);