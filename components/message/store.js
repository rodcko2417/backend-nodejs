const db = require('mongoose');
const Model = require('./model');

db.Promise = global.Promise;

// Conexion con la base de datos
db.connect('mongodb+srv://rodcko:rodcko123@cluster0-kgypc.mongodb.net/test', {
    useNewUrlParser: true, // Evitamos problemas de compatibilidad
    useUnifiedTopology: true
});

console.log('[db] Conectada con exito');

function addMessage(message) {
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessages(filterUser) {
    let filter = {};
    if (filterUser !== null) {
        filter = { user: filterUser }; // Solo me traiga los usuarios que coincidan con filterUser
    }
    const messages = await Model.find(filter); // Pedir todos los documentos
    return messages; 
}

// 3. Creamos una funcion para actualizar el mensaje
async function updateText(id, message) {
    const foundMessage = await Model.findOne({
        _id: id // Va a nuestra bd en mongodb va a ver el modelo y escogera el que tenga el id que viene desde la url
    });

    foundMessage.message = message;

    const newMessage = await foundMessage.save();
    return newMessage; 
}


module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    // get
    // update
    // delete
}