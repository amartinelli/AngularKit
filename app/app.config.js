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

		$rootScope.mastertoken = '9S9JgTyAG0VdGcmjHKxSUuKnyTgQrt1a';
		$rootScope.UrlAPIUsers = 'http://0.0.0.0:9000/users/';
		$rootScope.UrlAPIAuth = 'http://0.0.0.0:9000/auth';
		
	}

	AuthorizationVerify.$inject = ['$rootScope', '$location' ,'$state' , '$cookieStore', '$http', 'AuthenticationService'];

	function AuthorizationVerify ($rootScope, $location ,$state , $cookieStore, $http, AuthenticationService) {
		console.log('Call AuthorizationVerify');
        // keep user logged in after page refresh

        $rootScope.globals = $cookieStore.get('globals') || {};
        $rootScope.token = $cookieStore.get('token') || {};
        $rootScope.user = $cookieStore.get('user') || {};

        if (typeof($rootScope.globals.currentUser) != "undefined") {
            $http.defaults.headers.common['Authorization'] = 'Basic ' + $rootScope.globals.currentUser.authdata; // jshint ignore:line
        }
  
        //$rootScope.$on('$stateChangeStart', function (event, next, current ) {
    	$rootScope.$on('$stateChangeSuccess', function (event, next, current ) {
        	console.log('Verify is Logged')
        	
        	
        	
            // redirect to login page if not logged in
            if ($location.path() !== '/login' && !$rootScope.globals.currentUser) {
            //if ($location.path() !== '/login' && !isLogged) {
            
            	console.log('Não Logado 1')
            	//event.preventDefault();
            	
            	//$location.path('/login');
            	//console.log($rootScope);
            	$rootScope.telaLogin=false;
            	$state.go('home.login');
				

            }else if(!$rootScope.globals.currentUser){
            	console.log('Não Logado 2')
            	$rootScope.telaLogin=false;
            }else{
            	console.log('Logado')
            	$rootScope.telaLogin=true;
            }
        });
    }

})();
