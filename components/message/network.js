const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.get('/', function (req, res) { 
    const filterMessages = req.query.user || null; // Filtrar el mensaje por usuario
    controller.getMessages(filterMessages)
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e);
        })
});
router.post('/', function (req, res) { 

    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201);
        })
        .catch(e => {
            response.error(req, res, 'Informacion invalida', 400, 'Error en el controlador');
        });
});
// 1. Creamos una ruta para modificar un mensaje, con el metodo PATCH (actualizar)
router.patch('/:id', function (req, res) {  
    // Mando a llamar el controlador
    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e);
        });
})

// Eliminar
router.delete('/:id', function(req, res) {
    controller.deleteMessage(req.params.id)
        .then(() => {
            response.success(req, res, `Uusario ${req.params.id} eliminado`, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e);
        })
})

module.exports = router;