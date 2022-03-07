const express = require('express');
const app = express();
// const bodyParser = require('body-parser');
// const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();


// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
}).then(console.log('Connecting to MongoDB')).catch(err => console.log(err));


app.listen(
    3000,
    () => {
        console.log('Server started on port 3000');
    }

)
