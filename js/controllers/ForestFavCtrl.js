'use strict';

module.exports = function($scope, ForestFactory){
    $scope.title = "Favorite Forests";
   ForestFactory.getFavForests(1)
   .then(forests => {
       $scope.forests = forests;
   });
};