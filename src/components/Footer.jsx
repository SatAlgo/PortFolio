// import React from "react";
// import { FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa";

// function Footer() {
//   return (
//     <>
//       <hr />
//       <footer className="py-12">
//         <div
//           name="Footer"
//           className="max-w-screen-2xl container mx-auto px-4 md:px-20"
//         >
//           <div className="flex flex-col items-center justify-center">
//             <div className="flex space-x-4">
//               <FaTelegram size={24} />
//               <FaLinkedin size={24} />
//               <FaGithub size={24} />
//             </div>
//             <div className="mt-8 border-t border-grey-700 pt-8 flex flex-col items-center">
//               <p className="text-sm">&copy; 2024 Satyam Gaikwad</p>
//               <p className="text-sm">All rights reserved.</p>
//             </div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }

// export default Footer;


import React from "react";
import { FaLinkedin, FaGithub, FaTelegram } from "react-icons/fa";

function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div
          name="Footer"
          className="max-w-screen-2xl container mx-auto px-4 md:px-20"
        >
          <div className="flex flex-col items-center justify-center">
            <div className="flex space-x-4">
              <a href="https://www.linkedin.com/in/satyam-gaikwad-27a7a724b/" target="_blank" rel="noopener noreferrer" className="text-blue-700">
                <FaLinkedin size={24} />
              </a>
              <a href="https://github.com/SatAlgo" target="_blank" rel="noopener noreferrer">
                <FaGithub size={24} />
              </a>
              <a href="https://t.me/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-500">
                <FaTelegram size={24} />
              </a>
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">&copy; 2024 Satyam Gaikwad</p>
              <p className="text-sm">All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
