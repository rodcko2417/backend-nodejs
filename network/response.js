// Modulo para responder

exports.success = function (req, res, message, status) { // Podemos configurar a nuestro gusto que parametros queremos que vayan
    res.status(status || 200).send({ // Si no hay status, por defecto mandame el 200
        error: '',
        body: message
    });
}

exports.error = function (req, res, message, status) {
    res.status(status || 500).send({ // Si no hay status, por defecto mandame el 200
        error: message,
        body: '',
    });
}