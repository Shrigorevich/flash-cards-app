import { CREATE_DECK, FETCH_DECKS } from "../types";

const initialState = {
    decks: [],
};

export const deckReducer = (state = initialState, action) => {
    switch (action.type) {
        // case CREATE_DECK:
        //     return { ...state, decks: action.deck };
        case FETCH_DECKS:
            return { ...state, decks: action.payload };
        default:
            return state;
    }
};

// return {...state, posts: state.decks.concat([action.payload])}
// return {...state, posts: [...state.posts, action.payload]}
