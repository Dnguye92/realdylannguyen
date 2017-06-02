var swatchOut = angular.module('swatchOut', [
	'ngRoute',
	'watchControllers'
]);

swatchOut.config(['$routeProvider', function($routeProvider) {
	$routeProvider.
	when('/', {
		templateUrl: 'swatchOut/partials/watches.html',
		controller: 'controller'
	}).
	otherwise({
		redirectTo: '/'
	})
}])