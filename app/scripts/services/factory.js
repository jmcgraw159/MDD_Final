'use strict';

/*global Firebase */
angular.module('mddFinalApp')
  .factory('FireConn', ['$firebase', function ($firebase) {

  	// Connect to the Firebase database
    var url = 'https://wddcolumn.firebaseio.com',
    // Set the variable to equal Firebase data
      ref = new Firebase(url);

    // Return the firebase information
    return $firebase(ref);
  }]);