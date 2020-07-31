import { GOOGLE_AUTH, GET_PROFILE, LOGOUT_USER } from "../types";

const initialState = {
    user: null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case GOOGLE_AUTH:
            return { ...state, user: action.payload };
        case GET_PROFILE:
            return { ...state, user: action.payload };
        case LOGOUT_USER:
            return { ...state, user: null };
        default:
            return state;
    }
};
