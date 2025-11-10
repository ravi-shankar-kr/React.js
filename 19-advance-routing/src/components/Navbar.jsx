import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="flex items-center justify-between px-4 py-3  bg-cyan-600">
        <Link className="text-2xl font-semibold " to='/' >Ravi</Link>
        <div className="flex items-center gap-20 text-2xl font-semibold">
            <Link to='/' >Home</Link>
            <Link to='/about' >About</Link>
            <Link to='/contact' >Contact</Link>
            <Link to='/courses'>Courses</Link>
            <Link to='/product'>Product</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
