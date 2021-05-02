import React, { useState } from "react";
import { NavLink, withRouter } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav>
      <div className={styles.navbar_container}>
        <ul>
          <li>
            <NavLink
              activeClassName={styles.link_active}
              className={styles.link}
              exact
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={styles.link}
              activeClassName={styles.link_active}
              to="/popular"
            >
              Popular
            </NavLink>
          </li>
          <li>
            <NavLink
              activeClassName={styles.link_active}
              className={styles.link}
              to="/favourites"
            >
              Favourites
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default withRouter(NavBar);
