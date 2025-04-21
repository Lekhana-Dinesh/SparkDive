
import React from "react";
import { Link } from "react-router-dom";


function Navbar() {
  return (
    <div className="flex items-center space-x-10 pl-6 py-4 shadow-md bg-red-200 bg-opacity-90 backdrop-blur-sm border-b">

      <Link to="/" className="text-white text-2xl font-bold hover:scale-110 hover:text-red-300 transition-all duration-200">
        Home
      </Link>
      <Link to="/quiz" className="text-white text-2xl font-bold hover:scale-110 hover:text-red-300 transition-all duration-200">
        Quiz
      </Link>
      <Link to="/result" className="text-white text-2xl font-bold hover:scale-110 hover:text-red-300 transition-all duration-200">
        Results
      </Link>
      <Link to="/about" className="text-white text-2xl font-bold hover:scale-110 hover:text-red-300 transition-all duration-200">
        About
      </Link>
    </div>
  );
}

export default Navbar;