angular.module('appLogin')
.service('WizardStateService', function() {

this.endereco = {
    rua: '',
    numero: '',
    cep: '',
    cidade:  '',
    bairro:  '',
    estado: '',
    pais:  '',
    id: ''
};

this.contato = {
    telefone1: '',
    telefone2: '',
    telefone3: '',
    email1:  '',
    email2:  '',
    email3: '',
    id: ''
};

this.documento = {
    rg: '',
    cpf: '',
    titulo: '',
    carteiraDeTrabalho: '',
    id: ''
}


this.curso = {
    nome: '',
    periodo: '',
    id: ''
}

  this.abaInicial = 1;

  this.abrirAbaInicial = function(num) {
    this.abaInicial = num;
  };

  this.getAbaInicial = function() {
    return this.abaInicial;
  };


  this.setAba1 = function(id) {
    localStorage.setItem("endereco", id);
  };

  this.setAba2 = function(id) {
     localStorage.setItem("contato", id);
  };

  this.setAba3 = function(id) {
     localStorage.setItem("documento", id);

  };

  this.setAba4 = function(id) {
     localStorage.setItem("curso", id);
  }

this.getEndereco = function() {
    var id = Number(localStorage.getItem("endereco"));
    return id;
};
this.getContato = function() {
    var id = Number(localStorage.getItem("contato"));
    return id;
};
this.getDocumento = function() {
    var id = Number(localStorage.getItem("documento"));
    return id;
};
this.getCurso = function() {
    var id = Number(localStorage.getItem("curso"));
    return id;
};

});