const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const passport = require('passport');

const config = require('../config/config.json');
const { db, Event, User, Ad } = require('./models');

const events = require('./controllers/events');

const app = express();

const createFakeLoginSystem = () => {
  const PassportStrategy = require('passport-strategy');
  class LocalStrategy extends PassportStrategy {
    constructor(verify) {
      super();
      this.name = 'local';
      this._verify = verify;
    }
    authenticate(req) {
      const email = req.body.email;
      if (!email) {
        return this.fail({ message: 'Missing Credentials' }, 400);
      }

      this._verify(email)
        .then(user => {
          this.success(user);
        })
        .catch(err => {
          this.error(err);
        });
    }
  }

  passport.use(
    new LocalStrategy(email =>
      User.findOrCreate({
        where: { email },
        defaults: { email },
      }).spread(user => user),
    ),
  );

  passport.serializeUser((user, done) => {
    done(null, user.id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      done(null, await User.findById(id));
    } catch (err) {
      done(err);
    }
  });

  app.use(passport.initialize());
  app.use(passport.session());
  app.post('/local-login', passport.authenticate('local'), (req, res) => {
    res.send(req.user);
  });
};

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

if (app.get('env') === 'development') {
  createFakeLoginSystem();
}

app.use('/events', require('./controllers/events')(Event, Ad));

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
