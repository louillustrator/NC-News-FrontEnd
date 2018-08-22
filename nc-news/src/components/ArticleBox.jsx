import React from "react";

const ArticleBox = ({ article }) => {
  console.log(article);
  return (
    <div>
      <br />
      {article.title}
      <br />
      {article.comment_count}

      {article.votes}
      <br />
    </div>
  );
};

export default ArticleBox;
