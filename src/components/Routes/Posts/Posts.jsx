import React from "react";
import { Link, Outlet } from "react-router-dom";
import useFetch from "../../UseFetch/useFetch";
import "./posts.css";


const URL = 'https://jsonplaceholder.typicode.com/posts';

const Posts = () => {
  const [post, loading, error] = useFetch(URL);
  return (
    <div className="post">
      <h2 className="postsMsg">
        Posts{ post && <p>({post.length})</p>}
      </h2>

      {loading && <h2 className="loadingMsg">Loading Post.... Hang in there!</h2>}

      <div className="postsWrapper">
        {post &&
          post.map((data) => (
            <Link
              className="postsCards"
              key={data.id}
              to={`/posts/${data.id}`}
            >
              <h2 className="postal"> Post: {data.title}</h2>
              <p className="para">Body: {data.body}</p>
            </Link>
          ))}
      </div>

      <h2 className="errorMsg"> {error}</h2>
      <Outlet />
    </div>
  );
};

export default Posts;
