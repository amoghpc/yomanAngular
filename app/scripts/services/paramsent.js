'use strict';
/*angular.module('firewallRestApp').config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
]);*/

angular.module('firewallRestApp')
  .service('paramsent', function ($http,$resource) {
    this.passparam = function (lsent,url,config) {
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


      console.log(url);

              var request_param = {
                            method: 'put',
                            url: url,
                            headers: {
                                     'Content-Type': undefined
                                    }
                           /* data: {"nw_src": lsent.nw_src, "nw_dst": lsent.nw_dst, "nw_proto": lsent.nw_proto, "actions": lsent.actions, "priority": lsent.priority}*/
                          };
        console.log($resource.put(request_param));

        return $resource.put(request_param);
/*
      return $http.post('http://localhost:8080/firewall/module/enable/0000000000000001')*/
    };
  });
