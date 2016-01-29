var ngApp = angular.module('ngApp', ['ngRoute', 'ngAppControllers']);

ngApp.config(['$routeProvider', function($routeProvider) {
    $routeProvider.
      when('/home', {
        templateUrl: './static/partials/home.html',
        controller: 'homeController'
      }).
      when('/home/:id', {
        templateUrl: './static/partials/article.html',
        controller: 'articleController'
      }).
      when('/about', {
        templateUrl: './static/partials/about.html',
        controller: 'aboutController'
      }).
      otherwise({
        redirectTo: '/home'
      });
}]);