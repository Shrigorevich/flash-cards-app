const Deck = require('../../models/Deck');
let Counter = 0;

module.exports = {
    //TODO: User auth check (isAuth middleware)
    createDeck: async (args, req) => {
        console.log('Create deck');
        try {
            const existingDeck = await Deck.findOne({
                name: args.deck.name,
            });

            if (existingDeck) {
                throw new Error('A deck with the same name already exists!');
            }

            const deck = new Deck({
                name: args.deck.name,
                description: args.deck.description,
                userId: '20987252454506345', //req.payload['sub'],
                public: args.deck.public,
            });

            return deck.save();
        } catch (error) {
            console.log(error);
            return error;
        }
    },

    deck: async (args, req) => {
        console.log('Deck', Counter);
        try {
            Counter += 1;
            const existingDeck = await Deck.findById({
                _id: args.id,
            });
            return existingDeck;
        } catch (error) {
            return error;
        }
    },

    deckList: async (args, req) => {
        try {
            //TODO: USER ID FILTER
            return Deck.find();
        } catch (error) {
            console.log(error);
            return error;
        }
    },
};
