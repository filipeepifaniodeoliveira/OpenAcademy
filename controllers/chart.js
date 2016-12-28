angular.module('openacademy').controller('chart', chartController);

chartController.$inject = ['$scope', '$http'];

function chartController ($scope, $http) {

  //grafico
  $scope.labels = ['2008', '2007', '2008', '2009', '2010', '2011', '2012'];
  $scope.series = ['Numero de repovacoes no ultimo semestre', 'numero de reprovacoes da disciplina'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [200, 48, 40, 19, 86, 27, 90]
  ];

  // posts
  $scope.posts = [];

  $scope.requisicao = function (select) {
    console.log(select);
    switch (select.tipo) {
      case "curso":
        pegarCursos();
        break;
      default:

    }
  }

  function pegarCursos () {
    console.log('chamou o pegar cursos');

    $http({
      method: 'GET',
      url: 'https://jsonplaceholder.typicode.com/posts',
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then(function successCallback(res) {
      $scope.posts = res.data;

      console.log(res.data);

      // var dados   = res.data;
      // var cursos  = [];
      // var mediaCursos = 0;
      //
      // for (var i = 0; i < dados.length; i++) {
      //
      //   if (dados.tipo == "curso") {
      //     cursos.push(dados);
      //     mediaCursos ++;
      //   }
      //
      // }
      //
      // $scope.cursos = cursos;

    }, function errorCallback(res) {
      console.log('deu erro');
    });

  }

  $scope.pegarCursos = pegarCursos;

}
