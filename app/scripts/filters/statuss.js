'use strict';
angular.module('firewallRestApp')
  .filter('statuss', function () {
    return function(statuss,filterBy) {
      if(filterBy.cstatu.status === 'All')
      {
        return statuss;
      }

      return statuss.filter(function(element,index,array){
        return element.status.toLowerCase() === filterBy.cstatu.status.toLowerCase();
      });
    };
  });
