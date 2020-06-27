const winston = require("winston");

var logger = winston.createLogger({
    level: "debug",
    transports: [
        new winston.transports.Console({
            format: winston.format.combine(
                // winston.format.timestamp({
                //     format: "DD-MMM-YYYY | HH:mm:ss | A ZZ"
                // }),
                winston.format.colorize(),
                winston.format.simple()
            )
        }),
        // new winston.transports.File({
        //     level: "info",
        //     filename: "./log/info.log",

        // }),
        new winston.transports.File({
            level: "error",
            filename: "./log/error.log",
            format: winston.format.combine(
                winston.format.timestamp({
                    format: "DD-MMM-YYYY | HH:mm:ss | A ZZ"
                }),
                winston.format.simple()
            )
        })
    ]
});

module.exports = logger;