 (function () {
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', function ($scope) {
    $scope.lunch = '';

    $scope.parseLunch = function () {
      var parseLunch = $scope.lunch.split(',');
      // console.log(parseLunch);
      return parseLunch;
    };

    $scope.lunchMessage = '';

    $scope.countLunch = function () {

      var lunch = $scope.parseLunch();
      var lunchNo = 0;

      for (var i = 0; i < lunch.length; i++) {
        lunchNo += 1;
        // console.log(lunchNo);
      }
      console.log(lunchNo);
      if( lunchNo != 1 && lunchNo <= 3 ) {
        $scope.lunchMessage = "Enjoy";
      } else if (lunchNo > 3){
        $scope.lunchMessage = "Too much";
      };

      console.log( $scope.lunchMessage );

    };

  });


})();
