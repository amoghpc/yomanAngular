  'use strict';
  angular.module('firewallRestApp')
    .service('getrules', function ($http) {
      this.passparam = function (lsent,url) {
        console.log("Inside Rule service");
        console.log("Inside paramsent service");
        console.log(lsent);
        console.log(lsent.switch_id.switch_id);
         url='http://localhost:8080/firewall/rules/';
         if(lsent.switch_id.switch_id != '0000000000000001')
          {
            url = url+lsent.switch_id.switch_id
          }
          else
          {
            url = url+'0000000000000001'
          }



        var request_param = {
                            method: 'GET',
                            url: url,
                             headers: {
                                        'Content-Type': undefined
                                      },
                            data: {"nw_src": lsent.nw_src, "nw_dst": lsent.nw_dst, "nw_proto": lsent.nw_proto, "actions": lsent.actions, "priority": lsent.priority}
                          };

        return $http(request_param);

       /* data: {"nw_src": "10.0.0.3/32", "nw_dst": "10.0.0.2/32", "nw_proto": "ICMP", "actions": "DENY", "priority": "10"}*/

      };
    });


