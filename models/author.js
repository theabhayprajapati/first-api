const mongoose = require('mongoose');
const express = require('express');


// /auth


const AuthorSchema = new mongoose.Schema({
    name: {
        type: 'string',
        required: true,
        minlength: 3,
        maxlength: 255
    },
    age: {
        type: 'number',
        required: true,
        min: 0,
        max: 150

    },
})

module.exports = new mongoose.model("Author", AuthorSchema);