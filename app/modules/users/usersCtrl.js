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
	        if(popupService.showPopup('Really delete this?')){
	            user
	            user.$delete(function(){
	                $window.location.href='';
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

			$scope.movie=new Movie();

		    $scope.addMovie=function(){
		        $scope.movie.$save(function(){
		            $state.go('movies');
		        });
		    }

		}

		function MovieEditController($scope,$state,$stateParams,Movie) {
			/*jshint validthis: true */
			var vm = this;

			$scope.updateMovie=function(){
		        $scope.movie.$update(function(){
		            $state.go('movies');
		        });
		    };

		    $scope.loadMovie=function(){
		        $scope.movie=Movie.get({id:$stateParams.id});
		    };

		    $scope.loadMovie();			

		}

})();
