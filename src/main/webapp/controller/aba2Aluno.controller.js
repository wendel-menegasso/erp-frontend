angular.module('appLogin')
.controller('Aba2AlunoController', function(Aba2AlunoService, WizardStateService, AbaService) {
  var vm = this;

  vm.finalizar = function() {
      vm.enviar();
  };


  vm.form = {};

    vm.contato = {
      telefone1: '',
      telefone2: '',
      telefone3: '',
      email1:  '',
      email2:  '',
      email3: ''
    };


  vm.enviar = function() {
        vm.contato.telefone1 = vm.form.telefone1;
        vm.contato.telefone2 = vm.form.telefone2;
        vm.contato.telefone3 = vm.form.telefone3;
        vm.contato.email1 = vm.form.email1;
        vm.contato.email2 = vm.form.email2;
        vm.contato.email3 = vm.form.email3;
    Aba2AlunoService.salvar(vm.contato).then(function(response) {
              var id = response.data;

              WizardStateService.setAba2(Number(id));
    });
  };
});