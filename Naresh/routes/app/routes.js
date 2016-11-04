angular.module('myApp').config(function($routeProvider) {
	$routeProvider.otherwise({
		template : "<h1>None</h1><p>Nothing has been selected.</p>"
	}).when ("/login", {
		templateUrl : "template/login_form.html",
		controller : "forthCtrl"
	});
});