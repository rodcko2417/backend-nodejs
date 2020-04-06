const express = require('express');
const message = require('../components/message/network');
const user = require('../components/user/network');

// Crear una funcion que añada todas las rutas
const routes = function (server) {
    server.use('/message', message);
    server.use('/user', user);
}

module.exports = routes;
