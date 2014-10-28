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
    'ngMockE2E',
    'ui.bootstrap'
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
      .when('/date', {
        templateUrl: 'views/date-picker.html',
        controller: 'DatePickerController'
      })
      .otherwise({
        redirectTo: '/client-side'
      });
  });
