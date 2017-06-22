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
		PaymentViewController.$inject = ['$rootScope','$scope','$stateParams','Payment','tmhDynamicLocale'];
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
			
			vm.PrintRecibo = function (id){
				window.open("#!/arrecadacao/"+id.id+"/recibo", "Impressao Recibo")
			}

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



		function PaymentViewController($rootScope, $scope,$stateParams,Payment, tmhDynamicLocale) {
			/*jshint validthis: true */
			var vm = this;

			$rootScope.telaLogin = $stateParams.recibo;
			


			// Define as partes do valor por extenso
				vm.extenso = [];

				vm.extenso[1] = 'um';
				vm.extenso[2] = 'dois';
				vm.extenso[3] = 'tres';
				vm.extenso[4] = 'quatro';
				vm.extenso[5] = 'cinco';
				vm.extenso[6] = 'seis';
				vm.extenso[7] = 'sete';
				vm.extenso[8] = 'oito';
				vm.extenso[9] = 'nove';
				vm.extenso[10] = 'dez';
				vm.extenso[11] = 'onze';
				vm.extenso[12] = 'doze';
				vm.extenso[13] = 'treze';
				vm.extenso[14] = 'quatorze';
				vm.extenso[15] = 'quinze';
				vm.extenso[16] = 'dezesseis';
				vm.extenso[17] = 'dezessete';
				vm.extenso[18] = 'dezoito';
				vm.extenso[19] = 'dezenove';
				vm.extenso[20] = 'vinte';
				vm.extenso[30] = 'trinta';
				vm.extenso[40] = 'quarenta';
				vm.extenso[50] = 'cinquenta';
				vm.extenso[60] = 'sessenta';
				vm.extenso[70] = 'setenta';
				vm.extenso[80] = 'oitenta';
				vm.extenso[90] = 'noventa';
				vm.extenso[100] = 'cem';
				vm.extenso[200] = 'duzentos';
				vm.extenso[300] = 'trezentos';
				vm.extenso[400] = 'quatrocentos';
				vm.extenso[500] = 'quinhentos';
				vm.extenso[600] = 'seiscentos';
				vm.extenso[700] = 'setecentos';
				vm.extenso[800] = 'oitocentos';
				vm.extenso[900] = 'novecentos';

			vm.ValorPorExtenso = function (valor){

				var restante = parseInt(valor);

				var retorno = '';

				var trilhao = 	1000000000000,
					bilhao 	= 	1000000000,
					milhao 	= 	1000000;

				if(restante >= trilhao){

					var trilhoes = Math.round(restante / trilhao) ;
					restante = restante - (trilhoes * trilhao);

					if(trilhoes > 1){
						retorno += vm.getCentena(trilhoes) + ' trilhões';
					}else{
						retorno += vm.extenso[trilhoes] + ' trilhão';
					}

					if(restante > 0){
						retorno += ', ';
					}

				}

				if(restante >= bilhao){

					var bilhoes = Math.round(restante / bilhao) ;
					restante = restante - (bilhoes * bilhao);

					if(bilhoes > 1){
						retorno += vm.getCentena(bilhoes) + ' bilhões';
					}else{
						retorno += vm.extenso[bilhoes] + ' bilhão';
					}

					if(restante > 0){
						retorno += ', ';
					}

				}

				if(restante >= milhao){

					var milhoes = Math.round(restante / milhao) ;
					restante = restante - (milhoes * milhao);

					if(milhoes > 1){
						retorno += vm.getCentena(milhoes) + ' milhões';
					}else{
						retorno += vm.extenso[milhoes] + ' milhão';
					}

					if(restante > 0){
						retorno += ', ';
					}

				}

				if(restante >= 1000){

					var milhas = Math.round(restante / 1000)
					restante = restante - (milhas * 1000);
					retorno += vm.getCentena(milhas) + ' mil';

					if(restante > 0){
						retorno += ', ';
					}

				}

				retorno += vm.getCentena(restante);

				return retorno;
				

			}

			vm.getCentena = function (restante){

				var retorno = '';

				if(restante >= 100){

					var milhas = Math.round(restante / 100)
					restante = restante - (milhas * 100);
					if(milhas === 1){
						retorno += 'cento';
					}else{
						retorno += ' '+ vm.extenso[milhas * 100];
					}

					if(restante > 0){
						retorno += ' e';
					}
				}

				if(restante >= 10){

					var milhas;



					if(restante < 10){
						milhas = Math.round(restante / 10)

					}else if(restante < 19){
						milhas = restante;
					}

					restante = restante - (milhas * 10);
					retorno += ' '+vm.extenso[milhas];

					if(restante > 0){
						retorno += ' e';
					}

				}

				if(restante >= 1){

					var milhas = Math.round(restante / 1)
					restante = restante - milhas;
					retorno += ' '+vm.extenso[milhas];



					if(restante > 0){
						retorno += ' e';
					}

				}

				return retorno;

			}

			var mesname = [];
			mesname['01'] = 'Janeiro';
			mesname['02'] = 'Fevereiro';
			mesname['03'] = 'Março';
			mesname['04'] = 'Abril';
			mesname['05'] = 'Maio';			
			mesname['06'] = 'Junho';
			mesname['07'] = 'Julho';
			mesname['08'] = 'Agosto';
			mesname['09'] = 'Setembro';
			mesname['10'] = 'Outubro';
			mesname['11'] = 'Novembro';
			mesname['12'] = 'Dezembro';

			vm.dia = moment().format("DD");
			vm.mes = mesname[moment().format("MM")];

			vm.ano = moment().format("YYYY");



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
