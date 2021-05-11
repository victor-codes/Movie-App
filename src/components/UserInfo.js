import React from "react";

export default function UserInfo({ name }) {
  const username = localStorage.getItem("username");
  return (
    <div className="absolute">
      {username}
      <button onClick={()=>{
        localStorage.setItem("loggedIn", "false")
      }} className="logout">Logout</button>
    </div>
  );
}
