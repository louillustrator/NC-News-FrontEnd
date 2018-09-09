import React, { Component } from "react";
import "./AddComment.css";
import * as api from "../api";
import PropTypes from "prop-types";

class AddComment extends Component {
  state = {
    body: "",
    belongs_to: "",
    created_by: "5b64860cb670dd0ebdef5003"
  };
  render() {
    return (
      <div onSubmit={this.handleSubmit}>
        <form className="add-comment">
          <p className="text">Add comment:</p>
          <input
            className="input"
            type="text"
            name="comment"
            placeholder="Your comment here..."
            value={this.state.body}
            onChange={this.handleChange}
          />
          <button
            type="submit"
            value="Submit"
            className="post-btn"
            disabled={!this.state.body}
          >
            Post
          </button>
        </form>
      </div>
    );
  }

  handleSubmit = event => {
    event.preventDefault();
    api.addComment(this.state).then(
      newComment => {
        this.props.getNewComment(newComment);
      },
      this.setState({
        body: ""
      })
    );
  };

  handleChange = event => {
    this.setState({
      body: event.target.value,
      belongs_to: this.props.articleId
    });
  };
}

AddComment.propTypes = {
  articleId: PropTypes.string.isRequired,
  getNewComment: PropTypes.func.isRequired
};

export default AddComment;
