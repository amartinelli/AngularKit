(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:usersCtrl
	* @description
	* # usersCtrl
	* Controller of the app
	*/

  	angular
		.module('contribs')
		.controller('ContribListController', ContribListController)
		.controller('ContribViewController', ContribViewController)
		.controller('ContribCreateController', ContribCreateController)
		.controller('ContribEditController', ContribEditController);

		ContribListController.$inject = ['$scope','$state','popupService','$window','Contrib'];
		ContribViewController.$inject = ['$scope','$stateParams','Contrib'];
		ContribCreateController.$inject = ['$scope','$state','$stateParams','Contrib'];
		ContribEditController.$inject = ['$scope','$state','$stateParams','Contrib'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function ContribListController($scope,$state,popupService,$window,Contrib) {
			/*jshint validthis: true */
			var vm = this;

			var response = Contrib.query();

			$scope.contribs = response;
			

		    $scope.deleteContrib=function(contrib){
	        if(popupService.showPopup('Deseja realmente deleter ?')){
	            
	            contrib.$delete(function(){
	            	 $state.go('home.contribs');
	                // $window.location.href='';
	            });
		        }
		    }

		}

		function ContribViewController($scope,$stateParams,Contrib) {
			/*jshint validthis: true */
			var vm = this;

			$scope.contribs=Contrib.get({id:$stateParams.id});



		}

		function ContribCreateController ($scope,$state,$stateParams,Contrib) {
			/*jshint validthis: true */
			var vm = this;

			$scope.contribs=new Contrib();

		    $scope.addContrib=function(){
		        $scope.contribs.$save(function(){
		            $state.go('home.contribs');
		        });
		    }

		}

		function ContribEditController($scope,$state,$stateParams,Contrib) {
			/*jshint validthis: true */
			var vm = this;

			$scope.updateContrib=function(){
		        var promise = $scope.contribs.$update({id:$stateParams.id});

		        promise.then(function (out) {
				    $state.go('home.contribs');
				});
		        
		    };

		    $scope.loadContrib=function(){
		        $scope.contribs=Contrib.get({id:$stateParams.id});
		    };

		    $scope.loadContrib();			

		}

})();

