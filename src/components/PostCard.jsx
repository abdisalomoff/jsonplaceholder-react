import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post, index, userId }) => (
  <li className="alert alert-success d-block text-capitalize" key={post.id} style={{ flex: "1 0 400px" }}>
    <h3>{index + 1}. {post.title}</h3>
    <p>{post.body}</p>
    <Link to={`/user/${userId}/posts/${post.id}/comments`}><button className="btn btn-light">Comment</button></Link>
  </li>
);

export default PostCard;
