'use strict';

angular.module('masonryApp', ['wu.masonry']).
	controller('DemoCtrl', function($scope) {

		$scope.bricks = [];

		function genBrick() {
			var height = ~~(Math.random() * 500) + 100;
			var id = ~~(Math.random() * 10000);
			return {
				src: 'http://lorempixel.com/g/280/' + height + '/?' + id
			};
		};

		function bricksGenerator(x) {
			for (var i = 1; i <= x; i++) {
				$scope.bricks.push(genBrick());
			};

		};

		bricksGenerator(10)
	});
	