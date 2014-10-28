'use strict';

/**
 * @ngdoc function
 * @name scopeExamplesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the scopeExamplesApp
 */
angular.module('scopeExamplesApp')
  .controller('DatePickerController', ['$scope', function ($scope) {
    $scope.dt = new Date();

    $scope.open = function($event) {
        $event.preventDefault();
        $event.stopPropagation();

        $scope.opened = true;
    };

    $scope.dateOptions = {
        formatYear: 'yy',
        showWeeks: false
    };
  }]);
