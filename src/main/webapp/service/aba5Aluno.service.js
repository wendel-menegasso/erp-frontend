angular.module('appLogin')
.service('Aba5AlunoService', function($http) {
  this.finalizar = function(dados, endereco, contato, documento, curso) {
  const payload = {
    aluno: dados,
    endereco: endereco,
    contato: contato,
    documento: documento,
    curso: curso
  };
    return $http.post("http://localhost:8081/aluno", payload);
  };
});