(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:arrecadacaoService
	 * @description
	 * # arrecadacaoService
	 * Service of the app
	 */

  	angular
		.module('arrecadacao')
		.factory('ArrecadacaoService', Arrecadacao);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Arrecadacao.$inject = ['$http'];

		function Arrecadacao ($http) {

		}

})();
