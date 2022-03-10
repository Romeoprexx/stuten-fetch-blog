import React from "react";
import { Link } from "react-router-dom";
import "./comments.css";
import UseFetch from "../../UseFetch/useFetch";


const URL = 'https://jsonplaceholder.typicode.com/comments';

const Comments = () => {
  const [dataState, loadingState, errorState] = UseFetch(URL);

  return (
    <div className="wrapper">
      <h1 className="div">
        Comments {dataState && <p>({dataState.length})</p>}
      </h1>
      {loadingState && <h2 className="loadingMsg">Loading Comments.... Grab a cuppa!</h2>}
      <div className="flow">
        <div className="commentWrapper">
          {dataState &&
            dataState.map((data) => (
              <Link
                className="commentCard"
                key={data.id}
                to={`/comments/${data.id}`}
              >
                <h2 className="name"> Name: {data.name}</h2>
                <p className="email">Email: {data.email}</p>
                <h4 className="comment">Comments: {data.body}</h4>
              </Link>
            ))}
        </div>
      </div>
      <h2 className="errorMsg">{errorState}</h2>
    </div>
  );
};

export default Comments;
