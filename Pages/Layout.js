import React from "react";
import { Link, Outlet } from 'react-router-dom';
export default function Layout() {
  return (
    <div> 
      <nav>
        <ul className="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
