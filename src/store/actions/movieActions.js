export const NEXT_MOVIE = "NEXT_MOVIE";
export const PREVIOUS_MOVIE = "PREVIOUS_NAME";
export const FIRST_MOVIE = "FIRST_NAME";
export const RECYCLE_MOVIE = "RECYCLE_MOVIE";
export const REMOVE_MOVIE = "REMOVE_MOVIE";

export const nextMovie = () => {
  return { type: NEXT_MOVIE };
};

export const previousMovie = () => {
  return { type: PREVIOUS_MOVIE };
};
export const firstMovie = () => {
  return { type: FIRST_MOVIE };
};
