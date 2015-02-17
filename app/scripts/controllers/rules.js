'use strict';

/**
 * @ngdoc function
 * @name firewallRestApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firewallRestApp
 */
angular.module('firewallRestApp')
  .controller('RulesController', function ($scope,rules,ruleservice) {
    $scope.rules = rules.query();
    console.log("Inside RulesController");
    console.log(rules);
     $scope.submitRules = function(){
      console.log($scope.switchrule);
      ruleservice.passparam($scope.switchrule);
    };

  });
