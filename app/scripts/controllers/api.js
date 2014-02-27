'use strict';

angular.module('mddFinalApp')
  .controller('ApiCtrl', ['$scope', '$rootScope', '$location', '$http', function ($scope, $rootScope, $location, $http) {

	$rootScope.loginObject.$getCurrentUser()
	.then(function(user){
		if(!user){
			$location.path('/');
		}else {

			$http.jsonp('http://api.tumblr.com/v2/blog/wddcolumn.tumblr.com/posts/text?callback=JSON_CALLBACK&api_key=BhWySvI9jLXAwhFCYujxtqhAGw9e6BSOpxwiyKNkRduq1qMN7g&type=text&filter=text')
			.success(function(data){
				$scope.data = data;

			})
			.error(function(data) {
				console.log(data);
			});
		}
	});
}]);