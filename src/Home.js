import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <div>
        <h1>Home Page</h1>
        <Link to="/">Home</Link> |<Link to="/posts">Post List</Link> |
        <Link to="/write">Write Post</Link> |
      </div>
      <div>
        <h1>여기는 React 게시판입니다.</h1>
      </div>
    </>
  );
}
