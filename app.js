(function() {
  'use strict';

angular.module('myFirstApp', [])

.controller('MyFirstController', function($scope) {
  $scope.name = "Jake";
  $scope.sayHello = function() {
    return "Hello mate";
  };
});


})();
