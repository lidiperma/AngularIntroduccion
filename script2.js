var app=angular.module("app",[]);
 
function SeguroController($scope) {
    
    //Objeto Notacion JSON
  $scope.seguro = {
    nif:"",
    nombre:"Marta",
    ape1:"",
    edad:33,
    sexo:"",
    casado:false,
    numHijos:0,
    embarazada:false,
    //es un objeto dentro del objeto seguro
    coberturas: {
      oftalmologia:false,
      dental:false,
      fecundacionInVitro:false
    },
    //es un objeto dentro del objeto seguro
    enfermedades:{
      corazon:false,
      estomacal:false,
      rinyones:false,
      alergia:false,
      nombreAlergia:""
    },
    fechaCreacion:new Date()
  };
}


