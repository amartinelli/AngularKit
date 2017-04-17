(function() {
	'use strict';

	/**
	 * @ngdoc index
	 * @name app
	 * @description
	 * # app
	 *
	 * Main modules of the application.
	 */

	angular.module('contrib', [
		'ngResource',
		'ngAria',
		'ngMaterial',
		'ngMdIcons',
		'ngCookies',
		'ngAnimate',
		'ngSanitize',
		'idf.br-filters',
		'ui.router',
		'ui.utils.masks',
		'tmh.dynamicLocale',
		'ui.utils.masks',
		'home',
		'auth',
		'users',
		'contribs',
		'arrecadacao',
		'br.cidades.estados'
	]);

})();
