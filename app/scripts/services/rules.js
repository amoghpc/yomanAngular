'use strict';
angular.module('firewallRestApp')
  .factory('rules', function ($resource) {
    console.log("Inside Rules service");
    return $resource('http://localhost:8080/firewall/rules/0000000000000001');
/*    };*/
  });
