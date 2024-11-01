import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addPost } from "./postSlice";

export default function WritePost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSave = () => {
    dispatch(addPost({ title, content }));
    navigate("/posts");
  };

  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/">Home</Link> | <Link to="/posts">Post List</Link> |{" "}
      <Link to="/write">Write Post</Link>
      <h1>Write a New Post</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <p></p>
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <p></p>
      <button onClick={handleSave}>Save</button>
    </div>
  );
}
