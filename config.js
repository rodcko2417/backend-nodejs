const config = {
    dbUrl: process.env.DB_URL || 'mongodb+srv://rodcko:rodcko123@cluster0-kgypc.mongodb.net/test',
    port: process.env.PORT || 3000,
    host: process.env.HOST || 'http://localhost',
    publicRoute: process.env.PUBLIC_ROUTE || '/app',
    filesRoute: process.env.FILES_ROUTE || 'files',

};

module.exports = config;

// Primero seteamos variables de entorno y si no hubieran el valor por defecto