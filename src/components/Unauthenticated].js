import React, { useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";

export default function Unauthenticated({ login }) {
  const [loginModal, setLoginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);
  return (
    <>
      <div className="home_div">
        <div>
          <h1 className="home_heading">Movie</h1>
          <button
            onClick={() => {
              setLoginModal(true);
            }}
            className="home_btn login"
          >
            LOGIN
          </button>
          <button
            onClick={() => {
              setSignupModal(true);
            }}
            className="home_btn register"
          >
            REGISTER
          </button>
        </div>
      </div>

      {signupModal ? (
        <SignUp login={(e) => login(e)} close={(e) => setSignupModal(e)} />
      ) : (
        ""
      )}

      {loginModal ? (
        <Login login={(e) => login(e)} close={(e) => setLoginModal(e)} />
      ) : (
        ""
      )}
    </>
  );
}
