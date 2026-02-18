angular.module('appLogin')
.service('CursosService', function($http) {
    var apiUrl = "http://localhost:8081/curso";

    return {
        getCursos: function() {
            return $http.get(apiUrl);
        }
    };
});
