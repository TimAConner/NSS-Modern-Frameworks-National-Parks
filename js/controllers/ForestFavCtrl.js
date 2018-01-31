'use strict';

module.exports = function($scope, ForestFactory){
   ForestFactory.getFavForests(1)
   .then(forests => {
       $scope.forests = forests;
   });
};