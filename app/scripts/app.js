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

App.run(['$firebaseSimpleLogin', '$rootScope', '$window', '$location', function ($firebaseSimpleLogin, $rootScope, $window, $location){

  var db = new Firebase('https://wddcolumn.firebaseio.com/');

  $rootScope.loginObject = $firebaseSimpleLogin(db);

  $rootScope.$on('$firebaseSimpleLogin:login', function(e, user) {

    if(user) {
      console.log('Username: ' + $rootScope.loginObject.user.username);
      $window.location.href = '#/list';
    }else  {
      console.log('No user');
    }

  });

  $rootScope.$on('$firebaseSimpleLogin:logout', function() {
    $location.path('/');
  });

    // $rootScope.$apply($(document).foundation());

}]);