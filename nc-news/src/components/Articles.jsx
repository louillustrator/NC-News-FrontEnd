import React, { Component } from "react";
import axios from "axios";
import "./Articles.css";
import ArticleBox from "./ArticleBox";

class Articles extends Component {
  state = {
    articles: []
  };
  render() {
    console.log("rendering");
    return (
      <div className="article">
        {this.state.articles.map(article => {
          return (
            <div>
              <ArticleBox article={article} />
            </div>
          );
        })}
      </div>
    );
  }

  componentDidMount() {
    const { topic } = this.props.match.params;
    if (!topic) {
      axios
        .get(`https://lou-nc-news.herokuapp.com/api/articles`)
        .then(articles => {
          this.setState({
            articles: articles.data.articlesCounted
          });
        });
    } else {
      axios
        .get(`https://lou-nc-news.herokuapp.com/api/topics/${topic}/articles`)
        .then(articles => {
          this.setState({
            articles: articles.data.article
          });
        });
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps !== this.props) {
      const { topic } = this.props.match.params;
      if (!topic) {
        axios
          .get(`https://lou-nc-news.herokuapp.com/api/articles`)
          .then(articles => {
            this.setState({
              articles: articles.data.articlesCounted
            });
          });
      } else {
        axios
          .get(`https://lou-nc-news.herokuapp.com/api/topics/${topic}/articles`)
          .then(articles => {
            this.setState({
              articles: articles.data.article
            });
          })
          .catch(console.log);
      }
    }
  }
}
export default Articles;
