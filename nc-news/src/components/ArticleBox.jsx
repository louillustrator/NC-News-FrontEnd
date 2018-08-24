import React from "react";
import "./ArticleBox.css";

const ArticleBox = ({ article }) => {
  return (
    <div>
      <br />
      {article.title}
      <br />
      {article.created_by.name}
      <br />
      comments: {article.comment_count}
      <br />
      votes: {article.votes}
      <br />
    </div>
  );
};

export default ArticleBox;
