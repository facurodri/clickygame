import React, { Component } from "react";
import "./NavBarStyles.css";



const NavBar = props => {
  return (
    <div className="jumbotron">
      <a className="navbar-brand" href="#">
        <h1>Clicky Corgis Shuffle Game</h1>
      </a>
      <h4>
        Click on a giphy to earn a point, but don't click on the same giphy
        more than once! 
      </h4>
    </div>
  );
};

export default NavBar;
