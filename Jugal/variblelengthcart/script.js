var myApp = angular.module('myApp',[]);
myApp.service("firstService", ["$http", function( $http) {
	//this.square = function (a) { return a*a};
	this.callfun = function(st){
		console.log(st);
	}
	this.getbook = function() {
		return $http.get("http://it-ebooks-api.info/v1/search/php%20mysql/page/3").then(function(res){
			console.log(res);
		},function(err){
			console.log(err);
		});
	};
}]);
myApp.controller('forthCtrl', ['$scope', 'firstService', function($scope, firstService) {
	firstService.callfun('jugal kishore vishwakarma');
	p = firstService.getbook();
	console.log("after called ",p);
	
}]);

//or
