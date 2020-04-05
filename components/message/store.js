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

async function getMessages(message) {
    //return list;
    const messages = await Model.find(); // Pedir todos los documentos
    return messages; 
}

module.exports = {
    add: addMessage,
    list: getMessages,
    // get
    // update
    // delete
}