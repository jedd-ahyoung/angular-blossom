'use strict'

Application.Controllers.Menu = function(menu, $scope){
	
	$scope.items = menu.get();
	
}