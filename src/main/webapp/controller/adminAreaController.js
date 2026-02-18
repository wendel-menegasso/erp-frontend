angular.module('appLogin')
  .controller('AdminAreaController', function($location, AdminAreaService, AuthService) {

    var vm = this;

    vm.sair = function() {
      AuthService.logout();
      $location.path('/login');
    };
  });