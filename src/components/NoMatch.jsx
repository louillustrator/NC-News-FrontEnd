import React, { Component } from "react";
import "./NoMatch.css";
import PropTypes from "prop-types";

class NoMatch extends Component {
  render() {
    return (
      <div className="error-page">
        <h2>{this.props.location.state.error.message}</h2>
        <br />
        <br />
        <img
          className="simpsons"
          src="https://agiantmonster.files.wordpress.com/2017/08/simpsons-i-eat-glue.jpg"
          alt="Ralph from the simpsons eating glue"
        />
      </div>
    );
  }
}

NoMatch.propTypes = {
  location: PropTypes.object.isRequired
};

export default NoMatch;
