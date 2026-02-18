angular.module('appLogin')
.controller('Aba4AlunoController', function(Aba4AlunoService, WizardStateService, $scope) {
  var vm = this;

  vm.form = {};

vm.curso = {
  id: '',
  nome: '',
  periodo: ''
};

  vm.finalizar = function() {
      vm.enviar();
  };

    vm.cursos = [];
    vm.cursoSelecionado = null;

    Aba4AlunoService.getCursos().then(function(response) {
         vm.cursos = response.data;
    }, function(error) {
        console.error("Erro ao carregar cursos:", error);
    });

  vm.enviar = function() {
        var id = vm.cursoSelecionado.id;
        WizardStateService.setAba4(Number(id));
  };

});