'use strict';

var App = angular.module('mddFinalApp');
App.controller('DetailCtrl', ['$scope', '$http', '$routeParams', '$sce', '$rootScope', '$location', function ($scope, $http, $routeParams, $sce, $rootScope, $location) {
      // Check to see if the user is logged in
      // If user is logged in, show information
      // Otherwise take them back the the landing page
      $rootScope.loginObject.$getCurrentUser()
      .then(function(user){
        if(!user){
          $location.path('/');
        }else {
          // Get for the Tumblr API to get unique post detail
          $http.jsonp('http://api.tumblr.com/v2/blog/wddcolumn.tumblr.com/posts/text?callback=JSON_CALLBACK&api_key=BhWySvI9jLXAwhFCYujxtqhAGw9e6BSOpxwiyKNkRduq1qMN7g&type=text&id=' + $routeParams.id)
          // If successful, set the data.
          .success(function(data){
                $scope.article = data;
                // Also get the user image
                $scope.image = 'http://api.tumblr.com/v2/blog/' + data.response.blog.name  + '.tumblr.com/avatar/64';

                // Set snippet to equal the body to allow the data to display HTML
                $scope.snippet = data.response.posts[0].body;

                // Function used to sanitized the data to allow HTML
                $scope.trustSnippet = function() {
                    return $sce.trustAsHtml($scope.snippet);
                  };
                // Parse the date so it turns into a timestamp which will later be formated into desired date format
                $scope.date = Date.parse($scope.article.response.posts[0].date);
              })
          // If error, console error
          .error(function(data) {
              console.log(data);
            });
        }
      });
    }]);

App.controller('CommentCtrl', ['$scope', '$rootScope', '$firebase', '$routeParams', function ($scope, $rootScope, $firebase, $routeParams) {
    // Connect to the Firebase database to allow comments to be added as well as added to the specific post using the id.
    $scope.comments = $firebase(new Firebase('https://wddcolumn.firebaseio.com/comments/' + $routeParams.id));

    // commentDate used to create the current date the comment was added
    $scope.commentDate = Date();

    // commentDate is then parsed into a timestamp to be later changed into the desired date format
    $scope.parsedDate = Date.parse($scope.commentDate);

    // Function used to add comments to the database
    $scope.saveData = function ()  {

      // If textarea is undefined, null, or blank, change class and message to display error.
      if($scope.comments.message === undefined || $scope.comments.message === '' || $scope.comments.message === null) {
        console.log('error');

        $scope.errorClass = 'error';
        $scope.errorMessage = 'Message cannot be left blank!'
      // Otherwise, add the users username, avatar, time it was added, and the messsage to the database
      }else  {
        console.log('Success');

        $scope.comments.$add({username: $rootScope.loginObject.user.username, avatar: $rootScope.loginObject.user.avatar_url, date: $scope.parsedDate, comment: $scope.comments.message});

        // Clear the textarea text that was previously entered
        $scope.comments.message = '';

        // Clear the error class and message to be blank.
        $scope.errorClass = '';
        $scope.errorMessage = ''
      }
    };

  }]);
