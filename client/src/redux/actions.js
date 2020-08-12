import {
    GOOGLE_AUTH,
    GET_PROFILE,
    LOGOUT_USER,
    FETCH_DECKS,
    SHOW_LOADER,
    HIDE_LOADER,
    CREATE_DECK,
} from "./types";

export function googleAuth(token) {
    console.log("Google auth");
    return async (dispatch) => {
        try {
            const response = await fetch("http://localhost:5000/auth", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "x-auth-token": `${token}`,
                },
            });

            const json = await response.json();
            console.log(json);
            localStorage.setItem("token", `${json.token}`);

            dispatch({
                type: GOOGLE_AUTH,
                payload: json,
            });
        } catch (error) {
            console.log("Fetch error: ", error);
        }
    };
}

export function getProfile() {
    console.log("Get Profile");
    return async (dispatch) => {
        if (localStorage.getItem("token")) {
            try {
                dispatch(showLoader());
                const response = await fetch("http://localhost:5000/graphql", {
                    method: "POST",
                    body: JSON.stringify({
                        query: `
                        query{
                            me{
                                _id
                                first_name
                                last_name
                                email
                            }
                        }
                        `,
                    }),
                    headers: {
                        "Content-Type": "application/json",
                        "x-auth-token": `${localStorage.getItem("token")}`,
                    },
                });

                if (!response.ok) {
                    console.log(response);
                    throw new Error("Bad token");
                }

                const json = await response.json();
                console.log(json);
                dispatch({
                    type: GET_PROFILE,
                    payload: json?.data.me,
                    error: null,
                });
                dispatch(fetchDecks(json.data.me._id));
                dispatch(hideLoader());
            } catch (error) {
                console.log(error);
                dispatch({
                    type: GET_PROFILE,
                    payload: null,
                    error: error,
                });
                localStorage.removeItem("token");
                dispatch(hideLoader());
            }
        }
    };
}

export function logOut() {
    console.log("Log Out");
    return (dispatch) => {
        dispatch({
            type: LOGOUT_USER,
        });
    };
}

export function fetchDecks(userId) {
    return async (dispatch) => {
        if (localStorage.getItem("token")) {
            try {
                const query = `
                    query($userId: ID!){
                        deckList(userId: $userId){
                            name,
                            description,
                            cards_number,
                            public,
                            user{
                                first_name,
                                last_name
                            }
                        }
                    }
                `;

                const response = await fetch("http://localhost:5000/graphql", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "x-auth-token": `${localStorage.getItem("token")}`,
                    },
                    body: JSON.stringify({
                        query,
                        variables: {
                            userId,
                        },
                    }),
                });

                if (!response.ok) {
                    console.log(response);
                    throw new Error("Bad token");
                }

                const json = await response.json();
                console.log(json);

                dispatch({
                    type: FETCH_DECKS,
                    payload: json?.data.deckList,
                });
            } catch (error) {
                console.log(error);
                //localStorage.removeItem("token");
            }
        }
    };
}

export function createDeck(userId) {
    return async (dispatch) => {
        if (localStorage.getItem("token")) {
            try {
                const query = `
                mutation($deck: DeckInput!){
                    createDeck(deck: $deck){
                      name,
                      description,
                      public,
                      cards_number,
                      user{
                        first_name,
                        last_name
                      }
                    }
                  }
                `;

                const response = await fetch("http://localhost:5000/graphql", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "x-auth-token": `${localStorage.getItem("token")}`,
                    },
                    body: JSON.stringify({
                        query,
                        variables: {
                            deck: {
                                name: "First test vocabulary ",
                                description:
                                    "words related to my specialization",
                                public: false,
                                cards_number: 3,
                                user: userId,
                            },
                        },
                    }),
                });

                if (!response.ok) {
                    console.log(response);
                    throw new Error("Bad token");
                }

                const json = await response.json();
                console.log("Json: ", json);

                dispatch({
                    type: CREATE_DECK,
                    payload: json?.data,
                });
            } catch (error) {
                console.log(error);
                //localStorage.removeItem("token");
            }
        }
    };
}

export function showLoader() {
    return {
        type: SHOW_LOADER,
    };
}

export function hideLoader() {
    return {
        type: HIDE_LOADER,
    };
}
