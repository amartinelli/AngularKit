'use strict';

/**
 * @ngdoc function
 * @name app.route:arrecadacaoRoute
 * @description
 * # arrecadacaoRoute
 * Route of the app
 */

angular.module('arrecadacao')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.arrecadacao', {
				url:'/arrecadacao',
				templateUrl: 'app/modules/arrecadacao/arrecadacao.html',
				controller: 'ArrecadacaoCtrl',
				controllerAs: 'vm'
			});

		
	}]);
