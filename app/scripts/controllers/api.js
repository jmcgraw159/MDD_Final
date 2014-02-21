'use strict';

angular.module('mddFinalApp')
  .controller('ApiCtrl', ['$scope', '$http', function ($scope, $http) {
	$http.jsonp('http://api.tumblr.com/v2/blog/jmcgraw159.tumblr.com/posts/text?callback=JSON_CALLBACK&api_key=BhWySvI9jLXAwhFCYujxtqhAGw9e6BSOpxwiyKNkRduq1qMN7g&type=text&filter=text')
		.success(function(data){
			$scope.data = data;
		})
		.error(function(data) {
			console.log(data);
		});
}]);