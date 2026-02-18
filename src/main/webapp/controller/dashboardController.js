angular.module('appLogin')
  .controller('DashboardController', function($location, DashboardService, $scope, WizardStateService, AuthService) {

    var vm = this;

    vm.sair = function() {
      AuthService.logout();
      $location.path('/login');
    };
      vm.irParaWizard = function() {
        WizardStateService.abrirAbaInicial(1);
        $location.path('/aluno');
      };

  });