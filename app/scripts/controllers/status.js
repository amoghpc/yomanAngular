'use strict';

/**
 * @ngdoc function
 * @name firewallRestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firewallRestApp
 */
angular.module('firewallRestApp')
  .controller('StatusController', function ($scope,statuss,cstatus,paramsent) {

    $scope.statuss = [ { status: 'All'} ];

    $scope.serverStatuss = statuss.query(function(){
       $scope.statuss = $scope.statuss.concat($scope.serverStatuss);

    });

    $scope.cstatus = cstatus.query();

    $scope.filterBy = {
      search: '',
      cstatu: $scope.cstatus[0]
    };

   /* $scope.newSwitch = new statuss;
    $scope.createSwitch = function() {
      $scope.newSwitch.$save();
    };*/

    $scope.enableSwitch = function(){
      console.log($scope);
      if($scope.switchForm.$valid)
      {
        console.log($scope.switch);
        paramsent.passparam($scope.switch);

      }
    };

  });
