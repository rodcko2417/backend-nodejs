const express = require('express');
const multer = require('multer'); // Modulo para archivos (npm i multer)

const config = require('../../config');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

const upload = multer({
    dest: 'public/' + config.filesRoute + '/',
}); // Va a mandar los archivos a esa carpeta


router.get('/', function (req, res) { 
    const filterMessages = req.query.chat || null; // Filtrar el mensaje por usuario
    controller.getMessages(filterMessages)
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e);
        })
});
router.post('/', upload.single('file'), function (req, res) { 
    controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file) // Le mandamos al controlador el archivo y ya podemos hacer algo desde el controlador
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