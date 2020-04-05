// Aca va la logica de negocio
const store = require('./store'); // Mandamos a llamar al store

function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if(!user | !message) {
            console.error('[messageController] No hay usuario o mensaje');
            reject('Los datos son incorrectos');
            return false; 
        }
        console.log(user);
        console.log(message);
        const fullMessage = {
            user: user,
            message: message,
            date: new Date(),
        };

        store.add(fullMessage);
        resolve(fullMessage);
    });
}

function getMessages() {
    return new Promise((resolve, reject) => {
        resolve(store.list());
    })
}

// 2. Creamos nuestro controlador
function updateMessage (id, message) {
    return new Promise(async (resolve, reject) => {
        console.log(id);
        console.log(message);
        if (!id || !message) {
            reject('Invalid data');
            return false;
        }

        const result = await store.updateText(id, message);

        resolve(result);
    })
}

module.exports = {
    addMessage,
    getMessages,
    updateMessage,
};