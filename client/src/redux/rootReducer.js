import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { deckReducer } from "./deckReduser";

export const rootReducer = combineReducers({
    auth: authReducer,
    deck: deckReducer,
});
