'use strict';
const app = require('angular').module("npsApp");

// Add factories below
app.factory('ForestFactory', require('./ForestFactory'));
app.factory('AuthFactory', require('./AuthFactory'));