import React, { useEffect } from "react";
import { Redirect } from "react-router";

export default function UserInfo({ name, logout }) {
  const username = localStorage.getItem("username");
  // useEffect(() => {
  //   if (appState === "false") {
  //     return <Redirect to="/" />;
  //   }
  // });
  return (
    <div className="absolute">
      {username}
      <button
        onClick={() => {
          logout(false);
          localStorage.setItem("loggedIn", "false");
        }}
        className="logout"
      >
        Logout
      </button>
    </div>
  );
}
