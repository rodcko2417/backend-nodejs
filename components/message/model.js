// npm i mongoose, esto es ahora, la instalación npm i mongoos quedo obsoleta

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Empezamos a constuir nuestro esquema, y a traves de este objeto podemos colocar todas las propiedades que querramos
const mySchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'User',
    },
    message: {
        type: String,
        required: true, // validamos que si se almacene algo
    },
    date: Date,
}); 

const model = mongoose.model('Message', mySchema);
module.exports = model;



