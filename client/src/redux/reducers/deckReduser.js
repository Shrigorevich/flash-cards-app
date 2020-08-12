import { CREATE_DECK, FETCH_DECKS } from "../types";

const initialState = {
    list: [],
    newDeck: null,
};

export const deckReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_DECK:
            return { ...state, newDeck: action.deck };
        case FETCH_DECKS:
            return { ...state, list: action.payload };
        default:
            return state;
    }
};

// return {...state, posts: state.decks.concat([action.payload])}
// return {...state, posts: [...state.posts, action.payload]}
