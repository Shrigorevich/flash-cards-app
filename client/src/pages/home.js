import React, { useState, useEffect } from "react";
import { connect, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import Redirect from "../components/Redirect";
import WorkSpace from "../components/WorkSpace";
import Menu from "./../components/Menu";

const Home = (props) => {
    const { loading, error } = useSelector((state) => {
        return {
            loading: state.app.loading,
            error: state.auth.error,
        };
    });

    if (loading) return <div>LOADNING....</div>;
    if (error || !localStorage.getItem("token")) return <Redirect />;

    return (
        <div className="home">
            <Menu />
            <WorkSpace />
        </div>
    );
};

const mapStateToProps = (state) => {
    //console.log("Home: ", state.auth);
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
