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
		PaymentCreateController.$inject = ['$scope','$state','$stateParams','Payment','Contrib','tmhDynamicLocale'];
		PaymentEditController.$inject = ['$scope','$state','$stateParams','Payment','Contrib','tmhDynamicLocale'];


		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function PaymentListController($scope,$state,popupService,$window,Payment, tmhDynamicLocale) {
			/*jshint validthis: true */
			var vm = this;

			var response = Payment.query();

			$scope.payments = response;
			

		    $scope.deletePayment=function(payment){
	        if(popupService.showPopup('Deseja realmente deletar ?')){
	            
	            payment.$delete({id:payment.id},function(){
	            	var response = Payment.query();

					$scope.payments = response;
	            	 $state.go('home.arrecadacao');
	                // $window.location.href='';


	            });
		        }
		    }

		}

		function PaymentViewController($scope,$stateParams,Payment, tmhDynamicLocale) {
			/*jshint validthis: true */
			var vm = this;

			$scope.payments=Payment.get({id:$stateParams.id});



		}

		function PaymentCreateController ($scope,$state,$stateParams,Payment,Contrib, tmhDynamicLocale) {
			/*jshint validthis: true */
			var vm = this;

			
			var response = Contrib.query();

			$scope.contribs = response;
			
			$scope.payments=new Payment();

			$scope.myDate = null;

			$scope.minDate = new Date();

			$scope.maxDate = new Date();



		    $scope.addPayment=function(){
		        $scope.payments.$save(function(){
		            $state.go('home.arrecadacao');
		        });
		    }

		}

		function PaymentEditController($scope,$state,$stateParams,Payment,Contrib, tmhDynamicLocale) {
			/*jshint validthis: true */
			var vm = this;

			var response = Contrib.query();

			$scope.contribs = response;

			// tmhDynamicLocale.set('pt-br');

			

			$scope.updatePayment=function(){
		        var promise = $scope.payments.$update({id:$stateParams.id});

		        promise.then(function (out) {
				    $state.go('home.arrecadacao');
				});
		        
		    };

		    $scope.loadPayment=function(){
		        $scope.payments=Payment.get({id:$stateParams.id});
		    };

		    $scope.loadPayment();			

		}

})();
