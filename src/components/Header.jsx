import React from "react";
import { NavLink, Redirect } from "react-router-dom";
import "../App.css";

const Header = () => {
  return (
    <div>
      <header className="App-header">
        <h1 className="App-title">Northcoders News</h1>
      </header>

      <nav className="nav-bar">{navBar()}</nav>
    </div>
  );

  function navBar() {
    {
      const linksArr = ["home", "cooking", "football", "coding"];

      let mappedArr = linksArr.map(linkName => {
        if (linkName === "home") {
          return (
            <NavLink
              style={{ textDecoration: "none", color: " #797e81" }}
              exact
              to={"/"}
            >
              {linkName}

              {"  |  "}
            </NavLink>
          );
        }
        return (
          <NavLink
            style={{ textDecoration: "none", color: " #797e81" }}
            exact
            to={`/${linkName}`}
          >
            {linkName}

            {"  |  "}
          </NavLink>
        );
      });

      return mappedArr;
    }
  }
};

export default Header;
