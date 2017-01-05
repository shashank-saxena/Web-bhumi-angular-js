angular.module('myApp').service("firstService", ["$q","$http", function($q, $http) {
	this.getbook = function(bookname) {
		return $http.get("http://it-ebooks-api.info/v1/search/"+bookname);
	};
}]);
