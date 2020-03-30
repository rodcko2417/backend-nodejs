// Modulo para responder

exports.success = function (req, res, message, status) { // Podemos configurar a nuestro gusto que parametros queremos que vayan
    res.status(status || 200).send({ // Si no hay status, por defecto mandame el 200
        error: '',
        body: message
    });
}

exports.error = function (req, res, message, status, details) {
    console.error('[response error] ' + details); // Tener un log de lo que ha sucedido, pero no enviar info confidencial al cliente
    res.status(status || 500).send({ // Si no hay status, por defecto mandame el 200
        error: message,
        body: '',
    });
}