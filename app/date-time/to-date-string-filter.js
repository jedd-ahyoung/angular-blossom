(function (window, ng) {
	'use strict';

	/**
	* @description
	*		converts a unix epoc timestamp to a human readable date time.
	*
	*	@param {number} timeStamp The date time in ms since midnight 1970.
	*	@return {Date} The formatted date.
	*/

	var toDateStringFilter = function() {
		return function(timeStamp) {
			var date;

			date = new Date(parseInt(timeStamp));

			return date.toLocaleDateString();
		};
	};

	ng.module('application.filters')
		.filter('toDateString', toDateStringFilter);
})(window, window.angular);