const express = require('express');
const parser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'dist')));

require('./server/config/database');

app.use('/books', require('./server/config/routes/book.routes'));

app.use(require('./server/config/routes/catch-all.routes'));


app.listen(port, () => console.log(`express listening on port ${ port }`));
