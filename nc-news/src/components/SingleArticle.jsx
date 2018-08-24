import React, { Component } from "react";
import * as api from "../api";
import "./SingleArticle.css";
import Button from "./Button";
import Comments from "./Comments";
import AddComment from "./AddComment";

class SingleArticle extends Component {
  state = {
    article: {},
    loading: true,
    newComment: {}
  };
  //we have a checker to make sure state has the article in before it all loads up, else a little message shows
  render() {
    return this.state.loading ? (
      <p>loading...</p>
    ) : (
      <div className="single-article">
        <div className="title">
          <h1>{this.state.article.title}</h1>
        </div>
        <Button
          votes={this.state.article.votes}
          articleId={this.props.match.params.article_id}
        />
        <img
          src="https://cdn.pixabay.com/photo/2017/06/21/07/33/background-2426329_960_720.jpg"
          alt="circuit board placeholder"
        />
        <br />
        <p>Comments: {this.state.article.comment_count}</p>
        <p>
          Created by: {""}
          {this.state.article.created_by.username}
        </p>
        <div className="body">
          <p>{this.state.article.body}</p>
        </div>

        <div className="comment-daddy">
          <AddComment
            articleId={this.state.article._id}
            getNewComment={this.getNewComment}
          />
          <Comments
            articleId={this.state.article._id}
            newComment={this.state.newComment}
          />
        </div>
      </div>
    );
  }

  componentDidMount() {
    const id = this.props.match.params.article_id;
    api.fetchArticleById(id).then(article => {
      this.setState({
        article,
        loading: false
      });
    });
  }

  getNewComment = comment => {
    this.setState({
      newComment: comment
    });
  };
}

export default SingleArticle;
