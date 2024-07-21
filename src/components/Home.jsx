import React from "react";
import pic from "../../public/profile.jpeg";
//import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
//import { FaTelegram } from "react-icons/fa";
import { ReactTyped, Typed } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-pink-700 text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I am a</h1>
              {/* <span className="text-red-700 font-bold">Devloper</span> */}
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Web Devloper.", "Competitive programmer.", "Problem Solver."]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-sm md:text-md text-justify">
              I’m Satyam Gaikwad, currently pursuing my B-Tech in Computer
              Engineering. As a second-year student, I’m passionate about web
              development, data structures. With a strong foundation in C++, C,
              Python, and Java, I’m eager to tackle real-world challenges and
              contribute to innovative projects.
            </p>
            <br />
            {/* ---------------------Social Media Icons---------------    */}
            <div className="flex flex-col items-center md:flex-row justify-between space-y-6 md:space-y-0">
              <div className="space-y-2">
                <h1 className="text-blue-800 font-bold text-center">Awailable on</h1>
                <ul className="flex space-x-5">
                  {/* <li>
                    <a href=""></a>
                    <FaFacebook className="text-2xl cursor-pointer" />
                  </li> */}
                  <li>
                    <a
                      href="https://www.linkedin.com/in/satyam-gaikwad-27a7a724b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                      target="_blank"
                    >
                      <IoLogoLinkedin className="text-blue-700 text-2xl cursor-pointer" />
                    </a>
                  </li>

                  <li>
                    <a href="https://github.com/SatAlgo" target="_blank">
                      <FaGithub className="text-2xl cursor-pointer" />
                    </a>
                  </li>

                  <li>
                    <a href="https://codeforces.com/profile/SatAlgo" target="_blank">
                    <SiCodeforces className="text-2xl cursor-pointer" />
                    </a>
                  </li>
                  {/* <li>
                    {" "}
                    <FaTelegram className="text-2xl cursor-pointer" />
                  </li> */}
                </ul>
              </div>
              {/* <div className="space-y-2">
                <h1 className="font-bold">Currently Working On</h1>
                <div className="flex space-x-5">
                  <FaFacebook className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <IoLogoLinkedin className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaGithub className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-" />
                  <SiCodeforces className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                  <FaTelegram className="text-xl md:text-3xl hover:scale-110 duration-200 rounded-full border-[2px]" />
                </div>
              </div> */}
            </div>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450]"
              alt=""
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
