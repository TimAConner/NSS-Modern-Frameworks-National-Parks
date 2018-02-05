'use strict';

module.exports = function($scope, ForestFactory, $routeParams,  $window){
    ForestFactory
    .getForest($routeParams.id)
    .then(({desc, id, name}) => {
        $scope.desc = desc;
        $scope.id = id;
        $scope.name = name;
    });

    $scope.favoriteForest = id => {
        ForestFactory
        .favoriteForest(id)
        .then(() => {
            $window.location.href = "#!/forests/favorites";
        });
    };
    
};