import React, { Component } from "react";
import "./App.css";
import { Route, Link, NavLink } from "react-router-dom";
import Articles from "./components/Articles";

class App extends Component {
  state = {
    articleId: []
  };
  render() {
    return (
      <div>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Northcoders News</h1>
          </header>
        </div>
        <nav className="nav-bar">
          <NavLink exact to={"/"}>
            Home
            {" | "}
          </NavLink>
          <NavLink exact to={"/cooking"}>
            Cooking {" | "}
          </NavLink>
          <NavLink exact to={"/football"}>
            Football
            {" | "}
          </NavLink>
          <NavLink exact to={"/coding"}>
            Coding
          </NavLink>
        </nav>
        <Route exact path="/:topic" component={Articles} />
        <Route exact path="/" component={Articles} />
        {/* we can use the url props to access what the user has typed in the add bar*/}
      </div>
    );
  }
}

export default App;
