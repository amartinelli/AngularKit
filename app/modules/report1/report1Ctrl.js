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
			  limit: 30,
			  page: 1
			};

			  var response = Report1Service.query(vm.query);

			  vm.contribs = response;


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
			    
			    
			  };

			  vm.queryPay = {
			  sort: 'nome',
			  order: 'nome',
			  limit: 30,
			  page: 1
			};

			vm.payments = ReportPayment.query(vm.queryPay);

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

			    console.log(obj)
			    
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
