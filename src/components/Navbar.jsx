// import React, { useState } from "react";
// import pic from "../../public/unnamed.png";
// import { IoMenuSharp } from "react-icons/io5";
// import { IoClose } from "react-icons/io5";
// import { Link } from "react-scroll";

// function Navbar() {
//   const [menu, setmenu] = useState(false);
//   const navItems = [
//     {
//       id: 1,
//       text: "Home",
//     },
//     {
//       id: 2,
//       text: "About",
//     },
//     {
//       id: 3,
//       text: "Projects",
//     },
//     {
//       id: 4,
//       text: "Experience",
//     },
//     {
//       id: 5,
//       text: "Contact",
//     },
//   ];
//   return (
//     <>
//       <div
//         name="Navbar"
//         className="max-w-screen-2xl container mx-auto px-4 md:px-12 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white"
//       >
//         <div className="flex justify-between items-center h-16">
//           <div className="flex space-x-2">
//             <a href="https://codolio.com/profile/Special%20Force" target="_blank" rel="noopener noreferrer">
//               <img src={pic} className="h-12 w-11 rounded-full" alt="Profile" />
//             </a>
//             <h1 className="font-semibold text-xl ">
//               <span className="text-green-500 text-2xl">S</span>atyam
//               <p className="text-sm ">Computer Engineer</p>
//             </h1>
//           </div>
//           {/* ------------------Desktop Navbar-------------------        */}
//           <div>
//             <ul className="hidden md:flex space-x-8">
//               {navItems.map(({ id, text }) => (
//                 <li
//                   className="hover:scale-105 duration-200 cursor-pointer"
//                   key={id}
//                 >
//                   <Link
//                     to={text}
//                     smooth={true}
//                     duration={500}
//                     offset={-70}
//                     activeClass="active"
//                   >
//                     {text}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//             <div onClick={() => setmenu(!menu)} className="md:hidden">
//               {menu ? <IoClose size={24} /> : <IoMenuSharp size={24} />}
//             </div>
//           </div>
//         </div>
//         {/* ------------------Mobile Navbar-------------------        */}
//         {menu && (
//           <div className="bg-white ">
//             <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
//               {navItems.map(({ id, text }) => (
//                 <li
//                   className="hover:scale-105 duration-200 font-semibold cursor-pointer"
//                   key={id}
//                 >
//                   <Link
//                     onClick={() => setmenu(!menu)}
//                     to={text}
//                     smooth={true}
//                     duration={500}
//                     offset={-70}
//                     activeClass="active"
//                   >
//                     {text}
//                   </Link>
//                 </li>
//               ))}
//               {/* <li>Home</li>
//               <li>About</li>
//               <li>Experiene</li>
//               <li>Projects</li>
//               <li>Contact</li> */}
//             </ul>
//           </div>
//         )}
//       </div>
//     </>
//   );
// }

// export default Navbar;


import React, { useState, useEffect } from "react";
import pic from "../../public/unnamed.png";
import { IoMenuSharp, IoClose } from "react-icons/io5";
import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("Home"); // Track section in view
  const [hoveredSection, setHoveredSection] = useState(null); // Track hovered item

  const navItems = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Projects" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" },
  ];

  return (
    <>
      <div
        name="Navbar"
        className="max-w-screen-2xl container mx-auto px-4 md:px-12 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white"
      >
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2">
            <a
              href="https://codolio.com/profile/Special%20Force"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={pic} className="h-12 w-11 rounded-full" alt="Profile" />
            </a>
            <h1 className="font-semibold text-xl">
            <span className="bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-transparent text-2xl font-bold">S</span>atyam
              <p className="text-sm">Computer Engineer</p>
            </h1>
          </div>

          {/* ------------------Desktop Navbar------------------- */}
          <div>
            <ul className="hidden md:flex space-x-4">
              {navItems.map(({ id, text }) => (
                <li
                  key={id}
                  className="relative cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setHoveredSection(text)}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    spy={true}
                    activeClass="active"
                    onSetActive={() => setActiveSection(text)}
                    className="block px-2 py-1"
                  >
                    {text}
                  </Link>

                  {/* Hover Effect (Follows Cursor, Falls Back to Active Section) */}
                  {/* <span
                    className={`absolute inset-0 -z-10 rounded-md transition-all duration-300 
                    ${
                      hoveredSection === text
                        ? "bg-gray-200" // Show hover effect on hovered item
                        : activeSection === text
                        ? "bg-gray-300" // Show active section when not hovering
                        : ""
                    }`}
                  /> */}

                  <span
                    className={`absolute inset-0 -z-10 rounded-md transition-all duration-300 
                    ${
                      hoveredSection === text
                        ? "bg-blue-200 text-gray-800" // Stylish hover effect
                        : activeSection === text
                        ? "bg-gradient-to-r from-teal-400 to-blue-500 text-white" // Active section highlight
                        : ""
                    }`}
                  ></span>


                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoClose size={24} /> : <IoMenuSharp size={24} />}
            </div>
          </div>
        </div>

        {/* ------------------Mobile Navbar------------------- */}
        {menu && (
          <div className="bg-transparent backdrop-blur-lg absolute top-16 left-0 w-full">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  key={id}
                  className="relative cursor-pointer transition-all duration-300"
                  onMouseEnter={() => setHoveredSection(text)}
                  onMouseLeave={() => setHoveredSection(null)}
                >
                  <Link
                    onClick={() => {
                      setMenu(false);
                      setActiveSection(text);
                    }}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    spy={true}
                    activeClass="active"
                    className="block px-4 py-2"
                  >
                    {text}
                  </Link>

                  {/* Hover Effect (Same Logic for Mobile) */}
                  <span
                    className={`absolute inset-0 -z-10 rounded-md transition-all duration-300 
                    ${
                      hoveredSection === text
                        ? "bg-gradient-to-r from-teal-400 to-blue-500 text-white" // Active section highlight
                        : ""
                    }`}
                  />
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
