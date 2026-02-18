angular.module('appLogin')
  .factory('AuthInterceptor', ['$q', '$location', '$injector', function($q, $location, $injector) {

    return {
      request: function(config) {
        var AuthService = $injector.get('AuthService');
        var token = AuthService.getToken();

        if (token) {
          config.headers.Authorization = 'Bearer ' + token;
        }

        return config;
      },

      responseError: function(response) {
        if (response.status === 401 || response.status === 403) {
          var AuthService = $injector.get('AuthService');
          AuthService.logout();
          $location.path('/login');
          console.log('Token inválido ou expirado');
        }

        return $q.reject(response);
      }
    };
  }]);