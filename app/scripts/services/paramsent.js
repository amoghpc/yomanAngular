'use strict';
/*angular.module('firewallRestApp').config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);*/

angular.module('firewallRestApp')
  .service('paramsent', function ($http) {
    this.passparam = function (lsent,url) {
      console.log("Inside paramsent service");
      console.log(lsent.status.status);
      url="http://localhost:8080/firewall/module/";
      if(lsent.status.status.toLowerCase() === 'enable')
      {
        url = url+'enable/'
      }
      else
      {
         url = url+'disable/'
      }

      url = url + lsent.switch_id;

      console.log(url);

        var request_param = {
                            method: 'PUT',
                            url: url,
                             headers: {
                                        'Content-Type': 'application/json'
                                      },
                            data : {}
                          };

        return $http(request_param);
/*
      return $http.post('http://localhost:8080/firewall/module/enable/0000000000000001')*/
    };
  });
