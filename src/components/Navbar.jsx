import React, { useState } from "react";
import pic from "../../public/profile.jpeg";
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setmenu] = useState(false);
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 3,
      text: "Projects",
    },
    {
      id: 4,
      text: "Experience",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];
  return (
    <>
      <div
        name="Navbar"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white"
      >
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <img src={pic} className="h-12 w-11 rounded-full" alt="" />
            <h1 className="font-semibold text-xl cursor-pointer">
              <span className="text-green-500 text-2xl">S</span>atyam
              <p className="text-sm ">Computer Engineer</p>
            </h1>
          </div>
          {/* ------------------Desktop Navbar-------------------        */}
          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer"
                  key={id}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
            <div onClick={() => setmenu(!menu)} className="md:hidden">
              {menu ? <IoClose size={24} /> : <IoMenuSharp size={24} />}
            </div>
          </div>
        </div>
        {/* ------------------Mobile Navbar-------------------        */}
        {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                  key={id}
                >
                  <Link
                  onClick={() => setmenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                  >
                    {text}
                  </Link>
                </li>
              ))}
              {/* <li>Home</li>
              <li>About</li>
              <li>Experiene</li>
              <li>Projects</li>
              <li>Contact</li> */}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
