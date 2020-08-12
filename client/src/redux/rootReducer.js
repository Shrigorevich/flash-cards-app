import { combineReducers } from "redux";
import { authReducer } from "./reducers/authReducer";
import { deckReducer } from "./reducers/deckReduser";
import { cardReducer } from "./reducers/cardReducer";
import { appReducer } from "./reducers/appReducer";

export const rootReducer = combineReducers({
    auth: authReducer,
    decks: deckReducer,
    cards: cardReducer,
    app: appReducer,
});
