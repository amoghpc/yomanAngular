'use strict';
/**
 * @ngdoc function
 * @name firewallRestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firewallRestApp
 */
angular.module('firewallRestApp')
  .service('statuss', function () {
    this.query = function () {

      return [{
      status: 'enable',
      switch_id: '0000000000000001'
    }];

    }
  });
