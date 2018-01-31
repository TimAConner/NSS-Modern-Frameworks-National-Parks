'use strict';

const angular = require('angular');

// Other dependencies below
const firebase = require('firebase');
const ngRoute = require("angular-route");

const app = angular.module('npsApp', ["ngRoute"])
.constant("FBUrl", "https://practice-project-d42d4.firebaseio.com")
.config($routeProvider => {
    $routeProvider
    .when('/forests', {
        templateUrl: '../partials/forests.html',
        controller: 'ForestCtrl'
    })
    .when('/forest/:id', {
        templateUrl: '../partials/forest-detail.html',
        controller: 'ForestDetailCtrl'
    })
    .otherwise('/forests');
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