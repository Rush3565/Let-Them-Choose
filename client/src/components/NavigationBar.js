import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = (
    <>
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive
            ? "block px-3 py-2 rounded-md text-base font-bold text-white bg-yellow-500"
            : "block px-3 py-2 rounded-md text-base text-gray-300 hover:text-white hover:bg-gray-700"
        }
        onClick={() => setIsOpen(false)}
      >
        Home
      </NavLink>
      <NavLink
        to="/stories"
        className={({ isActive }) =>
          isActive
            ? "block px-3 py-2 rounded-md text-base font-bold text-white bg-yellow-500"
            : "block px-3 py-2 rounded-md text-base text-gray-300 hover:text-white hover:bg-gray-700"
        }
        onClick={() => setIsOpen(false)}
      >
        Stories
      </NavLink>
      <NavLink
        to="/articles"
        className={({ isActive }) =>
          isActive
            ? "block px-3 py-2 rounded-md text-base font-bold text-white bg-yellow-500"
            : "block px-3 py-2 rounded-md text-base text-gray-300 hover:text-white hover:bg-gray-700"
        }
        onClick={() => setIsOpen(false)}
      >
        Articles
      </NavLink>
      <NavLink
        to="/speakout"
        className={({ isActive }) =>
          isActive
            ? "block px-3 py-2 rounded-md text-base font-bold text-white bg-yellow-500"
            : "block px-3 py-2 rounded-md text-base text-gray-300 hover:text-white hover:bg-gray-700"
        }
        onClick={() => setIsOpen(false)}
      >
        Speak Out
      </NavLink>
      <NavLink
        to="/getinvolved"
        className={({ isActive }) =>
          isActive
            ? "block px-3 py-2 rounded-md text-base font-bold text-white bg-yellow-500"
            : "block px-3 py-2 rounded-md text-base text-gray-300 hover:text-white hover:bg-gray-700"
        }
        onClick={() => setIsOpen(false)}
      >
        Get Involved
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive }) =>
          isActive
            ? "block px-3 py-2 rounded-md text-base font-bold text-white bg-yellow-500"
            : "block px-3 py-2 rounded-md text-base text-gray-300 hover:text-white hover:bg-gray-700"
        }
        onClick={() => setIsOpen(false)}
      >
        Contact
      </NavLink>
      <NavLink
        to="/pricing"
        className={({ isActive }) =>
          isActive
            ? "block px-3 py-2 rounded-md text-base font-bold text-white bg-yellow-500"
            : "block px-3 py-2 rounded-md text-base text-gray-300 hover:text-white hover:bg-gray-700"
        }
        onClick={() => setIsOpen(false)}
      >
        Pricing
      </NavLink>
    </>
  );

  return (
    <nav className="bg-gray-800 p-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white font-bold text-xl">Let Them Choose</div>
        <div className="hidden lg:flex space-x-6">{menuItems}</div>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            type="button"
            className="text-gray-300 hover:text-white focus:outline-none focus:text-white"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.364 5.636a1 1 0 00-1.414-1.414L12 9.172 7.05 4.222a1 1 0 00-1.414 1.414L10.828 12l-5.192 5.192a1 1 0 001.414 1.414L12 14.828l4.95 4.95a1 1 0 001.414-1.414L13.172 12l5.192-5.192z"
                />
              ) : (
                <path
                  fillRule="evenodd"
                  d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
                />
              )}
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="lg:hidden bg-gray-800 px-2 pt-2 pb-3 space-y-1">
          {menuItems}
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
