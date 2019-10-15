const routes = require('express').Router();

const subscribe = require('./subscribe');

routes.use('/subscribe', subscribe);

module.exports = routes;