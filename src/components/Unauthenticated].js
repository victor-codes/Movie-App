import React, { useEffect, useRef, useState } from "react";
import SignUp from "./SignUp";
import Login from "./Login";

export default function Unauthenticated({ login }) {
  const LoginModalButtonRef = useRef(null);
  const LoginButtonRef = useRef(null);
  const [loginModal, setLoginModal] = useState(false);
  const [signupModal, setSignupModal] = useState(false);
  const [loginRef, setLoginRef] = useState(false);

  useEffect(() => {
    if (loginRef === false) {
      LoginButtonRef.current.focus();
    }
  }, [loginRef]);
  return (
    <>
      <div className="home_div">
        <div>
          <h1 className="home_heading">Movie</h1>
          <button
            ref={LoginButtonRef}
            onClick={() => {
              setLoginModal(true) && setLoginRef(true);
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
        <Login
          rf={loginRef}
          modal={() => setLoginRef()}
          closeModal={LoginModalButtonRef}
          login={(e) => login(e)}
          close={(e) => setLoginModal(e)}
        />
      ) : (
        ""
      )}
    </>
  );
}
