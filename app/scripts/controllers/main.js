'use strict';

angular.module('mddFinalApp')
  .controller('MainCtrl', ['$scope', 'FireConn', function ($scope, FireConn) {

	console.log(FireConn);

  $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
      'Foundation'
    ];

}]);
