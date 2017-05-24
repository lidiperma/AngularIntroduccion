var app = angular.module("app", []);

//definimos una constante llamada idioma, y valor "es-es"
//se define llamando al método constant
app.constant("idioma", "es-es");

//definimos una constante de nombre "matematicas_simples" que es un objeto Json
//con dos método , sumar y restar
app.constant("matematicas_simples", {
    
    sumar: function (a, b) {
        return a + b;
    },
    restar: function (a, b) {
        return a - b;
    }
});

//OJO son constantes que llaman a constantes
app.constant("radio", 10);
//Las constantes se pueden inyectar en cualquier sitio
app.constant("area", function (radio) {
    return 3.1416 * radio * radio;
});

//
app.controller("PruebaController", ["$scope", "idioma", "matematicas_simples", "radio", "area", function ($scope, idioma, matematicas_simples, radio, area) {
        $scope.idioma = idioma;
        //valores que ponemos en el $scope y que llamamos desde la vista
        $scope.suma = matematicas_simples.sumar(3, 6);
        $scope.area = area(radio);
    }]);

