'use strict';

const firebase = require('firebase');

module.exports = function($q, $http){

    let currentUser = null;

    const createUser = ({email, password}) => firebase.auth()
    .createUserWithEmailAndPassword(email, password);   

    const loginUser = ({email, password}) => firebase.auth()
    .signInWithEmailAndPassword(email, password);

    const logoutUser = () => firebase.auth().signOut();

    const isAuthenticated = () => {
        return $q((resolve, reject) => {
            firebase.auth().onAuthStateChanged( user => {
                if(user){
                    currentUser = user.id;
                    resolve(true);
                } else {
                    resolve(false);
                }
            });
        });
    };

    return {};
};