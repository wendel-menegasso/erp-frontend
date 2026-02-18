angular.module('appLogin')
.controller('Aba3AlunoController', function(Aba3AlunoService, WizardStateService, AbaService) {
  var vm = this;

  vm.finalizar = function() {
      vm.enviar();
  };


  vm.form = {};

  vm.documento = {
    rg: '',
    cpf: '',
    titulo: '',
    carteiraDeTrabalho: ''
  };

  vm.enviar = function() {
  vm.documento.rg = vm.form.rg;
  vm.documento.cpf = vm.form.cpf;
  vm.documento.titulo = vm.form.titulo;
  vm.documento.carteiraDeTrabalho = vm.form.carteiraDeTrabalho;
    Aba3AlunoService.salvar(vm.documento).then(function(response) {
        var id = response.data;

        WizardStateService.setAba3(Number(id));
    });
  };
});