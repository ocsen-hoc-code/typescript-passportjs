import passport from 'passport';
import passportFacebook, { Profile } from 'passport-facebook';
import dotenv from 'dotenv';
dotenv.config();
const FacebookStrategy = passportFacebook.Strategy;

export default (): void => {
    passport.use(new FacebookStrategy({
        clientID: process.env.FACEBOOK_APP_ID,
        clientSecret: process.env.FACBOOK_SECRET_KEY,
        callbackURL: process.env.FACEBOOK_CALLBACK_URL,
        profileFields: ["email", "name"]
    },
        (accessToken: string, refreshToken: string, profile: Profile, done: any): void => {
            done(null, profile);
        }
    ));
}