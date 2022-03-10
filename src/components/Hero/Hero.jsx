import React from "react";
import "./hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="write-up">
      <h1 className="text-center services">Our Services</h1>
      <div className="cardHolder">
        <div className="card">
          <div className="card-img">
            <img src={'https://dl.dropbox.com/s/u3j25jx9tkaruap/Webp.net-resizeimage.jpg?raw=1'} alt="" />
          </div>
          <div className="about">
            <h6 className="text-center view">Check out our best comments</h6>
          </div>
          <Link to="/comments" className="comments">
            View Comments
          </Link>
        </div>
        <div className="card">
        <div className="card-img">
            <img src={'https://dl.dropbox.com/s/u3j25jx9tkaruap/Webp.net-resizeimage.jpg?raw=1'} alt="" />
          </div>
          <div className="about">
            <h6 className="text-center view">Check out our best Posts</h6>
          </div>
          <Link to="/posts" className="posts">
           View Posts
          </Link>
        </div>
        <div className="card">
        <div className="card-img">
            <img src={'https://dl.dropbox.com/s/u3j25jx9tkaruap/Webp.net-resizeimage.jpg?raw=1'} alt="" />
          </div>
          <div className="about">
            <h6 className="text-center view">Check out our best Titles</h6>
          </div>
          <Link to="/title" className="title">
            View Titles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
