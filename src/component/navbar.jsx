import React from 'react';
import logo from '../assets/logo/logo.png';
import male from '../assets/gender/male.png';
import female from '../assets/gender/female.png';

function Navbar({ user }) {
  return (
    <>
      <div className="nav bg-white flex justify-between items-center border-border shadow-md z-50 fixed top-0 left-0 right-0 px-4 md:px-10 py-3">
        {/* Left Section */}
        <div className="nav_left flex items-center">
          <img src={logo} alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10" />
          <h1 className="pl-2 font-bold text-primary text-lg sm:text-xl whitespace-nowrap">
            Manage Pro
          </h1>
        </div>

        {/* Right Section */}
        <div className="nav_right flex items-center space-x-3 sm:space-x-5">
          <h1 className="hidden sm:block font-bold text-secondary text-base sm:text-lg md:text-xl truncate">
            {user.name}
          </h1>
          <img
            src={user.gender === 'Male' ? male : female}
            alt="User"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
