import React, { Component } from "react";
import * as api from "../api";

class Votes extends Component {
  state = {
    votes: 0
  };
  render() {
    return (
      <div>
        <button onClick={() => this.voteOnComment("up")}>
          <i className="material-icons">arrow_upward</i>
        </button>

        <p>votes: {this.state.votes}</p>
        <button onClick={() => this.voteOnComment("down")}>
          <i className="material-icons">arrow_downward</i>
        </button>
      </div>
    );
  }

  componentDidMount() {
    this.setState({
      votes: this.props.votes
    });
  }

  voteOnComment = direction => {
    api.updateCommentVote(this.props.id, direction).then(voteCount => {
      this.setState({
        votes: this.state.votes + (direction === "up" ? 1 : -1),
        voting: false
      });
    });
  };
}

export default Votes;
