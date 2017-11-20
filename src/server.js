const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const config = require('../config/config.json');
const { db, Event } = require('./models');

const events = require('./controllers/events');

const app = express();

app.set('env', process.env.NODE_ENV || 'development');

app.use(morgan(app.get('env') === 'development' ? 'dev' : 'common'));
app.use(
  session({
    secret: config.session.secret,
    resave: true,
    saveUninitialized: false,
  }),
);
app.use(bodyParser.json());

app.use('/events', require('./controllers/events')(Event));

app.use(function notFound(req, res, next) {
  const err = new Error('Not found');
  err.status = 404;
  next(err);
});
app.use(function errorHandler(err, req, res, next) {
  const response =
    app.get('env') === 'development'
      ? {
          message: err.message,
          stack: err.stack,
        }
      : {};
  res.status(err.status || 500).send(response);
});

const port = process.env.PORT || 3000;
db
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log('Listening on port', port);
    });
  })
  .catch(console.error);
