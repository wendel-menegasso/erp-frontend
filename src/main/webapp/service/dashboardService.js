angular.module('appLogin')
  .factory('DashboardService', ['$http', '$window', function($http, $window) {

    return {
      admin: function() {

        var token = $window.localStorage.getItem('tokenJwt');

        return $http.get('http://localhost:8081/admin/dashboard', {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        })
        .then(function(response) {
          return true;
        })
        .catch(function() {
          return 'Não permitido';
        });
      }
    };

  }]);
