angular.module('appLogin')
  .factory('AuthService', ['$http', '$window', function($http, $window) {

    var TOKEN_KEY = 'tokenJwt';

    return {
      autenticar: function(username, password) {
        return $http.post('http://localhost:8081/public/login', {
          username: username,
          password: password
        }).then(function(response) {
          var token = response.data.token;
          if (token) {
            localStorage.setItem(TOKEN_KEY, token);
            return true;
          }
          return false;
        }).catch(function() {
          return false;
        });
      },

      logout: function() {
        $window.localStorage.removeItem(TOKEN_KEY);
      },

      getToken: function() {
        return $window.localStorage.getItem(TOKEN_KEY);
      },

      isAutenticado: function() {
        return !!$window.localStorage.getItem(TOKEN_KEY);
      }
    };
  }]);