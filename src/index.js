import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Error from "./components/Page Not Found/Error";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Comments from "./components/Routes/Comments/Comments";
import Title from "./components/Routes/Titles/Title";
import Hero from "./components/Hero/Hero";
import Posts from "./components/Routes/Posts/Posts";
import Post from "./components/Routes/Single Post/Post";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Hero />} />
          <Route path="/posts/:postId" element={<Post />} />
          <Route path="*" element={<Error />} />
          <Route path="comments" element={<Comments />} />
          <Route path="posts" element={<Posts />} />
          <Route path="title" element={<Title />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
