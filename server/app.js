const express = require('express');
const graphqlHTTP = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const connectDB = require('./db');
const isAuth = require('./middlewares/is-auth');
const login = require('./middlewares/login');
connectDB();

const graphQlSchema = require('./graphql/schema/index');
const graphQlResolvers = require('./graphql/resolvers/index');

const app = express();
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(bodyParser.json());

app.get('/auth', login);

app.use(isAuth);
app.use(
    '/graphql',
    graphqlHTTP({
        schema: graphQlSchema,
        rootValue: graphQlResolvers,
        graphiql: true,
    })
);

app.listen(process.env.PORT, (err) => {
    err
        ? console.log(err)
        : console.log(`Server started on port ${process.env.PORT}`);
});
