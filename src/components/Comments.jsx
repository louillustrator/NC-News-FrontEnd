import React, { Component } from "react";
import * as api from "../api";
import "./Comments.css";

import PropTypes from "prop-types";
import SingleComment from "./SingleComment";

class Comments extends Component {
  state = {
    comments: [],
    loggedInUser: "5b64860cb670dd0ebdef5003"
  };
  render() {
    return this.state.comments < 1 ? (
      <p>No comments here yet....</p>
    ) : (
      this.state.comments.map(comment => {
        return (
          <div key={comment._id} className="single-article-box">
            <SingleComment comment={comment} handleDelete={this.handleDelete} />
          </div>
        );
      })
    );
  }

  componentDidMount() {
    const articleId = this.props.articleId;
    api.fetchCommentsById(articleId).then(comments => {
      if (comments.type !== "error") {
        comments.sort((a, b) => {
          return b.created_at > a.created_at || -(b.created_at < a.created_at);
        });
        this.setState({
          comments
        });
      }
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.newComment !== prevProps.newComment) {
      this.setState({
        comments: [this.props.newComment, ...this.state.comments]
      });
    }
  }

  handleDelete = commentId => {
    return () => {
      api.deleteComment(commentId).then(msg => {
        if (msg === "comment succesfully deleted") {
          let newArr = this.state.comments.filter(comment => {
            if (comment._id !== commentId) return comment;
          });

          this.setState({
            comments: newArr
          });
        }
      });
    };
  };
}
Comment.PropTypes = {
  articleId: PropTypes.object.isRequired,
  newComment: PropTypes.object.isRequired
};

export default Comments;
