
var app=angular.module("ejercicio", []);

function controladorPrincipal($scope){
//estamos creando un objeto JSON
//que son los datos del formulario
    $scope.datos  = {
        nombre:"Martita",
        apellido:"Casajús",
        edad:39,
        
        educacion:{
            primaria:true,
            secundaria:false, 
            universitaria:false
            
        }
       
    };
            
        $scope.cargarDatos=function(){
        $scope.datos.nombre="Thiago";
        $scope.datos.apellido="Cucalon";
        $scope.datos.edad= 20;
        $scope.datos.educacion.primaria= true;
        $scope.datos.educacion.secundaria=true;
        
        };   

   
   }



