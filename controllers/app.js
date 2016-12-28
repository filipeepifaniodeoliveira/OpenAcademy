angular.module('gereaca',['ngRoute','chart.js']);

angular.module('gereaca').config(function($routeProvider, $locationProvider) {
    $routeProvider.when("/chart", {
      templateUrl : "views/chart.html",
      controller: "chart"
    }).when("/form", {
      templateUrl : "views/form.html",
      controller: "chart"
    }).otherwise({
      redirectTo: '/'
    });
});
