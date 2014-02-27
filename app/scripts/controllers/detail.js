'use strict';

var App = angular.module('mddFinalApp');
App.controller('DetailCtrl', ['$scope', '$http', '$routeParams', '$sce', '$rootScope', '$location', function ($scope, $http, $routeParams, $sce, $rootScope, $location) {

      $rootScope.loginObject.$getCurrentUser()
      .then(function(user){
        if(!user){
          $location.path('/');
        }else {
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
        }
      });
    }]);

App.controller('CommentCtrl', ['$scope', '$rootScope', '$firebase', '$routeParams', function ($scope, $rootScope, $firebase, $routeParams) {

    $scope.comments = $firebase(new Firebase('https://wddcolumn.firebaseio.com/comments/' + $routeParams.id));

    $scope.commentDate = Date();
    $scope.parsedDate = Date.parse($scope.commentDate);

    $scope.saveData = function ()  {

      if($scope.comments.message === undefined || $scope.comments.message === '' || $scope.comments.message === null) {
        console.log('error');

        $scope.errorClass = 'error';
        $scope.errorMessage = 'Message cannot be left blank!'

      }else  {
        console.log('Success');

        $scope.comments.$add({username: $rootScope.loginObject.user.username, avatar: $rootScope.loginObject.user.avatar_url, date: $scope.parsedDate, comment: $scope.comments.message});
        $scope.comments.message = '';
        $scope.errorClass = '';
        $scope.errorMessage = ''
      }
    };

  }]);
