'use strict';

/**
 * @ngdoc function
 * @name scopeExamplesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the scopeExamplesApp
 */
angular.module('scopeExamplesApp')
  .controller('ClientSideController', ['$scope', function (scope) {
    
    var
        nameList = ['Pierre', 'Pol', 'Jacques', 'Robert', 'Elisa'],
        familyName = ['Dupont', 'Germain', 'Delcourt', 'bjip', 'Menez'];

    function createRandomItem() {
        var
            firstName = nameList[Math.floor(Math.random() * 4)],
            lastName = familyName[Math.floor(Math.random() * 4)],
            age = Math.floor(Math.random() * 100),
            email = firstName + lastName + '@whatever.com',
            balance = Math.random() * 3000;

        return{
            firstName: firstName,
            lastName: lastName,
            age: age,
            email: email,
            balance: balance
        };
    }

		scope.itemsByPage=15;

    scope.rowCollection = [];
    for (var j = 0; j < 200; j++) {
        scope.rowCollection.push(createRandomItem());
    }

  }]);
