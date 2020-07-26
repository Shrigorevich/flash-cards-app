const { OAuth2Client } = require('google-auth-library');
const User = require('./../models/User');

const client = new OAuth2Client(process.env.CLIENT_ID);

module.exports = async (req, res, next) => {
    try {
        console.log('Login');
        const ticket = await client.verifyIdToken({
            idToken: req.get('x-auth-token'),
            audience: process.env.CLIENT_ID,
        });

        const payload = ticket.getPayload();

        console.log('Payload: ', payload);

        const existingUser = await User.findOne({
            email: payload.email,
        });

        if (existingUser) {
            res.status(200).json({
                token: req.get('x-auth-token'),
                first_name: existingUser.first_name,
                last_name: existingUser.last_name,
                email: existingUser.email,
            });
        } else {
            console.log('Registration: ');
            const salt = await bcrypt.genSalt(10);

            const hashedPass = await bcrypt.hash(req.payload['sub'], salt);

            const user = new User({
                email: payload.email,
                first_name: payload.given_name,
                last_name: payload.family_name,
                password: hashedPass,
            });
            const result = await user.save();

            res.status(201).json({
                token: req.get('x-auth-token'),
                first_name: result._doc.first_name,
                last_name: result._doc.last_name,
                email: result._doc.email,
            });
        }
    } catch (error) {
        console.log('Err: ', error);
        res.status(500).json({ error: error });
    }
};
