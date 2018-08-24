import React, { Component } from "react";
import * as api from "../api";
import "./Comments.css";
import Votes from "./Votes";

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
          <div key={comment._id} className="comments">
            <p className="created-by">
              created by:
              {"   "}
              {comment.created_by.username}
            </p>
            <br />
            <br />

            <p className="comment-body">{comment.body}</p>
            <br />
            <div className="comment-votes">
              <Votes votes={comment.votes} id={comment._id} />
            </div>
            <button onClick={this.handleDelete(comment._id)}>delete</button>
          </div>
        );
      })
    );
  }

  componentDidMount() {
    const articleId = this.props.articleId;
    api.fetchCommentsById(articleId).then(comments => {
      this.setState({
        comments,
        loading: false
      });
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.newComment !== prevProps.newComment) {
      this.setState({
        comments: [...this.state.comments, this.props.newComment]
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
