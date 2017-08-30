(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:report1Test
	 * @description
	 * # report1Test
	 * Test of the app
	 */

	describe('report1 test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('contrib');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('Report1Ctrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
