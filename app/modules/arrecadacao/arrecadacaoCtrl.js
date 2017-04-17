(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:arrecadacaoCtrl
	* @description
	* # arrecadacaoCtrl
	* Controller of the app
	*/

  	angular
		.module('arrecadacao')
		.controller('PaymentListController', PaymentListController)
		.controller('PaymentViewController', PaymentViewController)
		.controller('PaymentCreateController', PaymentCreateController)
		.controller('PaymentEditController', PaymentEditController);

		PaymentListController.$inject = ['$scope','$state','popupService','$window','Payment','tmhDynamicLocale'];
		PaymentViewController.$inject = ['$scope','$stateParams','Payment','tmhDynamicLocale'];
		PaymentCreateController.$inject = ['$scope','$state','$stateParams','Payment','tmhDynamicLocale'];
		PaymentEditController.$inject = ['$scope','$state','$stateParams','Payment','tmhDynamicLocale'];


		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function PaymentListController($scope,$state,popupService,$window,Payment, tmhDynamicLocale) {
			/*jshint validthis: true */
			var vm = this;

			var response = Payment.query();

			$scope.Payments = response;
			

		    $scope.deletePayment=function(Payment){
	        if(popupService.showPopup('Deseja realmente deletar ?')){
	            
	            Payment.$delete(function(){
	            	 $state.go('home.Payments');
	                // $window.location.href='';
	            });
		        }
		    }

		}

		function PaymentViewController($scope,$stateParams,Payment, tmhDynamicLocale) {
			/*jshint validthis: true */
			var vm = this;

			$scope.Payments=Payment.get({id:$stateParams.id});



		}

		function PaymentCreateController ($scope,$state,$stateParams,Payment, tmhDynamicLocale) {
			/*jshint validthis: true */
			var vm = this;

			$scope.Payments=new Payment();

		    $scope.addPayment=function(){
		        $scope.Payments.$save(function(){
		            $state.go('home.Payments');
		        });
		    }

		}

		function PaymentEditController($scope,$state,$stateParams,Payment, tmhDynamicLocale) {
			/*jshint validthis: true */
			var vm = this;



			tmhDynamicLocale.set('pt-br');

			

			$scope.updatePayment=function(){
		        var promise = $scope.Payments.$update({id:$stateParams.id});

		        promise.then(function (out) {
				    $state.go('home.Payments');
				});
		        
		    };

		    $scope.loadPayment=function(){
		        $scope.Payments=Payment.get({id:$stateParams.id});
		    };

		    $scope.loadPayment();			

		}

})();
