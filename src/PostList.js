import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deletePost } from "./postSlice";

export default function PostList() {
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/">Home</Link> | <Link to="/posts">Post List</Link> |{" "}
      <Link to="/write">Write Post</Link>
      <h1>Post List</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.name}</Link>&nbsp;&nbsp;
            <button onClick={() => dispatch(deletePost(post.id))}>
              Delete
            </button>&nbsp;&nbsp;
            <Link to={`/edit/${post.id}`}>Edit</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
