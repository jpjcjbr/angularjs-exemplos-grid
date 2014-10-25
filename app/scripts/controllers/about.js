'use strict';

/**
 * @ngdoc function
 * @name scopeExamplesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the scopeExamplesApp
 */
angular.module('scopeExamplesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
