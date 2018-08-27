import React, { Component } from "react";

class NoMatch extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.location.state.error.message}</h2>
      </div>
    );
  }
}

export default NoMatch;
