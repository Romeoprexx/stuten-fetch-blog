import React from "react";
import { NavLink } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <div className="header">
      <h1>
        {" "}
        <NavLink to="/" className="logo">
          {" "}
          <img className="logoImg" src={'http://logos.textgiraffe.com/custom-design/logo-name/Romeo-designstyle-colors-m.png'} alt={'Logo'}></img>
        </NavLink>
      </h1>
      <div className="admin">
        <img className="image" src={'https://github.com/dmalvia/React_Redux_ToolKit_Movie_App/blob/master/src/images/user.png?raw=true'} alt={'user'}/>
      </div>
      <nav>
        <NavLink to="/comments" className="comments" activeClassName="active">
          Comments
        </NavLink>
        <NavLink to="/posts" className="posts">
          Posts
        </NavLink>
        <NavLink to="/title" className="title">
          Titles
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
