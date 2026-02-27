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
    vm.periodoSelecionado = 2;

    Aba4AlunoService.getCursos().then(function(response) {
           vm.cursos = response.data;
    }, function(error) {
        console.error("Erro ao carregar cursos:", error);
    });

    vm.getPeriodo = function(curso) {
        if (!curso) {
            vm.periodoSelecionado = "2"; // Noite como padrão
            return;
        }

        // Se o curso já tem um período definido no objeto
        if (curso.periodo !== undefined && curso.periodo !== null) {
            switch (curso.periodo) {
                case "NOITE":
                    vm.periodoSelecionado = "2";
                    break;
                case "TARDE":
                    vm.periodoSelecionado = "1";
                    break;
                case "MANHA":
                    vm.periodoSelecionado = "0";
                default:
                    vm.periodoSelecionado = "2";
            }
        } else {
            vm.periodoSelecionado = "2"; // fallback
        }
    };


  vm.enviar = function() {
        var id = vm.cursoSelecionado.id;
        WizardStateService.setAba4(Number(id));
  };
 });