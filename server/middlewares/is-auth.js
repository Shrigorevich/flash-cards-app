const { OAuth2Client } = require('google-auth-library');

const client = new OAuth2Client(process.env.CLIENT_ID);

module.exports = async (req, res, next) => {
    console.log('is-auth');
    if (req.get('x-auth-token')) {
        try {
            const ticket = await client.verifyIdToken({
                idToken: req.get('x-auth-token'),
                audience: process.env.CLIENT_ID,
            });

            req.payload = ticket.getPayload();
            req.isAuth = true;
            next();
        } catch (error) {
            console.log('Token err: ', error);
            res.status(401).json({});
        }
    } else {
        console.log('Unauthorized');
        res.status(401).json({});
    }
};
