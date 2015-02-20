 'use strict';
  angular.module('firewallRestApp')
    .service('deleteRule', function ($http) {
      this.passparam = function (lsent,url) {
        console.log("Inside delete rule service paramsent service");
        console.log(lsent);
        url="http://localhost:8080/firewall/rules/0000000000000001";
        console.log(lsent.rule_id);
        var request_param = {

                            url: 'http://localhost:8080/firewall/rules/0000000000000001',
                             headers: {
                                        'Content-Type': undefined
                                      },
                            data: {"rule_id": lsent.rule_id}
                          };
        var config = {headers: {
            'Request URL:': 'http://localhost:8080/firewall/rules/0000000000000001'
        }
    };

        return $http.delete('/hai/');
      }});



/*  'use strict';
  angular.module('firewallRestApp')
    .factory('deleteservice', function ($resource) {
      this.passparam = function (lsent,url) {
        console.log("Inside delete rule service paramsent service");
        console.log(lsent);
        url="http://localhost:8080/firewall/rules/0000000000000001";
        console.log(lsent.rule_id);
        var request_param = {
                            method: 'DELETE',
                            url: 'http://localhost:8080/firewall/rules/0000000000000001',
                             headers: {
                                        'Content-Type': undefined
                                      },
                            data: {"rule_id": lsent.rule_id}
                          };

        return lsent.$delete();

       /* data: {"nw_src": "10.0.0.3/32", "nw_dst": "10.0.0.2/32", "nw_proto": "ICMP", "actions": "DENY", "priority": "10"}*/






/*
        var req = {
                    method: 'POST',
                     url: 'http://example.com',
                    headers: {
                              'Content-Type': undefined
                              },
                    data: { test: 'test' }
                  };*/