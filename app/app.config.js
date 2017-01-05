(function () {
	'use strict';

	/**
	 * @ngdoc configuration file
	 * @name app.config:config
	 * @description
	 * # Config and run block
	 * Configutation of the app
	 */


	angular
		.module('contrib')
		.config(configure)
		.run(runBlock)
		.run(AuthorizationVerify);

	configure.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];

	function configure($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

		$locationProvider.hashPrefix('!');

		// This is required for Browser Sync to work poperly
		$httpProvider.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

		
		$urlRouterProvider
			.otherwise('/login');
		
	}

	runBlock.$inject = ['$rootScope'];

	

	AuthorizationVerify.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];

	function runBlock($rootScope ) {
		'use strict';

		$rootScope.mastertoken = 'NAZEEHKmCHq8eJRw1lTjFqGA5yknMb1T';
		console.log('AngularJS run() function...');
	}

	function AuthorizationVerify ($rootScope, $location, $cookieStore, $http) {
		console.log('Call AuthorizationVerify');
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
  
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
                $location.path('/login');
            }
        });
    }

})();
