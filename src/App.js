import { useState } from "react";
import { Switch, Route, NavLink, useHistory } from "react-router-dom";
import Movie from "./components/Movie";
import FavMovie from "./components/FavMovie";
import { nextMovie } from "./store/actions/movieActions";
import { addFavorite } from "./store/actions/favActions";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const history = useHistory();
  const dispatch = useDispatch();

  const sira = useSelector((store) => store.movieScroll.sira);
  const movies = useSelector((store) => store.movieScroll.movies);

  const favMovies = useSelector((store) => store.favorites.favorites);

  function sonrakiFilm() {
    dispatch(nextMovie());
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
              onClick={sonrakiFilm}
              className="select-none px-4 py-2 border border-blue-700 text-blue-700 hover:border-blue-500 hover:text-blue-500"
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
              <FavMovie key={movie.id} title={movie.title} id={movie.id} />
            ))}
          </div>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
