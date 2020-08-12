import { CREATE_CARD, GET_CARD_LIST } from "../types";

const initialState = {
    cards: null,
};

export const cardReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_CARD:
            return { ...state, card: action.card };
        default:
            return state;
    }
};
