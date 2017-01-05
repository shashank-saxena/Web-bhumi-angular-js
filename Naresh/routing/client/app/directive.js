//angular.module('myApp').directive('outerHeight', ['$timeout', function($timeout) {
	/*var count1 = 0;
	var flag1 = 0;
	return {
		restrict:'A',
		link: function(scope, element){
			//element.ready(function($) {
				console.log(element.outerWidth());
				//var height_ele = element.outerHeight();
				//element.css('height', height_ele);
			//});
		}
	};*/
//}]);


angular.module('myApp').component('bookDetail', {
	bindings: {
		'bookName': '&'
	},
	templateUrl: 'template/update_name.html',
	controller: function(){
		//alert(this);
		// this.bookName = this.bookName+"test";
		console.log(this.bookName());
	}
});