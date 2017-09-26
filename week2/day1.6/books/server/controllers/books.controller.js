const Book = require('mongoose').model('Book');

module.exports = {
  index(request, response) {
    Book.find(request.body)
      .then(books => response.json(books))
      .catch(console.log);
  },
  create(request, response) {
    console.log('book create', request.body);
    Book.create(request.body)
      .then(book => {
        console.log('created book', book);
        response.json(book)
      })
      .catch(error => {
        console.log('error creating book');
        console.log(error);
      });
  },
  show(request, response) {

  },
  update(request, response) {

  },
  destroy(request, response) {

  },
};
