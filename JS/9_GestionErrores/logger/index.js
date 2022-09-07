// Gestionar Logs y Registros en la aplicacion


// Gestionar los logs mejor
// https://www.npmjs.com/package/winston





// Nos crea las carpetas con los ficheros de las instancias de loggers que existen


const winston = require('winston');

const logger = winston.createLogger({ // Control de todos los logs de nuestra app
    level: 'debug', // Solo hace caso a los que se encuentren a este nivel
    format: winston.format.json(),
    //defaultMeta: { service: 'user-service' }, // Mensaje estandar, podemos cambiarlo
    transports: [
    //
    // - Write all logs with importance level of `error` or less to `error.log`
    // - Write all logs with importance level of `info` or less to `combined.log`
    //
    new winston.transports.Console(),
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
    ],
});


module.exports = logger