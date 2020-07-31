import { combineReducers } from "redux";
import { authReducer } from "./reducers/authReducer";
import { deckReducer } from "./reducers/deckReduser";
import { cardReducer } from "./reducers/cardReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    deck: deckReducer,
    card: cardReducer,
});
