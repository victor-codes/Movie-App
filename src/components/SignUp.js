import React, { useState, useEffect } from "react";
import styles from "./SignUp.module.css";
import { animated, useSpring, config } from "react-spring";
import { hashIt } from "../utils/encrypt";
// import { nanoid } from "nanoid";

export default function SignUp({ close, login }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);

  // function pattern(username, passwordHash) {
  //   const container = [];
  //   let userData = {
  //     passwordHash: passwordHash,
  //     username: username,
  //   };
  //   return container.push(userData);
  // }

  const [props, api] = useSpring(
    {
      from: { y: -1300, opacity: 0 },
    },
    []
  );

  useEffect(() => {
    api.start({ y: 0, opacity: 1, delay: 200, config: config.wobbly.tension });
  }, [api]);

  return (
    <div className={styles.overlay}>
      <animated.form
        className={styles.form}
        style={props}
        onSubmit={(e) => {
          e.preventDefault();
          // localStorage.getItem("username", username);
          // localStorage.getItem("password", password);

          const passwordHash = hashIt(password);
          if (localStorage.getItem("username") !== username) {
            let userID = {
              passwordHash: passwordHash,
              username: username,
            };
            let userDetails = [];

            userDetails.push(...userDetails, userID);
            localStorage.setItem("userID", JSON.stringify(userDetails));
            console.log(userDetails);

            localStorage.getItem("userID");
            // localStorage.setItem("username", username);

            // localStorage.setItem("password", hashIt(password));
            localStorage.setItem("loggedIn", true);

            return login(true);
          } else {
            setShowError(true);
          }
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
        <h1 className={styles.heading_1}>Register</h1>
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
            autoComplete="current-password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
        </label>
        {showError ? (
          <span
            style={{
              fontSize: "1.4rem",
              marginTop: "8px",
              color: "rgb(239, 83, 80)",
            }}
          >
            There was an error: Cannot create a new user with the username "
            {username}"
          </span>
        ) : (
          ""
        )}
        <button
          style={{
            marginTop: "24px",
            backgroundColor: "#f1f2f7",
            color: "#121212",
            borderColor: "#f1f2f7",
          }}
          className={styles.btn}
          type="submit"
        >
          REGISTER
        </button>
      </animated.form>
    </div>
  );
}
