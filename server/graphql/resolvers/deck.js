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
            console.log({
                name: args.deck.name,
                description: args.deck.description,
                user: args.deck.user,
                public: args.deck.public,
                cards_number: args.deck.cards_number,
            });

            const deck = new Deck({
                name: args.deck.name,
                description: args.deck.description,
                user: args.deck.user, //req.payload['sub'],
                public: args.deck.public,
                cards_number: args.deck.cards_number,
            });

            return deck.save();
        } catch (error) {
            console.log(error);
            return error;
        }
    },

    deck: async (args, req) => {
        console.log('Deck', args);
        try {
            const existingDeck = await Deck.findById(args.id).populate('user');
            console.log('existingDeck: ', existingDeck);
            return existingDeck;
        } catch (error) {
            console.log(error);
            return error;
        }
    },

    deckList: async (args, req) => {
        console.log('Fetch decks');
        try {
            //TODO: USER ID FILTER
            return Deck.find({ user: args.userId }).populate('user');
        } catch (error) {
            console.log(error);
            return error;
        }
    },
};
