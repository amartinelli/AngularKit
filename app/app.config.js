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
			.otherwise('/dashboard');
		
	}

	runBlock.$inject = ['$rootScope'];

	function runBlock($rootScope ) {
		'use strict';

		console.log('AngularJS run() function...');

		$rootScope.mastertoken = 'u29ioGh27nOTRJuNnAX8peM01ilo3F2S';
		$rootScope.UrlAPIUsers = 'http://0.0.0.0:9000/users/';
	}

	AuthorizationVerify.$inject = ['$rootScope', '$location' ,'$state' , '$cookieStore', '$http', 'AuthenticationService'];

	function AuthorizationVerify ($rootScope, $location ,$state , $cookieStore, $http, AuthenticationService ) {
		console.log('Call AuthorizationVerify');
        // keep user logged in after page refresh
        $rootScope.globals = $cookieStore.get('globals') || {};
        $rootScope.token = $cookieStore.get('token') || {};
        $rootScope.user = $cookieStore.get('user') || {};
        if ($rootScope.globals.currentUser) {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
  
        //$rootScope.$on('$stateChangeStart', function (event, next, current ) {
    	$rootScope.$on('$stateChangeSuccess', function (event, next, current ) {
        	console.log('Verify is Logged')
        	// console.log($rootScope.globals)
        	// console.log($rootScope.token)
        	// console.log($rootScope.user)
        	// console.log($location.path())

        	
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
            //if ($location.path() !== '/login' && !isLogged) {
            
            	console.log('aqui')
            	//event.preventDefault();
            	
            	//$location.path('/login');
            	
            	$state.go('home.login');
				

            }
        });
    }

})();
