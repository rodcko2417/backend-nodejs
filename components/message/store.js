const Model = require('./model');

function addMessage(message) {
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessages(filterUser) {
    return new Promise((resolve, reject) => {
        let filter = {};
        if (filterUser !== null) {
            filter = { user: filterUser }; // Solo me traiga los usuarios que coincidan con filterUser
        }
        Model.find(filter) // Pedir todos los documentos
            .populate('user')
            .exec((error, populated) => { // Hace el cruce y ya nos devuelve toda la data del usuario
                if(error) {
                    reject(error);
                    return false;
                }
                resolve(populated);
            });
    })
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

function removeMessage(id) {
    return Model.deleteOne({
        _id: id
    });
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    remove: removeMessage,
    // get
    // update
    // delete
}