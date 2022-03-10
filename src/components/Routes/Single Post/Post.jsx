import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../../UseFetch//useFetch";
import "./post.css";

const Post = () => {
  let parameters = useParams();

  const URL = 'https://jsonplaceholder.typicode.com/posts';

  const [singlePost, loadingState, errorState] = useFetch(URL);
  console.log(singlePost);

  function fetchPost(java) {
    return singlePost && singlePost.find((post) => post.id === java);
  }

  let singularPost = fetchPost(parseInt(parameters.postId, 10));

  return (
    <div className="singlepost">
      {loadingState && <h2 className="loadingMsg">Loading Post... Hold on</h2>}
      {singlePost && (
        <div className="postCard">
          <h3 className="single">Title: {singularPost.title}</h3>
          <p className="singular">Comment: {singularPost.body}</p>
        </div>
      )}

      <h3 className="errorMsg">{errorState}</h3>
    </div>
  );
};

export default Post;
