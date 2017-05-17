/*!
* contrib - v0.0.1 - MIT LICENSE 2017-05-17. 
* @author Andre Agunzi
*/
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
		.config(function(tmhDynamicLocaleProvider) {
		    tmhDynamicLocaleProvider.defaultLocale('pt-br');
		  })
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
		$rootScope.UrlAPIContribs = 'http://0.0.0.0:9000/contribs/';
		$rootScope.UrlAPIPayments = 'http://0.0.0.0:9000/payments/';
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

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:authModule
	 * @description
	 * # authModule
	 * Module of the app
	 */

  	angular.module('auth', []);

})();

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

(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.module:homeModule
	* @description
	* # homeModule
	* Module of the app
	*/

	angular.module('home', []);
})();

(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.module:usersModule
	 * @description
	 * # usersModule
	 * Module of the app
	 */

  	angular.module('users', []);

})();

'use strict';

/**
 * @ngdoc function
 * @name app.route:arrecadacaoRoute
 * @description
 * # arrecadacaoRoute
 * Route of the app
 */

angular.module('arrecadacao')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.arrecadacao', {
				url:'/arrecadacao',
				templateUrl: 'app/modules/arrecadacao/arrecadacao.html',
				controller: 'PaymentListController',
				controllerAs: 'vm'
			}).state('home.viewPayment',{
		       url:'/arrecadacao/:id/view',
		       templateUrl:'app/modules/arrecadacao/payments-view.html',
		       controller:'PaymentViewController',
		       controllerAs: 'vm'
		    }).state('home.newPayment',{
		        url:'/arrecadacao/new',
		        templateUrl:'app/modules/arrecadacao/payments-add.html',
		        controller:'PaymentCreateController',
		        controllerAs: 'vm'
		    }).state('home.editPayment',{
		        url:'/arrecadacao/:id/edit',
		        templateUrl:'app/modules/arrecadacao/payments-edit.html',
		        controller:'PaymentEditController',
		        controllerAs: 'vm'
	        }).state('home.deletePayment',{
		        url:'/arrecadacao/:id/delete',
		        templateUrl:'app/modules/arrecadacao/payments-delete.html',
		        controller:'PaymentEditController',
		        controllerAs: 'vm'
		    });
			

		
	}]);

'use strict';

/**
 * @ngdoc function
 * @name app.route:authRoute
 * @description
 * # authRoute
 * Route of the app
 */

angular.module('auth')
	.config(LoginState)
	.run(LayoutLogin);

	//LoginState.$inject['$stateProvider'];

	function LoginState ($stateProvider) {
		
		$stateProvider
			// .state('home.auth', {
			// 	url:'/auth',
			// 	templateUrl: 'app/modules/auth/auth.html',
			// 	controller: 'AuthCtrl',
			// 	controllerAs: 'vm'
			// })
			.state('home.login', {
				url:'/login',
				templateUrl: 'app/modules/auth/auth.html',
				controller: 'AuthCtrl',
				controllerAs: 'vm'
			})
			;

		
	};


	LayoutLogin.$inject = [ '$state' , '$rootScope'];

	function LayoutLogin ($state , $rootScope) {
			//console.log($state)
			//$rootScope.telaLogin = 'teste';
	}
'use strict';

/**
 * @ngdoc function
 * @name app.route:contribsRoute
 * @description
 * # contribsRoute
 * Route of the app
 */

angular.module('contribs')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			// .state('home.contribs', {
			// 	url:'/contribs',
			// 	templateUrl: 'app/modules/contribs/contribs.html',
			// 	controller: 'ContribsCtrl',
			// 	controllerAs: 'vm'
			// })
			.state('home.contribs',{
		        url:'/contribs',
		        templateUrl:'app/modules/contribs/contribs.html',
		        controller:'ContribListController',
		        controllerAs: 'vm'
		    }).state('home.viewContrib',{
		       url:'/contribs/:id/view',
		       templateUrl:'app/modules/contribs/contribs-view.html',
		       controller:'ContribViewController',
		       controllerAs: 'vm'
		    }).state('home.newContrib',{
		        url:'/contribs/new',
		        templateUrl:'app/modules/contribs/contribs-add.html',
		        controller:'ContribCreateController',
		        controllerAs: 'vm'
		    }).state('home.editContrib',{
		        url:'/contribs/:id/edit',
		        templateUrl:'app/modules/contribs/contribs-edit.html',
		        controller:'ContribEditController',
		        controllerAs: 'vm'
	        }).state('home.deleteContrib',{
		        url:'/contribs/:id/delete',
		        templateUrl:'app/modules/contribs/contribs-delete.html',
		        controller:'ContribEditController',
		        controllerAs: 'vm'
		    });

		
	}]);


'use strict';

	/**
	* @ngdoc function
	* @name app.route:HomeRoute
	* @description
	* # HomeRoute
	* Route of the app
	*/

angular.module('contrib')
	.config(['$stateProvider', function ($stateProvider) {
		$stateProvider
			
			.state('home', {
				url: '',
				abstract: true,
				templateUrl: 'app/modules/home/home.html',
				controller: 'HomeCtrl',
				controllerAs: 'vm'
			})
			.state('home.dashboard', {
				url:'/dashboard',
				templateUrl: 'app/modules/home/dashboard.html'
			});
			
	}]);

'use strict';

/**
 * @ngdoc function
 * @name app.route:usersRoute
 * @description
 * # usersRoute
 * Route of the app
 */

angular.module('users')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			// .state('home.users', {
			// 	url:'/users',
			// 	templateUrl: 'app/modules/users/users.html',
			// 	controller: 'UsersCtrl',
			// 	controllerAs: 'vm'
			// })
			.state('home.users',{
		        url:'/users',
		        templateUrl:'app/modules/users/users.html',
		        controller:'MovieListController',
		        controllerAs: 'vm'
		    }).state('home.viewUser',{
		       url:'/users/:id/view',
		       templateUrl:'app/modules/users/users-view.html',
		       controller:'MovieViewController',
		       controllerAs: 'vm'
		    }).state('home.newUser',{
		        url:'/users/new',
		        templateUrl:'app/modules/users/users-add.html',
		        controller:'MovieCreateController',
		        controllerAs: 'vm'
		    }).state('home.editUser',{
		        url:'/users/:id/edit',
		        templateUrl:'app/modules/users/users-edit.html',
		        controller:'MovieEditController',
		        controllerAs: 'vm'
	        }).state('home.deleteUser',{
		        url:'/users/:id/delete',
		        templateUrl:'app/modules/users/users-delete.html',
		        controller:'MovieEditController',
		        controllerAs: 'vm'
		    });

		
	}]);

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
		.controller('PaymentListController', PaymentListController)
		.controller('PaymentViewController', PaymentViewController)
		.controller('PaymentCreateController', PaymentCreateController)
		.controller('PaymentEditController', PaymentEditController);

		PaymentListController.$inject = ['$scope','$state','popupService','$window','Payment','tmhDynamicLocale'];
		PaymentViewController.$inject = ['$scope','$stateParams','Payment','tmhDynamicLocale'];
		PaymentCreateController.$inject = ['$scope','$state','$stateParams','Payment','Contrib','tmhDynamicLocale'];
		PaymentEditController.$inject = ['$scope','$state','$stateParams','Payment','Contrib','tmhDynamicLocale'];


		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function PaymentListController($scope,$state,popupService,$window,Payment, tmhDynamicLocale) {
			/*jshint validthis: true */
			var vm = this;

			var response = Payment.query();

			$scope.payments = response;
			

		    $scope.deletePayment=function(payment){
	        if(popupService.showPopup('Deseja realmente deletar ?')){
	            
	            payment.$delete({id:payment.id},function(){
	            	var response = Payment.query();

					$scope.payments = response;
	            	 $state.go('home.arrecadacao');
	                // $window.location.href='';


	            });
		        }
		    }

		}

		function PaymentViewController($scope,$stateParams,Payment, tmhDynamicLocale) {
			/*jshint validthis: true */
			var vm = this;

			$scope.payments=Payment.get({id:$stateParams.id});



		}

		function PaymentCreateController ($scope,$state,$stateParams,Payment,Contrib, tmhDynamicLocale) {
			/*jshint validthis: true */
			var vm = this;

			
			var response = Contrib.query();

			$scope.contribs = response;
			
			$scope.payments=new Payment();

			$scope.myDate = null;

			$scope.minDate = new Date();

			$scope.maxDate = new Date();



		    $scope.addPayment=function(){
		        $scope.payments.$save(function(){
		            $state.go('home.arrecadacao');
		        });
		    }

		}

		function PaymentEditController($scope,$state,$stateParams,Payment,Contrib, tmhDynamicLocale) {
			/*jshint validthis: true */
			var vm = this;

			var response = Contrib.query();

			$scope.contribs = response;

			// tmhDynamicLocale.set('pt-br');

			

			$scope.updatePayment=function(){
		        var promise = $scope.payments.$update({id:$stateParams.id});

		        promise.then(function (out) {
				    $state.go('home.arrecadacao');
				});
		        
		    };

		    $scope.loadPayment=function(){
		        $scope.payments=Payment.get({id:$stateParams.id});
		    };

		    $scope.loadPayment();			

		}

})();

(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:authCtrl
	* @description
	* # authCtrl
	* Controller of the app
	*/

  	angular
		.module('auth')
		.controller('AuthCtrl', Auth);

		Auth.$inject = ['$scope', '$rootScope', '$location', 'AuthenticationService'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Auth($scope, $rootScope, $location, AuthenticationService) {
			/*jshint validthis: true */
			var vm = this;
			// reset login status
	        AuthenticationService.ClearCredentials();
	       //$scope.telaLogin = $rootScope.telaLogin;
	       //console.log('AuthCtrl')
	        
	        vm.telaLogin = $rootScope.telaLogin;

	  		
	  
	        $scope.login = function () {
		            $scope.dataLoading = true;
		            AuthenticationService.SetCredentials($scope.username, $scope.password);
		            AuthenticationService.Login($scope.username, $scope.password, function(response) {
		                if(response.success) {
		                    //AuthenticationService.SetCredentials($scope.username, $scope.password);
		                    $location.path('/');
		                } else {

		                    $scope.error = response.message;
		                    $scope.dataLoading = false;
		                }
		            });
				}
			};
})();

(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:usersCtrl
	* @description
	* # usersCtrl
	* Controller of the app
	*/

  	angular
		.module('contribs')
		.controller('ContribListController', ContribListController)
		.controller('ContribViewController', ContribViewController)
		.controller('ContribCreateController', ContribCreateController)
		.controller('ContribEditController', ContribEditController);

		ContribListController.$inject = ['$scope','$state','popupService','$window','Contrib','tmhDynamicLocale'];
		ContribViewController.$inject = ['$scope','$stateParams','Contrib','tmhDynamicLocale'];
		ContribCreateController.$inject = ['$scope','$state','$stateParams','Contrib','tmhDynamicLocale', 'brCidadesEstados'];
		ContribEditController.$inject = ['$scope','$state','$stateParams','Contrib','tmhDynamicLocale', 'brCidadesEstados'];


		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function ContribListController($scope,$state,popupService,$window,Contrib, tmhDynamicLocale) {
			/*jshint validthis: true */
			var vm = this;

			var response = Contrib.query();

			$scope.contribs = response;
			

		    $scope.deleteContrib=function(contrib){
	        if(popupService.showPopup('Deseja realmente deletar ?')){
	            
	            contrib.$delete({id:contrib.id},function(){
	            	 
					var response = Contrib.query();

					$scope.contribs = response;
					$state.go('home.contribs');
	            	 
	                // $window.location.href='';
	            });
		        }
		    }

		}

		function ContribViewController($scope,$stateParams,Contrib, tmhDynamicLocale) {
			/*jshint validthis: true */
			var vm = this;

			$scope.contribs=Contrib.get({id:$stateParams.id});



		}

		function ContribCreateController ($scope,$state,$stateParams,Contrib, tmhDynamicLocale, brCidadesEstados) {
			/*jshint validthis: true */
			var vm = this;

			$scope.contribs=new Contrib();

			$scope.estados = brCidadesEstados.estados;

			$scope.buscarCidadesPorSigla = function(sigla){
			 	console.log(sigla);
		         $scope.cidades = brCidadesEstados.buscarCidadesPorSigla(sigla);
			 }

		    $scope.addContrib=function(){
		        $scope.contribs.$save(function(){
		            $state.go('home.contribs');
		        });
		    }

		}

		function ContribEditController($scope,$state,$stateParams,Contrib, tmhDynamicLocale, brCidadesEstados) {
			/*jshint validthis: true */
			var vm = this;

			tmhDynamicLocale.set('pt-br');

			$scope.estados = brCidadesEstados.estados;



			 $scope.buscarCidadesPorSigla = function(sigla){
			 	console.log(sigla);
		         $scope.cidades = brCidadesEstados.buscarCidadesPorSigla(sigla);
			 }

			$scope.updateContrib=function(){
		        var promise = $scope.contribs.$update({id:$stateParams.id});

		        promise.then(function (out) {
				    $state.go('home.contribs');
				});
		        
		    };

		    $scope.loadContrib=function(){
		        $scope.contribs=Contrib.get({id:$stateParams.id});
		    };

		    $scope.loadContrib();			

		}

})();


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
		// console.log($rootScope.globals.currentUser.user)
		
		if (typeof($rootScope.globals.currentUser) !== "undefined")
			vm.title = 'Olá '+$rootScope.globals.currentUser.user.name ;
		vm.version = "1.0.0";
		vm.listFeatures = homeService.getFeaturesList();

	}

})();

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:LayoutCtrl
	* @description
	* # LayoutCtrl
	* Controller of the app
	*/

	angular
		.module('contrib')
		.controller('LayoutCtrl', Layout);

	Layout.$inject = ['$mdSidenav', '$cookies', '$state', '$mdToast', '$mdDialog', 'AuthenticationService' , '$rootScope' ];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function Layout($mdSidenav, $cookies, $state, $mdToast, $mdDialog, AuthenticationService, $rootScope) {
		/*jshint validthis: true */
		var vm = this;

		vm.toggleSidenav = function (menuId) {
			$mdSidenav(menuId).toggle();
		};

		vm.changePassword = function () {
			$mdToast.show(
				$mdToast.simple()
				.content('Password clicked!')
				.position('top right')
				.hideDelay(2000)
			);
		};

		vm.changeProfile = function (ev) {
			$mdDialog.show({
				controller: DialogController,
				templateUrl: 'tabDialog.tmpl.html',
				parent: angular.element(document.body),
				targetEvent: ev,
				clickOutsideToClose:true
			})
			.then(function(answer) {
				$mdToast.show(
					$mdToast.simple()
					.content('You said the information was "' + answer + '".')
					.position('top right')
					.hideDelay(2000)
				);

			}, function() {
				$mdToast.show(
					$mdToast.simple()
					.content('You cancelled the dialog.')
					.position('top right')
					.hideDelay(2000)
				);
			});

			function DialogController($scope, $mdDialog) {
				$scope.hide = function() {
					$mdDialog.hide();
				};

				$scope.cancel = function() {
					$mdDialog.cancel();
				};

				$scope.answer = function(answer) {
					$mdDialog.hide(answer);
				};
			}
		};


		vm.logOut = function () {

			// reset login status
	        AuthenticationService.ClearCredentials();
	        $rootScope.telaLogin=false;
			$state.go('home.login');
			//alert('Implement your Function Here');
			// $cookies.put('dev_appserver_login', ' ');
			//$state.go('out', {}, {reload: true});

		};

		var originatorEv;
		vm.openMenu = function ($mdOpenMenu, ev) {
			originatorEv = ev;
			$mdOpenMenu(ev);
		};

	}

})();

(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:SidenavCtrl
	* @description
	* # SidenavCtrl
	* Controller of the app
	*/
	angular
		.module('contrib')
		.controller('SidenavCtrl', SidenavCtrl)
		.controller('SettingsCtrl', SettingsCtrl);

	// Injecting Denpendencies

	SidenavCtrl.$inject = ['$mdSidenav', '$state', '$mdBottomSheet', '$mdToast', 'MenuService', '$scope'];
	SettingsCtrl.$inject = ['$mdBottomSheet'];

	/*
	* recommend
	* Using function declarations
	* and bindable members up top.
	*/

	function SidenavCtrl($mdSidenav, $state, $mdBottomSheet, $mdToast, MenuService, $scope) {
		/*jshint validthis: true */
		var vm = this;

		vm.toggleSidenav = function (menuId) {
			$mdSidenav(menuId).toggle();
		};

		vm.closeSidenav = function() {
			$mdSidenav('left').close();
		};

		// Close menu on small screen after click on menu item.
		// Only use $scope in controllerAs when necessary; for example, publishing and subscribing events using $emit, $broadcast, $on or $watch.
		$scope.$on('$stateChangeSuccess', vm.closeSidenav);

		vm.menu = MenuService.listMenu();

		vm.admin = [
			{
				link: 'showListBottomSheet($event)',
				title: 'Settings',
				icon: 'settings'
			}
			// {
			// 	link: 'users',
			// 	title: 'Usuários',
			// 	icon: 'settings'
			// }
		];

		vm.navigateTo = function (target) {

			var page = target;

			$state.go(page);

		};

		vm.showSettingsBottom = function ($event) {
			vm.alert = '';
			$mdBottomSheet.show({
				template: '<md-bottom-sheet class="md-grid" layout="column" ng-cloak><div layout="row" layout-align="center center"><h4>With clickOutsideToClose option, drag down or press ESC to close</h4></div><md-list flex layout="row" layout-align="center center"><md-list-item ng-repeat="item in vm.items"><md-button class="md-grid-item-content" ng-click="vm.listItemClick($index)"><md-icon class="md-48">{{item.icon}}</md-icon><div class="md-grid-text"> {{ item.name }} </div></md-button></md-list-item></md-list></md-bottom-sheet>',
				controller: 'SettingsCtrl',
				controllerAs: 'vm',
				targetEvent: $event
			}).then(function (clickedItem) {
				$mdToast.show(
					$mdToast.simple()
					.content(clickedItem.name + ' clicked!')
					.position('top right')
					.hideDelay(2000)
				);
			});
		};

	}

	function SettingsCtrl($mdBottomSheet) {
		/*jshint validthis: true */
		var vm = this;

		vm.items = [
			{name: 'Roles', icon: 'assignment_ind'},
			{name: 'Notes', icon: 'speaker_notes'},
			{name: 'Tasks', icon: 'view_list'},
			{name: 'Inbox', icon: 'inbox'}
		];

		vm.listItemClick = function ($index) {
			var clickedItem = vm.items[$index];
			$mdBottomSheet.hide(clickedItem);
		};
	}

})();

(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:usersCtrl
	* @description
	* # usersCtrl
	* Controller of the app
	*/

  	angular
		.module('users')
		.controller('MovieListController', MovieListController)
		.controller('MovieViewController', MovieViewController)
		.controller('MovieCreateController', MovieCreateController)
		.controller('MovieEditController', MovieEditController);

		MovieListController.$inject = ['$scope','$state','popupService','$window','Movie'];
		MovieViewController.$inject = ['$scope','$stateParams','Movie'];
		MovieCreateController.$inject = ['$scope','$state','$stateParams','Movie'];
		MovieEditController.$inject = ['$scope','$state','$stateParams','Movie'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function MovieListController($scope,$state,popupService,$window,Movie) {
			/*jshint validthis: true */
			var vm = this;

			var response = Movie.query();

			$scope.users = response;
			
			$scope.deleteUser = function(user) { // Delete a movie. Issues a DELETE to /api/movies/:id
		    if (popupService.showPopup('Tem certeza que deseja deletar o usuário '+user.name+' ?')) {
		        var promise = user.$delete({id:user.id});


		        promise.then(function (out) {
		        	$scope.users = Movie.query();
				    $state.go('home.users');
				});
		     }
		    };
		    


		}

		function MovieViewController($scope,$stateParams,Movie) {
			/*jshint validthis: true */
			var vm = this;

			$scope.selected = [];
			$scope.users=Movie.get({id:$stateParams.id});

			$scope.users.$promise.then(function(response){

					// response.role = response.role.replace("admin", "Administrador");
					// response.role = response.role.replace("user", "Usuario");
					$scope.selected = response.role.split(',');
					

				}

			)

				

			  $scope.items = [
				  {
				  	name:'Administrador',
				  	value: 'admin'
				  },
				  {
				  	name: 'Usuario',
				  	value: 'user'
				  }
			  ];
			  //$scope.selected = [];
			  $scope.toggle = function (item, list) {
			    var idx = list.indexOf(item);
			    if (idx > -1) {
			      list.splice(idx, 1);
			    }
			    else {
			      list.push(item);
			    }
			  };

			  $scope.exists = function (item, list) {
			  	console.log(item)
			  	console.log(list)
			    return list.indexOf(item) > -1;
			  };

			  $scope.isIndeterminate = function() {
			    return ($scope.selected.length !== 0 &&
			        $scope.selected.length !== $scope.items.length);
			  };

			  $scope.isChecked = function() {
			    return $scope.selected.length === $scope.items.length;
			  };

			  $scope.toggleAll = function() {
			    if ($scope.selected.length === $scope.items.length) {
			      $scope.selected = [];
			    } else if ($scope.selected.length === 0 || $scope.selected.length > 0) {
			    	$scope.items.forEach(function(entry) {
			    		$scope.selected.push(entry.value)
					     console.log($scope.selected);

					});

			      $scope.selected = $scope.items.slice(0);
			    }
			  };



		}

		function MovieCreateController ($scope,$state,$stateParams,Movie) {
			/*jshint validthis: true */
			var vm = this;

			$scope.users=new Movie();


		    $scope.addUser=function(){

		        var promise = $scope.users.$save();

		        promise.then(function (out) {
				    $state.go('home.users');				    
				}, function(motivo) {
					$scope.addmessage = motivo.data.message
				  // console.log(motivo)
				});
		    }

		}

		function MovieEditController($scope,$state,$stateParams,Movie) {
			/*jshint validthis: true */
			var vm = this;

			$scope.updateUser=function(){
				$scope.users.role = $scope.selected;
		        var promise = $scope.users.$update({id:$stateParams.id});

		        
				promise.then(function (out) {
				    $state.go('home.users');				    
				}, function(motivo) {
					$scope.editmessage = motivo.data.message
				  // console.log(motivo)
				});
		        
		    };

		    $scope.loadUser=function(){
				$scope.selected = [];

		        $scope.users=Movie.get({id:$stateParams.id});

		        $scope.users.$promise.then(function(response){

					// response.role = response.role.replace("admin", "Administrador");
					// response.role = response.role.replace("user", "Usuario");
					$scope.selected = response.role.split(',');
					

				}

			)

				

			  $scope.items = [
				  {
				  	name:'Administrador',
				  	value: 'admin'
				  },
				  {
				  	name: 'Usuario',
				  	value: 'user'
				  }
			  ];
			  //$scope.selected = [];
			  $scope.toggle = function (item, list) {
			    var idx = list.indexOf(item);
			    if (idx > -1) {
			      list.splice(idx, 1);
			    }
			    else {
			      list.push(item);
			    }
			  };

			  $scope.exists = function (item, list) {
			  	console.log(item)
			  	console.log(list)
			    return list.indexOf(item) > -1;
			  };

			  $scope.isIndeterminate = function() {
			    return ($scope.selected.length !== 0 &&
			        $scope.selected.length !== $scope.items.length);
			  };

			  $scope.isChecked = function() {
			    return $scope.selected.length === $scope.items.length;
			  };

			  $scope.toggleAll = function() {
			    if ($scope.selected.length === $scope.items.length) {
			      $scope.selected = [];
			    } else if ($scope.selected.length === 0 || $scope.selected.length > 0) {
			    	$scope.items.forEach(function(entry) {
			    		$scope.selected.push(entry.value)
					     console.log($scope.selected);

					});

			      $scope.selected = $scope.items.slice(0);
			    }
			  };

		    };

		    $scope.loadUser();			

		}

})();

(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:arrecadacaoService
	 * @description
	 * # arrecadacaoService
	 * Service of the app
	 */

  	angular
		.module('arrecadacao')
		.factory('PaymentsService', Payments)
		.factory('Payment', Payment)
		.factory('Contrib', Contrib)
		.service('popupServicePayment', popupServicePayment);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Payments.$inject = ['$http'];

		function Payments ($http) {

		}

		Payment.$inject = ['$resource', '$rootScope'];

		function Payment ($resource, $rootScope) {
			if (typeof($rootScope.globals.currentUser) == "undefined")
			{
				var token = '';
			}else{
				var token = $rootScope.globals.currentUser.token;
			}

			

		    return $resource($rootScope.UrlAPIPayments+':id',{id:'@_id', access_token: token},{
		        update: {
		            method: 'PUT'
		        }

		        // ,get: {
		        // 	method: 'GET',
		        // 	isArray:true
		        // }
		    });
		}

		Contrib.$inject = ['$resource', '$rootScope'];

		function Contrib ($resource, $rootScope) {
			if (typeof($rootScope.globals.currentUser) == "undefined")
			{
				var token = '';
			}else{
				var token = $rootScope.globals.currentUser.token;
			}

			

		    return $resource($rootScope.UrlAPIContribs+':id',{id:'@_id', access_token: token},{
		        update: {
		            method: 'PUT'
		        }
		    });
		}
		
		function popupServicePayment ($window) {
		    this.showPopup=function(message){
		        return $window.confirm(message);
		    }
		}

})();

(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:authService
	 * @description
	 * # authService
	 * Service of the app
	 */

  	angular
		.module('auth')
		.factory('AuthenticationService', AuthenticationService)
		.factory('Base64', Base64);

		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		AuthenticationService.$inject = ['Base64', '$http', '$cookieStore', '$rootScope', '$timeout', '$state'];
		Base64.$inject = [];

		function AuthenticationService (Base64, $http, $cookieStore, $rootScope, $timeout, $state) {
					var service = {};
		 
		        service.Login = function (username, password, callback) {
		 
		            /* Dummy authentication for testing, uses $timeout to simulate api call
		             ----------------------------------------------*/
		            //$timeout(function(){
		            //    var response = { success: username === 'test' && password === 'test' };
		            //    if(!response.success) {
		            //        response.message = 'Username or password is incorrect';
		            //    }
		             //   callback(response);
		            //}//, 1000);
		 
		 
		            /* Use this for real authentication
		             ----------------------------------------------*/
		             
		            $http.post($rootScope.UrlAPIAuth, { 'access_token': $rootScope.mastertoken })
		               .then(
		                function(response){
					        // success callback
					        
					        //console.log(response)

					        $rootScope.globals.currentUser.token = response.data.token
					        $rootScope.globals.currentUser.user = response.data.user
					        $rootScope.telaLogin=true;

				                
		                	//$cookieStore.put('token', response.data.token);
		                	//$cookieStore.put('user', response.data.user);
					        $cookieStore.put('globals', $rootScope.globals);
					         
				            $state.go('home.dashboard');
					        callback(response);

					       }, 
					    function(response){
					         // failure callback
					         // console.log('Authenticao falhou !!')
					          console.log(response)
					         
					         if (response.status === -1)
					         {
					         	response.message = "Servidor fora do ar !!!"
					         }else if (response.data.message){
					         	response.message = response.data.message
					         }else{
					         	response.message = response.status+": "+response.statusText
					         }

					         callback(response);
					       }
		               );
		 
		        };
		  
		        service.SetCredentials = function (username, password) {
		            var authdata = Base64.encode(username + ':' + password);
		  
		            $rootScope.globals = {
		                currentUser: {
		                    username: username,
		                    authdata: authdata
		                }
		            };
		  
		            $http.defaults.headers.common['Authorization'] = 'Basic ' + authdata; // jshint ignore:line
		            $cookieStore.put('globals', $rootScope.globals);
		        };
		  
		        service.ClearCredentials = function () {
		            $rootScope.globals = {};
		            $cookieStore.remove('globals');
		            $http.defaults.headers.common.Authorization = 'Basic ';
		        };
		  
		        return service;

		}

		function Base64() {
			/* jshint ignore:start */
		  
		    var keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';
		  
		    return {
		        encode: function (input) {
		            var output = "";
		            var chr1, chr2, chr3 = "";
		            var enc1, enc2, enc3, enc4 = "";
		            var i = 0;
		  
		            do {
		                chr1 = input.charCodeAt(i++);
		                chr2 = input.charCodeAt(i++);
		                chr3 = input.charCodeAt(i++);
		  
		                enc1 = chr1 >> 2;
		                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
		                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
		                enc4 = chr3 & 63;
		  
		                if (isNaN(chr2)) {
		                    enc3 = enc4 = 64;
		                } else if (isNaN(chr3)) {
		                    enc4 = 64;
		                }
		  
		                output = output +
		                    keyStr.charAt(enc1) +
		                    keyStr.charAt(enc2) +
		                    keyStr.charAt(enc3) +
		                    keyStr.charAt(enc4);
		                chr1 = chr2 = chr3 = "";
		                enc1 = enc2 = enc3 = enc4 = "";
		            } while (i < input.length);
		  
		            return output;
		        },
		  
		        decode: function (input) {
		            var output = "";
		            var chr1, chr2, chr3 = "";
		            var enc1, enc2, enc3, enc4 = "";
		            var i = 0;
		  
		            // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
		            var base64test = /[^A-Za-z0-9\+\/\=]/g;
		            if (base64test.exec(input)) {
		                window.alert("There were invalid base64 characters in the input text.\n" +
		                    "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +
		                    "Expect errors in decoding.");
		            }
		            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
		  
		            do {
		                enc1 = keyStr.indexOf(input.charAt(i++));
		                enc2 = keyStr.indexOf(input.charAt(i++));
		                enc3 = keyStr.indexOf(input.charAt(i++));
		                enc4 = keyStr.indexOf(input.charAt(i++));
		  
		                chr1 = (enc1 << 2) | (enc2 >> 4);
		                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
		                chr3 = ((enc3 & 3) << 6) | enc4;
		  
		                output = output + String.fromCharCode(chr1);
		  
		                if (enc3 != 64) {
		                    output = output + String.fromCharCode(chr2);
		                }
		                if (enc4 != 64) {
		                    output = output + String.fromCharCode(chr3);
		                }
		  
		                chr1 = chr2 = chr3 = "";
		                enc1 = enc2 = enc3 = enc4 = "";
		  
		            } while (i < input.length);
		  
		            return output;
		        }
		    };
		  
		    /* jshint ignore:end */
		}

})();

(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:usersService
	 * @description
	 * # usersService
	 * Service of the app
	 */

  	angular
		.module('contribs')
		.factory('ContribsService', Contribs)
		.factory('Contrib', Contrib)
		.service('popupServiceContrib', popupServiceContrib);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Contribs.$inject = ['$http'];

		function Contribs ($http) {

		}

		Contrib.$inject = ['$resource', '$rootScope'];

		function Contrib ($resource, $rootScope) {
			if (typeof($rootScope.globals.currentUser) == "undefined")
			{
				var token = '';
			}else{
				var token = $rootScope.globals.currentUser.token;
			}

			

		    return $resource($rootScope.UrlAPIContribs+':id',{id:'@_id', access_token: token},{
		        update: {
		            method: 'PUT'
		        }
		    });
		}
		
		function popupServiceContrib ($window) {
		    this.showPopup=function(message){
		        return $window.confirm(message);
		    }
		}
})();


(function () {
	'use strict';

	/**
	* @ngdoc function
	* @name app.service:homeService
	* @description
	* # homeService
	* Service of the app
	*/

	angular.module('contrib')
		.factory('homeService', homeService);

	homeService.$inject = ['$http'];

	function homeService($http) {

		var list = [
			{"feature": "Implemented Best Practices, following: John Papa's Guide"},
			{"feature": "Using Controller AS syntax"},
			{"feature": "Wrap Angular components in an Immediately Invoked Function Expression (IIFE)"},
			{"feature": "Declare modules without a variable using the setter syntax"},
			{"feature": "Using named functions"},
			{"feature": "Including Unit test with Karma"},
			{"feature": "Including UI options for Bootstrap or Angular-Material"},
			{"feature": "Including Angular-Material-Icons for Angular-Material UI"},
			{"feature": "Dynamic Menu generator for both themes"},
			{"feature": "Grunt task for Production and Development"}
		];

		return {
			getFeaturesList: getFeaturesList
		};

		function getFeaturesList() {
			return list;
		}

	}

})();

(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:menuService
	 * @description
	 * # menuService
	 * Service of the app
	 */

  	angular
		.module('contrib')
		.factory('MenuService', Menu);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Menu.$inject = ['$http'];

		function Menu ($http) {

			var menu = [
				
					// {
					// 	link: 'login',
					// 		name: 'Login'
					// },
			    
					{
						link: 'users',
							name: 'Usuários'
					},
					{
						link: 'contribs',
							name: 'Contribuintes'
					},
					{
						link: 'arrecadacao',
							name: 'Arrecadação'
					},
			    
			    
		  	];

			return {
				listMenu: function () {
					return menu;
				}
		  	}

		}

})();

(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:menuService
	 * @description
	 * # menuService
	 * Service of the app
	 */

  	angular
		.module('contrib')
		.factory('MenuService', Menu);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Menu.$inject = ['$http'];

		function Menu ($http) {

			var menu = [
				
					// {
					// 	link: 'login',
					// 		name: 'Login'
					// },
			    
					{
						link: 'users',
							name: 'Usuários'
					},
					{
						link: 'contribs',
							name: 'Contribuintes'
					},
					{
						link: 'arrecadacao',
							name: 'Arrecadação'
					},
			    
		  	];

			return {
				listMenu: function () {
					return menu;
				}
		  	}

		}

})();

(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:usersService
	 * @description
	 * # usersService
	 * Service of the app
	 */

  	angular
		.module('users')
		.factory('UsersService', Users)
		.factory('Movie', Movie)
		.service('popupService', popupService);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Users.$inject = ['$http'];

		function Users ($http) {

		}

		Movie.$inject = ['$resource', '$rootScope'];

		function Movie ($resource, $rootScope) {
			if (typeof($rootScope.globals.currentUser) == "undefined")
			{
				var token = '';
			}else{
				var token = $rootScope.globals.currentUser.token;
			}

			

		    return $resource($rootScope.UrlAPIUsers+':id',{id:'@_id', access_token: token},{
		        update: {
		            method: 'PUT'
		        }
		    });
		}
		
		function popupService ($window) {
		    this.showPopup=function(message){
		        return $window.confirm(message);
		    }
		}
})();
