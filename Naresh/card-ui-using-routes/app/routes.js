angular.module('myApp').config(function($routeProvider) {
	$routeProvider.otherwise({
		template : "<h1>None</h1><p>Nothing has been selected.</p>"
	}).when ("/php", {
		templateUrl : "template/cart-ui-template.html",
		controller : "firstCtrl"
	}).when ("/java", {
		templateUrl : "template/cart-ui-template.html",
		controller : "secondCtrl"
	}).when ("/javascript", {
		templateUrl : "template/cart-ui-template.html",
		controller : "thirdCtrl"
	}).when ("/dotnet", {
		templateUrl : "template/cart-ui-template.html",
		controller : "forthCtrl"
	});
});