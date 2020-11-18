var app =angular.module("login",[]);
app.controller("logincont",function($scope)
{
	    
	$scope.childvalue = "Welcome To ONLINE SHOPPING";
     $scope.passw = function(value) 
	 {
		if(value.length < 8)
			return false
		else
			return true
	 
	 }
}
);

app.controller("child",function($scope)
{
	$scope.childvalue = "Welcome To ONLINE SHOPPING";
});

app.filter('lower', function() {
	return function(uname) {
		
		return angular.lowercase(uname);
		
 }
});
