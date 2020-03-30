// *** CURSO NODEJS *** 
const express = require('express'); // Otra manera de escribirlo: import express from 'express'
const bodyParser = require('body-parser'); // Body Parser es una extension/modulo de Express, que nos permite trabajar con el body de la peticion de forma sencilla
// Instalar body parser: npm i body parser
const response = require('./network/response'); // Como traer un archivo local, es decir un modulo
const router = express.Router(); // Router de Express: nos permite separar cabeceras, por metodo, url, etc

var app = express(); // Con esto ya inicializamos express
app.use(bodyParser.json()); // Agregamos bodyParser
app.use(bodyParser.urlencoded({extended: false})); // Podemos cambiar el metodo que querramos llamar, en este caso urlencoded
app.use(router); // Agregamos el router

// Con el router ya podemos separar por rutas y los diferentes metodos HTTP
router.get('/message', function (req, res) { // Solo atiendo a las peticiones get
    response.success(req, res, 'Lista de mensajes'); // Va a llamar nuestro modulo response y vaya a ejectura la respuesta de tipo success 
    
});

router.post('/message', function (req, res) { // Solo atiendo a las peticiones post
    //res.send('Mensaje añadido correctamente xd');
    // Formas de responder una petición
    //res.send(); // Enviar una respuesta vacia
    //res.status(201).send(); // Podemos enviar un status
    //res.status(201).send([{error: '', body: 'Creado correctamente'}]); // Devolver un error vacio pero si un contenidoo bien un array como este ejemplo
    if (req.query.error == "ok") {
        response.error(req, res, 'Error insperado', 500, 'Es solo una simulación de los errores');
    } else {
        response.success(req, res, 'Creado correctamente', 201);
    }
});

// Servidor estático de archivos
app.use('/app', express.static('public')); // Desde app, me servira los archivos de public, acá podríamos colocar nuestro frontend y ya generar nuestra comunicación con el API

//app.use('/', function (req, res) { // req de peticion y res de respuesta
//    res.send('Hola');
//});

app.listen(3000); // Indicamos en que puerto queremos que se ejecute la aplicación
console.log('La aplicación está escuchando en http://localhost:3000')

// *** Instalar nodemon, para hacer cambios y no tener que tumbar el server, instalacióm: npm install nodemon