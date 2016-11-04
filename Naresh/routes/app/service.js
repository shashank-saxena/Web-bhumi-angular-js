angular.module('myApp').service("firstService", ["$q","$http", function($q, $http) {
	this.getbook = function() {
		return $http.get("http://it-ebooks-api.info/v1/search/php%20mysql");
	};
}]);
