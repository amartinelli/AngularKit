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
			
			$scope.deleteUser = function(user) { // Delete a movie. Issues a DELETE to /api/movies/:id
		    if (popupService.showPopup('Tem certeza que deseja deletar o usuário '+user.name+' ?')) {
		        var promise = user.$delete({id:user.id});

		        promise.then(function (out) {
		        	$scope.users = Movie.query();
				    $state.go('home.users');
				});
		     }
		    };
		    

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

		    $scope.addUser=function(){

		        var promise = $scope.users.$save();

		        promise.then(function (out) {
				    $state.go('home.users');				    
				}, function(motivo) {
					$scope.addmessage = motivo.data.message
				  // console.log(motivo)
				});
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
