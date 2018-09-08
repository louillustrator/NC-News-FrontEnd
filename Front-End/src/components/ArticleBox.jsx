import React from "react";
import "./ArticleBox.css";
import moment from "moment";

const ArticleBox = ({ article }) => {
  return (
    <div className="outer-box">
      <br />
      <h4>{article.title}</h4>

      <p>
        {" "}
        {article.body.replace(/^(.{100}[^\s]*).*/, "$1")}
        <br />
      </p>
      {article.belongs_to === "coding" && (
        <img
          src={require("../images/typing.jpg")}
          alt="hands typing on a keybaord"
        />
      )}
      {article.belongs_to === "cooking" && (
        <img
          src={require("../images/cooking.jpeg")}
          alt="hands rolling out dough"
        />
      )}
      {article.belongs_to === "football" && (
        <img
          src={require("../images/football grass.jpeg")}
          alt="close up of a white line in the pitch grass"
        />
      )}
      <br />
      <p className="info">
        comments: {article.comment_count} {"       "}
        votes: {article.votes} {"       "}
      </p>
      <p>
        posted: {moment(article.created_at).fromNow()}
        <br />
        created by: {article.created_by.name}
        <br />
      </p>
    </div>
  );
};

export default ArticleBox;
