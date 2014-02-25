'use strict';

var App = angular.module('mddFinalApp');
App.controller('DetailCtrl', ['$scope', '$http', '$routeParams', '$sce', function ($scope, $http, $routeParams, $sce) {

    $http.jsonp('http://api.tumblr.com/v2/blog/wddcolumn.tumblr.com/posts/text?callback=JSON_CALLBACK&api_key=BhWySvI9jLXAwhFCYujxtqhAGw9e6BSOpxwiyKNkRduq1qMN7g&type=text&id=' + $routeParams.id)
	.success(function(data){
        $scope.article = data;

        $scope.image = 'http://api.tumblr.com/v2/blog/' + data.response.blog.name  + '.tumblr.com/avatar/64';

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

App.controller('CommentCtrl', ['$scope', '$rootScope', 'FireConn', '$routeParams', function ($scope, $rootScope, FireConn, $routeParams) {

    FireConn.$bind($scope, 'remoteData');

    $scope.commentDate = Date();

    $scope.saveData = function ()  {
      FireConn.$add({id: $routeParams.id, username: $rootScope.loginObject.user.username, avatar: $rootScope.loginObject.user.avatar_url, date: $scope.commentDate, comment: $scope.comment.message});

      $scope.comment.message = '';

    };

    $scope.remoteData = FireConn;
    console.log($scope.remoteData);

  }]);
