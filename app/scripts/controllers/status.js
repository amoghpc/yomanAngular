'use strict';

/**
 * @ngdoc function
 * @name firewallRestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firewallRestApp
 */
angular.module('firewallRestApp')
  .controller('StatusController', function ($scope,statuss,cstatus) {
    $scope.statuss = statuss.query();
    $scope.cstatus = cstatus.query();

    $scope.filterBy = {
      search: '',
      cstatu: $scope.cstatus[0]
    };

  });
