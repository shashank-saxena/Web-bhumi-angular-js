angular.module('myApp').config(function($routeProvider, $locationProvider) {
	$routeProvider.otherwise({
		template : "<h1>None</h1><p>Nothing has been selected.</p>"
	}).when ("/books/:bookname", {
		templateUrl : "template/cart-ui-template.html",
		controller : "firstCtrl"
	});
	$locationProvider.html5Mode(true);
});