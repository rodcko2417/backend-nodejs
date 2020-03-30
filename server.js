const express = require('express');

// Router de Express
const router = express.Router(); // Nos permite separar cabeceras, por metodo, url, etc

// Otra manera de escribirlo
// import express from 'express'

var app = express(); // Con esto ya inicializamos express

app.use(router); // Agregamos el router

router.get('/message', function (req, res) { // Solo atiendo a las peticiones get
    res.send('Lista de mensajes');
});

router.post('/message', function (req, res) { // Solo atiendo a las peticiones post
    res.send('Mensaje añadido');
});

// Con el router ya podemos separar por rutas y los diferentes metodos HTTP

//app.use('/', function (req, res) { // req de peticion y res de respuesta
//    res.send('Hola');
//});

app.listen(3000);
console.log('La aplicación está escuchando en http://localhost:3000')
