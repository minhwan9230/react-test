import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { editPost } from "./postSlice";

export default function EditPost() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const post = useSelector((state) =>
    state.posts.find((post) => post.id === parseInt(id))
  );
  const [title, setTitle] = useState(post ? post.name : "");
  const [content, setContent] = useState(post ? post.content : "");

  useEffect(() => {
    if (post) {
      setTitle(post.name);
      setContent(post.content);
    }
  }, [post]);

  const handleSave = () => {
    if (post) {
      dispatch(editPost({ id: parseInt(id), title, content }));
      navigate(`/posts/${id}`);
    } else {
      alert("Post not found.");
    }
  };
  return (
    <div>
      <h1>Home Page</h1>
      <Link to="/">Home</Link> | <Link to="/posts">Post List</Link> |{" "}
      <Link to="/write">Write Post</Link>
      <h1>Edit Post</h1>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      /><p></p>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
      /><p></p>
      <button onClick={handleSave}>저장</button>
    </div>
  );
}
