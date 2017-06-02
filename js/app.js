// create main app
var dylanN = angular.module('dylanN', [
	'ngRoute',
	'projectCtrl'
]);

dylanN.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	$routeProvider.
	when('/', {
		templateUrl: 'templates/projects.html',
		controller: 'projectCtrl'
	})
	.when('/about', {
		templateUrl: 'templates/about.html'
	})
	.otherwise({
		redirectTo: '/'
	})

	$locationProvider.html5Mode(true);
}])