'use strict';

const angular = require('angular');

// Other dependencies below
const firebase = require('firebase');
const ngRoute = require("angular-route");

let isAuth = (AuthFactory) =>
    new Promise((resolve, reject) => {
    AuthFactory.isAuthenticated().then(userBool => {
        // Resolve in $routeProvider will only allow the page to load if this returns as resolved.
        // isAuthenticated must return bool, not reject, so this can figure out if to reject or not
        if (userBool) {
            resolve();
        } else {
            reject();   
        }
    });
});

const app = angular.module('npsApp', ["ngRoute"])
.constant("FBUrl", "https://practice-project-d42d4.firebaseio.com")
.config($routeProvider => {
    $routeProvider
    .when('/login', {
        templateUrl: '../partials/login.html',
        controller: 'LoginCtrl'
    })
    .when('/forests', {
        templateUrl: '../partials/forests.html',
        controller: 'ForestCtrl',
        resolve: { isAuth }
    })
    .when('/forest/:id', {
        templateUrl: '../partials/forest-detail.html',
        controller: 'ForestDetailCtrl',
        resolve: { isAuth }
    })
    .when('/forests/favorites', {
        templateUrl: '../partials/forests.html',
        controller: 'ForestFavCtrl',
        resolve: { isAuth }
    })
    .otherwise('/login');
})
.run(FBCreds => {
    let {apiKey, authDomain} = FBCreds;
    let authConfig = {
        apiKey,
        authDomain
    };
    firebase.initializeApp(authConfig);
});

// Run FB Creds to add constant to app.
require('./values/FBCreds.js');
require('./factories');
require('./controllers');


// Put routes here

module.exports = app;