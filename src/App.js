import React, { Component } from "react";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import Articles from "./components/Articles";
import SingleArticle from "./components/SingleArticle";
import NoMatch from "./components/NoMatch";
import PostArticle from "./components/PostArticle";
import Header from "./components/Header";

class App extends Component {
  state = {
    articleId: [],
    clicked: false
  };
  render() {
    return (
      <div className="big-div">
        <div className="App">
          <Header />

          <h2 className="brain-header">Goodness for your brain</h2>
          <h4 className="mini-header">
            The latest news in cooking, coding and football
          </h4>
          {this.state.clicked === false && (
            <div className="brain-header">
              <Link to="/post-article">
                <button className="article-btn " onClick={this.handleClick}>
                  Post article!
                </button>
              </Link>
            </div>
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
