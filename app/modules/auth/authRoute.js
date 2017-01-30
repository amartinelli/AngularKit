'use strict';

/**
 * @ngdoc function
 * @name app.route:authRoute
 * @description
 * # authRoute
 * Route of the app
 */

angular.module('auth')
	.config(LoginState)
	.run(LayoutLogin);

	//LoginState.$inject['$stateProvider'];

	function LoginState ($stateProvider) {
		
		$stateProvider
			// .state('home.auth', {
			// 	url:'/auth',
			// 	templateUrl: 'app/modules/auth/auth.html',
			// 	controller: 'AuthCtrl',
			// 	controllerAs: 'vm'
			// })
			.state('home.login', {
				url:'/login',
				templateUrl: 'app/modules/auth/auth.html',
				controller: 'AuthCtrl',
				controllerAs: 'vm'
			})
			;

		
	};


	LayoutLogin.$inject = [ '$state' , '$rootScope'];

	function LayoutLogin ($state , $rootScope) {
			//console.log($state)
			//$rootScope.telaLogin = 'teste';
	}