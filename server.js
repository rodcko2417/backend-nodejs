const express = require('express');
// Otra manera de escribirlo
// import express from 'express'

var app = express(); // Con esto ya inicializamos express

app.use('/', function (req, res) { // req de peticion y res de respuesta
    res.send('Hola');
});

app.listen(3000);
console.log('La aplicación está escuchando en http://localhost:3000')
