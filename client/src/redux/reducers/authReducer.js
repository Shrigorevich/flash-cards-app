import { GOOGLE_AUTH, GET_PROFILE, LOGOUT_USER } from "../types";

const initialState = {
    user: null,
    error: null,
};

export const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case GOOGLE_AUTH:
            return {
                ...state,
                user: action.payload,
                error: action.error ? action.error : null,
            };
        case GET_PROFILE:
            return {
                ...state,
                user: action.payload,
                error: action.error ? action.error : null,
            };
        case LOGOUT_USER:
            return { ...state, user: null, error: null };
        default:
            return state;
    }
};
