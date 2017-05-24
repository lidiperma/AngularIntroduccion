var app=angular.module("app",[]);
//Esto segun Angular es inyeccion
//Inyeccion de dependencia   
app.controller("SeguroController",['$scope','$log',function($scope,$log) {
        $log.debug("Acabamos de crear el controloador");
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
  $log.error("Error"); 
  $log.debug("Acabamos de crear el $scope");
  $log.warn("Warning");
}]);

