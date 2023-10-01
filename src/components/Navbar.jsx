import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isUser, setUser] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    checkUser();
  }, []);

  const checkUser = async () => {
    const user = await localStorage.getItem('user');
    setUser(user ? true : false);
  };

  const logout = async () => {
    console.log('Clearing localStorage');
    localStorage.clear();
    setUser(false);
    navigate('/');
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="nav">
      {/* Navigation button for small screens */}
      <div className='bg-gradient-to-r from-zinc-700 to-black p-5'>
      <button
        className="md:hidden  text-white hover:cursor-pointer"
        onClick={toggleMenu}
        aria-label="Toggle Menu"
      >
        ☰
      </button>
      </div>

      {/* Navigation links */}
      <ul
        className={`${
          showMenu ? 'block' : 'hidden'
        } md:flex md:flex-row flex-col items-center md:inline-flex w-full md:items-center md:justify-end justify-center gap-6 p-x-5 space-x-5 justify-end p-5 text-2xl bg-gradient-to-r from-zinc-700 to-black text-white hover:cursor-pointer top-[100%] md:visible transition-all duration-500 ease-out`}
      >
        <li className="hover:border-b-2 border-indigo-500 md:block">
          <Link to="/">Home</Link>
        </li>
        <li className="hover:border-b-2 border-indigo-500 md:block">
          <Link to="/about">About</Link>
        </li>
        <li className="hover:border-b-2 border-indigo-500 md:block">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="hover:border-b-2 border-indigo-500 md:block">
          <Link to="/event">Event</Link>
        </li>
        <li className="hover:border-b-2 border-indigo-500 md:block">
          <Link to="/blog">Blogs</Link>
        </li>
        {isUser ? (
          <>
            <li className="hover:border-b-2 border-indigo-500 md:block">
              <Link to="/profile">Profile</Link>
            </li>
            <li className="hover:border-b-2 border-indigo-500 md:block">
              <button onClick={logout}>Logout</button>
            </li>
          </>
        ) : (
          <li className="hover:border-b-2 border-indigo-500 md:block">
            <Link to="/register">Register</Link>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
