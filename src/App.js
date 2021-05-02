import "./App.css";
import { useState } from "react";
import {
  HashRouter,
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import MovieInfo from "./components/MovieInfo";
import UserInfo from "./components/UserInfo";

import MovieList from "./components/MovieList";
import MovieProvider from "./Context/MovieContext";
import NavBar from "./components/NavBar";

function App() {
  return (
    <MovieProvider>
      <UserInfo name="workdfsgfs" />
      <div className="App">
        <Router basename="/">
          <NavBar />

          <Switch>
            <Route exact path="/">
              <div>
                <Link to="/book">
                  <button>
                    <MovieList />
                  </button>
                </Link>
              </div>
            </Route>

            <Route path="/popular">
              <div>
                <MovieList />
              </div>
            </Route>

            <Route path="/favourites">
              <div>
                <MovieList />
              </div>
            </Route>

            <Route path="/book">
              <MovieInfo />
            </Route>

            {/* <Route path="*">
              <div className="error_div">
                <h1>No match, go back to <Link to="/">home</Link></h1>
              </div>
            </Route> */}
          </Switch>
        </Router>
      </div>
    </MovieProvider>
  );
}

export default App;
