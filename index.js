const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
// const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const booksroute = require('./routes/books')

// middleware
app.use(express.json())
app.use(express.urlencoded({
    extended: true,
}))

app.use('/api/books', booksroute)
// routes


// Connect to MongoDB
mongoose.connect("mongodb+srv://abhayprajapati:stL5bkvLj.s6.gH@firstapi.csiip.mongodb.net/BOOKSDB?retryWrites=true&w=majority", {
    useNewUrlParser: true,
}).then(console.log('Connecting to MongoDB')).catch(err => console.log("Error connecting to MongoDB:❌ ", err.message));


app.listen(
    3000,
    () => {
        console.log('Server started on port 3000');
    }

)