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
		.module('users')
		.controller('MovieListController', MovieListController)
		.controller('MovieViewController', MovieViewController)
		.controller('MovieCreateController', MovieCreateController)
		.controller('MovieEditController', MovieEditController);

		MovieListController.$inject = ['$scope','$state','popupService','$window','Movie'];
		MovieViewController.$inject = ['$scope','$stateParams','Movie'];
		MovieCreateController.$inject = ['$scope','$state','$stateParams','Movie'];
		MovieEditController.$inject = ['$scope','$state','$stateParams','Movie'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function MovieListController($scope,$state,popupService,$window,Movie) {
			/*jshint validthis: true */
			var vm = this;

			var response = Movie.query();

			$scope.users = response;
			

		    $scope.deleteMovie=function(user){
	        if(popupService.showPopup('Deseja realmente deletar ?')){
	            // user
	            user.$delete(function(){
	            	 $state.go('home.users');
	                // $window.location.href='';
	            });
		        }
		    }

		}

		function MovieViewController($scope,$stateParams,Movie) {
			/*jshint validthis: true */
			var vm = this;

			$scope.users=Movie.get({id:$stateParams.id});



		}

		function MovieCreateController ($scope,$state,$stateParams,Movie) {
			/*jshint validthis: true */
			var vm = this;

			$scope.users=new Movie();

		    $scope.addMovie=function(){

		    	var promise = $scope.users.$save($stateParams);

		    	promise.then(function (out) {
				    $state.go('home.users');
				});
		        // $scope.users.$save(function(){
		        //     $state.go('home.users');
		        // });
		    }

		}

		function MovieEditController($scope,$state,$stateParams,Movie) {
			/*jshint validthis: true */
			var vm = this;

			$scope.updateUser=function(){
		        var promise = $scope.users.$update({id:$stateParams.id});

		        promise.then(function (out) {
				    $state.go('home.users');
				});
		        
		    };

		    $scope.loadUser=function(){
		        $scope.users=Movie.get({id:$stateParams.id});
		    };

		    $scope.loadUser();			

		}

})();
