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
    posted: false,
    disabled: true
  };
  render() {
    if (this.state.posted) return <Redirect to="/" />;

    return (
      <div onSubmit={this.handleSubmit}>
        <form className="add-article">
          <select
            name="belongs_to"
            className="topic"
            onChange={this.handleChange}
          >
            <option value="" disabled selected>
              Select a topic
            </option>
            <option value="cooking">Cooking</option>
            <option value="football">Football</option>
            <option value="coding">Coding</option>
          </select>
          <p className="title">Title</p>
          <input
            className="input-ttl"
            type="text"
            name="title"
            placeholder="Article title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <p className="body">Body</p>
          <textarea
            className="input-bdy"
            type="text"
            name="body"
            placeholder="What are we writing about today?"
            value={this.state.body}
            onChange={this.handleChange}
          />
          <button
            type="submit"
            value="Submit"
            className="post-article-btn"
            disabled={this.state.disabled}
          >
            Post
          </button>
        </form>
      </div>
    );
  }

  handleChange = event => {
    let area = event.target.name;

    this.setState({
      [area]: event.target.value,
      disabled: false
    });
  };

  handleSubmit = event => {
    if (event) {
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
    }
  };
}

export default PostArticle;
