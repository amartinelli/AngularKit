(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:contribsModule
	 * @description
	 * # contribsModule
	 * Module of the app
	 */

  	angular.module('contribs', ['tmh.dynamicLocale'])
  	.config(function(tmhDynamicLocaleProvider) {
	    tmhDynamicLocaleProvider.localeLocationPattern('/node_modules/angular-i18n/angular-locale_{{locale}}.js');
	  });

})();
