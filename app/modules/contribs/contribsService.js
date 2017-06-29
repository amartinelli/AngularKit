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

			
		    return $resource($rootScope.UrlAPIContribs+':id',{id:'@_id', access_token: token },{
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

