import { ADD_FAVORITE, DELETE_FAVORITE } from "../actions/favActions";

const initialState = {
  favorites: [],
};

const favReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      const checkExisting = state.favorites.find(
        (movie) => action.payload.id === movie.id
      );
      if (checkExisting) {
        return state;
      } else {
        const newFavList = [...state.favorites, action.payload];
        return {
          ...state,
          favorites: newFavList,
        };
      }
    case DELETE_FAVORITE:
      const removedFavList = state.favorites.filter(
        (item) => action.payload !== item.id
      );
      return { ...state, favorites: removedFavList };
    default:
      return state;
  }
};

export default favReducer;
