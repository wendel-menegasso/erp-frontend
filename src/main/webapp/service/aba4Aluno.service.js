angular.module('appLogin')
.service('Aba4AlunoService', function($http) {

  var apiUrl = "http://localhost:8081/curso";

  this.salvar = function(dados) {
    return $http.post(apiUrl, dados);
  };

  this.getCursos = function() {
    return $http.get(apiUrl);
  };
});
