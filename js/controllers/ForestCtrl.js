'use strict';

module.exports = function($scope, ForestFactory){
    $scope.title = "All Forests";
    ForestFactory.getForests()
    .then(forests => {
        $scope.forests = forests;
    });  
};