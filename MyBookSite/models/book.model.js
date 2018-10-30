var mongoose = require('mongoose');

var bookSchema = new mongoose.Schema({
    name: String,
    author: String,
    type: String,
    link: String,
    content: String,
    cover: String
});

var Book = mongoose.model('Book', bookSchema, 'books');

module.exports = Book; 