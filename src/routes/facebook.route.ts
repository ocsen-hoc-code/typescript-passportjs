import express, { Request, Response } from 'express';
import passport from 'passport';
import faceController from '@controllers/facebook.controller';
faceController();
const facebookRoute = express.Router();

facebookRoute.get('/auth/facebook', passport.authenticate('facebook'));

facebookRoute.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/success',
    failureRedirect: '/fail'
}));

facebookRoute.get('/success', (req: Request, res: Response): void => {
    res.json({ msg: 'login success!' });
});

facebookRoute.get('/api/me', (req: Request, res: Response): void => {
    res.json({ profile: req.user });
});

facebookRoute.get('/fail', (req: Request, res: Response): void => {
    res.json({ msg: 'login failed!' });
});

facebookRoute.get('/logout', (req: Request, res: Response): void => {
    req.logout();
    res.redirect('/');
});

export default facebookRoute;