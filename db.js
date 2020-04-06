// Acá se tendrá toda la información para gestionar la conexión
const db = require('mongoose');

db.Promise = global.Promise;

//mongodb+srv://rodcko:rodcko123@cluster0-kgypc.mongodb.net/test
async function connect(url) {
    // Conexion con la base de datos
    await db.connect(url, {
        useNewUrlParser: true, // Evitamos problemas de compatibilidad
        useUnifiedTopology: true
    });
    console.log('[db] Conectada con exito');
}

module.exports = connect;

