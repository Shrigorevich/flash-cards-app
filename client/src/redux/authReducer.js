import { GOOGLE_AUTH } from "./types";

const initialState = {
    user: null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case GOOGLE_AUTH:
            return { ...state, user: action.payload };
        default:
            return state;
    }
};

// switch (action.type){
//     case CREATE_POST:
//         return {...state, posts: state.posts.concat(action.payload)}
//         return {...state, posts: [...state.posts, action.payload]}
// }
