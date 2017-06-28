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

			

		    return $resource($rootScope.UrlAPIContribs+':id',{id:'@_id', access_token: token, limit: 100},{
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
