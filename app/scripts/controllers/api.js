'use strict';

angular.module('mddFinalApp')
  .controller('ApiCtrl', ['$scope', '$rootScope', '$location', '$http', function ($scope, $rootScope, $location, $http) {
  	// Check to see if the user is logged in
  	// If user is logged in, show information
  	// Otherwise take them back the the landing page
	$rootScope.loginObject.$getCurrentUser()
	.then(function(user){
		if(!user){
			$location.path('/');
		}else {
			// Get for the Tumblr API
			$http.jsonp('http://api.tumblr.com/v2/blog/wddcolumn.tumblr.com/posts/text?callback=JSON_CALLBACK&api_key=BhWySvI9jLXAwhFCYujxtqhAGw9e6BSOpxwiyKNkRduq1qMN7g&type=text&filter=text')
			// If successful, set the data
			.success(function(data){
				$scope.data = data;

			})
			// Otherwise, console log the error
			.error(function(data) {
				console.log(data);
			});
		}
	});
}]);