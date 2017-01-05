angular.module('myApp').config(function($routeProvider, $locationProvider) {
	$routeProvider.otherwise({
		template : "<h1>None</h1><p>Nothing has been selected.</p>"
	}).when ("/books/:bookname", {
		templateUrl : "template/cart-ui-template.html",
		controller : "firstCtrl"
	}).when ("/login", {
		templateUrl : "template/login.html",
		controller : "loginCtrl"
	}).when ("/image", {
		templateUrl : "template/upload.html",
		controller : "uploadImage"
	});
	$locationProvider.html5Mode(true);
}).run(function ($rootScope, $location){
	$rootScope.$on('$routeChangeStart', function (event, next, prev) {
		var restrictedPage = $.inArray($location.path(), ['/books/JavaScript', '/books/python']);
		if(restrictedPage > -1) {
			setCookie("url", $location.path());
			var tok = getCookie("token");
			if(tok == "") {
				$location.path("/login");
			} else {

			}
		}
	});
});
