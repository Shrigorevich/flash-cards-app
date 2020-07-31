import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Dashboard from "../components/Dashboard";

const Home = (props) => {
    // const makeRequest = async () => {
    //     console.log("makeRequest");

    //     const query = `
    //         query{
    //             deckList{
    //                 name,
    //                 description
    //             }
    //         }
    //     `;

    //     const response = await fetch("http://localhost:5000/graphql", {
    //         method: "POST",
    //         headers: {
    //             "Content-Type": "application/json",
    //             "x-auth-token": `${localStorage.getItem("token")}sdf`,
    //         },
    //         body: JSON.stringify({
    //             query,
    //             //variables: { dice, sides },
    //         }),
    //     });

    //     const data = await response.json();
    //     console.log("Data: ", data);
    // };

    return !props.user ? null : (
        <div>
            <Dashboard />
            <div></div>
        </div>
    );
};

const mapStateToProps = (state) => {
    console.log("Home: ", state);
    return {
        user: state.auth.user,
    };
};

export default connect(mapStateToProps, null)(Home);
//id: "5f1ac6dfc745220fa44ea363",
//id: "5f17415b280bfc3724170a40",

// const meQuery = gql`
//     query {
//         me @client {
//             email
//             first_name
//             last_name
//         }
//     }
// `;

// const cardListQuery = gql`
//     query {
//         cardList {
//             question
//             answer
//             deckId
//             description
//         }
//     }
// `;

// const oneDeckQuery = gql`
//     query($id: ID!) {
//         deck(id: $id) {
//             name
//             description
//             public
//             _id
//         }
//     }
// `;

// const [deckQuery] = useLazyQuery(oneDeckQuery, {
//     onCompleted: (res) => {
//         console.log(res);
//     },
// });
