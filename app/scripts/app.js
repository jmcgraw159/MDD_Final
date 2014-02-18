'use strict';

var App = angular.module('mddFinalApp', [
  'ngRoute'
])
  App.config(function ($routeProvider) {
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

  App.run(function($rootScope){
    $rootScope.$apply($(document).foundation());
});
