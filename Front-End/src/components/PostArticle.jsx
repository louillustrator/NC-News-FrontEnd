import React, { Component } from "react";
import "./PostArticle.css";
import * as api from "../api";
import { Redirect } from "react-router-dom";

class PostArticle extends Component {
  state = {
    title: "",
    body: "",
    belongs_to: "",
    created_by: "5b64860cb670dd0ebdef5003",
    posted: false
  };
  render() {
    if (this.state.posted) return <Redirect to="/" />;

    return (
      <div onSubmit={this.handleSubmit}>
        <form className="add-article">
          <select name="topic" className="topic" onChange={this.handleChange}>
            <option value="" disabled selected>
              Select a topic
            </option>
            <option value="cooking">Cooking</option>
            <option value="football">Football</option>
            <option value="coding">Coding</option>
          </select>
          <p className="title">Title</p>
          <input
            className="input"
            type="text"
            name="title"
            placeholder="Article title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <p className="body">Body</p>
          <input
            className="input"
            type="text"
            name="body"
            placeholder="ohh what are we writing about today?"
            value={this.state.body}
            onChange={this.handleChange}
          />
          <button type="submit" value="Submit" className="post-article-btn">
            Post
          </button>
        </form>
      </div>
    );
  }

  handleChange = event => {
    if (event.target.name === "body")
      this.setState({
        body: event.target.value
      });
    if (event.target.name === "title")
      this.setState({
        title: event.target.value
      });
    if (event.target.name === "topic")
      this.setState({
        belongs_to: event.target.value
      });
  };

  handleSubmit = event => {
    event.preventDefault();
    let article = {
      title: this.state.title,
      body: this.state.body,
      created_by: this.state.created_by
    };
    api.addArticle(article, this.state.belongs_to).then(res => {
      if (res.data.message) {
        this.setState({
          posted: true
        });
      }
    });
  };
}

export default PostArticle;
