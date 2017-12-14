import morgan from 'morgan';
import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import graphqlHTTP from 'express-graphql';
import passport from 'passport';

import dataloaders from './dataloaders';
import * as connector from './connector';
import schema from './schema';
import config from '../../config';

const isDev = config.get('env') === 'development';
const router = express();

// Logging

router.set('env', config.get('env'));
router.use(morgan(isDev ? 'dev' : 'common'));
router.use(bodyParser.json());

// Authentication (TODO: Adapt to GraphQL)

router.use(
  session({
    secret: config.get('session_secret'),
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60000 },
  }),
);

router.use(passport.initialize());
router.use(passport.session());

// GraphQL

router.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
    context: { connector, dataloaders: dataloaders(connector) },
  }),
);

// Error Handling

router.use((req, res, next) => {
  const err = new Error('Not found');
  err.status = 404;

  next(err);
});

router.use((err, req, res, next) =>
  res.status(err.status || 500).send(isDev ? err : {}),
);

export default router;
