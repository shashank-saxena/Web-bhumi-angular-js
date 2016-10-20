var myApp = angular.module('myApp',[]);
myApp.service("firstService", ["$q","$http", function($q, $http) {
	//this.square = function (a) { return a*a};
	this.getbook = function() {
		return $http.get("http://it-ebooks-api.info/v1/search/php%20mysql");
	};
}]);
myApp.controller('forthCtrl', ['$scope', 'firstService', function($scope, firstService) {
	var p = firstService.getbook();
	p.then(function suc(res){
		console.log(res);
	}, function err(error) {
		console.log(error);
	});
}]);