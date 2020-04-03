// Aca va la logica de negocio


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

        console.log(fullMessage);
        resolve(fullMessage);
    });
}

module.exports = {
    addMessage,
};