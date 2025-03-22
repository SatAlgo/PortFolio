import React from "react";
import { FaLinkedin, FaGithub, FaGlobe, FaEnvelope } from "react-icons/fa";

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
  
              <a href="https://satalgo.netlify.app" target="_blank" rel="noopener noreferrer" className="text-lime-500">
                <FaGlobe size={24} />
              </a>
              
              <a
                href="mailto:satyamgaikwad.mitaoe@gmail.com"
                className="text-red-500"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
            <div className="mt-6 border-t border-gray-700 pt-6 flex flex-col items-center">
              <p className="text-sm">&copy; {new Date().getFullYear()} Satyam Algorithms</p>
              <p className="text-sm">All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
