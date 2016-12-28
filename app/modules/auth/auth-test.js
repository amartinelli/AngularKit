(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:authTest
	 * @description
	 * # authTest
	 * Test of the app
	 */

	describe('auth test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('contrib');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('AuthCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
