import React from 'react';
import { Link as RouterLink } from "react-router-dom";

import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo1.png';
import { navItems } from '../constants';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative lg:text-sm">
        <div className="flex justify-between items-center">
          <div className="flex items-center flex-shrink-0">
            <img className="h-10 w-30 mr-2" src={logo} alt="Logo" />
            <span className="text-xl tracking-tight"></span>
          </div>
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
          <div className="hidden lg:flex space-x-4 items-center justify-end ml-auto mr-4">
  <NavLink
    to="/FindTalent"
    className="py-1.5 px-3 border rounded-md text-center text-lg font-medium flex items-center justify-center hover:text-orange-500 transition-colors duration-300"
  >
    Find Talent
  </NavLink>
</div>


      
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
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
