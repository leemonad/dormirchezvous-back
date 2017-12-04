import 'babel-polyfill';

import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import profileRouter from './Profile/router';
import eventRouter from './Event/router';
import { createFakeLoginSystem } from './User/authentication';
import config from '../config';
import connector from './connector';
import { Event, Ad } from './connector';

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

app.use('/events', eventRouter(Event, Ad));
app.use('/profile', profileRouter());

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