import express from 'express';
import bodyParser from 'body-parser';
import session from 'express-session';
import passport from "passport";
import facebookRoute from '@routes/facebook.route';

const app = express();
app.use(session({ secret: "OcSen Hoc Code" }));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(passport.initialize());
app.use(passport.session());
passport.serializeUser((user: any, done: any): void => {
    done(null, user);
});

passport.deserializeUser((user: any, done: any): void => {
    done(null, { ...user });
});
app.get('/', (req, res) => {
    res.json({ msg: 'hello world' });
});
app.use('/', facebookRoute);
export default app;
