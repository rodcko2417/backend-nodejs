const express = require('express');

// Body Parser es una extension/modulo de Express, que nos permite trabajar con el body de la peticion de forma sencilla
// npm i body parser
const bodyParser = require('body-parser');


// Router de Express
const router = express.Router(); // Nos permite separar cabeceras, por metodo, url, etc

// Otra manera de escribirlo
// import express from 'express'

var app = express(); // Con esto ya inicializamos express
app.use(bodyParser.json()); // Agregamos bodyParser
app.use(bodyParser.urlencoded({extended: false})); // Podemos cambiar el metodo que querramos llamar, en este caso urlencoded
app.use(router); // Agregamos el router

router.get('/message', function (req, res) { // Solo atiendo a las peticiones get
    // Aca va el body, en la request
    console.log(req.body);
    // O bien, podemos acceder al query así 
    console.log(req.query);
    res.send('Mensaje ' + req.body.text  + ' añadido correctamente'); // Aca mandamos el body al cliente
});

router.post('/message', function (req, res) { // Solo atiendo a las peticiones post
    res.send('Mensaje añadido correctamente xd');
});

// Con el router ya podemos separar por rutas y los diferentes metodos HTTP

//app.use('/', function (req, res) { // req de peticion y res de respuesta
//    res.send('Hola');
//});

app.listen(3000);
console.log('La aplicación está escuchando en http://localhost:3000')

// *** Instalar nodemon, para hacer cambios y no tener que tumbar el server npm install nodemon