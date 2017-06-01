angular.module('navigationService', [])
	.factory('navService', ['$location', function($location) {
		var home = function() {
			$location.path('/');
		};
		var about = function() {
			$location.path('/about');
		};
		return {
			home: home,
			about: about
		};
	}]);