const Card = require('../../models/Card');

module.exports = {
    //TODO: User auth check (isAuth middleware)
    createCard: async (args, req) => {
        console.log('Create card');
        try {
            const card = new Card({
                question: args.card.question,
                answer: args.card.answer,
                description: args.card.description,
                deckId: args.card.deckId,
            });

            return card.save();
        } catch (error) {
            console.log(error);
            return error;
        }
    },

    cardList: async (args, req) => {
        console.log('Card list');
        try {
            //TODO: DECK ID FILTER
            return Card.find();
        } catch (error) {
            console.log(error);
            return error;
        }
    },
};
