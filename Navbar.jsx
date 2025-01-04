import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar">
    <h1>Telecom Inventory System</h1>
    <ul>
      <li>
        <Link to="/">Dashboard</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/suppliers">Suppliers</Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
      <li>
        <Link to="/alert">Alert</Link>
      </li>
      <li>
        <Link to="/Logout">Logout</Link>
      </li>
    </ul>
  </nav>
);

export default Navbar;