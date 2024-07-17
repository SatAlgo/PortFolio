import React from "react";
import SnakeGame from "../../public/SnakeGame.png";

function Projects() {
  const cardItem = [
    {
      id: 1,
      logo: SnakeGame,
      name: "SnakeGame",
    },
    {
      id: 2,
      logo: SnakeGame,
      name: "SnakeGame",
    },
    {
      id: 3,
      logo: SnakeGame,
      name: "SnakeGame",
    },
    {
      id: 4,
      logo: SnakeGame,
      name: "SnakeGame",
    },
  ];
  return (
    <div name="Projects" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects</h1>
        <span className="underline font-semibold">Featured projects</span>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name }) => (
            <div className="md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-105 duration-300"  key={id}>
              <img src={logo} className="w-[120px] h-[120px] p-1 rounded-half border-[2px]"  alt="" />
              <div>
                <div className="px-2 font-bold text-xl mb-2">{name} </div>
                <p className="px-2 text-gray-700">Satyam Madhav Gaikwad</p>
              </div>
              <div className="px-6 py-4 space-x-3 justify-around">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">Video</button>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">Source Code</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
