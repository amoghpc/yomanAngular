'use strict';

/**
 * @ngdoc function
 * @name firewallRestApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the firewallRestApp
 */
angular.module('firewallRestApp')
  .directive('navbar', function () {
    return {
      restrict : 'E',
      templateUrl : 'views/navbar.html',
      controller : 'NavigationController'
    }
  });
