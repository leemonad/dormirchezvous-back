const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const morgan = require('morgan');

const { createFakeLoginSystem } = require('./User/authentication');
const config = require('../config');
const connector = require('./connector');
const { Event, Ad } = require('./connector');

const isDev = config.get('env') === 'development';

const app = express();

app.set('env', config.get('env'));
app.use(morgan(isDev ? 'dev' : 'common'));
app.use(bodyParser.json());

app.use(
  session({
    secret: config.get('session_secret'),
    resave: true,
    saveUninitialized: false,
  }),
);

if (isDev) {
  createFakeLoginSystem(app);
}

app.use('/events', require('./Event/router')(Event, Ad));
app.use('/profile', require('./Profile/router')());

app.use(function notFound(req, res, next) {
  const err = new Error('Not found');
  err.status = 404;

  next(err);
});

app.use(function errorHandler(err, req, res, next) {
  const response = isDev ? err : {};
  res.status(err.status || 500).send(response);
});

const port = process.env.PORT || 3000;

connector
  .sync()
  .then(() => {
    app.listen(port, () => {
      console.log('Listening on port', port);
    });
  })
  .catch(console.error);