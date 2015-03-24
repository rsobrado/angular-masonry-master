'use strict';

angular.module('masonryApp',['wu.masonry'])
    .controller('ImagesCtrl', function($scope) {
        $scope.bricks = [];

        // function genBrick() {
        //     var num = ~~(Math.random() * 23) + 100;
        //     return {
        //         src: 'images/img-bg/img-' + num + 'jpg'
        //     };
        // };

        // function bricksGenerator(x) {
        //     for (var i = 1; i <= x; i++) {
        //         $scope.bricks.push(genBrick());
        //     };

        // };

        // bricksGenerator(10);
    });
