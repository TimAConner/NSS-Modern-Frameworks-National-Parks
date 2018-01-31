'use strict';

module.exports = function($scope, ForestFactory, $routeParams){
    ForestFactory.getForest($routeParams.id)
    .then(({desc, id, name}) => {
        $scope.desc = desc;
        $scope.id = id;
        $scope.name = name;
    });

    $scope.favoriteForest = id => {
        ForestFactory.favoriteForest(id);
    };
    
};