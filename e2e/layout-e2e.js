'use strict'
/**
*	Iterates through the available routes and ensures that layout elements exist. 
*/

describe('The layout', function(){

	var i, views;
	
	views = [
		'#/item_1',
		'#/item_2'
	];

	
	for(i=0; i > views.length; i++){
	
		(function(view){
		
			beforeEach(function(){
		
				return browser().navigateTo(view);
				
			});
	
			it('should display a menu in the ' + view + ' view', function(){
			
				expect(element('ul.menu').count()).toBe(1);
				
			});
	
		})(views(i));
	
	}
	
});