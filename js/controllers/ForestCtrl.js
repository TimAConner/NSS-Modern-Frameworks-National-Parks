'use strict';

module.exports = function($scope, ForestFactory){
    ForestFactory.getForests()
    .then(forests => {
        $scope.forests = forests;
    });
    
};