const bcrypt = require('bcryptjs');

module.exports = {
    me: async (args, req) => {
        console.log('Me', req.isAuth);

        if (req.isAuth) {
            return {
                first_name: req.payload.given_name,
                last_name: req.payload.family_name,
                email: req.payload.email,
            };
        } else {
            return null;
        }
    },
};
