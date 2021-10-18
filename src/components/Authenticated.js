import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import MovieInfo from "../components/MovieInfo";
import UserInfo from "../components/UserInfo";
import SignUp from "../components/SignUp";
import MovieList from "../components/MovieList";
import MovieProvider from "../Context/MovieContext";
import NavBar from "../components/NavBar";
import SearchField from "./SearchField";

export default function Authenticated({ logout }) {
  return (
    <MovieProvider>
      <UserInfo
        logout={(e) => {
          logout(e);
        }}
      />
      <Router basename="/">
        <Switch>
          <Route exact path="/">
            <div className="App">
              <NavBar />
              <div>
                <SearchField />
                <div>
                  <p
                    style={{
                      fontSize: "16px",
                      textAlign: "center",
                      marginBottom: "16px",
                    }}
                  >
                    Welcome to the discover page.
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      textAlign: "center",
                      marginBottom: "16px",
                    }}
                  >
                    Here, let me load a few books for you...
                  </p>
                  <p
                    style={{
                      fontSize: "16px",
                      textAlign: "center",
                      marginBottom: "24px",
                    }}
                  >
                    Here you go! Find more books with the search bar above.
                  </p>
                </div>
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
            </div>
          </Route>

          <Route path="/popular">
            <div className="App">
              <NavBar />
              <div>
                <MovieList />
              </div>
            </div>
          </Route>

          <Route path="/favourites">
            <div className="App">
              <NavBar />

              <div>
                <MovieList />
              </div>
            </div>
          </Route>
          <Route path={`/book`}>
            <div className="App">
              <NavBar />
              <div>
                <MovieInfo />
              </div>
            </div>
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>

          <Route path="*">
            <div className="App">
              <NavBar />
              <div className="error_div">
                <span style={{ fontSize: "1.6rem", marginTop: "40px" }}>
                  No match, go back to{" "}
                  <Link style={{ fontSize: "1.6rem", color: "#3f51b5" }} to="/">
                    home
                  </Link>
                </span>
              </div>
            </div>
          </Route>
        </Switch>
      </Router>
    </MovieProvider>
  );
}
