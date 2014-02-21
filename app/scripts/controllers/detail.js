'use strict';

angular.module('mddFinalApp')
   .controller('DetailCtrl', ['$scope', '$http', '$routeParams', '$sce', function ($scope, $http, $routeParams, $sce) {

    console.log($routeParams.id);

	$http.jsonp('http://api.tumblr.com/v2/blog/jmcgraw159.tumblr.com/posts/text?callback=JSON_CALLBACK&api_key=BhWySvI9jLXAwhFCYujxtqhAGw9e6BSOpxwiyKNkRduq1qMN7g&type=text&id=' + $routeParams.id)
	.success(function(data){
		$scope.article = data;

		$scope.snippet = data.response.posts[0].body;
		console.log($scope.snippet);

		$scope.trustSnippet = function() {
			return $sce.trustAsHtml($scope.snippet);
		};
	})
	.error(function(data) {
		console.log(data);
	});

  }]);
