'use strict';

/**
 * @ngdoc function
 * @name app.route:contribsRoute
 * @description
 * # contribsRoute
 * Route of the app
 */

angular.module('contribs')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			// .state('home.contribs', {
			// 	url:'/contribs',
			// 	templateUrl: 'app/modules/contribs/contribs.html',
			// 	controller: 'ContribsCtrl',
			// 	controllerAs: 'vm'
			// })
			.state('home.contribs',{
		        url:'/contribs',
		        templateUrl:'app/modules/contribs/contribs.html',
		        controller:'ContribListController',
		        controllerAs: 'vm'
		    }).state('home.viewContrib',{
		       url:'/contribs/:id/view',
		       templateUrl:'app/modules/contribs/contribs-view.html',
		       controller:'ContribViewController',
		       controllerAs: 'vm'
		    }).state('home.newContrib',{
		        url:'/contribs/new',
		        templateUrl:'app/modules/contribs/contribs-add.html',
		        controller:'ContribCreateController',
		        controllerAs: 'vm'
		    }).state('home.editContrib',{
		        url:'/contribs/:id/edit',
		        templateUrl:'app/modules/contribs/contribs-edit.html',
		        controller:'ContribEditController',
		        controllerAs: 'vm'
	        }).state('home.deleteContrib',{
		        url:'/contribs/:id/delete',
		        templateUrl:'app/modules/contribs/contribs-delete.html',
		        controller:'ContribEditController',
		        controllerAs: 'vm'
		    });

		
	}]);

