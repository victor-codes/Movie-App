import { useSpring } from "@react-spring/core";
import React, { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";

export default function Home() {
  const [login, setLogin] = useState(false);
  const [signUp, setSignUp] = useState(false);
  return (
    <>
      <div className="home_div">
        <div>
          <h1 className="home_heading">Movie</h1>
          <button
            onClick={() => {
              setLogin(true);
            }}
            className="home_btn login"
          >
            LOGIN
          </button>
          <button
            onClick={() => {
              setSignUp(true);
            }}
            className="home_btn register"
          >
            REGISTER
          </button>
        </div>
      </div>
      {signUp ? <SignUp close={(val) => setSignUp(val)} /> : ""}
      {login ? <Login close={(val) => setLogin(val)} /> : ""}
    </>
  );
}
