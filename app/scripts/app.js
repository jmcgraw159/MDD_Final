'use strict';

/*global Firebase */
var App = angular.module('mddFinalApp', [
  'ngRoute',
  'firebase'
]);

App.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'views/main.tpl',
      controller: 'MainCtrl'
    })
    .when('/list', {
      templateUrl: 'views/list.tpl',
      controller: 'ApiCtrl'
    })
    .when('/detail/:id', {
      templateUrl: 'views/detail.tpl',
      controller: 'DetailCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
});

// Firebase Login
App.run(['$firebaseSimpleLogin', '$rootScope', '$window', '$location', function ($firebaseSimpleLogin, $rootScope, $window, $location){

  // Connect to Firebase database
  var db = new Firebase('https://wddcolumn.firebaseio.com/');

  // Set loginObjec to equal info inside Firebase login
  $rootScope.loginObject = $firebaseSimpleLogin(db);

  // When user clicks on the login button, run login function
  $rootScope.$on('$firebaseSimpleLogin:login', function(e, user) {
    // If user exists, direct them to list page, otherwise do nothing.
    if(user) {
      console.log('Username: ' + $rootScope.loginObject.user.username);
      $window.location.href = '#/list';
    }else  {
      console.log('No user');
    }

  });

  // When user clicks on the logout button, run the logout button
  $rootScope.$on('$firebaseSimpleLogin:logout', function() {
    $location.path('/');
  });

}]);