import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa6';
import { IoIosArrowBack } from 'react-icons/io';

const Navbar = () => {
  const [languageDropdown, setLanguageDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setLanguageDropdown(false); 
  };

  return (
    <div className="flex justify-between items-center max-w-6xl mx-auto text-blackFont">
      <a href="/" className="hidden lg:block">
        <img
          className="h-10 ml-6"
          src="https://s3-alpha-sig.figma.com/img/751c/2bed/c4a8eaf48f971dc0639efafbf988032f?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oeLJtzfs8cioCI6QUptP1dUzTBRlybHoHI-lOrJndO-ee7yD1KqrK8YZFPOtJ4f5K0o8PfzCSK8-T-A2f1ZZkOTtWPtVVOloltbD6xrWd3E8bEIcnWVUXhM90o3AQnLZC~mTssw91UJ4H5~XkpR5-nmjTwJKxtnaxpQH8Djhri9PXBGt8zVnWs2oaGc8FqdDV-eZS6AsUzWca8Z5rtmPlzA3VUlRIyJJD4fqgmXyOiL57B1iG~B6HlgqLqVYf0usLXgzvg-CijavklduImPfaMwzLsr1UDtPzKY03Fq~UUGvSJPl64OARKYjSNPA8IrE5XsA4gfQtPcwUdiIIVN3gg__"
          alt="logo"
        />
      </a>

      <div className="flex items-center lg:hidden text-blackFont ml-0">
        <IoIosArrowBack size={40} className="mr-2 text-xl" />
        <span className="font-light text-base ml-3">
          Connect With Astrologers
        </span>
      </div>

      <button
        className="lg:hidden text-gray-800 p-2 focus:outline-none ml-11"
        onClick={toggleMobileMenu}
      >
        <FaBars size={40} className="border border-black border-solid p-1 rounded-md" />
      </button>
      <nav>
        <ul
          className={`lg:flex lg:space-x-7 font-light ${
            isMobileMenuOpen ? 'block' : 'hidden'
          } lg:static lg:bg-transparent lg:p-0 p-4 bg-white fixed top-24 left-0 w-full z-10`}
        >
          <li className="hover:text-gray-600 cursor-pointer mt-1">Home</li>
          <li className="hover:text-gray-600 cursor-pointer mt-1">Services</li>
          <li className="font-semibold hover:text-gray-600 cursor-pointer mt-1">
            Astrologers
          </li>
          <li className="hover:text-gray-600 cursor-pointer mt-1">Blogs</li>
          <li className="relative">
            <button
              className="flex items-center space-x-2 border border-gray-400 text-gray-800 px-3 py-1 rounded-lg hover:bg-gray-100 font-medium"
              onClick={() => setLanguageDropdown(!languageDropdown)}
            >
              <span>English</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {languageDropdown && (
              <ul className="absolute mt-2 bg-white shadow-lg rounded-lg border border-gray-200 w-32">
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  English
                </li>
                <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                  Hindi
                </li>
              </ul>
            )}
          </li>
          <li>
            <button className="bg-getApp-red text-white px-4 py-1 rounded-lg hover:bg-red-600 font-medium">
              Get App
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
