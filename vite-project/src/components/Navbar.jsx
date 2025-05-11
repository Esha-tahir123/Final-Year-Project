import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo1.png';
import { navItems } from '../constants';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-30 mr-2" src={logo} alt="Logo" />
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.href}
                  className="hover:text-orange-500 transition-colors duration-300"
                  activeClassName="text-orange-500"
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Desktop Find Talent Button */}
          <div className="hidden lg:flex space-x-4 items-center justify-end ml-auto mr-4">
            <NavLink
              to="/FindTalent"
              className="py-1.5 px-3 border rounded-md text-center text-lg font-medium flex items-center justify-center hover:text-orange-500 transition-colors duration-300"
            >
              Find Talent
            </NavLink>
          </div>

          {/* Desktop Auth Buttons */}
          <div className="hidden lg:flex space-x-4 items-center">
            <NavLink
              to="/login"
              className="py-1.5 px-3 border rounded-md text-center text-lg font-medium flex items-center justify-center hover:text-orange-500 transition-colors duration-300"
              style={{ minWidth: '120px', height: '40px' }}
            >
              Sign In
            </NavLink>
            <NavLink
              to="/register"
              className="py-1.5 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 text-white text-lg font-medium flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-600 hover:to-orange-900 transition-colors duration-300"
              style={{ minWidth: '120px', height: '40px' }}
            >
              Create an account
            </NavLink>
          </div>

          {/* Mobile Hamburger Button */}
          <button 
            className="lg:hidden flex items-center p-2" 
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M6 18L18 6M6 6l12 12" 
                />
              ) : (
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16M4 18h16" 
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black bg-opacity-90 backdrop-blur-md border-b border-neutral-700 py-4 px-4">
            <ul className="space-y-4 mb-6">
              {navItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.href}
                    className="block py-2 hover:text-orange-500 transition-colors duration-300 text-lg"
                    activeClassName="text-orange-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
              <li>
                <NavLink
                  to="/FindTalent"
                  className="block py-2 hover:text-orange-500 transition-colors duration-300 text-lg"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Find Talent
                </NavLink>
              </li>
            </ul>
            <div className="flex flex-col space-y-3">
              <NavLink
                to="/login"
                className="py-2 px-3 border rounded-md text-center text-lg font-medium flex items-center justify-center hover:text-orange-500 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Sign In
              </NavLink>
              <NavLink
                to="/register"
                className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 text-white text-lg font-medium flex items-center justify-center hover:bg-gradient-to-r hover:from-orange-600 hover:to-orange-900 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Create an account
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;