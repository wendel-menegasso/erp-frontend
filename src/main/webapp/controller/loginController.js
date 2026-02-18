angular.module('appLogin')
  .controller('LoginController', function($location, $window, AuthService) {
    var vm = this;

    vm.user = {
      email: '',
      senha: ''
    };

    vm.error = '';
    vm.loading = false;

    vm.login = function() {

      vm.error = '';
      vm.loading = true;
      AuthService.autenticar(vm.user.email, vm.user.senha)
        .then(function(ok) {
          vm.loading = false;
          if (ok) {
            $location.path('/dashboard');
          } else {
            vm.error = "Usuário ou senha inválidos";
          }
        })
        .catch(function() {
          vm.loading = false;
          vm.error = "Erro ao conectar com o servidor";
        });
    };
  });