import React from "react";
import codolio_gif from "../../public/codolio_gif.gif";
import codeforces from "../../public/codeforces.png";
import codechef from "../../public/codechef.png";
import blackleet from "../../public/blackleet.png";
import g4g from "../../public/g4g.logo.jpg";

function Experience() {
  const cardItem = [
    {
      id: 1,
      logo: codolio_gif,
      name: "Codolio",
      url: "https://codolio.com/profile/Special%20Force", // Replace with your actual Codeforces profile URL
    },
    {
      id: 2,
      logo: codeforces,
      name: "Codeforces",
      url: "https://codeforces.com/profile/SatAlgo", // Replace with your actual Codeforces profile URL
    },
    {
      id: 3,
      logo: codechef,
      name: "Codechef",
      url: "https://www.codechef.com/users/explicitcode", // Replace with your actual Codechef profile URL
    },
    {
      id: 4,
      logo: blackleet,
      name: "Leetcode",
      url: "https://leetcode.com/u/samAlgo/", // Replace with your actual Leetcode profile URL
    },
    {
      id: 5,
      logo: g4g,
      name: "GeeksforGeeks",
      url: "https://www.geeksforgeeks.org/user/satyamgainvot/", // Replace with your actual Work profile URL
    },
  ];

  return (
    <div
      name="Experience"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experience</h1>
        <p className="text-xl text-blue-600">Coding profiles</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name, url }) => (
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              key={id}
              className="flex flex-col items-center justify-center border-[2px] rounded-full p-1 md:w-[200px] md:h-[200px] cursor-pointer hover:scale-110 duration-300"
            >
              <img src={logo} className="w-[150px] rounded-full" alt={name} />
              <div>
                <div className="">{name}</div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="pt-8">
        <h1 className="text-3xl font-bold mb-5">Tech Stack</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="mb-2 text-xl text-violet-600">Languages</h2>
            <ul className="list-disc list-inside">
              <li>C++</li>
              <li>Python</li>
              <li>Java</li>
            </ul>
          </div>
    
          <div>
            <h2 className="mb-2 text-xl text-violet-600">Frontend</h2>
            <ul className="list-disc list-inside">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>ReactJS</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-2 text-xl text-violet-600">Backend</h2>
            <ul className="list-disc list-inside">
              <li>Node.js</li>
              <li>Express.js</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-2 text-xl text-violet-600">Database</h2>
            <ul className="list-disc list-inside">
              <li>MongoDB</li>
            </ul>
          </div>
          <div>
            <h2 className="mb-2 text-xl text-violet-600">Tools</h2>
            <ul className="list-disc list-inside">
              <li>Linux</li>
              <li>Git</li>
              <li>Postman</li>
              <li>Tablaue</li>
              <li>Matlab</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="border-gray-300 my-8" />
    </div>
  );
}

export default Experience;
