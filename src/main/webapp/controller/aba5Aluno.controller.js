angular.module('appLogin')
.controller('Aba5AlunoController', function(Aba5AlunoService, WizardStateService) {
  var vm = this;

  vm.form = {};

  vm.aluno = {};

  vm.enviar = function() {
    vm.aluno.nome = vm.form.nome;
    vm.aluno.pai = vm.form.pai;
    vm.aluno.mae = vm.form.mae;
    vm.aluno.numeroDeMatricula = vm.form.numeroDeMatricula;
    if (vm.form.bolsista === null) vm.aluno.bolsista = false;
    else vm.aluno.bolsista = vm.form.bolsista;
    vm.aluno.valorBolsa = vm.form.valorBolsa;
    var endereco = WizardStateService.getEndereco();
    var contato = WizardStateService.getContato();
    var curso = WizardStateService.getCurso();
    var documento = WizardStateService.getDocumento();
    Aba5AlunoService.finalizar(vm.aluno, endereco,
                                             contato,
                                             documento,
                                             curso).then(function() {
    });
  };

});