const User = require('../../models/User');

module.exports = {
    me: async (args, req) => {
        console.log('Me', req.isAuth);

        if (req.isAuth) {
            const existingUser = await User.findOne({
                email: req.payload.email,
            });

            return existingUser;
        } else {
            return null;
        }
    },
};
