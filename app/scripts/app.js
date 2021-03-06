'use strict';

/**
 * @ngdoc overview
 * @name firewallRestApp
 * @description
 * # firewallRestApp
 *
 * Main module of the application.
 */
angular
  .module('firewallRestApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .when('/status', {
        templateUrl: 'views/status.html',
        controller: 'StatusController'
      })
      .when('/rules', {
        templateUrl: 'views/rules.html',
        controller: 'RulesController'
      })
      .when('/topo', {
        redirectTo: 'http://localhost:7474/browser/'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
