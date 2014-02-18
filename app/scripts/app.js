'use strict';

angular.module('mddFinalApp', [
  'ngRoute'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.tpl',
        controller: 'MainCtrl'
      })
      .when('/list', {
        templateUrl: 'views/list.tpl',
        controller: 'MainCtrl'
      })
      .when('/detail', {
        templateUrl: 'views/detail.tpl',
        controller: 'MainCtrl'
      })
      .when('/post', {
        templateUrl: 'views/post.tpl',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
