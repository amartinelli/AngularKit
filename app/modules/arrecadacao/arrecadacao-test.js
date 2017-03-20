(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:arrecadacaoTest
	 * @description
	 * # arrecadacaoTest
	 * Test of the app
	 */

	describe('arrecadacao test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('contrib');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('ArrecadacaoCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();
