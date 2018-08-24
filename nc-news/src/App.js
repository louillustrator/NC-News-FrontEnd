import React, { Component } from "react";
import "./App.css";
import { Route, NavLink } from "react-router-dom";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";

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
          <NavLink exact to={"/"}>
            Home
            {"  |  "}
          </NavLink>
          <NavLink exact to={"/cooking"}>
            Cooking {"  |  "}
          </NavLink>
          <NavLink exact to={"/football"}>
            Football
            {"  |  "}
          </NavLink>
          <NavLink exact to={"/coding"}>
            Coding
          </NavLink>
        </nav>
        <Route exact path="/:topic" component={Articles} />
        <Route exact path="/" component={Articles} />
        <Route exact path={"/:topic/:article_id"} component={SingleArticle} />
        {/* we can use the url props to access what the user has typed in the add bar*/}
      </div>
    );
  }
}

export default App;
