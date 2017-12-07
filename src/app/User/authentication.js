import passport from 'passport';

export const createFakeLoginSystem = (app) => {
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