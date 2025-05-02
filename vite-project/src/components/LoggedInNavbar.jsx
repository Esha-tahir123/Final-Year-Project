import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Bell, Menu, X, LogOut, AlertCircle } from 'lucide-react';
import logo from '../assets/Logo1.png';
import { loginnavItems } from '../constants';

const LoggedInNavbar = ({ onLogout, isAssessmentMode, assessmentProgress }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [notifications] = useState([
    { id: 1, text: "New assessment available", isNew: true },
    { id: 2, text: "You earned a new badge!", isNew: true }
  ]);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle exit assessment confirmation
  const handleExitAssessment = () => {
    const confirmExit = window.confirm(
      'Are you sure you want to exit the assessment? Your progress will be saved.'
    );
    if (confirmExit) {
      // Handle exit logic here
      window.history.back();
    }
  };

  // Render assessment mode navbar
  if (isAssessmentMode) {
    return (
      <nav className={`
        fixed top-0 left-0 right-0 z-50 
        bg-neutral-900/95 backdrop-blur-sm border-b border-neutral-800
        transition-all duration-300 h-16
      `}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <img src={logo} alt="SkillX Logo" className="h-6 w-auto opacity-50" />
              <div className="h-4 w-px bg-neutral-800" />
              <span className="text-neutral-400 font-medium">Assessment in Progress</span>
            </div>

            {/* Progress Indicator */}
            {assessmentProgress && (
              <div className="hidden md:flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-neutral-400">Question</span>
                  <span className="text-lg font-bold text-white">
                    {assessmentProgress.current} / {assessmentProgress.total}
                  </span>
                </div>
                
                <div className="w-48 h-2 bg-neutral-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-orange-500 transition-all duration-300"
                    style={{ 
                      width: `${(assessmentProgress.current / assessmentProgress.total) * 100}%` 
                    }}
                  />
                </div>
              </div>
            )}

            {/* Exit Button */}
            <button
              onClick={handleExitAssessment}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-lg
                text-neutral-400 hover:text-white hover:bg-neutral-800/50
                transition-colors duration-200"
            >
              <AlertCircle size={16} />
              <span className="text-sm font-medium">Exit Assessment</span>
            </button>
          </div>
        </div>
      </nav>
    );
  }

  // Regular navbar
  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 
      transition-all duration-300 
      ${isScrolled 
        ? 'bg-neutral-900/95 shadow-lg border-b border-neutral-800/50 h-16' 
        : 'bg-neutral-900 border-b border-neutral-800 h-20'
      }
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="flex items-center space-x-3">
              <img src={logo} alt="SkillX Logo" className="h-8 w-auto" />
            </NavLink>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            {/* Main Navigation */}
            <div className="flex space-x-6">
              {loginnavItems.map((item) => (
                <NavLink
                  key={item.href}
                  to={item.href}
                  className={({ isActive }) => `
                    relative px-3 py-2
                    text-base font-medium rounded-md
                    transition-all duration-200
                    ${isActive 
                      ? 'text-orange-500 bg-neutral-800/40' 
                      : 'text-neutral-300 hover:text-white hover:bg-neutral-800/30'
                    }
                  `}
                >
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* Notifications */}
            <div className="relative">
              <button className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-neutral-800/30 transition-colors">
                <Bell size={20} />
                {notifications.some(n => n.isNew) && (
                  <span className="absolute top-1 right-1 h-2 w-2 bg-orange-500 rounded-full" />
                )}
              </button>
            </div>

            {/* Logout Button */}
            <button
              onClick={onLogout}
              className="flex items-center space-x-2 px-4 py-2 rounded-md
                text-sm font-medium text-white
                bg-orange-600 hover:bg-orange-700
                transition-colors duration-200
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              <LogOut size={16} />
              <span>Logout</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md text-neutral-400 hover:text-white hover:bg-neutral-800/30 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`
        lg:hidden fixed inset-0 z-50
        bg-neutral-900/98 backdrop-blur-sm
        transition-transform duration-300 ease-in-out
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
      `}>
        <div className="flex flex-col h-full pt-20 px-4">
          <div className="flex flex-col space-y-4">
            {loginnavItems.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => `
                  px-4 py-3 rounded-md text-base font-medium
                  transition-colors duration-200
                  ${isActive 
                    ? 'text-orange-500 bg-neutral-800/40' 
                    : 'text-neutral-300 hover:text-white hover:bg-neutral-800/30'
                  }
                `}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
          
          <div className="mt-8">
            <button
              onClick={() => {
                setIsMenuOpen(false);
                onLogout();
              }}
              className="w-full flex items-center justify-center space-x-2
                px-4 py-3 rounded-md
                text-base font-medium text-white
                bg-orange-600 hover:bg-orange-700
                transition-colors duration-200"
            >
              <LogOut size={18} />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default LoggedInNavbar;