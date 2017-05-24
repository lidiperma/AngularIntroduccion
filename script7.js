var app=angular.module("app",[]);
  
app.controller("PruebaController",['$scope','$timeout',function($scope,$timeout) {
  $scope.producidoEvento="NO";
  //ejecucion de funciones que se utilizan repetidamente
  $timeout(function() {
    $scope.producidoEvento="SIIIIII";
  },3000);
  
}]);


