// create main app
var dylanN = angular.module('dylanN', [
	'ngRoute',
	'projectCtrl'
]);

dylanN.config(['$routeProvider', function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'templates/projects.html',
		controller: 'projectCtrl'
	})
	.when('/about', {
		templateUrl: 'templates/about.html'
	})
	.otherwise({
		redirectTo: '/'
	})
}])