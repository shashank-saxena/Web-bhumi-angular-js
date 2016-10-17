angular.module('login',[]).controller('loginCont',['$scope',function($scope){
	$scope.login = function()
	{
		var email = $scope.email;
		var pass = $scope.pass;
		alert('email '+email+' password '+pass);
	}
	$scope.registration =function()
	{
		var name = $scope.name;
		var email = $scope.email;
		var pass = $scope.pass;
		var cpass = $scope.cpass;
		alert('name =>'+name+' email =>'+email+' pass =>'+pass+' cpass =>'+cpass);
	}
}]);