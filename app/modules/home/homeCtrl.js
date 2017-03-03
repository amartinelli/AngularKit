(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:HomeCtrl
	* @description
	* # HomeCtrl
	* Controller of the app
	*/

	angular
		.module('contrib')
		.controller('HomeCtrl', Home);

	Home.$inject = ['homeService', '$rootScope'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Home(homeService , $rootScope) {
		/*jshint validthis: true */
		var vm = this;
		// console.log($rootScope.globals.currentUser.user)
		
		if (typeof($rootScope.globals.currentUser) !== "undefined")
			vm.title = 'Olá '+$rootScope.globals.currentUser.user.name ;
		vm.version = "1.0.0";
		vm.listFeatures = homeService.getFeaturesList();

	}

})();
