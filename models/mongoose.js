const mongoose = require('mongoose');
const express = require('express');
const yup = require('yup');
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

const validateBooks = (book) => {
    const schema = yup.object().shape({
        bookname: yup.string().required().min(3).max(255),
        authorname: yup.string().required().min(3).max(255),
        authorage: yup.number().required().min(0).max(150),
        genre: yup.string().required().min(3).max(30)
    })
    return schema.validate(book).then(
        (book) => {
            book
        }).catch(err => {
            return {
                message: err.message
            }
        })

}

exports.Book = new mongoose.model("Books", BookSchema);
exports.validateBook = validateBooks;
