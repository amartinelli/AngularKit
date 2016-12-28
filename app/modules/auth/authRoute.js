'use strict';

/**
 * @ngdoc function
 * @name app.route:authRoute
 * @description
 * # authRoute
 * Route of the app
 */

angular.module('auth')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.auth', {
				url:'/auth',
				templateUrl: 'app/modules/auth/auth.html',
				controller: 'AuthCtrl',
				controllerAs: 'vm'
			});

		
	}]);
