var app=angular.module("app",[]);
   
app.controller("SeguroController",['$scope','$log','$http',function($scope,$log,$http) {
  $scope.seguro={
    nif:"",
    nombre:"",
    ape1:"",
    edad:undefined,
    sexo:"",
    casado:false,
    numHijos:undefined,
    embarazada:false,
    coberturas: {
      oftalmologia:false,
      dental:false,
      fecundacionInVitro:false
    },
    enfermedades:{
      corazon:false,
      estomacal:false,
      rinyones:false,
      alergia:false,
      nombreAlergia:""
    },
    fechaCreacion:new Date()
  };
   
  $log.debug("Acabamos de crear el $scope");
  //PETICIÓN POR AJAX
  $http({
    method: 'GET', 
    url: 'datos.json'
  //funcion de callback de exito
  }).success(function(data, status, headers, config) {
      //el objeto data contiene los datos (en txt)
      $scope.seguro=data;
      alert(status);
      alert(statusText);
      //funcion de callback de error
  }).error(function(data, status, headers, config) {
      alert("Ha fallado la petición. Estado HTTP:"+status);
  });
   
}]);

