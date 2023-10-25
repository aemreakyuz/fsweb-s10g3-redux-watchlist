import { NEXT_MOVIE } from "../actions/movieActions";
import { movies } from "../../movies";

const initialState = {
  movies: movies,
  sira: 0,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT_MOVIE:
      return {};
    default:
      return state;
  }
};

export default movieReducer;
