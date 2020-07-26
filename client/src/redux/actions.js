import { GOOGLE_AUTH } from "./types";

export function googleAuth(token) {
    const result = fetch("http://localhost:5000/auth", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": `${token}`,
        },
    });

    console.log("Result: ", result);
    return {
        type: GOOGLE_AUTH,
        payload: token,
    };
}
