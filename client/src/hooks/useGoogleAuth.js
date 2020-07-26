import { gql, useQuery } from "@apollo/client";

const AUTH = gql`
    query($token: String) {
        googleAuth(token: $token) {
            token
            first_name
            last_name
            authStatus
        }
    }
`;

export const useGoogleAuth = (token) => {
    console.log("useGoogleAuth");
    const { loading, error, data } = useQuery(AUTH, {
        skip: Boolean(!token),
        variables: {
            token,
        },
        onCompleted: (res) => {
            console.log("onComplete");
            window.localStorage.setItem("token", `${res.googleAuth.token}`);
        },
    });

    return !loading && data && data.googleAuth;
};

// const request = async (token_id) => {
//     console.log("useGoogleAuth");
//     const response = await fetch("http://localhost:5000/graphql", {
//         method: "POST",
//         body: JSON.stringify({
//             query: `
//             mutation {
//                 googleAuth {
//                     token
//                     first_name
//                     last_name
//                 }
//             }
//         `,
//         }),
//         headers: {
//             "Content-Type": "application/json",
//             "x-auth-token": `${token_id}`,
//         },
//     });

//     const { data } = await response.json();
//     return data.googleAuth;
// };
