angular.module('appLogin')
.controller('Aba1AlunoController', function(Aba1AlunoService, WizardStateService, AbaService) {
    var vm = this;

    vm.finalizar = function() {
        // chama o método do MainController via callback no HTML
        vm.enviar();
    };


  vm.form = {};
  vm.endereco = {
    rua: '',
    numero: '',
    cep: '',
    cidade:  '',
    bairro:  '',
    estado: '',
    pais:  ''
  };


  vm.enviar = function() {
      vm.endereco.rua = vm.form.rua;
      vm.endereco.cep = vm.form.cep;
      vm.endereco.numero = vm.form.numero;
      vm.endereco.cidade = vm.form.cidade;
      vm.endereco.bairro = vm.form.bairro;
      vm.endereco.estado = vm.form.estado;
      vm.endereco.pais = vm.form.pais;
      Aba1AlunoService.salvar(vm.endereco).then(function(response) {
        var id = response.data;

        WizardStateService.setAba1(Number(id));
    });
  };

});