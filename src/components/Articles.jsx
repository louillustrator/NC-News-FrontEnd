import React, { Component } from "react";
import PropTypes from "prop-types";

import { ClipLoader } from "react-spinners";
import "./Articles.css";
import ArticleBox from "./ArticleBox";
import * as api from "../api";

import { Link, Redirect } from "react-router-dom";

class Articles extends Component {
  state = {
    articles: [],
    error: null,
    isLoading: true
  };
  render() {
    if (this.state.error)
      return (
        <Redirect
          to={{ pathname: "/404", state: { error: this.state.error } }}
        />
      );

    return (
      <div className="container">
        {this.state.isLoading && (
          <ClipLoader
            size={150}
            color={"#0fb9b1"}
            loading={this.state.isLoading}
          />
        )}

        {this.state.articles.map(article => {
          return (
            <div className="article" key={article._id}>
              <div>
                <Link
                  style={{ textDecoration: "none" }}
                  to={`${article.belongs_to}/${article._id}`}
                >
                  <ArticleBox article={article} />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  //the link here uses a topic, which we have access to so we don't need to try and match the props

  componentDidMount() {
    this.updateArticles();
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      this.updateArticles();
    }
  }
  updateArticles = () => {
    const { topic } = this.props.match.params;
    if (!topic) {
      api.fetchArticles().then(res => {
        if (res.type === "error") {
          this.setState({
            error: res
          });
        } else {
          res.sort((a, b) => {
            return (
              b.created_at > a.created_at || -(b.created_at < a.created_at)
            );
          });
          this.setState({
            articles: res,
            isLoading: false
          });
        }
      });
    } else {
      api.fetchArticleByTopic(topic).then(res => {
        if (res.type === "error") {
          this.setState({
            error: res
          });
        } else {
          res.sort((a, b) => {
            return (
              b.created_at > a.created_at || -(b.created_at < a.created_at)
            );
          });
          this.setState({
            articles: res
          });
        }
      });
    }
  };
}

Articles.propTypes = {
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  match: PropTypes.object.isRequired
};

export default Articles;
