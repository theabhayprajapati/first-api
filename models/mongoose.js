const mongoose = require('mongoose');
const express = require('express');
const Author = require('./author');
// BOOK SCHEMA

const BookSchema = new mongoose.Schema({
    name: {
        type: "string",
        required: true,
        minlength: 3,
        maxlength: 255
    },
    author: Author.schema,
    genre: {
        type: "string",
        required: true,
        minlength: 3,
        maxlength: 30
    }

})


module.exports = new mongoose.model("Books", BookSchema);