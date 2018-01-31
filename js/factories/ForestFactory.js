'use strict';

const firebase = require('firebase');

module.exports = function($q, $http, FBUrl){
    
    const getForests = () => {
        return $q((resolve, reject) => {
            $http
            .get(`${FBUrl}/forests.json`)
            .then(({data}) => {
                resolve(data);
            });
        });
    };

    const getForest = id => {
        return $q((resolve, reject) => {
            $http
            .get(`${FBUrl}/forests.json?orderBy="id"&equalTo=${id}`)
            .then(({data}) => {
                resolve(data);
            });
        });
    };

    const favoriteForest = forest => {
        return $q((resolve, reject) => {
            $http
            .post(`${FBUrl}/visitors_favorites.json`, {forest, visitor: 2})
            .then(({data}) => {
                resolve(data);
            });
        });
    };


    return {getForests, getForest, favoriteForest};
};