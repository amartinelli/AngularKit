(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:contribsTest
	 * @description
	 * # contribsTest
	 * Test of the app
	 */

	describe('contribs test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('contrib');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('ContribsCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
