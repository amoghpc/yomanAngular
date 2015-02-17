'use strict';

angular.module('firewallRestApp')
  .controller('RulesController', function ($scope,rules,ruleservice,switch_id,getrules) {
    $scope.switch_id = switch_id.query();
    console.log("switch ISs");
    console.log($scope.switch_id);
    console.log("Inside rules 1");
    /*$scope.rules = rules.query();*/
    console.log($scope.rules);

     $scope.submitRules = function(){
      console.log($scope.switchrule);
      ruleservice.passparam($scope.switchrule);
    };

    $scope.change = function(){
      console.log("Inside change");
      console.log($scope.switchrule);
      $scope.rules1=getrules.passparam($scope.switchrule);

       $scope.rules1.success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available
    $scope.rules =data;
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });

      console.log("Inside rules 2");
      console.log($scope.rules);

    };
  });
