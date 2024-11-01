import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Home from "./Home";
import PostList from "./PostList";
import PostDetail from "./PostDetail";
import EditPost from "./EditPost";
import WritePost from "./WritePost";
import store from "./store";

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/edit/:id" element={<EditPost />} />
          <Route path="/write" element={<WritePost />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}
