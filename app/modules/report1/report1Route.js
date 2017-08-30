'use strict';

/**
 * @ngdoc function
 * @name app.route:report1Route
 * @description
 * # report1Route
 * Route of the app
 */

angular.module('report1')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.report1', {
				url:'/report1',
				templateUrl: 'app/modules/report1/report1.html',
				controller: 'Report1Ctrl',
				controllerAs: 'vm'
			});

		
	}]);
