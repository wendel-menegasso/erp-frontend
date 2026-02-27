angular.module('appLogin', ['ngRoute'])

  // CONFIGURAÇÃO PRINCIPAL
  .config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {

    // Rotas
    $routeProvider
      .when('/login', {
        templateUrl: 'view/login.html',
        controller: 'LoginController',
        controllerAs: 'vm'
      })
      .when('/dashboard', {
        templateUrl: 'view/menuLateral.html',
        controller: 'MenuCtrl',
        controllerAs: 'vm'
      })
    .when('/usuarios', {
      templateUrl: 'view/usuario.html',
      controller: 'UsuarioController',
      controllerAs: 'vm'
    })
      .when('/admin', {
            templateUrl: 'view/adminArea.html',
            controller: 'AdminAreaController',
            controllerAs: 'vm'
      })
        .when('/matricula', {
          templateUrl: 'view/aluno.html',
          controller: 'MainController',
          controllerAs: 'vm'
        })
      .otherwise('/login');

    // Interceptor registrado apenas uma vez
    $httpProvider.interceptors.push('AuthInterceptor');
  }])

  // PROTEÇÃO DE ROTAS
  .run(['$rootScope', '$location', 'AuthService', function($rootScope, $location, AuthService) {

    $rootScope.$on('$routeChangeStart', function(event, next) {

      if (!next || !next.$$route) {
        return;
      }

      // Se não for login e não estiver autenticado → redireciona
      if (next.$$route.originalPath !== '/login' && !AuthService.isAutenticado()) {
        event.preventDefault();
        $location.path('/login');
      }
    });
  }]);
