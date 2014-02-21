'use strict';

angular.module('mddFinalApp')
   .controller('DetailCtrl', ['$scope', '$http', '$routeParams', '$sce', function ($scope, $http, $routeParams, $sce) {

    $http.jsonp('http://api.tumblr.com/v2/blog/jmcgraw159.tumblr.com/posts/text?callback=JSON_CALLBACK&api_key=BhWySvI9jLXAwhFCYujxtqhAGw9e6BSOpxwiyKNkRduq1qMN7g&type=text&id=' + $routeParams.id)
	.success(function(data){
        $scope.article = data;

        $scope.image = 'http://api.tumblr.com/v2/blog/' + data.response.blog.name  + '.tumblr.com/avatar/96'

        $scope.snippet = data.response.posts[0].body;

        $scope.trustSnippet = function() {
            return $sce.trustAsHtml($scope.snippet);
		      };

		$scope.date = Date.parse($scope.article.response.posts[0].date);
      })
	.error(function(data) {
		  console.log(data);
	  });

  }]);
