const bcrypt = require('bcryptjs');

module.exports = {
    me: async (args, req) => {
        console.log('Me', req.isAuth);

        if (req.isAuth) {
            return req.payload;
        } else {
            return null;
        }
    },
};
