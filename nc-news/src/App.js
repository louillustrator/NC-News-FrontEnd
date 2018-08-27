import React, { Component } from "react";
import "./App.css";
import { Route, NavLink, Switch, Redirect } from "react-router-dom";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import NoMatch from "./components/NoMatch";

class App extends Component {
  state = {
    articleId: []
  };
  render() {
    return (
      <div className="big-div">
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Northcoders News</h1>
          </header>
        </div>
        <nav className="nav-bar">
          <NavLink
            style={{ textDecoration: "none", color: " #797e81" }}
            exact
            to={"/"}
          >
            Home
            {"  |  "}
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: " #797e81" }}
            exact
            to={"/cooking"}
          >
            Cooking {"  |  "}
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: " #797e81" }}
            exact
            to={"/football"}
          >
            Football
            {"  |  "}
          </NavLink>
          <NavLink
            style={{ textDecoration: "none", color: " #797e81" }}
            exact
            to={"/coding"}
          >
            Coding
          </NavLink>
        </nav>
        <Route exact path="/" component={Articles} />
        <Route exact path="/:topic" component={Articles} />
        <Route exact path="/:topic/:article_id" component={SingleArticle} />
        <Route path="/404" component={NoMatch} />
      </div>
    );
  }
}

export default App;
