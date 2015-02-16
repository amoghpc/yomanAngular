'use strict';
angular.module('firewallRestApp')
  .service('cstatus', function () {
    this.query = function () {

      return [{
                   status: 'All'
               },
               {
                   status: 'Enable'
               },
               {
                   status: 'Disable'
               }
    ];

    };
  });
