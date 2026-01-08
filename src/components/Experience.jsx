import React from "react";
import codolio_gif from "../../public/codolio_gif.gif";
import codeforces from "../../public/codeforces.png";
import codechef from "../../public/codechef.png";
import blackleet from "../../public/blackleet.png";
import g4g from "../../public/g4g.logo.jpg";
import interviewbit from "../../public/ib.jpg";
import hackerrank from "../../public/hackerrank.png";

function Experience() {
  const cardItem = [
    {
      id: 1,
      logo: codolio_gif,
      name: "Codolio",
      url: "https://codolio.com/profile/Special%20Force",
      info: "Consistently solving challenges\n677+ questions\n277 active days",
    },
    {
      id: 2,
      logo: blackleet,
      name: "Leetcode",
      url: "https://leetcode.com/u/samAlgo/",
      info: "Click to view profile activity",
    },
    {
      id: 3,
      logo: codeforces,
      name: "Codeforces",
      url: "https://codeforces.com/profile/SatAlgo",
      info: "305+ questions solved\nMax rating: 902",
    },
    {
      id: 4,
      logo: codechef,
      name: "Codechef",
      url: "https://www.codechef.com/users/explicitcode",
      info: "Click to view profile activity",
    },
    
    {
      id: 5,
      logo: g4g,
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/user/satyamgainvot/",
      info: "Click to view profile activity",
    },
    {
      id: 6,
      logo: interviewbit,
      name: "InterviewBit",
      url: "https://www.interviewbit.com/profile/satyam-gaikwad/",
      info: "Click to view profile activity",
    },
    {
      id: 7,
      logo: hackerrank,
      name: "Hackerrank",
      url: "https://www.hackerrank.com/profile/satyam_m_gaikwad/",
      info: "2 Stars in Problem Solving",
    }
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <h1 className="text-3xl text-blue-600 font-mono tracking-wider mb-5">Coding profiles</h1>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-6">
          {cardItem.map(({ id, logo, name, url, info }) => (
            <div
              key={id}
              className="group w-full md:w-[200px] h-[200px] mx-auto [perspective:1000px]"
            >
              <div className="relative w-full h-full duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                {/* Front Side */}
                <div className="absolute w-full h-full [backface-visibility:hidden] flex flex-col items-center justify-center border-2 rounded-full p-1 bg-white">
                  <img
                    src={logo}
                    className="w-[150px] rounded-full object-cover"
                    alt={name}
                  />
                  <p className="mt-1 text-base font-md">{name}</p>
                </div>

                {/* Back Side */}
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] flex flex-col items-center justify-center border-2 rounded-full p-3 bg-blue-100 text-center text-sm font-medium"
                >
                  <p className="font-bold mb-2">{name}</p>
                  <p className="whitespace-pre-line">{info}</p>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack Section */}
      {/* <div className="pt-8">
        <h1 className="text-2xl text-violet-800 mb-5">Tech Stack</h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          <div className="px-4">
            <h2 className="mb-2 text-xl text-teal-800">Languages</h2>
            <ul className="list-disc list-inside">
              <li>C++</li>
              <li>Python</li>
              <li>Java</li>
            </ul>
          </div>
          <div className="px-4">
            <h2 className="mb-2 text-xl text-teal-800">Frontend</h2>
            <ul className="list-disc list-inside">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>ReactJS</li>
            </ul>
          </div>
          <div className="px-4">
            <h2 className="mb-2 text-xl text-teal-800">Backend</h2>
            <ul className="list-disc list-inside">
              <li>Node.js</li>
              <li>JavaScript</li>
              <li>Express.js</li>
              <li>PHP</li>
            </ul>
          </div>
          <div className="px-4">
            <h2 className="mb-2 text-xl text-teal-800">Database</h2>
            <ul className="list-disc list-inside">
              <li>MongoDB</li>
              <li>MySQL</li>
            </ul>
          </div>
          <div className="px-4">
            <h2 className="mb-2 text-xl text-teal-800">Tools</h2>
            <ul className="list-disc list-inside">
              <li>Linux</li>
              <li>Git</li>
              <li>Postman</li>
              <li>Tableau</li>
              <li>Matlab</li>
            </ul>
          </div>
        </div>
      </div> */}

      <div className="pt-12">
        <h1 className="text-3xl text-violet-600 font-mono tracking-wider mb-6">Tech Stack</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {/* Languages */}
          <div className="bg-zinc-50 shadow-lg rounded-xl p-5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-lg text-teal-700 mb-3">Languages</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              <li>C++</li>
              <li>Python</li>
              <li>Java</li>
            </ul>
          </div>

          {/* Frontend */}
          <div className="bg-zinc-50 shadow-lg rounded-xl p-5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-lg text-teal-700 mb-3">Frontend</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              <li>HTMT5</li>
              <li>CSS3</li>
              <li>JavaScript(ES6+)</li>
              <li>useReducer</li>
              <li>React.js</li>
              <li>AJAX</li>
            </ul>
          </div>

          {/* Backend */}
          <div className="bg-zinc-50 shadow-lg rounded-xl p-5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-lg text-teal-700 mb-3">Backend</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              <li>Node.js</li>
              <li>JavaScript</li>
              <li>Express.js</li>
              <li>PHP</li>
              
            </ul>
          </div>

          {/* Database */}
          <div className="bg-zinc-50 shadow-lg rounded-xl p-5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-lg text-teal-700 mb-3">Database</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              <li>MongoDB</li>
              <li>MySQL</li>
            </ul>
          </div>

          {/* Tools */}
          <div className="bg-zinc-50 shadow-lg rounded-xl p-5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-lg text-teal-700 mb-3">Tools</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              <li>Linux</li>
              <li>Git</li>
              <li>Postman</li>
              <li>Tableau</li>
              <li>Matlab</li>
            </ul>
          </div>

          {/* Familiar With Section */}
          <div className="bg-zinc-50 shadow-lg rounded-xl p-5 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
            <h2 className="text-lg text-teal-700 mb-3">Others</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm">
              <li>Mongoose</li>
              <li>RESTful APIs</li>
              <li>JWT</li>
              <li>Stripe API</li>
              <li>WebSockets</li>
              <li>Cloudinary</li>
            </ul>
          </div>

        </div>
      </div>


      <hr className="border-gray-300 my-8" />
    </div>
  );
}

export default Experience;
