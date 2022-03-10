import React from "react";
import { Link } from "react-router-dom";
import useFetch from "../../UseFetch/useFetch";
import "./title.css";

const URL ='https://jsonplaceholder.typicode.com/albums';

const Title = () => {
  const [titlState, loadingState, errorState] = useFetch(URL);
  return (
    <div className="turtle">
      <h1 className="titleMsg">
      Titles{ titlState && <p>({titlState.length})</p>}
      </h1>
      {loadingState && <h2 className="loadingMsg">Loading....</h2>}

      <div className="titleWrapper">
        {titlState &&
          titlState.map((data) => (
            <Link
              className="titleCard"
              key={data.id}
              to={`/title/${data.id}`}
            >
              <h2 className="little"> Title: {data.title}</h2>
            </Link>
          ))}
      </div>
      <h2 className="errorMsg"> {errorState}</h2>
    </div>
  );
};

export default Title;
