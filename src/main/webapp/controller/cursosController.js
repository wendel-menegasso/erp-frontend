angular.module('appLogin')
    .controller('CursosController', function($scope, CursosService) {

    $scope.cursos = [];
    $scope.cursoSelecionado = null;

    CursosService.getCursos().then(function(response) {
        $scope.cursos = response.data;
    }, function(error) {
        console.error("Erro ao carregar cursos:", error);
    });
});
