const cookieParser = require('cookie-parser');
const session = require('express-session');
const compress = require('compression');
const parser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const logger = require('morgan');
const path = require('path');
const port = process.env.PORT || 8000;
const app = express();


const sessionConfig = {
  saveUninitialized: true,
  secret: 'sessionSecret',
  resave: false,
  name: 'session',
  rolling: true,
  cookie: {
    secure: false,
    httpOnly: false,
    maxAge: 360000
  }
};

app.use(helmet());
app.use(compress());
app.use(logger('dev'));
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'dist')));
app.use(cookieParser('laskdjfhskdjfghlskdjhglskdjfhglsdkjfhg'));
app.use(session(sessionConfig));

require('./server/config/database');
app.use('/api/auth', require('./server/config/routes/auth.routes'));
app.use('/api/books', require('./server/config/routes/book.routes'));

app.use(require('./server/config/routes/catch-all.routes'));


app.listen(port, () => console.log(`express listening on port ${ port }`));
