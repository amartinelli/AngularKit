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
		// 'angularMoment',
		'idf.br-filters',
		'ui.router',
		'ui.utils.masks',
		'tmh.dynamicLocale',
		'md.data.table',
		'ui.utils.masks',
		// 'angular-i18n',
		'ngLocale',
		'home',
		'auth',
		'users',
		'contribs',
		'arrecadacao',
		'br.cidades.estados'
	]);

})();
