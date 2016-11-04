angular.module('myApp').controller('firstCtrl', ['$scope', 'firstService', function($scope, firstService) {
	var p = firstService.getbook();
	p.then(function suc(res){
		var count = 0;
		var final_json1 = [];
		var final_json2 = [];
		var final_json3 = [];
		var final_json4 = [];
		for (var i = 0; i < res.data.Books.length; i++) {
			if(count == 0) {
				final_json1.push(res.data.Books[i]);
			}
			if(count == 1) {
				final_json2.push(res.data.Books[i]);
			}
			if(count == 2) {
				final_json3.push(res.data.Books[i]);
			}
			if(count == 3) {
				final_json4.push(res.data.Books[i]);
				count = -1;	
			}
			count++;
		};
		var finaly = [];
		finaly.push(final_json1, final_json2, final_json3, final_json4)
		$scope.data = finaly;
	}, function err(error) {
		console.log(error);
	});
}]);

angular.module('myApp').controller('secondCtrl', ['$scope', 'firstService', function($scope, firstService) {
	var p = firstService.getJavaBook();
	p.then(function suc(res){
		var count = 0;
		var final_json1 = [];
		var final_json2 = [];
		var final_json3 = [];
		var final_json4 = [];
		for (var i = 0; i < res.data.Books.length; i++) {
			if(count == 0) {
				final_json1.push(res.data.Books[i]);
			}
			if(count == 1) {
				final_json2.push(res.data.Books[i]);
			}
			if(count == 2) {
				final_json3.push(res.data.Books[i]);
			}
			if(count == 3) {
				final_json4.push(res.data.Books[i]);
				count = -1;	
			}
			count++;
		};
		var finaly = [];
		finaly.push(final_json1, final_json2, final_json3, final_json4)
		$scope.data = finaly;
	}, function err(error) {
		console.log(error);
	});
}]);

angular.module('myApp').controller('thirdCtrl', ['$scope', 'firstService', function($scope, firstService) {
	var p = firstService.getJavaScriptBook();
	p.then(function suc(res){
		var count = 0;
		var final_json1 = [];
		var final_json2 = [];
		var final_json3 = [];
		var final_json4 = [];
		for (var i = 0; i < res.data.Books.length; i++) {
			if(count == 0) {
				final_json1.push(res.data.Books[i]);
			}
			if(count == 1) {
				final_json2.push(res.data.Books[i]);
			}
			if(count == 2) {
				final_json3.push(res.data.Books[i]);
			}
			if(count == 3) {
				final_json4.push(res.data.Books[i]);
				count = -1;	
			}
			count++;
		};
		var finaly = [];
		finaly.push(final_json1, final_json2, final_json3, final_json4)
		$scope.data = finaly;
	}, function err(error) {
		console.log(error);
	});
}]);

angular.module('myApp').controller('forthCtrl', ['$scope', 'firstService', function($scope, firstService) {
	var p = firstService.getDotNetBook();
	p.then(function suc(res){
		var count = 0;
		var final_json1 = [];
		var final_json2 = [];
		var final_json3 = [];
		var final_json4 = [];
		for (var i = 0; i < res.data.Books.length; i++) {
			if(count == 0) {
				final_json1.push(res.data.Books[i]);
			}
			if(count == 1) {
				final_json2.push(res.data.Books[i]);
			}
			if(count == 2) {
				final_json3.push(res.data.Books[i]);
			}
			if(count == 3) {
				final_json4.push(res.data.Books[i]);
				count = -1;	
			}
			count++;
		};
		var finaly = [];
		finaly.push(final_json1, final_json2, final_json3, final_json4)
		$scope.data = finaly;
	}, function err(error) {
		console.log(error);
	});
}]);