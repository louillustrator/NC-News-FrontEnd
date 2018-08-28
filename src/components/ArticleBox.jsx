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
          src="https://images.pexels.com/photos/8264/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="hands typing on a keybaord"
        />
      )}
      {article.belongs_to === "cooking" && (
        <img
          src="https://images.pexels.com/photos/271458/pexels-photo-271458.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          alt="hands rolling out dough"
        />
      )}
      {article.belongs_to === "football" && (
        <img
          src="https://images.pexels.com/photos/54567/pexels-photo-54567.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
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
