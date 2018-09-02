import React, { Component } from "react";
import * as api from "../api";
import "./SingleArticle.css";
import Button from "./Button";
import Comments from "./Comments";
import AddComment from "./AddComment";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";

class SingleArticle extends Component {
  state = {
    article: {},
    loading: true,
    newComment: {},
    error: null
  };
  //we have a checker to make sure state has the article in before it all loads up, else a little message shows
  render() {
    if (this.state.error)
      return (
        <Redirect
          to={{ pathname: "/404", state: { error: this.state.error } }}
        />
      );

    return this.state.loading ? (
      <p>loading...</p>
    ) : (
      <div className="single-article">
        <h1>{this.state.article.title}</h1>

        <img
          src={require("../images/computpr.jpeg")}
          alt="circuit board placeholder"
        />
        <Button
          className="btn"
          votes={this.state.article.votes}
          articleId={this.props.match.params.article_id}
        />

        <p>Comments: {this.state.article.comment_count}</p>
        <p>
          Created by: {""}
          {this.state.article.created_by.username}
        </p>
        <p className="body">{this.state.article.body}</p>

        <br />
        <br />
        <br />
        <br />

        <AddComment
          articleId={this.state.article._id}
          getNewComment={this.getNewComment}
        />
        <br />
        <br />
        <br />
        <br />
        <Comments
          articleId={this.state.article._id}
          newComment={this.state.newComment}
        />
      </div>
    );
  }

  componentDidMount() {
    const id = this.props.match.params.article_id;
    api.fetchArticleById(id).then(res => {
      if (res.type === "error") {
        this.setState({
          error: res
        });
      } else {
        this.setState({
          article: res,
          loading: false
        });
      }
    });
  }

  getNewComment = res => {
    if (res.type === "error") {
      this.setState({
        error: res
      });
    } else {
      this.setState({
        newComment: res
      });
    }
  };
}

SingleArticle.propTypes = {
  match: PropTypes.object.isRequired
};

export default SingleArticle;
