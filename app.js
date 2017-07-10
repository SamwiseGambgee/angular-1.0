(function(){

'use strict';

var x = "hello";

angular.module('myFirstApp', [])

.controller('myFirstController', function($scope){
  $scope.name = "Chetan Hireholi";
  $scope.sayHello = function () {
    return "Hello visitor!";
  };
});

})();
