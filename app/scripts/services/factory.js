'use strict';

/*global Firebase */
angular.module('mddFinalApp')
  .factory('FireConn', ['$firebase', function ($firebase) {

    var url = 'https://wddcolumn.firebaseio.com',
      ref = new Firebase(url);

    return $firebase(ref);
  }]);