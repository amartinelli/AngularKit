(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:report1Ctrl
	* @description
	* # report1Ctrl
	* Controller of the app
	*/

  	angular
		.module('report1')
		.controller('Report1Ctrl', Report1);

		Report1.$inject = ['$rootScope','$scope','$state','$window','Report1Service','ReportPayment','tmhDynamicLocale'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Report1($rootScope,$scope,$state,$window,Report1Service, ReportPayment, tmhDynamicLocale) {
			/*jshint validthis: true */
			var vm = this;

			vm.selected = [];

			vm.limitOptions = [ 15, 30, 50, 100];
  
			vm.query = {
			  sort: 'nome',
			  order: 'nome',
			  q: 'edson facholi',
			  limit: 30,
			  page: 1
			};

				vm.meses = [];

			  var response = Report1Service.query(vm.query);

			  vm.contribs = response;

			  response.$promise.then(function(greeting) {
					  // console.log('Success: ' + greeting);
					  var pay = new Array;
						for (var key in greeting) {
						       if (greeting.hasOwnProperty(key)) {
						       		if (greeting[key].id)
						       		{
						              console.log(greeting[key].id);

						              vm.meses[greeting[key].id] = [];
						       		
						       			var qq = greeting[key].numero;

							            var queryPay = {
										  
										  q: qq,
										  limit: 30,
										  page: 1
										};

										pay[key] = ReportPayment.query(queryPay);

										pay[key].$promise.then(function(greeting2) {
										  // console.log('Success: ' + greeting);
										    var idcontrib;
											for (var key2 in greeting2) {
											       if (greeting2.hasOwnProperty(key2)) {
											       		
											       		var dataciclo = new Date(greeting2[key2].data);
											       	   
											           console.log(greeting2[key2]);

											           if (greeting2[key2].contribuinte) {
											           		idcontrib = greeting2[key2].contribuinte.id;	
											        
											           	}

											             switch (dataciclo.getMonth()) {
														   case 0:
														     vm.meses[idcontrib].jan = greeting2[key2].valor ;
														     break;
														   case 1:
														     vm.meses[idcontrib].fev = greeting2[key2].valor ;
														     break;
														   case 2:
														     vm.meses[idcontrib].mar = greeting2[key2].valor ;
														     break;
														   case 3:
														     vm.meses[idcontrib].abr = greeting2[key2].valor ;
														     break;
														   case 4:
														     vm.meses[idcontrib].mai = greeting2[key2].valor ;
														     break;
														   case 5:
														     vm.meses[idcontrib].jun = greeting2[key2].valor ;
														     break;
														   case  6:
														     vm.meses[idcontrib].jul = greeting2[key2].valor ;
														     break;
														   case  7:
														     vm.meses[idcontrib].ago = greeting2[key2].valor ;
														     break;
														   case  8:
														     vm.meses[idcontrib].set = greeting2[key2].valor ;
														     break;
														   case  9:
														     vm.meses[idcontrib].out = greeting2[key2].valor ;
														     break;
														   case  10:
														     vm.meses[idcontrib].nov = greeting2[key2].valor ;
														     break;
														   case  11:
														     vm.meses[idcontrib].dez = greeting2[key2].valor ;
														     break;	

														     console.log('mes '+dataciclo.getMonth()+' valor ')
														     console.log(vm.meses[idcontrib])
														 }

													
											       }
											} 

										}, function(reason2) {
										  console.log('Failed: ' + reason2);
										});
									}


						       }
						} 

					}, function(reason) {
					  console.log('Failed: ' + reason);
					});


			  function success(desserts) {
			    vm.contribs = desserts;
			  }
			  
			  $scope.getDesserts = function () {
			    // $scope.promise = $scope.contribs.get($scope.query, success).$promise;
				var query = {
				  sort: 'nome',
				  order: 'nome',
				  limit: 30,
				  page: 1
				};

			    vm.contribs = Report1Service.query(query);

			    vm.contribs.$promise.then(function(greeting) {
					  // console.log('Success: ' + greeting);
						for (var key in greeting) {
						       if (greeting.hasOwnProperty(key)) {
						       		
						             console.log(greeting[key]);
						       }
						} 

					}, function(reason) {
					  console.log('Failed: ' + reason);
					});

			  };

			vm.getPayments = function (keyword) {
			    

			    var queryPay = {
				  sort: 'nome',
				  order: 'nome',
				  limit: 30,
				  q: keyword,
				  page: 1
				};
			    vm.payments = ReportPayment.query(queryPay);
			    
			    
			  };

			 

			vm.sumUnic = function(userid, name , sumName, obj){
			    var returnArr = [];

			    // console.log(obj)
			    
			    for(var x = 0; x<obj.length; x++){
			        if((function(source){
			            if(returnArr.length == 0){
			                return true;
			            }else{
			                for(var y = 0; y<returnArr.length; y++){
			                    var isThere = [];
			                    if(returnArr[y][name] == source[name] && returnArr[y][userid] == source[userid]){
			                        returnArr[y][sumName] = parseInt(returnArr[y][sumName]) + parseInt(source[sumName]);
			                        return false;
			                    }else{
			                        isThere.push(source);
			                    }
			                }
			                if(isThere.length>0)returnArr.push(source);
			                return false;
			            }
			        })(obj[x])){
			            returnArr.push(obj[x]);
			        }
			    }
			    return returnArr;
			}

		}

})();
