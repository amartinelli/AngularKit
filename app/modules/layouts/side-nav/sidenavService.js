(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:menuService
	 * @description
	 * # menuService
	 * Service of the app
	 */

  	angular
		.module('contrib')
		.factory('MenuService', Menu);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Menu.$inject = ['$http'];

		function Menu ($http) {

			var menu = [
				
					// {
					// 	link: 'login',
					// 		name: 'Login'
					// },
			    
					{
						link: 'users',
							name: 'Usuários'
					},
					{
						link: 'contribs',
							name: 'Contribuintes'
					},
					{
						link: 'arrecadacao',
							name: 'Arrecadação'
					},
					{
						link: 'report1',
							name: 'Relatório'
					},
			    
		  	];

			return {
				listMenu: function () {
					return menu;
				}
		  	}

		}

})();
