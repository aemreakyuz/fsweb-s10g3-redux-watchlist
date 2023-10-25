import { legacy_createStore as createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { reducers } from "./reducers/index.js";

export const myStore = createStore(reducers, applyMiddleware(logger));
