'use strict';
/**
 * @ngdoc function
 * @name firewallRestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firewallRestApp
 */
angular.module('firewallRestApp')
  .factory('statuss', function ($resource) {
    return $resource('http://localhost:8080/firewall/module/status');
  });
