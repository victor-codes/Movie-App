import "./App.css";
import { useState } from "react";
import Unauthenticated from "./components/Unauthenticated]";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Authenticated from "./components/Authenticated";

function App() {
  const loggedin = localStorage.getItem("loggedIn");
  const [userState, setUserState] = useState(loggedin);

  // useEffect(() => {
  //   setLogin(loggedin);
  // });

  return (
    <div className="app">
      {JSON.parse(userState) ? (
        <Authenticated
          logout={(e) => {
            setUserState(e);
          }}
        />
      ) : (
        <Unauthenticated
          login={(e) => {
            setUserState(e);
          }}
        />
      )}
    </div>
  );
}

export default App;
