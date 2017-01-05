angular.module('myApp').controller('firstCtrl', ['$scope', 'firstService', '$routeParams', function($scope, firstService, $routeParams) {
	var bookname = $routeParams.bookname;
	var p = firstService.getbook(bookname);
	p.then(function suc(res){
		var count = 0;
		var final_json1 = [];
		var final_json2 = [];
		var final_json3 = [];
		for (var i = 0; i < res.data.Books.length; i++) {
			if(count == 0) {
				final_json1.push(res.data.Books[i]);
			}
			if(count == 1) {
				final_json2.push(res.data.Books[i]);
			}
			if(count == 2) {
				final_json3.push(res.data.Books[i]);
				count = -1;	
			}
			count++;
		};
		var finaly = [];
		finaly.push(final_json1, final_json2, final_json3)
		$scope.data = finaly;
	}, function err(error) {
		console.log(error);
	});
	$scope.result = function() {
		console.log("Testing");
	}
}]);

angular.module('myApp').controller('loginCtrl', ['$scope', 'firstService', '$routeParams', "$location", function($scope, firstService, $routeParams, $location) {
	
	$scope.login = function() {
		var username = $scope.username;
		var password = $scope.password;
		var response = firstService.loginCheck(username, password);
		response.then(function result(success) {
			if(success.data.sts == "success") {
				setCookie("token", success.data.token, 1);
				var url = getCookie("url");
				$location.path(url);
			} else {
				alert("Error In Login");
			}
		}, function err(error) {
			console.log(error);
		});
	}
}]);
angular.module('myApp').controller('uploadImage', ['$scope', 'firstService', '$routeParams', "$location", function($scope, firstService, $routeParams, $location) {
	
	$scope.upload = function() {
		var response = firstService.uploadsrv();
		response.then(function result(success) {
			console.log(success);
		}, function err(error) {
			console.log(error);
		});
	}
}]);