angular.module('appLogin')
.service('Aba1AlunoService', function($http) {
  this.salvar = function(dados) {
    return $http.post('http://localhost:8081/endereco', dados);
  };
});