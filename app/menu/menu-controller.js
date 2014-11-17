(function (window, ng) {
	'use strict';

	var menuController = function(menu, $scope){
		menu.get()
			.then(function (data) {
				$scope.items = data;
			});
	};

	ng.module('application.controllers')
		.controller('menu', ['menu', '$scope', menuController]);
})(window, window.angular);