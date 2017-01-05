angular.module('myApp').service("firstService", ["$q","$http", function($q, $http) {
	this.getbook = function(bookname) {
		return $http.get("http://it-ebooks-api.info/v1/search/"+bookname);
	};
	this.loginCheck = function(user, pass) {
		var data = $.param({
			user: user,
			pass: pass
		});
		var config = {
			headers : {
				'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
			}
		};

		return $http.post('http://localhost/routing/server/api/login', data, config);
	};
	this.uploadsrv = function() {
		var formData = document.getElementById('userForm');
		var imageObj = new FormData(formData[0]);
		console.log(imageObj);
		/*imageObj.append('uploadImage', imgtag.files[0]);
		return $http.post("http://localhost/routing/server/upload.php", imageObj, {
			transformRequest: angular.identity,
			headers: {'Content-Type': undefined}
		});*/
	}
}]);
