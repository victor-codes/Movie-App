import React from "react";

export default function UserInfo({ logout }) {
  const username = JSON.parse(localStorage.getItem("userID")) || "[]";

  return (
    <div className="absolute">
      {/* {username[0].username ? username[0].username : "  "} */}
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
