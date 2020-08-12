const graphql = require('graphql');

module.exports = graphql.buildSchema(`
    type User {
        _id: ID!
        email: String
        first_name: String!
        last_name: String!
    }

    type AuthData {
        token: String
        first_name: String
        last_name: String
        authStatus: Boolean
    }

    type Deck {
        _id: ID
        name: String!
        description: String
        user: User!
        public: Boolean!
        cards_number: Int!
    }

    input DeckInput {
        name: String!
        description: String
        public: Boolean!
        user: ID!
        cards_number: Int!
    }

    type Card {
        question: String!
        answer: String!
        description: String
        deckId: ID
    }

    input CardInput {
        question: String!
        answer: String!
        description: String
        deckId: ID
    }

    type RootQuery {
        login(email: String!, password: String!): AuthData!
        me : User!
        deckList(userId: ID!): [Deck!]
        cardList: [Card!]
        deck(id: ID!): Deck!
    }

    type RootMutation {
        createDeck(deck: DeckInput!) : Deck!
        createCard(card: CardInput!) : Card!
        googleAuth(token: String) : AuthData!
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }

`);

// const {
//     GraphQLObjectType,
//     GraphQLList,
//     GraphQLID,
//     GraphQLString,
//     GraphQLInt,
//     GraphQLNonNull,
//     GraphQLInputObjectType,
// } = graphql;

// const Card = require('./../models/Card');
// const Deck = require('./../models/Deck');
// const User = require('./../models/User');

// const CardType = new GraphQLObjectType({
//     name: 'Card',
//     fields: () => ({
//         _id: { type: GraphQLID },
//         question: { type: GraphQLString },
//         answer: { type: GraphQLString },
//         deckId: { type: GraphQLString },
//         deck: {
//             type: DeckType,
//             resolve(parent, args) {
//                 return Deck.findById(parent.deckId);
//             },
//         },
//     }),
// });

// const DeckType = new GraphQLObjectType({
//     name: 'Deck',
//     fields: () => ({
//         _id: { type: GraphQLID },
//         name: { type: GraphQLString },
//         description: { type: GraphQLString },
//         cards: {
//             type: new GraphQLList(CardType),
//             resolve(parent, args) {
//                 return Card.find({ deckId: parent._id });
//             },
//         },
//     }),
// });

// const UserType = new GraphQLObjectType({
//     name: 'User',
//     fields: () => ({
//         _id: { type: GraphQLID },
//         username: { type: GraphQLString },
//         email: { type: GraphQLString },
//         password: { type: GraphQLString },
//         decks: {
//             type: new GraphQLList(DeckType),
//             resolve(parent, args) {
//                 return Deck.find({ userId: parent._id });
//             },
//         },
//     }),
// });

// const TokenInput = new GraphQLInputObjectType({

// })

// const Query = new GraphQLObjectType({
//     name: 'Query',
//     fields: {
//         card: {
//             type: CardType,
//             args: { id: { type: GraphQLID } },
//             resolve(parent, args) {
//                 return Card.findById(args.id);
//             },
//         },

//         deck: {
//             type: DeckType,
//             args: { id: { type: GraphQLID } },
//             resolve(parent, args) {
//                 return Deck.findById(args.id);
//             },
//         },

//         cards: {
//             type: new GraphQLList(CardType),
//             resolve(parent, args) {
//                 return Card.find({});
//             },
//         },

//         decks: {
//             type: new GraphQLList(DeckType),
//             resolve(parent, args) {
//                 return deck.find({});
//             },
//         },
//     },
// });

// const Mutation = new GraphQLObjectType({
//     name: 'Mutation',
//     fields: {
//         addCard: {
//             type: CardType,
//             args: {
//                 question: { type: GraphQLString },
//                 answer: { type: GraphQLString },
//                 deckId: { type: GraphQLString },
//             },
//             resolve(parent, args) {
//                 const card = new Card({
//                     question: args.question,
//                     answer: args.answer,
//                     deckId: args.deckId,
//                 });

//                 return card.save();
//             },
//         },

//         googleUserIDToken: {
//             type: GraphQLString,
//             args: { id_token: GraphQLString },
//             resolve(parent, args) {
//                 console.log(args.id_token);
//                 return 'Ok';
//             },
//         },

//         addDeck: {
//             type: DeckType,
//             args: {
//                 userId: { type: GraphQLString },
//                 name: { type: GraphQLString },
//                 description: { type: GraphQLString },
//             },
//             resolve(parent, args) {
//                 const deck = new Deck({
//                     name: args.name,
//                     description: args.description,
//                     userId: args.userId,
//                 });

//                 return deck.save();
//             },
//         },

//         addUser: {
//             type: UserType,
//             args: {
//                 username: { type: GraphQLString },
//                 email: { type: GraphQLString },
//                 password: { type: GraphQLString },
//             },
//             resolve(parent, args) {
//                 const user = new User({
//                     username: args.name,
//                     email: args.description,
//                     password: args.userId,
//                 });

//                 return user.save();
//             },
//         },

//         updateCard: {
//             type: CardType,
//             args: {
//                 id: { type: GraphQLID },
//                 question: { type: GraphQLString },
//                 answer: { type: GraphQLString },
//                 deckId: { type: GraphQLString },
//             },

//             resolve(parent, args) {
//                 return Card.findByIdAndUpdate(
//                     args.id,
//                     {
//                         $set: {
//                             question: args.question,
//                             answer: args.answer,
//                             deckId: args.deckId,
//                         },
//                     },
//                     { new: true }
//                 );
//             },
//         },

//         deleteCard: {
//             type: CardType,
//             args: { id: { type: GraphQLID } },
//             resolve(parent, args) {
//                 return Card.findByIdAndDelete({ _id: args.id });
//             },
//         },

//         deleteAllCards: {
//             type: CardType,
//             resolve(parent, args) {
//                 return Card.deleteMany({});
//             },
//         },

//         deleteDeck: {
//             type: DeckType,
//             args: { id: { type: GraphQLID } },
//             resolve(parent, args) {
//                 return Deck.findByIdAndDelete({ _id: args.id });
//             },
//         },

//         deleteAllDecks: {
//             type: DeckType,
//             resolve(parent, args) {
//                 return Deck.deleteMany({});
//             },
//         },
//     },
// });

// module.exports = new graphql.GraphQLSchema({
//     query: Query,
//     mutation: Mutation,
// });
