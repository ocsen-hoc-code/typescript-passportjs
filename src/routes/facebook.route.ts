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
    if (req.isAuthenticated()) {
        res.status(200).json({ msg: 'login success!' });
        return;
    }
    res.redirect('/fail');
});

facebookRoute.get('/api/me', (req: Request, res: Response): void => {

    if (req.isAuthenticated()) {
        res.status(200).json({ profile: req.user });
        return;
    }
    res.redirect('/fail');
});

facebookRoute.get('/fail', (req: Request, res: Response): void => {
    res.status(200).json({ msg: 'login failed!' });
});

facebookRoute.get('/logout', (req: Request, res: Response): void => {
    req.logout();
    res.redirect('/');
});

export default facebookRoute;