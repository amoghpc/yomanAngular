'use strict';

/**
 * @ngdoc function
 * @name firewallRestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firewallRestApp
 */
angular.module('firewallRestApp')
  .controller('NavigationController', function ($scope, $location) {

    $scope.isActive = function(path){
      return path === $location.path();
    }
  });
