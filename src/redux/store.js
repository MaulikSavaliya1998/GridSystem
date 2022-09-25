import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { planetReducer } from "./reducer";
export const store = createStore(planetReducer, applyMiddleware(thunk));
