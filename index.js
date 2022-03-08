const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
// const cors = require('cors');
const winston = require('winston');
const mongoose = require('mongoose');
require("dotenv").config()
const booksroute = require('./routes/books')
// dotenv.config()
// middleware
app.use(express.json())
app.use(express.urlencoded({
    extended: true,
}))
// ?creating loggers.

const logger = winston.createLogger({
    level: 'info',
    transports: [
        //
        // - Write all logs with importance level of `error` or less to `error.log`
        // - Write all logs with importance level of `info` or less to `combined.log`
        //
        // ! here console is saying to log the erroe to the console.
        new winston.transports.Console({
            format: winston.format.combine(
                winston.format.colorize({
                    all: true
                }),
            )
        }),
        // ! here console is saying to log the erroe to the file. with name
        new winston.transports.File({ filename: 'error.log', level: 'error' }),
    ],
});



// routes
app.use('/api/books', booksroute)


// Connect to MongoDB
mongoose.connect("mongodb+srv://abhayprajapati:stL5bkvLj.s6.gH@firstapi.csiip.mongodb.net/BOOKSDB?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(logger.info('info', 'Connecting to MongoDB')).catch(err => logger.log("error", "connecting to MongoDB:❌ ", err.message));




app.listen(
    process.env.PORT,
    () => {
        console.log('Server started on port 3000');
    }

)