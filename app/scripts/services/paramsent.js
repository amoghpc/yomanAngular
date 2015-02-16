'use strict';
angular.module('firewallRestApp')
  .service('paramsent', function ($http) {
    this.passparam = function (lsent,url) {
      console.log("Inside paramsent service");
      console.log(lsent);
      url="http://localhost:8080/firewall/module/";
      if(lsent.status === 'enable')
      {
        url = url+'enable/'
      }
      else
      {
         url = url+'disable/'
      }

      url = url + lsent.switch_id;

      console.log(url);
/*
      return $http.post('http://localhost:8080/firewall/module/enable/0000000000000001')*/
    };
  });
