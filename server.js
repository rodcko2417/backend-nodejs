const express = require('express'); // Otra manera de escribirlo: import express from 'express'
const bodyParser = require('body-parser'); // Body Parser es una extension/modulo de Express, que nos permite trabajar con el body de la peticion de forma sencilla

const db = require('./db');
// Instalar body parser: npm i body parser
//const router = require('./components/message/network'); // Importamos el router de mensajes
const router = require('./network/routes');

db('mongodb+srv://rodcko:rodcko123@cluster0-kgypc.mongodb.net/test');

var app = express(); // Con esto ya inicializamos express
app.use(bodyParser.json()); // Agregamos bodyParser
app.use(bodyParser.urlencoded({extended: false})); // Podemos cambiar el metodo que querramos llamar, en este caso urlencoded
//app.use(router); // Agregamos el router

router(app); // Le pasamos nuestras rutas

// Servidor estático de archivos
app.use('/app', express.static('public')); 

app.listen(3000); 
console.log('La aplicación está escuchando en http://localhost:3000')
