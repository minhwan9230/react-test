import React from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostDetail() {
  const { id } = useParams();
  const post = useSelector((state) => 
    state.posts.find((post) => post.id === parseInt(id))
  );

  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/">Home</Link> | <Link to="/posts">Post List</Link> | <Link to="/write">Write Post</Link>
      <h1>{post?.name}</h1>
      <p>{post?.content}</p>
    </div>
  );
}
