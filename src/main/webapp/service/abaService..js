angular.module('appLogin')
.service('AbaService', function() {

    var dados = {
        abaAtual: 1
    };

    this.getDados = function() {
        return dados;
    };

    this.setAba = function(num) {
        dados.abaAtual = num;
    };

});