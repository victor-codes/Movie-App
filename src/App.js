import "./App.css";
import { useEffect, useState } from "react";
import Home from "./components/Home";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MovieInfo from "./components/MovieInfo";
import UserInfo from "./components/UserInfo";
import SignUp from "./components/SignUp";
import MovieList from "./components/MovieList";
import MovieProvider from "./Context/MovieContext";
import NavBar from "./components/NavBar";

function App() {
  // const ID = [
  //   { id: 189312 },
  //   { id: 189312 },
  //   { id: 189312 },
  //   { id: 189312 },
  //   { id: 189312 },
  // ];
  const loggedin = localStorage.getItem("loggedIn");
  const [login, setLogin] = useState(loggedin);

  // useEffect(() => {
  //   setLogin(loggedin);
  // });

  return (
    <MovieProvider>
      {login === "true" ? (
        <Router basename="/">
          <Switch>
            <Route exact path="/">
              <div className="App">
                <UserInfo />

                <NavBar />
                <Link
                  to={{
                    pathname: `/book`,
                  }}
                >
                  <button>
                    <MovieList />
                  </button>
                </Link>
              </div>
            </Route>

            <Route path="/popular">
              <div className="App">
                <UserInfo />
                <NavBar />
                <MovieList />
              </div>
            </Route>

            <Route path="/favourites">
              <div className="App">
                <UserInfo />
                <NavBar />

                <div>
                  <MovieList />
                </div>
              </div>
            </Route>
            <Route path="/unauth">
              <Home />
            </Route>

            <Route path={`/book`}>
              <div className="App">
                <UserInfo />
                <NavBar />
                <MovieInfo />
              </div>
            </Route>
            <Route path="/sign-up">
              <SignUp />
            </Route>

            <Route path="*">
              <div className="error_div">
                <span style={{ fontSize: "1.6rem", marginTop: "40px" }}>
                  No match, go back to{" "}
                  <Link style={{ fontSize: "1.6rem", color: "#3f51b5" }} to="/">
                    home
                  </Link>
                </span>
              </div>
            </Route>
          </Switch>
        </Router>
      ) : (
        <Home />
      )}
    </MovieProvider>
  );
}

export default App;
