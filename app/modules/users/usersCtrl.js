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

			$scope.selected = [];

			$scope.limitOptions = [ 15, 30, 50, 100];
  
			vm.queryUser = {
			  sort: 'name',
			  order: 'name',
			  limit: 30,
			  page: 1
			};

			$scope.queryUser = {
			  sort: 'name',
			  order: 'name',
			  limit: 30,
			  page: 1
			};

			var response = Movie.query($scope.queryUser);

			$scope.users = response;

			$scope.getUserApi = function () {
			    // $scope.promise = $scope.contribs.get($scope.query, success).$promise;
				

			    $scope.users = Movie.query($scope.queryUser);
			    
			    
			  };
			
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

			$scope.selected = [];
			$scope.users=Movie.get({id:$stateParams.id});

			$scope.users.$promise.then(function(response){

					// response.role = response.role.replace("admin", "Administrador");
					// response.role = response.role.replace("user", "Usuario");
					$scope.selected = response.role.split(',');
					

				}

			)

				

			  $scope.items = [
				  {
				  	name:'Administrador',
				  	value: 'admin'
				  },
				  {
				  	name: 'Usuario',
				  	value: 'user'
				  }
			  ];
			  //$scope.selected = [];
			  $scope.toggle = function (item, list) {
			    var idx = list.indexOf(item);
			    if (idx > -1) {
			      list.splice(idx, 1);
			    }
			    else {
			      list.push(item);
			    }
			  };

			  $scope.exists = function (item, list) {
			  	console.log(item)
			  	console.log(list)
			    return list.indexOf(item) > -1;
			  };

			  $scope.isIndeterminate = function() {
			    return ($scope.selected.length !== 0 &&
			        $scope.selected.length !== $scope.items.length);
			  };

			  $scope.isChecked = function() {
			    return $scope.selected.length === $scope.items.length;
			  };

			  $scope.toggleAll = function() {
			    if ($scope.selected.length === $scope.items.length) {
			      $scope.selected = [];
			    } else if ($scope.selected.length === 0 || $scope.selected.length > 0) {
			    	$scope.items.forEach(function(entry) {
			    		$scope.selected.push(entry.value)
					     console.log($scope.selected);

					});

			      $scope.selected = $scope.items.slice(0);
			    }
			  };



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
				$scope.users.role = $scope.selected;
		        var promise = $scope.users.$update({id:$stateParams.id});

		        
				promise.then(function (out) {
				    $state.go('home.users');				    
				}, function(motivo) {
					$scope.editmessage = motivo.data.message
				  // console.log(motivo)
				});
		        
		    };

		    $scope.loadUser=function(){
				$scope.selected = [];

		        $scope.users=Movie.get({id:$stateParams.id});

		        $scope.users.$promise.then(function(response){

					// response.role = response.role.replace("admin", "Administrador");
					// response.role = response.role.replace("user", "Usuario");
					$scope.selected = response.role.split(',');
					

				}

			)

				

			  $scope.items = [
				  {
				  	name:'Administrador',
				  	value: 'admin'
				  },
				  {
				  	name: 'Usuario',
				  	value: 'user'
				  }
			  ];
			  //$scope.selected = [];
			  $scope.toggle = function (item, list) {
			    var idx = list.indexOf(item);
			    if (idx > -1) {
			      list.splice(idx, 1);
			    }
			    else {
			      list.push(item);
			    }
			  };

			  $scope.exists = function (item, list) {
			  	console.log(item)
			  	console.log(list)
			    return list.indexOf(item) > -1;
			  };

			  $scope.isIndeterminate = function() {
			    return ($scope.selected.length !== 0 &&
			        $scope.selected.length !== $scope.items.length);
			  };

			  $scope.isChecked = function() {
			    return $scope.selected.length === $scope.items.length;
			  };

			  $scope.toggleAll = function() {
			    if ($scope.selected.length === $scope.items.length) {
			      $scope.selected = [];
			    } else if ($scope.selected.length === 0 || $scope.selected.length > 0) {
			    	$scope.items.forEach(function(entry) {
			    		$scope.selected.push(entry.value)
					     console.log($scope.selected);

					});

			      $scope.selected = $scope.items.slice(0);
			    }
			  };

		    };

		    $scope.loadUser();			

		}

})();
