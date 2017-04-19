(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:arrecadacaoModule
	 * @description
	 * # arrecadacaoModule
	 * Module of the app
	 */

  	angular.module('arrecadacao', ['tmh.dynamicLocale'])
  	.config(function(tmhDynamicLocaleProvider) {
	    tmhDynamicLocaleProvider.localeLocationPattern('/node_modules/angular-i18n/angular-locale_{{locale}}.js');
	  });
})();
