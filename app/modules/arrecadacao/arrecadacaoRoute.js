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
				controller: 'PaymentListController',
				controllerAs: 'vm'
			}).state('home.viewPayment',{
		       url:'/arrecadacao/:id/view',
		       templateUrl:'app/modules/arrecadacao/payments-view.html',
		       controller:'PaymentViewController',
		       controllerAs: 'vm'
		    }).state('home.newPayment',{
		        url:'/arrecadacao/new',
		        templateUrl:'app/modules/arrecadacao/payments-add.html',
		        controller:'PaymentCreateController',
		        controllerAs: 'vm'
		    }).state('home.editPayment',{
		        url:'/arrecadacao/:id/edit',
		        templateUrl:'app/modules/arrecadacao/payments-edit.html',
		        controller:'PaymentEditController',
		        controllerAs: 'vm'
	        }).state('home.deletePayment',{
		        url:'/arrecadacao/:id/delete',
		        templateUrl:'app/modules/arrecadacao/payments-delete.html',
		        controller:'PaymentEditController',
		        controllerAs: 'vm'
		    });
			

		
	}]);
