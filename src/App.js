import React, { Component } from "react";
import "./App.css";
import { Route, NavLink, Switch, Redirect, Link } from "react-router-dom";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import NoMatch from "./components/NoMatch";
import PostArticle from "./components/PostArticle";

class App extends Component {
  state = {
    articleId: [],
    clicked: false
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
        <h2 className="brain-header">Goodness for your brain</h2>
        <h4 className="mini-header">
          The latest news in cooking, coding and football
        </h4>
        {this.state.clicked === false && (
          <Link to="/post-article">
            <button onClick={this.handleClick} className="post">
              Post article!
            </button>
          </Link>
        )}
        <br />
        <br />

        <Switch>
          <Route exact path="/" component={Articles} />
          <Route exact path="/post-article" component={PostArticle} />
          <Route path="/404" component={NoMatch} />
          <Route exact path="/:topic" component={Articles} />

          <Route exact path="/:topic/:article_id" component={SingleArticle} />
        </Switch>
      </div>
    );
  }
  handleClick = () => {
    this.setState({
      clicked: true
    });
  };
}

export default App;
