import React from "react";
import {Link} from 'react-router';

const NavBar = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/contact">Contact</Link>
    </li>

  </ul>
)

export default NavBar;
