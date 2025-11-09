import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-4 py-2 bg-gray-500">
        <h2>Ravi</h2>
        <div className="flex items-center gap-20">
            <Link to='/' >Home</Link>
            <Link to='/about' >About</Link>
            <Link to='/contact' >Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
