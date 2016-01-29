var ngAppControllers = angular.module('ngAppControllers', []);


ngAppControllers.controller('homeController', ['$scope','$http', function($scope, $http) {
	//Example of a basic controller, includes ability to make HTTP requests
	$scope.loading = true;


	$scope.getTiles = function() {
		$http.get('https://dev13895.service-now.com/nabil_enayet.do')
			.success(function(data){
				$scope.tiles = data;
				$scope.loading = false;
			});
		}

	$( document ).ready(function() {
		$scope.getTiles();
	});

}]);


ngAppControllers.controller('articleController', ['$scope', '$routeParams', '$http', function($scope, $routeParams, $http) {
	//Example of a basic controller, includes ability to pull route parameters ($routeParams.name defined in app.js routing configuration)
	$scope.id = $routeParams.id ;
	$scope.loading = true;

	$scope.getContent = function() {
		$http.get('https://dev13895.service-now.com/nabil_enayet.do?id='+$scope.id)
			.success(function(data){
				$scope.content = data[0].html;
				console.log(data);
				$scope.loading = false;
			});
		}

	$( document ).ready(function() {
		$scope.getContent();
	});
}]);