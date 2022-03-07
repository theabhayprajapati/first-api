const express = require('express');
const router = express.Router()
const Book = require('../models/mongoose')

// POST : ROUTES A NEW BOOKS
router.post('/', (req, res) => {
    console.log(req.body, 'body🔖')
    const book = new Book({
        name: req.body.bookname,
        author: {
            name: req.body.authorname,
            age: req.body.authorage
        },
        genre: req.body.genre
    }
    )
    book.save().then((book) => {
        res.send(book)
    })
})


module.exports = router