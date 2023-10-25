import { useState } from "react";
import { Switch, Route, NavLink, useHistory } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";
import {
  firstMovie,
  nextMovie,
  previousMovie,
} from "./store/actions/movieActions";
import { addFavorite } from "./store/actions/favActions";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { sira, disabledNavigation } = useSelector(
    (store) => store.movieScroll
  );
  const movies = useSelector((store) => store.movieScroll.movies);

  const favMovies = useSelector((store) => store.favorites.favorites);

  function sonrakiFilm() {
    dispatch(nextMovie());
  }

  function oncekiFilm() {
    dispatch(previousMovie());
  }

  function firstFilm() {
    dispatch(firstMovie());
  }

  function addFavoriteHandler(movie) {
    dispatch(addFavorite(movie));
  }

  return (
    <div className="wrapper max-w-2xl mx-auto">
      <nav className="flex text-2xl pb-6 pt-8 gap-2 justify-center">
        <NavLink
          to="/"
          exact
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Filmler
        </NavLink>
        <NavLink
          to="/listem"
          className="py-3 px-6 "
          activeClassName="bg-white shadow-sm text-blue-600"
        >
          Listem
        </NavLink>
      </nav>
      <Switch>
        <Route exact path={"/"}>
          <Movie sira={sira} />

          <div className="flex gap-3 justify-end py-3">
            <button
              disabled={disabledNavigation === "previous"}
              onClick={firstFilm}
              className="disabled:opacity-50 select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Başa Dön
            </button>
            <button
              disabled={disabledNavigation === "previous"}
              onClick={oncekiFilm}
              className="disabled:opacity-50 select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Önceki Film
            </button>
            <button
              disabled={disabledNavigation === "next"}
              onClick={sonrakiFilm}
              className="disabled:opacity-50 select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
            >
              Sıradaki
            </button>
            <button
              onClick={() => addFavoriteHandler(movies[sira])}
              className="select-none px-4 py-2 bg-blue-700 hover:bg-blue-600 text-white"
            >
              Listeme ekle
            </button>
          </div>
        </Route>

        <Route path="/listem">
          <div>
            {favMovies.map((movie) => (
              <FavMovie key={movie.id} movie={movie} />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
