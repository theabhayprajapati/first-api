const express = require('express');
const router = express.Router()
const { Book, validateBook } = require('../models/mongoose')

// POST : ROUTES A NEW BOOKS
router.post('/', async (req, res) => {
    const message = await validateBook(req.body)
    if (message) {
        return res.status(400).send(message)
    }
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

router.get('/', (req, res) => {
    Book.find().then((books) => {
        res.send(books)
    }).catch((err) => {
        res.status(400).send(err)
    })
})



// ? get a book by id
router.get('/:id', (req, res) => {
    Book.findById(req.params.id).then((book) => {
        if (book) res.send(book)
        res.status(404).send('Book not found')
    }).catch((err) => {
        res.status(500).send(err.message)
    })
})

// ? update a book by id
router.put('/:id', async (req, res) => {
    Book.findByIdAndUpdate(req.params.id,
        {
            name: req.body.bookname,
            author: {
                name: req.body.authorname,
                age: req.body.authorage,
            },
            genre: req.body.genre

        }
        , { new: true }).then((book) => {
            if (book) res.send(book)
            res.status(404).send('Book not found')
        }).catch((err) => {
            res.status(500).send(err.message)
        })
})

// ? DELETE a book by id
router.delete('/:id', (req, res) => {
    Book.findByIdAndDelete(req.params.id).then((book) => {
        if (book) res.send(book)
        else res.status(404).send('Book not found')
    }).catch((err) => {
        res.status(500).send(err.message)
    })
})

module.exports = router