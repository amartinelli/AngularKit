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
		// console.log(typeof($rootScope.globals.currentUser))

		vm.recibo = $rootScope.recibo;
		
		if (typeof($rootScope.globals.currentUser) !== "undefined")
			if (typeof($rootScope.globals.currentUser.name) !== "undefined")
			{
				vm.title = 'Olá '+$rootScope.globals.currentUser.user.name ;
			}else{
				vm.title = 'Olá ' ;
			}	
			
		vm.version = "1.0.0";
		vm.listFeatures = homeService.getFeaturesList();

	}

})();
