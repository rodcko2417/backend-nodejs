// *** CURSO NODEJS *** 
const express = require('express'); // Otra manera de escribirlo: import express from 'express'
const bodyParser = require('body-parser'); // Body Parser es una extension/modulo de Express, que nos permite trabajar con el body de la peticion de forma sencilla
// Instalar body parser: npm i body parser
const router = express.Router(); // Router de Express: nos permite separar cabeceras, por metodo, url, etc

var app = express(); // Con esto ya inicializamos express
app.use(bodyParser.json()); // Agregamos bodyParser
app.use(bodyParser.urlencoded({extended: false})); // Podemos cambiar el metodo que querramos llamar, en este caso urlencoded
app.use(router); // Agregamos el router

// Con el router ya podemos separar por rutas y los diferentes metodos HTTP
router.get('/message', function (req, res) { // Solo atiendo a las peticiones get
    // Cabeceras, las mas utilizadas: cache-control, user-agent (si vienen desde un movil, pc, os, etc), accept/accept-encoding
    console.log(req.headers); // Pedir headers
    res.header({ // Enviar headers personalizados
        "custom-header": "Nuestro valor personalizado"
    })
    // Aca va el body, en la request
    console.log(req.body);
    // O bien, podemos acceder a un query así 
    console.log(req.query);
    res.send('Mensaje ' + req.body.text  + ' añadido correctamente'); // Aca mandamos el body al cliente
});

router.post('/message', function (req, res) { // Solo atiendo a las peticiones post
    res.send('Mensaje añadido correctamente xd');
});

//app.use('/', function (req, res) { // req de peticion y res de respuesta
//    res.send('Hola');
//});

app.listen(3000); // Indicamos en que puerto queremos que se ejecute la aplicación
console.log('La aplicación está escuchando en http://localhost:3000')

// *** Instalar nodemon, para hacer cambios y no tener que tumbar el server, instalacióm: npm install nodemon