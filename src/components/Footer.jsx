import React from "react";
import { FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

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
              <FaTwitter size={24} />
              <FaLinkedin size={24} />
              <FaInstagram size={24} />
            </div>
            <div className="mt-8 border-t border-grey-700 pt-8 flex flex-col items-center">
              <p className="text-sm">&copy; Created by satyam madhav gaikwad</p>
              <p className="text-sm">bgkjngle jhglwkfnweg jegwkjeglwkeg</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
