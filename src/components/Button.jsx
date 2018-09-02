import React, { Component } from "react";
import * as api from "../api";
import PropTypes from "prop-types";

class Button extends Component {
  state = {
    votes: 0,
    error: null
  };

  render() {
    if (this.state.error) return this.state.error;
    return (
      <div className="voting">
        <p>
          <button onClick={() => this.voteOnArticle("up")}>
            <i className="material-icons">arrow_upward</i>
          </button>
          <br />
          votes: {this.state.votes}
          <br />
          <button onClick={() => this.voteOnArticle("down")}>
            <i className="material-icons">arrow_downward</i>
          </button>
        </p>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      votes: this.props.votes
    });
  }

  voteOnArticle = direction => {
    this.setState({
      votes: this.state.votes + (direction === "up" ? 1 : -1)
    });
    api.updateVote(this.props.articleId, direction).then(voteCount => {
      if (typeof voteCount !== "number") {
        this.setState({
          error: "oops, your vote didn't register, refresh and try again"
        });
      }
    });
  };
}

Button.propTypes = {
  articleId: PropTypes.string.isRequired,
  votes: PropTypes.number.isRequired
};

export default Button;
