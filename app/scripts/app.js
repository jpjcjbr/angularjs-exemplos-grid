'use strict';

/**
 * @ngdoc overview
 * @name scopeExamplesApp
 * @description
 * # scopeExamplesApp
 *
 * Main module of the application.
 */
angular
  .module('scopeExamplesApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'smart-table',
    'ngTable',
    'ngMockE2E'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/client-side', {
        templateUrl: 'views/client-side.html',
        controller: 'ClientSideController'
      })
      .when('/server-side', {
        templateUrl: 'views/server-side.html',
        controller: 'ServerSideController'
      })
      .otherwise({
        redirectTo: '/client-side'
      });
  });
