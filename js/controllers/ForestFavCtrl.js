'use strict';

module.exports = function($scope, ForestFactory){
   ForestFactory.getFavForests(1)
   .then(forests => {
       console.log('forests', forests);
       $scope.forests = forests;
   });
};