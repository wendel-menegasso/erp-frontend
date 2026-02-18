angular.module('appLogin')
.service('Aba3AlunoService', function($http) {
  this.salvar = function(dados) {
    return $http.post('http://localhost:8081/documento', dados);
  };
});