<html>
<head>
<script src="angularjs.js"></script>
<script src="script.js"></script>
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

</head>	
<body ng-app="myModule">
<h1></h1>
	<div ng-controller="myController">
	
	</div>

	<div ng-controller="bookctrl">
		<div class="col-lg-4" ng-repeat="b in book.Books">
		<div ng-show="true">
			<h3 class="text-center">{{b.ID}}</h3>
			<img src="{{b.Image}}" width="100%" >
			<div class="desc">{{b.Description}}</div>
		</div>
		
		</div>
	</div>
	<div class="" ng-controller="servceCtrl">
	
	</div>
</body>
</html>