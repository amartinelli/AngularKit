(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:report1Service
	 * @description
	 * # report1Service
	 * Service of the app
	 */

  	angular
		.module('report1')
		.factory('ReportPayment', ReportPayment)
		.factory('Report1Service', Report1);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		ReportPayment.$inject = ['$resource', '$rootScope'];

		function ReportPayment ($resource, $rootScope) {
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

		Report1.$inject = ['$resource', '$rootScope'];

		function Report1 ($resource, $rootScope) {
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

})();
