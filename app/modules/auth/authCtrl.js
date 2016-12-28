(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:authCtrl
	* @description
	* # authCtrl
	* Controller of the app
	*/

  	angular
		.module('auth')
		.controller('AuthCtrl', Auth);

		Auth.$inject = [];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Auth() {
			/*jshint validthis: true */
			var vm = this;

		}

})();
