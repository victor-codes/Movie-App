import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MovieInfo from "./components/MovieInfo";

import MovieList from "./components/MovieList";
import MovieProvider from "./Context/MovieContext";

function App() {
  return (
    <MovieProvider>
      <Router>
        <div className="App">
          <Link to="/book">
            <div>
              <MovieList />
            </div>
          </Link>
        </div>
        <Switch>

          <Route path="/book">
            <MovieInfo />
          </Route>
          <Route path="/">
            <MovieList />
            </Route>
        </Switch>
      </Router>
    </MovieProvider>
  );
}

export default App;
