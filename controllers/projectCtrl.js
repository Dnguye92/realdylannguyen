var projectCtrl = angular.module('projectCtrl', [
	'ngAnimate'
]);

projectCtrl.controller('projectCtrl', ['$scope', '$http', function($scope, $http) {
	$http.get('js/data.json').success(function(data) {
		$scope.projectData = data
		$scope.projectImage = 'image'
		console.log(data)
		console.log($scope.projectImage)
	})
}])