'use strict';

describe('Menu item directive', function() {
  var $q, $rootScope;
  
  
  beforeEach(function(){
  	 
  	module('application.filters', 'application.services', 'application.controllers', 'application.directives' , 'application.constants');  	
  	module(function($provide) {
    	//$provide.value('api', mockApi);
    });
  	 
  	inject(function($injector){
	  	$q = $injector.get('$q')
	  	$rootScope = $injector.get('$rootScope');
	  	
  	});
  });
  
  afterEach(function(){
	  
	  $rootScope.$digest();
	  
  });
 
  it('should successfully log a user in', function() {
  
    //expect(true).toBe(false);

	});  
});
       