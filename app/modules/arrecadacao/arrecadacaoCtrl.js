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

			$scope.selected = [];

			$scope.limitOptions = [ 15, 30, 50, 100];
  
			vm.queryPay = {
			  sort: 'nome',
			  order: 'nome',
			  limit: 30,
			  page: 1
			};

			$scope.queryPay = {
			  sort: 'nome',
			  order: 'nome',
			  limit: 30,
			  page: 1
			};

			var response = Payment.query($scope.queryPay);

			$scope.payments = response;
			
			vm.PrintRecibo = function (id){
				window.open("#!/arrecadacao/"+id.id+"/recibo", "Impressao Recibo","width=400,height=600,location=no,menubar=no,status=no,toolbar=no")
			}

			function success(desserts) {
			    $scope.contribs = desserts;
			  }
			  
			  $scope.getPayments = function () {
			    
			    $scope.payments = Payment.query($scope.queryPay);
			    
			    
			  };

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
			
			$scope.printDiv = function(divName) {
			    var printContents = document.getElementById(divName).innerHTML;
			    var originalContents = document.body.innerHTML;        
			    document.body.innerHTML = printContents;
			    window.print();
			    document.body.innerHTML = originalContents;
			}

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
			mesname['0'] = 'Janeiro';
			mesname['1'] = 'Fevereiro';
			mesname['2'] = 'Março';
			mesname['3'] = 'Abril';
			mesname['4'] = 'Maio';			
			mesname['5'] = 'Junho';
			mesname['6'] = 'Julho';
			mesname['7'] = 'Agosto';
			mesname['8'] = 'Setembro';
			mesname['9'] = 'Outubro';
			mesname['10'] = 'Novembro';
			mesname['11'] = 'Dezembro';

			// vm.dia = moment().format("DD");
			// vm.mes = mesname[moment().format("MM")];

			// vm.ano = moment().format("YYYY");

			var agora = new Date();
			vm.dia = agora.getDate();
			vm.mes = mesname[agora.getMonth()];
			vm.ano = agora.getFullYear();


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
