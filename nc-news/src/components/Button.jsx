import React, { Component } from "react";
import * as api from "../api";

class Button extends Component {
  state = {
    votes: 0
  };

  render() {
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
    api.updateVote(this.props.articleId, direction).then(voteCount => {
      this.setState({
        votes: this.state.votes + (direction === "up" ? 1 : -1)
      });
    });
  };
}

export default Button;
