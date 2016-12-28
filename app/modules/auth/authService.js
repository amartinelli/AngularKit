(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:authService
	 * @description
	 * # authService
	 * Service of the app
	 */

  	angular
		.module('auth')
		.factory('AuthService', Auth);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Auth.$inject = ['$http'];

		function Auth ($http) {

		}

})();
