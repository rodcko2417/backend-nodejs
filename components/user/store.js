// PASO 2
const Model = require('./model');

// Crear un usuario
function addUser(user) {
    const myUser = new Model(user);
    return myUser.save();
}

// Obtener una lista de usuario
function listUsers() {
    return Model.find();
}


module.exports = {
    add: addUser,
    list: listUsers, 
}