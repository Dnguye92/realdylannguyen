var app = angular.module('Marvel', ['ui.router', 'infinite-scroll'])

app.config(function($stateProvider, $locationProvider) {
	$stateProvider.state('index', {
		url: '',
		controller: 'mainCtrl',
		templateUrl: 'marvelApi/templates/character.html'
	})
	.state('index.single', {
		url: '/:id',
		controller: 'singleCharacter',
		templateUrl: 'marvelApi/templates/characterPopUp.html'
	})
	$locationProvider.html5Mode(true)
})

app.controller('mainCtrl', function($scope, ComicBooks) {
	//use this to get data
	$scope.more = new ComicBooks.LoadMore($scope)
})

app.value('$anchorScroll', angular.noop)

app.controller('singleCharacter', function($scope, $rootScope, $stateParams, ComicBooks, $window) {
	var id = $stateParams.id
	ComicBooks.findOne(id).then(function(result) {
		var data = result.data.results[0]
		$scope.characterName = data.name
		$scope.characterUrl = data.urls[0].url
		$scope.characterImg = data.thumbnail.path + '.' + data.thumbnail.extension
		var description = data.description
		if(description.length <= 0) {
			description - 'No description available'
		}
		$scope.description = description
		$rootScope.$broadcast('contentLoaded')
	})
})

app.directive('popup', function() {
	var linker = function(scope, element, attrs) {
		scope.$on('contentLoaded', function() {
			element.addClass('show')
		})
		scope.close = function() {
			element.removeClass('show')
		}
	}
	return {
		restrict: 'E',
		link: linker
	}
})

app.factory('ComicBooks', function($http, $q) {
	// For client side
	var publicKey = '2ac5db3fa3e7c593eeb5ee35d7ca625d'
	var hash = '1abc2af7ed20b032b4bd3fb762fc89f15693f0f3'
	var baseUrl = 'http://gateway.marvel.com/v1/'
	var limit = 50

	var find = function() {
		var def = $q.defer()
		var url = baseUrl + 'public/characters/' + id + 'ts=1&apikey=' + publicKey + '&hash=' + hash
		$http.get(url).success(def.resolve).error(def.reject)

		return def.promise
	}

	var findOne = function(id) {
		var def = $q.defer()
		var url = baseUrl + 'public/characters/' + id + '?apikey=' + publicKey + '&hash=' + hash
		$http.get(url).success(def.resolve).error(def.reject)

		return def.promise
	}

	var findNext = function(offset) {
		var def = $q.defer()
		var url = baseUrl + 'public/characters?limit=' + limit + '&offset=' + (limit * offset) + '&apikey=' + publicKey + '&hash=' + hash
		$http.get(url).success(def.resolve).error(def.reject)

		return def.promise
	}

	var LoadMore = function($scope) {
		this.offset = 0
		this.busy = false
		this.characters = []
		this.load = function() {
			if(this.busy) {
				return
			}
			this.busy = true
			findNext(this.offset).then(function(results) {
				var chars = results.data.results
				chars.forEach(function(item) {
					this.characters.push(item)
				}.bind(this))
				this.offset++
				this.busy = false
			}.bind(this))
		}.bind(this)
	}

	return {
		find: find,
		findOne: findOne,
		LoadMore: LoadMore
	};
});
