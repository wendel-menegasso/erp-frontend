angular.module('appLogin')
.controller('MainController', function(AbaService) {

    var main = this;

    main.aba = 1;

    main.habilitaAba1 = true;
    main.habilitaAba2 = false;
    main.habilitaAba3 = false;
    main.habilitaAba4 = false;
    main.habilitaAba5 = false;

    main.abrir = function(num) {
        AbaService.setAba(num);
        main.aba = num;
    };

    main.concluirAba1 = function() {
        main.habilitaAba2 = true;
        main.abrir(2);
    };

    main.concluirAba2 = function() {
        main.habilitaAba3 = true;
        main.abrir(3);
    };

    main.concluirAba3 = function() {
        main.habilitaAba4 = true;
        main.abrir(4);
    };

    main.concluirAba4 = function() {
        main.habilitaAba5 = true;
        main.abrir(5);
    };

});