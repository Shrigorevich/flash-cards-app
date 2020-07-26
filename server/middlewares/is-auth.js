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

            if (ticket && ticket.getPayload()) {
                req.payload = ticket.getPayload();
                req.isAuth = true;
                next();
            } else {
                req.isAuth = false;
                next();
            }
        } catch (error) {
            console.log('Catch err: ');
            req.isAuth = false;
            return next();
        }
    } else {
        req.isAuth = 'Unauthorized';
        return next();
    }
};

// async function verify(token) {
//     const ticket = await client.verifyIdToken({
//         idToken: token,
//         audience: process.env.CLIENT_ID,
//     });

//     const payload = ticket.getPayload();
//     const userid = payload['sub'];

//     return { payload, userid };
// }
