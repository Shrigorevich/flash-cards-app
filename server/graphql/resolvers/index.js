const userResolver = require('./user');
const deckResolver = require('./deck');
const cardResolver = require('./card');

const rootResolver = {
    ...userResolver,
    ...deckResolver,
    ...cardResolver,
};

module.exports = rootResolver;
