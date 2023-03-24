const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const lessMiddleware = require('less-middleware');
const logger = require('morgan');

const authorRouter = require('./routes/author');
const bookRouter = require('./routes/book');
const categoryRouter = require('./routes/category');
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(lessMiddleware(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/authors', authorRouter);
app.use('/books', bookRouter);
app.use('/categories', categoryRouter);

module.exports = app;
