(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:arrecadacaoCtrl
	* @description
	* # arrecadacaoCtrl
	* Controller of the app
	*/

  	angular
		.module('arrecadacao')
		.controller('ArrecadacaoCtrl', Arrecadacao);

		Arrecadacao.$inject = [];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Arrecadacao() {
			/*jshint validthis: true */
			var vm = this;

		}

})();
