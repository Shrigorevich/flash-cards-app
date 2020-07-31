import { GOOGLE_AUTH, GET_PROFILE, LOGOUT_USER } from "./types";

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
                const response = await fetch("http://localhost:5000/graphql", {
                    method: "POST",
                    body: JSON.stringify({
                        query: `
                        query{
                            me{
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
                });
            } catch (error) {
                console.log(error);
                localStorage.removeItem("token");
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
