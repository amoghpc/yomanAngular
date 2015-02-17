'use strict';
angular.module('firewallRestApp')
  .service('rules', function () {
    this.query = function () {

      return [
    {
        "access_control_list": [
            {
                "rules": [
                    {
                        "priority": 1,
                        "dl_type": "IPv4",
                        "nw_dst": "10.0.0.3",
                        "nw_src": "10.0.0.2",
                        "rule_id": 4,
                        "actions": "ALLOW"
                    },
                    {
                        "priority": 1,
                        "dl_type": "IPv4",
                        "nw_dst": "10.0.0.2",
                        "nw_src": "10.0.0.3",
                        "rule_id": 5,
                        "actions": "ALLOW"
                    },
                    {
                        "priority": 10,
                        "dl_type": "IPv4",
                        "nw_proto": "ICMP",
                        "nw_dst": "10.0.0.3",
                        "nw_src": "10.0.0.2",
                        "rule_id": 6,
                        "actions": "DENY"
                    },
                    {
                        "priority": 1,
                        "dl_type": "IPv4",
                        "nw_proto": "ICMP",
                        "nw_dst": "10.0.0.2",
                        "nw_src": "10.0.0.1",
                        "rule_id": 1,
                        "actions": "ALLOW"
                    },
                    {
                        "priority": 10,
                        "dl_type": "IPv4",
                        "nw_proto": "ICMP",
                        "nw_dst": "10.0.0.2",
                        "nw_src": "10.0.0.3",
                        "rule_id": 7,
                        "actions": "DENY"
                    },
                    {
                        "priority": 1,
                        "dl_type": "IPv4",
                        "nw_proto": "ICMP",
                        "nw_dst": "10.0.0.1",
                        "nw_src": "10.0.0.2",
                        "rule_id": 3,
                        "actions": "ALLOW"
                    }
                ]
            }
        ],
        "switch_id": "0000000000000001"
    }
];

    };
  });
