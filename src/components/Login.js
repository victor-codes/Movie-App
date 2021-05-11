import React, { useState, useEffect } from "react";
import styles from "./SignUp.module.css";
import { animated, useSpring, config } from "react-spring";
import useLocalStorage from "./useLocalStorage";

export default function Login({ close }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [props, api] = useSpring(
    {
      from: { y: -1300, opacity: 0 },
    },
    []
  );

  useEffect(() => {
    api.start({ y: 0, opacity: 1, delay: 200, config: config.wobbly.tension });
  }, []);

  // const [login, setLogin] = useLocalStorage("loggedIn", "false");

  return (
    <div
      className={styles.overlay}>
      <animated.form
        className={styles.form}
        style={props}
        onSubmit={(e) => {
          e.preventDefault();
          localStorage.getItem("username");
          localStorage.getItem("password");
          // setLogin("true");
          localStorage.setItem("loggedIn", "true");
        }}
      >
        <div className={styles.close_btn}>
          <button onClick={() => close(false)} className={styles.close_button}>
            <svg
              className={styles.w_6}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <h1 className={styles.heading_1}>Log In</h1>
        <label htmlFor="username">
          <span className={styles.label_text}>Username</span>
          <input
            className={styles.input}
            type="text"
            id="username"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            required
          />
        </label>
        <label style={{ marginTop: "24px" }} htmlFor="password">
          <span className={styles.label_text}>Password</span>
          <input
            className={styles.input}
            type="password"
            id="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </label>
        <button
          style={{ marginTop: "24px" }}
          className={styles.btn}
          type="submit"
        >
          LOG IN
        </button>
      </animated.form>
    </div>
  );
}
