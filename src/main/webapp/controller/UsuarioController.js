angular.module('appLogin')
.controller("UsuarioController", function($scope, $http) {

    $scope.usuarios = [];

    $scope.popupAberto = false;
    $scope.novoItem = {};

    $scope.abrirPopup = function() {
      $scope.popupAberto = true;
      $scope.novoItem = {}; // limpa o formulário
    };

    $scope.fecharPopup = function() {
      $scope.popupAberto = false;
    };

    $scope.salvarNovo = function() {
      $scope.produtos.push(angular.copy($scope.novoItem));
      $scope.fecharPopup();
    };


    var apiUrl = "http://localhost:8081/config/users";

    // Busca os dados no backend
    $http.get(apiUrl)
        .then(function(response) {
            $scope.usuarios = response.data;
        })
        .catch(function(error) {
            console.error("Erro ao carregar usuários:", error);
        });

});
