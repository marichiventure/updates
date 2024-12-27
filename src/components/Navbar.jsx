import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { IoMenu, IoClose } from "react-icons/io5";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { textlogo, treelogo } from "../assets";
import { useAuth0 } from "@auth0/auth0-react";
import './drop.css';

const Navbar = () => {
  const [praiseDropdown, setPraiseDropdown] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [toggle, setToggle] = useState(false);
  const { loginWithRedirect, logout, user, isAuthenticated } = useAuth0();
  const [persistedUser, setPersistedUser] = useState(null);
  const location = useLocation();
  const userMenuRef = useRef(null);
  const praiseDropdownRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setPersistedUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated && user) {
      localStorage.setItem('user', JSON.stringify(user));
      setPersistedUser(user);
    }
  }, [isAuthenticated, user]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (userMenuRef.current && !userMenuRef.current.contains(event.target)) {
        setUserMenuOpen(false);
      }
      if (praiseDropdownRef.current && !praiseDropdownRef.current.contains(event.target)) {
        handlePraiseDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const closeMobileMenu = () => {
    setToggle(false);
    setPraiseDropdown(false);
    setUserMenuOpen(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('user');
    logout({ returnTo: window.location.origin });
    setUserMenuOpen(false);
  };

  const handlePraiseDropdown = (show) => {
    if (!show) {
      // When hiding, set a timeout
      timeoutRef.current = setTimeout(() => {
        setPraiseDropdown(false);
      }, 300); // 300ms delay before hiding
    } else {
      // When showing, clear any existing timeout and show immediately
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      setPraiseDropdown(true);
    }
  };

  const isLinkActive = (path) => {
    return path === "/"
      ? location.pathname === path
      : location.pathname.startsWith(path);
  };

  const navItems = [
    { path: "/", label: "HOME" },
    { path: "/about", label: "ABOUT US" },
    { path: "/offerings", label: "OFFERINGS" },
    { path: "/events", label: "EVENTS" },
  ];

  const PraiseDropdown = () => (
    <li className="relative" ref={praiseDropdownRef}>
      <div
        className="cursor-pointer flex items-center mx-4 hover:text-[#65B741] hover:text-[17px] transition-all duration-300"
        onMouseEnter={() => handlePraiseDropdown(true)}
        onMouseLeave={() => handlePraiseDropdown(false)}
      >
        ACCOLADES
        {praiseDropdown ? (
          <IoMdArrowDropup className="inline-block ml-2" />
        ) : (
          <IoMdArrowDropdown className="inline-block ml-2" />
        )}
      </div>
      {praiseDropdown && (
        <ul 
          className="absolute bg-white border border-gray-200 shadow-lg mt-2 rounded-lg w-48 z-20"
          onMouseEnter={() => handlePraiseDropdown(true)}
          onMouseLeave={() => handlePraiseDropdown(false)}
        >
          <li className="hover:bg-gray-100">
            <Link
              to="/rewards-recognition"
              className="block px-4 py-2 text-gray-700"
              onClick={closeMobileMenu}
            >
              Rewards & Recognitions
            </Link>
          </li>
          <li className="hover:bg-gray-100">
            <Link
              to="/testimaonials"
              className="block px-4 py-2 text-gray-700"
              onClick={closeMobileMenu}
            >
              Testimonials
            </Link>
            
          </li>
         <li className="hover:bg-gray-100">
            <Link
              to="/certificates"
              className="block px-4 py-2 text-gray-700"
              onClick={closeMobileMenu}
            >
              Certificates
            </Link>
            
          </li>
          
        </ul>
      )}
    </li>
  );

  const UserMenu = () => (
    <div className="relative" ref={userMenuRef}>
      <button
        onClick={() => setUserMenuOpen(!userMenuOpen)}
        className="flex items-center space-x-2 focus:outline-none"
      >
        <img
          src={persistedUser?.picture}
          alt={persistedUser?.name}
          className="w-8 h-8 rounded-full border border-gray-300"
        />
        <IoMdArrowDropdown className={`transition-transform ${userMenuOpen ? 'rotate-180' : ''}`} />
      </button>

      {userMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="px-4 py-3 border-b border-gray-100 bg-gray-50 rounded-t-lg">
            <p className="text-sm text-gray-500">Signed in as</p>
            <p className="text-sm font-semibold truncate">{persistedUser.name
              .split(" ")
              .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
              .join(" ")}
            </p>
            
          </div>

          <div className="py-2">
            <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={closeMobileMenu}>
                  Profile
            </Link>
            <Link
              to="/1234"
              onClick={closeMobileMenu}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Subscribers
            </Link>
            <Link
              to="/courses"
              onClick={closeMobileMenu}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Courses
            </Link>
          </div>

          <div className="border-t border-gray-100 bg-gray-50 rounded-b-lg">
            <button
              onClick={handleLogout}
              className="block w-full text-left px-4 py-3 text-sm text-red-600 hover:bg-gray-100 rounded-b-lg"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <nav className="flex flex-auto top-0 justify-between items-center px-5 py-2 z-10 shadow-xl md:w-full w-screen bg-white">
      <div className="text-[30px] flex md:justify-start justify-between">
        <Link to="/">
          <div className="text-[30px] flex items-center">
            <img src={treelogo} alt="treelogo" className="h-[60px] mx-4 flex-1" />
            <img src={textlogo} alt="textlogo" className="md:block h-[40px] flex-1" />
          </div>
        </Link>
      </div>

      <div className="bg-white opacity-80">
        <div
          onClick={() => setToggle(!toggle)}
          className="text-5xl right-8 cursor-pointer md:hidden"
        >
          {toggle ? <IoClose /> : <IoMenu />}
        </div>

        <ul className={`md:flex md:flex-1 md:justify-end md:items-center text-[16px] left-0 md:w-auto w-full md:z-auto absolute md:static z-[10] md:pl-0 font-semibold ${
          toggle ? 'top-50 text-white bg-black text-center text-[22px] pb-9 h-screen pt-5' : 'top-[-490px]'
        }`}>
          {navItems.map((item) => (
            <li
              key={item.path}
              className={`mx-4 hover:text-[#65B741] hover:text-[17px] transition-all duration-300 ${
                isLinkActive(item.path) ? "text-[#65B741]" : ""
              }`}
            >
              <Link to={item.path} onClick={closeMobileMenu}>
                {item.label}
              </Link>
            </li>
          ))}
         
          <PraiseDropdown />

          <li className={`mx-4 hover:text-[#65B741] hover:text-[17px] transition-all duration-300 ${
            isLinkActive("/contact") ? "text-[#65B741]" : ""
          }`}>
            <Link to="/contact" onClick={closeMobileMenu}>
              CONTACT US
            </Link>
          </li>

          {/* Mobile Auth Section */}
          <div className="md:hidden mt-4">
            {persistedUser ? (
              <div className="flex flex-col items-center">
                <div className="flex items-center mb-2">
                  <img
                    className="rounded-full w-9 mx-3 border border-black"
                    src={persistedUser.picture}
                    alt={persistedUser.name}
                  />
                  <p className="text-white">
                    {persistedUser.name
                      .split(" ")
                      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
                      .join(" ")}
                  </p>

                </div>
                <Link to="/profile" className="block px-4 py-2 text-gray-800 hover:bg-gray-100" onClick={closeMobileMenu}>
                  Profile
            </Link>
                <Link
                  to="/1234"
                  onClick={closeMobileMenu}
                  className="block text-white py-2"
                >
                  Subscribers
                </Link>
                <Link
                  to="/courses"
                  onClick={closeMobileMenu}
                  className="block text-white py-2"
                >
                  Courses
                </Link>
                <button
                  className="bg-[#65B741] text-white font-semibold py-2 px-4 border border-transparent rounded text-[15px] transition-transform transform hover:translate-y-1 w-32 mt-2"
                  onClick={handleLogout}
                >
                  Log Out
                </button>
              </div>
            ) : (
              <button
                className="bg-[#65B741] text-white font-semibold py-2 px-4 border border-transparent rounded text-[15px] transition-transform transform hover:translate-y-1 w-32"
                onClick={() => loginWithRedirect()}
              >
                Login
              </button>
            )}
          </div>
        </ul>
      </div>

      {/* Desktop Auth Section */}
      <div className="md:flex hidden">
        {persistedUser ? (
          <UserMenu />
        ) : (
          <button
            onClick={() => loginWithRedirect()}
            className="bg-[#65B741] text-white font-semibold py-2 px-4 rounded hover:bg-[#54a332] transition-colors"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
