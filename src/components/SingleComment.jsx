import React from "react";
import Votes from "./Votes";
import moment from "moment";

const SingleComment = ({ comment, handleDelete }) => {
  return (
    <div>
      <div className="comment-p">
        <div className="comment-date">
          <p className="created-by">
            {" "}
            created
            {"   "} by:
            {"   "}
            {comment.created_by.username} <br />
          </p>
          <p className="time">{moment(comment.created_at).fromNow()}</p>
        </div>
        <br />
        <br />
        <p className="comment-body">{comment.body}</p>
        <br />
        <button className="comment-btn" onClick={handleDelete(comment._id)}>
          delete
        </button>
        <div className="comment-p-votes">
          <Votes votes={comment.votes} id={comment._id} />
        </div>
      </div>
    </div>
  );
};

export default SingleComment;
