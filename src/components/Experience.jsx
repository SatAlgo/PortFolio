import React from "react";
import codeforces from "../../public/codeforces.png";
import codechef from "../../public/codechef.png";

function Experience() {
  const cardItem = [
    {
      id: 1,
      logo: codeforces,
      name: "Codeforces",
      url: "https://codeforces.com/profile/SatAlgo", // Replace with your actual Codeforces profile URL
    },
    {
      id: 2,
      logo: codechef,
      name: "Codechef",
      url: "https://www.codechef.com/users/explicitcode", // Replace with your actual Codechef profile URL
    },
    // {
    //   id: 3,
    //   logo: work,
    //   name: "Leetcode",
    //   url: "https://leetcode.com/yourusername", // Replace with your actual Leetcode profile URL
    // },
    // {
    //   id: 4,
    //   logo: work,
    //   name: "Work",
    //   url: "https://www.yourworkprofile.com", // Replace with your actual Work profile URL
    // },
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
      <hr className="border-gray-300 my-8" />
    </div>
  );
}

export default Experience;
