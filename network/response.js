// Modulo para responder
const statusMessages = {
    '200': 'Done',
    '201': 'Created',
    '400': 'Invalid format',
    '500': 'Internal error'
}


exports.success = function (req, res, message, status) { // Podemos configurar a nuestro gusto que parametros queremos que vayan
    let statusCode = status;
    let statusMessage = message; 
    if(!status) {
        status = 200;
    }
    if(!message) {
        statusMessage = statusMessages[status];
    }
    res.status(statusCode || 200).send({ // Si no hay status, por defecto mandame el 200
        error: '',
        body: statusMessage
    });
}

exports.error = function (req, res, message, status, details) {
    console.error('[response error] ' + details); // Tener un log de lo que ha sucedido, pero no enviar info confidencial al cliente
    res.status(status || 500).send({ // Si no hay status, por defecto mandame el 200
        error: message,
        body: '',
    });
}