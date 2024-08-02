import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaBars, FaBell, FaUser } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";

const Navbar = ({ toggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleBellClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  return (
    <div className="flex">
      <div className="w-full bg-white p-2 h-[45px] shadow-md text-sky-600 rounded-xl text-xl">
        <div className="flex justify-between">
          <button onClick={toggleSidebar}>
            <FaBars size={25} />
          </button>
          <div className="flex relative">
            <div className="relative">
              <button onClick={handleBellClick} className="mr-2 relative">
                <FaBell size={25} />
              </button>
              {isDropdownOpen && (
                <div className="absolute top-7 right-0 w-64 bg-white rounded-lg shadow-lg z-50">
                  <div className="p-2">
                    <p className="text-gray-600 text-base text-center font-semibold">
                      Notifications
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div className="relative">
              <button onClick={() => setIsOpen(!isOpen)} className="mr-2">
                <FaUser size={25} />
              </button>
              {isOpen && (
                <ul className="text-sm font-medium bg-white rounded-lg shadow-lg p-1 absolute top-[55px] right-0">
                  <li className="">
                    <a
                      href="#"
                      className="flex items-center text-sky-600 rounded-lg hover:bg-sky-300 duration-300 p-2"
                    >
                      <span className="mr-1">
                        <FaPerson />
                      </span>
                      Profile
                    </a>
                  </li>
                  <li className="">
                    <button className="flex items-center text-sky-600 rounded-lg hover:bg-sky-300 duration-300 p-2 w-full text-left">
                      <span className="mr-1">
                        <FaArrowLeft />
                      </span>
                      Logout
                    </button>
                  </li>
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
