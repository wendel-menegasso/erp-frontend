angular.module('appLogin')
.service('Aba2AlunoService', function($http) {
  this.salvar = function(dados) {
    return $http.post('http://localhost:8081/contato', dados);
  };
});