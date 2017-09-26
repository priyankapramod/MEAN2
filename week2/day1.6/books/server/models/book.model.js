const mongoose = require('mongoose');
const { Schema } = mongoose;
const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  author: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
  pages: {
    type: Number,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  publisher: {
    type: String,
    required: true,
    trim: true,
    minlength: 3
  },
});


module.exports = mongoose.model('Book', bookSchema);
