'use strict';

angular.module('mddFinalApp')
   .controller('DetailCtrl', ['$scope', '$http', '$routeParams', function ($scope, $http, $routeParams) {

    console.log($routeParams.id);

	$http.jsonp('http://api.tumblr.com/v2/blog/jmcgraw159.tumblr.com/posts/text?callback=JSON_CALLBACK&api_key=BhWySvI9jLXAwhFCYujxtqhAGw9e6BSOpxwiyKNkRduq1qMN7g&type=text&filter=text&id=' + $routeParams.id)
	.success(function(data){
		$scope.article = data;
		console.log(data);
	})
	.error(function(data) {
		console.log(data);
	});

  }]);
