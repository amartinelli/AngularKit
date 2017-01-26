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
		    return $resource($rootScope.UrlAPIUsers+':id',{id:'@_id', access_token: $rootScope.globals.currentUser.token},{
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
