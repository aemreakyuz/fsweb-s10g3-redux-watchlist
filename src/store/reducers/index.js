import { combineReducers } from "redux";

import favReducer from "./favReducer";
import movieReducer from "./movieReducer";

export const reducers = combineReducers({
  favorites: favReducer,
  movieScroll: movieReducer,
});
