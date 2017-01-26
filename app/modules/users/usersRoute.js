'use strict';

/**
 * @ngdoc function
 * @name app.route:usersRoute
 * @description
 * # usersRoute
 * Route of the app
 */

angular.module('users')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			// .state('home.users', {
			// 	url:'/users',
			// 	templateUrl: 'app/modules/users/users.html',
			// 	controller: 'UsersCtrl',
			// 	controllerAs: 'vm'
			// })
			.state('home.users',{
		        url:'/users',
		        templateUrl:'app/modules/users/users.html',
		        controller:'MovieListController',
		        controllerAs: 'vm'
		    }).state('home.viewUser',{
		       url:'/users/:id/view',
		       templateUrl:'app/modules/users/users-view.html',
		       controller:'MovieViewController',
		       controllerAs: 'vm'
		    }).state('home.newUser',{
		        url:'/users/new',
		        templateUrl:'app/modules/users/users-add.html',
		        controller:'MovieCreateController',
		        controllerAs: 'vm'
		    }).state('home.editUser',{
		        url:'/users/:id/edit',
		        templateUrl:'app/modules/users/users-edit.html',
		        controller:'MovieEditController',
		        controllerAs: 'vm'
		    });

		
	}]);
