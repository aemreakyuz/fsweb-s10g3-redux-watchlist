import {
  NEXT_MOVIE,
  PREVIOUS_MOVIE,
  FIRST_MOVIE,
} from "../actions/movieActions";
import { movies } from "../../movies";

const initialState = {
  movies: movies,
  sira: 0,
  disabledNavigation: "previous",
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_MOVIE:
      if (state.sira === state.movies.length - 1) {
        return { ...state, sira: state.sira, disabledNavigation: "next" };
      } else {
        return {
          ...state,
          sira: state.sira + 1,
          disabledNavigation: null,
        };
      }

    case PREVIOUS_MOVIE:
      if (state.sira === 0) {
        return { ...state, sira: state.sira, disabledNavigation: "previous" };
      } else {
        return {
          ...state,
          sira: state.sira - 1,
          disabledNavigation: null,
        };
      }

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
