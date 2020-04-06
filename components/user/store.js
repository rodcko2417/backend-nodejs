// PASO 2
const Model = require('./model');

// Crear un usuario
function addUser(user) {
    const myUser = new Model(user);
    return myUser.save();
}

// Obtener una lista de usuario
async function getUsers(filterUser) {
    let filter = {};
    if (filterUser !== null) {
        filter = { name: filterUser }; // Solo me traiga los usuarios que coincidan con filterUser
    }
    const users = await Model.find(filter); // Pedir todos los documentos
    return users; 
}


module.exports = {
    add: addUser,
    list: getUsers, 
}