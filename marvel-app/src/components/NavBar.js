import React from "react";
import {Link} from 'react-router';
import "./NavBar.css"

const NavBar = () => (
  <div className="Nav-bar">
  <ul>
    <li>
      <Link to="/">HOME</Link>
    </li>
    <li>
      <Link to="/contact">CONTACT</Link>
    </li>
  </ul>
</div>
)

export default NavBar;
