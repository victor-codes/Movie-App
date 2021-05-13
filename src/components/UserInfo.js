import React from "react";

export default function UserInfo({ logout }) {
  const username = localStorage.getItem("username");

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
