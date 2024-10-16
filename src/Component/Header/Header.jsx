import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-gray-900 text-gray-100 p-6 shadow-md">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo or Brand Name */}
        <h1 className="text-2xl font-extrabold tracking-wide">
          <Link to="/" className="text-white hover:text-gray-300 transition duration-300">
            Student Registration
          </Link>
        </h1>

        {/* Navigation Links */}
        <ul className="flex space-x-8 text-lg font-medium">
          <li>
            <Link 
              to="/" 
              className="text-gray-200 hover:text-white hover:underline transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/view-data" 
              className="text-gray-200 hover:text-white hover:underline transition duration-300"
            >
              View Data
            </Link>
          </li>
          <li>
            <Link 
              to="/datatable" 
              className="text-gray-200 hover:text-white hover:underline transition duration-300"
            >
              Data Table
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

