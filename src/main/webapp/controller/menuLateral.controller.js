angular.module('appLogin')
.controller("MenuCtrl", function($scope) {

  $scope.menu = [
    {
      title: "Acadêmico",
      open: false,
      submenu: [
        { label: "Matrícula", link: "#!/matricula" },
        { label: "Aluno", link: "#!/aluno" },
        { label: "Professor", link: "#!/professor" },
        { label: "Notas", link: "#!/notas" },
        { label: "Histórico", link: "#!/historico" }
      ]
    },
    {
      title: "Recursos Humanos",
      open: false,
      submenu: [
        { label: "Incluir", link: "#!/matricula" },
        { label: "Alterar", link: "#!/historico" },
        { label: "Excluir", link: "#!/matricula" },
        { label: "Procurar", link: "#!/matricula" }
      ]
    },
   {
     title: "Gestão Financeira",
     open: false,
     submenu: [
        { label: "Incluir", link: "#!/matricula" },
        { label: "Alterar", link: "#!/historico" },
        { label: "Excluir", link: "#!/matricula" },
        { label: "Procurar", link: "#!/matricula" }
     ]
   },
    {
    title: "Gestão de Almoxerifado",
    open: false,
    submenu: [
       { label: "Incluir", link: "#!/matricula" },
       { label: "Alterar", link: "#!/historico" },
       { label: "Excluir", link: "#!/matricula" },
       { label: "Procurar", link: "#!/matricula" }
    ]
    },
      {
        title: "Gestão Industrial",
        open: false,
        submenu: [
           { label: "Incluir", link: "#!/matricula" },
           { label: "Alterar", link: "#!/historico" },
           { label: "Excluir", link: "#!/matricula" },
           { label: "Procurar", link: "#!/matricula" }
        ]
      },
    {
      title: "Configurações",
      open: false,
      submenu: [
        { label: "Usuários", link: "#!/usuarios" },
        { label: "Permissões", link: "#!/permissoes" }
      ]
    }
  ];

  $scope.toggle = function(item) {
    item.open = !item.open;
  };
});