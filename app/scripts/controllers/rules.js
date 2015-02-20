'use strict';

angular.module('firewallRestApp')
  .controller('RulesController', function ($scope,rules,ruleservice,switch_id,getrules,deleteRule) {
    $scope.switch_id = switch_id.query();
    console.log("switch ISs");
    console.log($scope.switch_id);
    console.log("Inside rules 1");
    /*$scope.rules = rules.query();*/
    console.log($scope.rules);

     $scope.submitRules = function(){
      console.log($scope.switchrule);
      var promise = ruleservice.passparam($scope.switchrule);
      promise.then(success,error);
    };

    $scope.deleteRuleMeth = function (rule) {
      console.log("inside delete rules");
      var promise = deleteRule.passparam(rule);
    };


    var success = function()
    {
      $scope.rightParams=true;
    }

     var error = function()
    {
      $scope.wrongParams=true;
    }






    $scope.change = function(){
      $scope.rules1=getrules.passparam($scope.switchrule);
       $scope.rules1.success(function(data, status, headers, config) {
    // this callback will be called asynchronously
    // when the response is available
    $scope.rules =data;
    console.log("Inside sucess");
  }).
  error(function(data, status, headers, config) {
    // called asynchronously if an error occurs
    // or server returns response with an error status.
  });

      console.log("Inside rules 2");
      console.log($scope.rules);

    };
  });
