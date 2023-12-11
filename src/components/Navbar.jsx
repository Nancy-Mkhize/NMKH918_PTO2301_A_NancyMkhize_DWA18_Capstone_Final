import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Heart, PersonCircle } from 'react-bootstrap-icons';
import UserSettings from './UserSettings';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <header className="h-16 w-full fixed bg-black bg-opacity-50 backdrop-blur-sm">
      <nav className="flex justify-between px-4 mt-4 items-center">
        <NavLink to="/home" className="text-white">
          The Curious<span className="font-bold">CAST</span>
        </NavLink>

        <div className="w-1/4 flex justify-around">
          <NavLink to="/home/favourites">
            <Heart className="h-4 min-[300px]:h-6 text-white" />
          </NavLink>
          <button onClick={toggleModal} className="active:animate-ping">
            <PersonCircle className="h-4 min-[300px]:h-6 text-white" />
          </button>
          <UserSettings active={isOpen} setter={toggleModal} />
        </div>
      </nav>
    </header>
  );
}
