(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:report1Module
	 * @description
	 * # report1Module
	 * Module of the app
	 */

	angular.module('report1', ['tmh.dynamicLocale'])
  	.config(function(tmhDynamicLocaleProvider) {
	    tmhDynamicLocaleProvider.localeLocationPattern('/node_modules/angular-i18n/angular-locale_{{locale}}.js');
	  });
})();
