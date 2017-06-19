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

		function extenso (c){
		    var ex = [
		        ["zero", "um", "dois", "três", "quatro", "cinco", "seis", "sete", "oito", "nove", "dez", "onze", "doze", "treze", "quatorze", "quinze", "dezesseis", "dezessete", "dezoito", "dezenove"],
		        ["dez", "vinte", "trinta", "quarenta", "cinqüenta", "sessenta", "setenta", "oitenta", "noventa"],
		        ["cem", "cento", "duzentos", "trezentos", "quatrocentos", "quinhentos", "seiscentos", "setecentos", "oitocentos", "novecentos"],
		        ["mil", "milhão", "bilhão", "trilhão", "quadrilhão", "quintilhão", "sextilhão", "setilhão", "octilhão", "nonilhão", "decilhão", "undecilhão", "dodecilhão", "tredecilhão", "quatrodecilhão", "quindecilhão", "sedecilhão", "septendecilhão", "octencilhão", "nonencilhão"]
		    ];
		    var a, n, v, i, n = this.replace(c ? /[^,\d]/g : /\D/g, "").split(","), e = " e ", $ = "real", d = "centavo", sl;
		    for(var f = n.length - 1, l, j = -1, r = [], s = [], t = ""; ++j <= f; s = []){
		        j && (n[j] = (("." + n[j]) * 1).toFixed(2).slice(2));
		        if(!(a = (v = n[j]).slice((l = v.length) % 3).match(/\d{3}/g), v = l % 3 ? [v.slice(0, l % 3)] : [], v = a ? v.concat(a) : v).length) continue;
		        for(a = -1, l = v.length; ++a < l; t = ""){
		            if(!(i = v[a] * 1)) continue;
		            i % 100 < 20 && (t += ex[0][i % 100]) ||
		            i % 100 + 1 && (t += ex[1][(i % 100 / 10 >> 0) - 1] + (i % 10 ? e + ex[0][i % 10] : ""));
		            s.push((i < 100 ? t : !(i % 100) ? ex[2][i == 100 ? 0 : i / 100 >> 0] : (ex[2][i / 100 >> 0] + e + t)) +
		            ((t = l - a - 2) > -1 ? " " + (i > 1 && t > 0 ? ex[3][t].replace("ão", "ões") : ex[3][t]) : ""));
		        }
		        a = ((sl = s.length) > 1 ? (a = s.pop(), s.join(" ") + e + a) : s.join("") || ((!j && (n[j + 1] * 1 > 0) || r.length) ? "" : ex[0][0]));
		        a && r.push(a + (c ? (" " + (v.join("") * 1 > 1 ? j ? d + "s" : (/0{6,}$/.test(n[0]) ? "de " : "") + $.replace("l", "is") : j ? d : $)) : ""));
		    }
		    return r.join(e);
		}

		function PaymentViewController($scope,$stateParams,Payment, tmhDynamicLocale) {
			/*jshint validthis: true */
			var vm = this;

			$scope.payments=Payment.get({id:$stateParams.id});

			vm.dia = moment().format("DD");

			vm.mes = moment().format("MMMM");

			vm.ano = moment().format("YYYY");



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
