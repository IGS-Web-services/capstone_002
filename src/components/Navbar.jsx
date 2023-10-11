import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FiX, FiMenu } from 'react-icons/fi'; // Updated icon imports


const navLinkData = [
  { _id: 1001, title: 'Home', link: 'home' },
  { _id: 1002, title: 'About', link: 'about' },
  { _id: 1003, title: 'Services', link: 'services' }, // Updated link
  { _id: 1004, title: 'Work', link: 'projects' },
  { _id: 1005, title: 'Skills', link: 'skills' },
  { _id: 1006, title: 'Contact', link: 'contact' }, // Updated link
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='h-24 bg-white w-full sticky top-0 z-50'>
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div>
          <img className="h-16 w-16 shadow-lg shadow-white rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTugPvZhMhJtYRY2551P33xfBqCqZIlkxQTUBd29ZmSBA&s" alt="profile" />
        </div>
        <div className="lg:hidden">
          <button onClick={toggleNavbar} className="focus:outline-none">
            {isOpen ? <FiX className="text-designColor text-5xl" /> : <FiMenu className="text-designColor text-5xl" />}
          </button>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} lg:flex lg:items-center`}>
          <ul className="text-lg md:flex">
            {navLinkData.map((link) => (
              <li key={link._id} className="ml-4 lg:ml-6">
                <Link
                  activeClass="active"
                  to={link.link}
                  spy={true}
                  smooth={true}
                  hashSpy={true}
                  // offset={50} // Adjusted offset for better scroll positioning
                  duration={500}
                  className="text-red-600 hover:text-black cursor-pointer"
                  onClick={toggleNavbar}
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}