angular.module('myApp').controller('firstCtrl', ['$scope', 'firstService', '$routeParams', function($scope, firstService, $routeParams) {
	var bookname = $routeParams.bookname;
	console.log($routeParams);
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
}]);
