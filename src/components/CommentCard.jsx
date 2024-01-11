import React from 'react';

const CommentCard = ({ comment }) => (
  <li className="comments text-capitalize" key={comment.id}>
    <div className="arrow">
      <div className="outer"></div>
      <div className="inner"></div>
    </div>
    <div className="message-body">
      <h4>{comment.name}</h4>
      <p className="fs-5">{comment.body}</p>
      <p className="fs-6 mt-1"><b>Email: </b><a href={`mailto:${comment.email}`}>{comment.email}</a></p>
    </div>
  </li>
);

export default CommentCard;
