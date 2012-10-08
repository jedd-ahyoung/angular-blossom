'use strict'

Application.Controllers.Details = function(menu, $scope, $routeParams){
	
	var item, id;
	
	id = $routeParams.id;
		
	$scope.item = menu.get(id);
	
}