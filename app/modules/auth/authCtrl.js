(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:authCtrl
	* @description
	* # authCtrl
	* Controller of the app
	*/

  	angular
		.module('auth')
		.controller('AuthCtrl', Auth);

		Auth.$inject = ['$scope', '$rootScope', '$location', 'AuthenticationService'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Auth($scope, $rootScope, $location, AuthenticationService) {
			/*jshint validthis: true */
			var vm = this;
			// reset login status
	        AuthenticationService.ClearCredentials();

	  		      
	  
	        $scope.login = function () {
		            $scope.dataLoading = true;
		            AuthenticationService.SetCredentials($scope.username, $scope.password);
		            AuthenticationService.Login($scope.username, $scope.password, function(response) {
		                if(response.success) {
		                    //AuthenticationService.SetCredentials($scope.username, $scope.password);
		                    $location.path('/');
		                } else {
		                    $scope.error = response.message;
		                    $scope.dataLoading = false;
		                }
		            });
				}
			};
})();
