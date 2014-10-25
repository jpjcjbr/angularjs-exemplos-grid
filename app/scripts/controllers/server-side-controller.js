'use strict';

/**
 * @ngdoc function
 * @name scopeExamplesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the scopeExamplesApp
 */
angular.module('scopeExamplesApp')
  .controller('ServerSideController', 
    ['$scope', '$timeout', '$resource', 'ngTableParams', 
    function ($scope, $timeout, $resource, ngTableParams) {
        
        var Api = $resource('/data');
        
        $scope.tableParams = new ngTableParams({
            page: 1,            // show first page
            count: 5,          // count per page
            sorting: {
                name: 'asc'     // initial sorting
            }
        }, 
        {
            total: 0,           // length of data
            getData: function($defer, params) {
                // ajax request to api
                Api.get(params.url(), function(data) {
                    $timeout(function() {
                        // update table params
                        params.total(data.total);
                        // set new data
                        $defer.resolve(data.result);
                    }, 100);
                });
            }
        });
  }]);
