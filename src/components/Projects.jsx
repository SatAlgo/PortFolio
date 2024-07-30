// import React from "react";
// import AutoSnakeGame from "../../public/AutoSnakeGame.png";
// import SnakeGame from "../../public/SnakeGame.png";
// import tictactoe from "../../public/tictactoe.jpeg";
// import noutrify from "../../public/noutrify.png";

// function Projects() {
//   const cardItem = [
//     {
//       id: 1,
//       logo: AutoSnakeGame,
//       name: "Automated Snake Game",
//       description: "Using Tkinter Python.",
//       reviewLink: "https://www.linkedin.com/posts/satyam-gaikwad-27a7a724b_python-automation-gamedevelopment-activity-7218149338466705408-QmFg?utm_source=share&utm_medium=member_desktop",
//       sourceLink: "https://github.com/SatAlgo/Snake-Game",
//     },
//     {
//       id: 2,
//       logo: SnakeGame,
//       name: "Snake Game",
//       description: "Using Tkinter Python.",
//       reviewLink: "https://www.linkedin.com/posts/satyam-gaikwad-27a7a724b_python-tkinter-projects-activity-7216086482913009664-bqJy?utm_source=share&utm_medium=member_desktop",
//       sourceLink: "https://github.com/SatAlgo/Snake-Game",
//     },
//     {
//       id: 3,
//       logo: tictactoe,
//       name: "Tic-Tac-Toe Game",
//       description: "Using Tkinter Python",
//       reviewLink: "https://www.linkedin.com/posts/satyam-gaikwad-27a7a724b_python-tkinter-coding-activity-7216079181275623424-Bghz?utm_source=share&utm_medium=member_desktop",
//       sourceLink: "https://github.com/SatAlgo/Tic-Tac-Toe-Game",
//     },
//     {
//       id: 4,
//       logo: noutrify,
//       name: "NoutriFy",
//       description: "Using HTML",
//       reviewLink: "https://example.com/review4",
//       sourceLink: "https://github.com/SatAlgo/NutriFy",
//     },
//   ];

//   return (
//     <div name="Projects" className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10">
//       <div>
//         <h1 className="text-3xl font-bold mb-5">Projects</h1>
//         <span className="text-violet-600 underline font-semibold">Featured projects</span>
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-5">
//           {cardItem.map(({ id, logo, name, description, reviewLink, sourceLink }) => (
//             <div
//               className="border-[2px] rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 duration-300"
//               key={id}
//             >
//               <img src={logo} className="w-full h-[150px] object-cover rounded-md border-[2px]" alt={name} />
//               <div className="mt-2">
//                 <div className="font-bold text-xl mb-2">{name}</div>
//                 <p className="text-gray-700 mb-2">{description}</p>
//               </div>
//               <div className="flex space-x-3 mt-4">
//                 <a href={reviewLink} target="_blank" rel="noopener noreferrer">
//                   <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
//                     Explore
//                   </button>
//                 </a>
//                 <a href={sourceLink} target="_blank" rel="noopener noreferrer">
//                   <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
//                     Source Code
//                   </button>
//                 </a>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <hr className="border-gray-300 my-8" />
//     </div>
//   );
// }

// export default Projects;

import React, { useState } from "react";
import AutoSnakeGame from "../../public/AutoSnakeGame.png";
import SnakeGame from "../../public/SnakeGame.png";
import tictactoe from "../../public/tictactoe.jpeg";
import noutrify from "../../public/noutrify.png";

function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  const cardItem = [
    {
      id: 1,
      logo: AutoSnakeGame,
      name: "Automated Snake Game",
      description: "Using Tkinter Python.",
      reviewLink:
        "https://www.linkedin.com/posts/satyam-gaikwad-27a7a724b_python-automation-gamedevelopment-activity-7218149338466705408-QmFg?utm_source=share&utm_medium=member_desktop",
      sourceLink: "https://github.com/SatAlgo/Snake-Game",
    },
    {
      id: 2,
      logo: SnakeGame,
      name: "Snake Game",
      description: "Using Tkinter Python.",
      reviewLink:
        "https://www.linkedin.com/posts/satyam-gaikwad-27a7a724b_python-tkinter-projects-activity-7216086482913009664-bqJy?utm_source=share&utm_medium=member_desktop",
      sourceLink: "https://github.com/SatAlgo/Snake-Game",
    },
    {
      id: 3,
      logo: tictactoe,
      name: "Tic-Tac-Toe Game",
      description: "Using Tkinter Python",
      reviewLink:
        "https://www.linkedin.com/posts/satyam-gaikwad-27a7a724b_python-tkinter-coding-activity-7216079181275623424-Bghz?utm_source=share&utm_medium=member_desktop",
      sourceLink: "https://github.com/SatAlgo/Tic-Tac-Toe-Game",
    },
    {
      id: 4,
      logo: noutrify,
      name: "NoutriFy",
      description: "Using HTML",
      reviewLink: "https://example.com/review4",
      sourceLink: "https://github.com/SatAlgo/NutriFy",
    },
  ];

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div
      name="Projects"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Projects</h1>
        <span className="text-violet-600 underline font-semibold">
          Featured projects
        </span>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 my-5">
          {cardItem.map(
            ({ id, logo, name, description, reviewLink, sourceLink }) => (
              <div
                className="border-[2px] rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 duration-300"
                key={id}
              >
                <div onClick={() => openModal(logo)}>
                  <img
                    src={logo}
                    className="w-full h-[150px] object-cover rounded-md border-[2px]"
                    alt={name}
                  />
                  <div className="mt-2">
                    <div className="font-bold text-xl mb-2">{name}</div>
                    <p className="text-gray-700 mb-2">{description}</p>
                  </div>
                </div>

                <div className="flex space-x-3 mt-4">
                  <a
                    href={reviewLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded">
                      Explore
                    </button>
                  </a>
                  <a
                    href={sourceLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded">
                      Source Code
                    </button>
                  </a>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-75 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <div
            className="relative bg-white p-4 rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute top-2 right-2 text-xl font-bold"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full max-w-lg rounded-md"
            />
          </div>
        </div>
      )}

      <hr className="border-gray-300 my-8" />
    </div>
  );
}

export default Projects;
