import {
  NEXT_MOVIE,
  PREVIOUS_MOVIE,
  FIRST_MOVIE,
} from "../actions/movieActions";
import { movies } from "../../movies";

const initialState = {
  movies: movies,
  sira: 0,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_MOVIE:
      return {
        ...state,
        sira: state.sira < 20 ? state.sira + 1 : state.sira,
      };

    case PREVIOUS_MOVIE:
      return {
        ...state,
        sira: state.sira - 1,
      };
    case FIRST_MOVIE:
      return {
        ...state,
        sira: initialState.sira,
      };
    default:
      return state;
  }
};

export default movieReducer;
