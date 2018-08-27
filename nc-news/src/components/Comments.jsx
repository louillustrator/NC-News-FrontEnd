import React, { Component } from "react";
import * as api from "../api";
import "./Comments.css";
import Votes from "./Votes";
import moment from "moment";

class Comments extends Component {
  state = {
    comments: [],
    loading: true,
    loggedInUser: "5b64860cb670dd0ebdef5003"
  };
  render() {
    return this.state.loading ? (
      <p>Fetching comments....</p>
    ) : (
      this.state.comments.map(comment => {
        return (
          <div key={comment._id} className="single-article-box">
            <p className="comment-p">
              {" "}
              created
              {"   "} by:
              {"   "}
              {comment.created_by.username} <br />
              {moment(comment.created_at).fromNow()}
            </p>

            <br />
            <br />

            <p className="comment-p-body">{comment.body}</p>
            <br />

            <Votes
              className="comment-p-votes"
              votes={comment.votes}
              id={comment._id}
            />

            <button
              className="comment-btn"
              onClick={this.handleDelete(comment._id)}
            >
              delete
            </button>
          </div>
        );
      })
    );
  }

  componentDidMount() {
    const articleId = this.props.articleId;
    api.fetchCommentsById(articleId).then(comments => {
      comments.sort((a, b) => {
        return b.created_at > a.created_at || -(b.created_at < a.created_at);
      });
      this.setState({
        comments,
        loading: false
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.newComment !== prevProps.newComment) {
      this.setState({
        comments: [this.props.newComment, ...this.state.comments]
      });
    }
  }

  //optimistic rendering
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

export default Comments;
