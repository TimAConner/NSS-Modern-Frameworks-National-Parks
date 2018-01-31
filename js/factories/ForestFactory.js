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

    const getFavForests = () => {
        return $q((resolve, reject) => {
            $http
            .get(`${FBUrl}/visitors_favorites.json?orderBy="visitor"&equalTo="${firebase.auth().currentUser.uid}"`)
            .then(({data}) => {
                // Change object of objects into an array of forest ids
                let forestIdArray = Object.values(data).map(forest => forest.forest);
                getForestsByIds(forestIdArray).then(forestData => {
                    resolve(forestData);
                });
            });
        });
    };

    // Loop through ids and get each forest,
    // putting them into an array.  Returns a promise.all of those arrays.
    const getForestsByIds = ids => {
        let forestsPromises = [];

        for(let i = 0; i < ids.length; i++){
            forestsPromises.push(getForest(ids[i]));
        }

        return Promise.all(forestsPromises);
    };

    const getForest = id => {
        return $q((resolve, reject) => {
            $http
            .get(`${FBUrl}/forests.json?orderBy="id"&equalTo=${id}`)
            .then(({data}) => {
                // Firebase returns the object as key: {data}.  
                // All we want is data, so we extra it with Object.values and choose the first.
                resolve(Object.values(data)[0]);
            });
        });
    };

    const favoriteForest = forest => {
        return $q((resolve, reject) => {
            $http
            .post(`${FBUrl}/visitors_favorites.json`, {forest, visitor: firebase.auth().currentUser.uid})
            .then(({data}) => {
                resolve(data);
            });
        });
    };


    return {getForests, getForest, favoriteForest, getFavForests};
};