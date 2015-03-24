'use strict';

angular
	.module('masonryApp', ['wu.masonry'])
	.config(function ($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl: 'views/main.html',
				controller: 'ImagesCtrl'
			})
			.otherwise({
				redirectTo: '/'
			});
	});
